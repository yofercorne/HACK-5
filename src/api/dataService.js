import axios from 'axios';


// Definición de la URL base para las solicitudes al servidor.
const BASE_URL = 'http://localhost:8082';

// Función asincrónica para recuperar grupos desde el servidor.
export const fetchGroups = async () => {
    // Utiliza Axios para hacer una solicitud GET a la URL de grupos.
    return axios.get(`${BASE_URL}/grupos`)
}


// Función asincrónica para recuperar grupos desde el servidor.
export const fetchPersons = async () => {
    // Utiliza Axios para hacer una solicitud GET a la URL de grupos.
    return axios.get(`${BASE_URL}/persons`)
}

// Función asincrónica para recuperar grupos desde el servidor.
export const fetchTipogrupos = async () => {
    // Utiliza Axios para hacer una solicitud GET a la URL de grupos.
    return axios.get(`${BASE_URL}/tipogrupos`)
}
