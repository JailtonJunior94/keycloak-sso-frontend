import { ReactKeycloakProvider } from '@react-keycloak/web';
import AppRouter from './routes/AppRouter';

import { keycloak, keycloakConfig } from './util/auth';

function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak} initOptions={keycloakConfig}>
      <AppRouter />
    </ReactKeycloakProvider>
  );
}

export default App;
