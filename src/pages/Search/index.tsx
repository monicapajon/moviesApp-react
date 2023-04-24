import { useEffect, useState } from "react";
import { Layout, Search } from "../../components"
import { useSearchParams } from "react-router-dom";
import { getSearchMovie } from "../../services/movies";
import { GridMovies } from "../../components/commons";
import { FormsFields } from "../../types";
import { withAuth } from "../../hoc"


const Searchd = () => {
    const [movies, setMovies] = useState([]);
    const [params, setParams] = useState({ query: '' })


    
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setSearchParams(params)
    }, [params])

    useEffect(() => {
        const query = searchParams.get("query")

        getSearchMovie(query).then((data) => {
            setMovies(data.results)
        })

    }, [searchParams])

    const searchd = (param: FormsFields) => {
        setParams((prevState) => ({ ...prevState, query: param.query })

        )
    }

    return (
        <Layout>
            <Search onSearch={searchd} />
            <GridMovies items={movies} />
        </Layout>

    )


}

export { Searchd }