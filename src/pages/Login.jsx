import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ mail: "", password: "" });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { mail, password } = values;

    if (!mail || !password) {
      toast.error("Se requiere usuario y contraseña.", toastOptions);
      return;
    }

    try {
      const data = await axios.post("http://localhost:3030/user/login", {
        mail,
        password,
      });
      console.log(data);
      if (data.status === 200) {
        navigate("/");
      } else {
        toast.error(data.msg, toastOptions);
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      toast.error("Ocurrió un error al intentar iniciar sesión.", toastOptions);
    }
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div>
        <section className="w-full h-screen flex flex-col justify-center gap-[1rem] items-center">
          <form
            onSubmit={(event) => handleSubmit(event)}
            className="flex flex-col gap-[2rem] rounded-lg p-[2rem]"
          >
            <input
              type="text"
              placeholder="Correo electronico"
              name="mail"
              className="bg-[#f5f5f5] shadow-sm p-[1rem] rounded-lg w-full outline-none"
              onChange={(e) => handleChange(e)}
              minLength="3"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="bg-[#f5f5f5] shadow-sm p-[1rem] rounded-lg w-full outline-none"
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <button
              type="submit"
              className="bg-[#201c27] py-3 my-3 font-bold cursor-pointer rounded-lg text-lg text-white uppercase"
            >
              Iniciar sesión
            </button>
            <span className="capitalize">
              ¿No tienes una cuenta?
              <Link to="/register" className="">
                Crea una.
              </Link>
            </span>
          </form>
        </section>
        <ToastContainer />
      </div>
    </>
  );
}
