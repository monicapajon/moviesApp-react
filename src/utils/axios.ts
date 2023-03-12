import axios from 'axios'



const api = axios.create({
    baseURL: 'https://moviesapp-react-28339-default-rtdb.firebaseio.com/',
    params: {
        api_key: "prueba-api-key",
        prueba: "prueba-2"
    }
})

export { api }
   
