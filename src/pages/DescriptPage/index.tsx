import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getById } from "../../services/movies"
import { Layout } from "../../components"
import { Descript } from "../../components/commons"

const DescriptPage = () => {

    const [descript, setDescript] = useState([])
    const { id } = useParams()

    useEffect(() => {

        getById(id || "").then(response => {
            setDescript(response)
        })

    }, [])

    return (
        <Layout>
            <Descript items={descript} />
        </Layout>
    )

}

export { DescriptPage }