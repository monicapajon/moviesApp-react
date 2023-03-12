import { useForm } from "react-hook-form"
import { AddCategoryForm } from "../../../types"
import { Form, Button } from "react-bootstrap"
import { servicesCategory } from "../../../services/categories"




const AddCategory = () => {

    const { register, handleSubmit } = useForm<AddCategoryForm>()
    const onSubmit = (data:AddCategoryForm) => {

        servicesCategory.add(data)
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingresar nombre de Categoría" {...register('name')} />
                <Form.Text className="text-danger">
                    We'll never share your name with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Color</Form.Label>
                <Form.Control type="text" placeholder="Ingresar apellido" {...register('color')} />
                <Form.Text className="text-danger">
                    We'll never share your lastname with anyone else.
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Create Category
            </Button>



        </Form>
    )

}

export { AddCategory }