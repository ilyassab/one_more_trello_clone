import React from 'react';

class ErrorBoundry extends React.Component {
    render() {
        return (
          <div>{this.props.children}</div>
        );
    }
}

export {ErrorBoundry};