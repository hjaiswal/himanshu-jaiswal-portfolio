import React, { Component } from 'react'

export class ErrorBoundary extends Component {

  state = {
    hasError: false
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }
  render() {
    if(this.state.hasError) {
      return (
          <h3>
              Something Went Wrong
          </h3>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary
