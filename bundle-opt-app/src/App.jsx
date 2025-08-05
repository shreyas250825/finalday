import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';

//  Optimized imports
import uniq from 'lodash/uniq';
import format from 'date-fns/format';

//  Lazy-loaded components
const ProfileSettings = lazy(() => import('./components/ProfileSettings'));
const AdminPanel = lazy(() => import('./components/AdminPanel'));

const App = () => {
  const [showSettings, setShowSettings] = useState(false);

  //  Native date (replaces moment)
  const now = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  //  Use optimized lodash import
  const sample = uniq(['react', 'react', 'vite']);

  //  Optimized date-fns import
  const today = format(new Date(), 'yyyy-MM-dd');

  return (
    <Router>
      <div>
        <h1>Bundle Optimization Demo</h1>
        <p>Lodash: {sample.join(', ')}</p>
        <p>Native Date (was Moment): {now}</p>
        <p>date-fns: {today}</p>

        <button onClick={() => setShowSettings(true)}>Open Settings</button>
        <Link to="/admin" style={{ marginLeft: '10px' }}>Admin Panel</Link>

        {/* Lazy-loaded Settings */}
        {showSettings && (
          <ErrorBoundary>
            <Suspense fallback={<p>Loading Settings...</p>}>
              <ProfileSettings />
            </Suspense>
          </ErrorBoundary>
        )}

        {/* Lazy-loaded Admin route */}
        <Routes>
          <Route
            path="/admin"
            element={
              <ErrorBoundary>
                <Suspense fallback={<p>Loading Admin...</p>}>
                  <AdminPanel />
                </Suspense>
              </ErrorBoundary>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
