import { FC } from "react"
import { BASE_IMAGE } from "../../../constants"
import { GDescript } from "../../../types" 



const Descript: FC<GDescript> = ( { items }) =>{
    return(
        <div className="container-detail">
            <div className="img-detail">
            <img  src={`${BASE_IMAGE + items.poster_path}`} 
                    alt= "First slide"
             />       
            </div>
        </div>
    )
}

export { Descript } 