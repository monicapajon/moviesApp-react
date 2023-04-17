import { Layout } from "../../components"

import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { loginUser } from "./api"; // función para hacer la petición a la base de datos

interface Props {
  onSuccess: () => void;
}

const Login: React.FC<Props> = ({ onSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const user = await loginUser(username, password); // llamamos a la función para hacer la petición a la base de datos
      if (user) {
        // Si encontramos un usuario en la base de datos con el nombre de usuario ingresado, verificamos si coincide la contraseña
        if (user.password === password) {
          // Si coincide la contraseña, seteamos el state "me" y generamos un token
          setUser({ id: user.id, username: user.username }); // setUser es una función que actualiza el estado del contexto "UserContext"
          const token = generateToken();
          // Almacenamos el token en localstorage y actualizamos el usuario con el token generado
          localStorage.setItem("token", token);
          updateUserWithToken(user.id, token); // función para actualizar el usuario en la base de datos con el token generado
          onSuccess(); // llamamos a la función onSuccess que se nos pasó como prop, para indicar que el login tuvo éxito y hacer alguna acción, como redireccionar a otra página
        } else {
          alert("Contraseña incorrecta");
        }
      } else {
        alert("No se encontró el usuario");
      }
    } catch (error) {
      console.error(error);
      alert("Hubo un error en el login");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};







/*const Login = () => {

    return (
        <Layout>
            Página login
        </Layout >
    )
}*/
export { Login }

function updateUserWithToken(id: any, token: any) {
    throw new Error("Function not implemented.");
}
function generateToken() {
    throw new Error("Function not implemented.");
}

