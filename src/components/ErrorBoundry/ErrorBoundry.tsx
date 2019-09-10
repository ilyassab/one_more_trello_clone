import React from 'react';

class ErrorBoundry extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        );
    }
}

export {ErrorBoundry};