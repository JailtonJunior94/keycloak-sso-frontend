import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

import routes from './index'
import Route from './Route';

const Routes: React.FC = () => {
    const { initialized } = useKeycloak();
    if (!initialized) {
        return <div>Carregando...</div>
    }
    return (
        <BrowserRouter>
            <Switch>
                {routes.map((route, key) => {
                    return <Route
                        key={key}
                        path={route.path}
                        component={route.component!}
                        exact={route.exact}
                        isPrivate={route.auth}
                    />;
                })}
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;