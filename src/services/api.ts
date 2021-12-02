import axios, { AxiosRequestConfig } from 'axios';

import { keycloak } from '../util/auth';

export const api = axios.create({
    baseURL: process.env.REACT_APP_BASEURL_API
});

api.interceptors.request.use(authInterceptor);

function authInterceptor(request: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig> {
    if (keycloak?.token) {
        addToken(request);
        return request
    }
    return new Promise((resolve, reject) => {
        keycloak.onAuthSuccess = () => {
            addToken(request);
            resolve(request);
        }
        keycloak.onAuthError = () => {
            reject(request);
        }
    })
}

function addToken(request: AxiosRequestConfig): void {
    if (request.headers === undefined) {
        return;
    } 
    request.headers["Authorization"] = `Bearer ${keycloak.token}`;
}