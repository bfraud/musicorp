import React from "react";

class RoutesSwitch extends React.Component {
    componentDidMount() {
        // On the first page view, the state location is not initialized,
        // we then need to match the location path to our routing system
        let pathInfos;
        const match = Object.entries(routes).find(([, path]) => {
            pathInfos = matchPath(this.props.location.pathname, { path, exact: true, strict: false });

            return pathInfos;
        });

        this.onRouteChanged({ state: { slug: match[0], slugDetails: pathInfos ? pathInfos.params : {} } });
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.onRouteChanged(this.props.location);
        }
    }

    @autobind
    onRouteChanged({ state }) {
        if (state && state.slug && this.props.config.tracktorEnabled) {
            let openScreen = state.slug;

            // Add more information than the slug if provided
            if (state.slugDetails && Object.values(state.slugDetails).length > 0) {
                openScreen = `${openScreen}_${Object.values(state.slugDetails).join('_')}`;
            }

            Tracker.push(EVENTS.PAGE_STREAM, {
                open_screen: openScreen,
            });
        }
    }

    render() {
        return (
            <Switch location={ location }>
            {
                routing.map(({ component: Component, slug, props: routeProp, exact = true }) => (
                <Route
        path={ routes[slug] }
        render={ props => <Component { ...props } { ...routeProp } location={ location } /> }
        exact={ exact }
        key={ slug }
        />
    ))
    }
    <Route component={ defaultRoute } />
        </Switch>
    );
    }
}

RoutesSwitch.propTypes = {
    location: React.PropTypes.object.isRequired,
    config: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    const config = state.config;

    return {
        config,
    };
};

export default withRouter(connect(mapStateToProps, null)(RoutesSwitch));