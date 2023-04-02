import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { getAllTopRated } from "../../services/movies";
import { GridMovies } from "../../components/commons/GridMovies";

const BetterMovies = () => {

    const [topRated, setTopRated] = useState([]);

    useEffect(() => {

        getAllTopRated().then(response => {
            setTopRated(response.results)
        })
    }, []);

    return (
        <Layout>
            <GridMovies items={topRated} text={"Better Movies"} />
        </Layout>
    )

}

export { BetterMovies }