import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';

const ProfileSettings = lazy(() => import('./components/ProfileSettings'));
const AdminPanel = lazy(() => import('./components/AdminPanel'));

const App = () => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <Router>
      <div>
        <h1>Lazy Load Demo</h1>

        {/* Button and Link */}
        <button onClick={() => setShowSettings(true)}>⚙️ Settings</button>
        <Link to="/admin" style={{ marginLeft: '10px' }}>🔐 Go to Admin</Link>

        {/* Lazy-load ProfileSettings on button click */}
        {showSettings && (
          <ErrorBoundary>
            <Suspense fallback={<p>Loading Settings...</p>}>
              <ProfileSettings />
            </Suspense>
          </ErrorBoundary>
        )}

        {/* Lazy-load AdminPanel on /admin route */}
        <Routes>
          <Route
            path="/admin"
            element={
              <ErrorBoundary>
                <Suspense fallback={<p>Loading Admin Panel...</p>}>
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
