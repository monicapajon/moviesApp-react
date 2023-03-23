import axios from 'axios'

 const apiMovies = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "64e8e732c58d5f87e43f709744c2fbb4",
    },
});


 const api = axios.create({
    baseURL: 'https://moviesapp-react-28339-default-rtdb.firebaseio.com/'
})

export {apiMovies, api}

   
