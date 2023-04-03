import { FC, useEffect, useState } from 'react'
import { FormsFields } from '../../../types'



const defaultValues: FormsFields = {
    query: "",
};

type Props = {
    onSearch: (params: FormsFields) => void;
}


const Search: FC<Props> = ({ onSearch }) => {

    const [fields, setFields] = useState(defaultValues);


    useEffect(() => {
        onSearch(fields)

    }, [fields])




    return (
        <form action="mb-5">
            <div className="form-group mb-3">
                <label htmlFor="">Search</label>
                <input
                    type="text"
                    name="text"
                    className="Form-control"
                    value={fields.query}
                    onChange={(e) => setFields({ ...fields, query: e.target.value })}
                />
            </div>
        </form>
    );
};

export { Search }