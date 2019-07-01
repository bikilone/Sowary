import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };
  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }
  render() {
    return this.state.hasError ? (
      <div className="loader">Ops, something went wrong</div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
