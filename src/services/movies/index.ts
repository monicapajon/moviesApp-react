import { convertTypeAcquisitionFromJson } from "typescript";
import { endpoints } from "../../constants";
import { apiMovies } from "../../utils/axios";


const getBanner = async () => {
    const response = await apiMovies.get(endpoints.MOVIE_UPCOMING);
    return response.data.results;
};

const getAllPopular = async () => {
    const response = await apiMovies.get(endpoints.MOVIE_POPULAR);
    return response.data;
};

const getAllLatestReleases = async () => {
    const response = await apiMovies.get(endpoints.MOVIE_LATEST);
    return response.data;
};

const getAllTopRated = async () => {
    const response = await apiMovies.get(endpoints.MOVIE_TOP_RATED);
    return response.data;
};

const getSearchMovie = async (query: string | null) => {
    const response = await apiMovies.get(endpoints.SEARCH_MOVIE, {params:
      {query: query}});
    return response.data;
  };
  
const getAllMovieUpcoming = async () => {
    const response = await apiMovies.get(endpoints.MOVIE_UPCOMING);
    return response.data;
};

const getById = async (id: string) => {
    const response = await apiMovies.get(`/movie/${id}`);
    return response.data;
};

//desde aqui
// Funciones auxiliares

const generateToken = (): string => {
  // Aquí generamos el token como mejor nos parezca, por ejemplo usando la librería uuid
  return uuidv4();
};

const updateUserWithToken = (userId: string, token: string) => {
  // función para actualizar el usuario en la base de datos con el token generado
  // ...
};

export { getAllPopular, getBanner, getAllLatestReleases, getAllTopRated, getSearchMovie, getAllMovieUpcoming, getById, generateToken, updateUserWithToken };
