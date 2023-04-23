import { useContext } from "react";
import { AuthContext } from "../../context";
import { tokenGenerator } from "../../helpers/tokenGenerator";
import { LoginForm, User } from "../../types";
import { servicesUser } from "../../services/users";

const useMe = () => {
    const { me, setMe } = useContext(AuthContext);

    const login = async ({ email, pass }: LoginForm) => {
        const user = await servicesUser.getBy("email", email);

        if (user && user.password === pass) {
            const { id, name, lastname } = user;

            const token = tokenGenerator();

            servicesUser.update({ id, token });

            localStorage.setItem("token", token);

            setMe({ id, name, lastname, email });
        }
    };

    const signup = (user: Omit<User, "id">) => {
    };

    const loginWithToken = async () => {
        const token = localStorage.getItem("token");

        if (token && !me) {
            const user = await servicesUser.getBy("token", token);
            if (user) {
                setMe({
                    id: user.id,
                    name: user.name,
                    lastname: user.lastname,
                    email: user.email,
                });
            }
        }
    };

    const logout = async () => {
        await servicesUser.update({ id: me?.id, token: null });
        setMe(undefined);
    };

    return { me, login, signup, loginWithToken, logout };
};

export { useMe };