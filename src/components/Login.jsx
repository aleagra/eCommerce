import { useState } from "react";
import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  //   const navigate = useNavigate();
  const [values, setValues] = useState({ mail: "", password: "" });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { mail, password } = values;

    if (!mail || !password) {
      toast.error("Se requiere usuario y contraseña.", toastOptions);
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:3030/user/login", {
        mail,
        password,
      });

      if (data.status === true) {
        toast.success("Inicio de sesión exitoso.", toastOptions);
        // navigate("/");
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
        <section className="h-screen bg-black w-full flex flex-col justify-center gap-[1rem] items-center ">
          <div className="flex items-center gap-[1rem] justify-center py-3"></div>
          <form
            onSubmit={(event) => handleSubmit(event)}
            className="flex flex-col gap-[2rem] rounded-lg p-[2rem]"
          >
            <input
              type="text"
              placeholder="Usuario"
              name="mail"
              className="bg-transparent p-[1rem] border-solid rounded-lg w-full  border-color outline-none dark:text-white"
              onChange={(e) => handleChange(e)}
              minLength="3"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="bg-transparent p-[1rem] border-solid rounded-lg  w-full  border-color dark:text-white outline-none"
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <button
              type="submit"
              className="color-item py-3 my-3 font-bold cursor-pointer rounded-lg text-lg text-white uppercase"
            >
              Iniciar sesión
            </button>
            <span className="dark:text-white capitalize">
              ¿No tienes una cuenta?{" "}
              {/* <Link to="/register" className="text">
                Crea una.
              </Link> */}
            </span>
          </form>
        </section>
        <ToastContainer />
      </div>
    </>
  );
}
