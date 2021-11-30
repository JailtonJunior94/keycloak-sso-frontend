import { useKeycloak } from "@react-keycloak/web"
import { Redirect, useLocation } from "react-router-dom";

interface LoginProps { }
interface LocationState {
    from: {
        pathname: string;
    };
}

export const Login: React.FC<LoginProps> = (props) => {
    const { keycloak } = useKeycloak();
    const location = useLocation<LocationState>();
    const { from } = location.state || { from: { pathname: "/" } }

    if (keycloak!.authenticated === true) {
        return <Redirect to={from} />
    }

    keycloak!.login({ redirectUri: `http://localhost:3000${from.pathname}` });
    return <div>Carregando...</div>
}
