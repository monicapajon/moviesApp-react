import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { getAllPopular, getBanner } from "../../services/movies";



const Dashboard = () => {
  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([])

  useEffect(() => {

    getBanner().then(response => setMovies(response))
    getAllPopular().then(response => setPopular(response.results))


  }, []);
  console.log(movies, popular);

  return (
    <Layout>
        Dashboard
    </Layout>
  );
};



export { Dashboard };