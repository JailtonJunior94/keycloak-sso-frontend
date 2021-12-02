import { useEffect } from 'react';
import { useKeycloak } from "@react-keycloak/web"
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { api } from "../services/api";
import { Navbar } from '../components/Navbar';

export const Private: React.FC = (props) => {
    const { keycloak } = useKeycloak();

    async function load() {
        const response = await api.get('/api/sso')
        console.log('response: ', response);
    }

    useEffect(() => {
        load();
    }, [])

    function handleClick(event: any) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    return (
        <>
            <Navbar />
            <div role="presentation" onClick={handleClick}>
                <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="#">
                        API .NET CORE
                    </Link>
                    <Link underline="hover" color="inherit" href="#">
                        API Golang
                    </Link>
                </Breadcrumbs>
            </div>
        </>
    )
}