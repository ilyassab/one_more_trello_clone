import React from 'react';

class ErrorBoundary extends React.Component {

    state = {
        error: false,
    };

    render() {

        if (this.state.error) {
            return <div>Something goes wrong</div>;
        }

        return this.props.children;
    }

    componentDidCatch() {
        this.setState({error: true});
    }
}

export {ErrorBoundary};