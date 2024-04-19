

import axios from 'axios';
import { encryptData, decryptData } from './encryption';
import { getStorage } from './storage';

export const toggleDarkTheme = (shouldAdd: boolean) => {
    document.body.classList.toggle('dark', shouldAdd);
    console.log(document.body.classList)
    localStorage.setItem('theme', shouldAdd ? 'dark' : 'light');

};

export function configureAxios() {

    axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;


    axios.interceptors.request.use(
        async function (config) {
            // Do something before request is sent
            config.data = await encryptData(config.data);
            return config;
        },

        function (error) {
            // Do something with request error
            return Promise.reject(error);
        },
    );

    // Add a response interceptor
    axios.interceptors.response.use(
        async function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            // console.log({ response });
            response = await decryptData(response);
            return JSON.parse(String(response));
        },
        function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            return Promise.reject(error);
        },
    );


    (() => {
        fetch(import.meta.env.VITE_IPAPI)
            .then((response) => response.json())
            .then((data) => {
                axios.defaults.headers.common['Authorization'] = `${getStorage(
                    `${import.meta.env.VITE_AUTH_KEY}`,
                )}`;
                axios.defaults.headers.common['ip'] = data.ip;
                axios.defaults.headers.common[
                    'location'
                ] = `${data.country_name}, ${data.city},`;
                axios.defaults.headers.common[
                    'ngrok-skip-browser-warning'
                ] = `true`;

            });
    })();


}

