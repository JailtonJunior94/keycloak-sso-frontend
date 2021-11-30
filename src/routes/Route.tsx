import { useKeycloak } from '@react-keycloak/web';
import React from 'react';
import {
    Route as ReactDOMRoute,
    RouteProps as ReactDOMRouteProps,
    Redirect,
} from 'react-router-dom';

interface RouteProps extends ReactDOMRouteProps {
    isPrivate?: boolean;
    component: React.ComponentType<any>;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
    const { keycloak } = useKeycloak();
    return (
        <ReactDOMRoute
            {...rest}
            render={({ location }) => {
                return isPrivate === keycloak.authenticated ? (
                    <Component />
                ) : (
                    <Redirect
                        to={{
                            pathname: isPrivate === keycloak.authenticated ? '/private' : '/login',
                            state: { from: location },
                        }}
                    />
                );
            }}
        />
    );
};

export default Route;