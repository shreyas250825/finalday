import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Caught by Error Boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h3>⚠️ Error loading component.</h3>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
