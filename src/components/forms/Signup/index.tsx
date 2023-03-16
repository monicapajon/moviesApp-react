
import { Form, Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { servicesUser } from "../../../services/users"
import { SignUpForm } from "../../../types"
import "./styles.scss"

const SignUp = () => {
    const { register, handleSubmit } = useForm<SignUpForm>()
    const onSubmit = (data: SignUpForm) => {

        servicesUser.add(data)// o ({...data})?
        //aqui me comunico con el servicio de API
    }

    return (
        <Form className='form-signup' onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingresar nombre" {...register('name')} />
                <Form.Text className="text-danger">
                    We'll never share your name with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Ingresar apellido" {...register('lastname')} />
                <Form.Text className="text-danger">
                    We'll never share your lastname with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresar email" {...register('email')} />
                <Form.Text className="text-danger">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"{...register('password')} />
                <Form.Text className="text-danger">
                    We'll never share your password with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control type="date" placeholder="Ingresar fecha de nacimiento"{...register('birthdate')} />
                <Form.Text className="text-danger">
                    We'll never share your birthdate with anyone else.
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Create Account
            </Button>
        </Form>
    )
}
export { SignUp }