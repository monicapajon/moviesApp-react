import { FC } from "react"
import { BASE_IMAGE } from "../../../constants"
import { GDescript } from "../../../types"
import './styles.scss'




const Descript: FC<GDescript> = ({ items }) => {
    return (
        <div className="container-descript">
            <div className="img-descript">
                <img src={`${BASE_IMAGE + items.poster_path}`}
                    alt="First slide"
                />
            </div>
            <div className="text-descript">
                <h3>{items.title}</h3>
                <h6>{items.overview}</h6>
            </div>
        </div>
    )
}

export { Descript } 