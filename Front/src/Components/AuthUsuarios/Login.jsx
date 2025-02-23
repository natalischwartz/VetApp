import './Login.css'

const Login = () =>{
    return (
        <div id="contenedor">
          <div id="login">
            <div className="titulo_login"> Ingresa a tu cuenta</div>
            <form id="loginform">
              <label htmlFor="email" className="log">
                Email
              </label>
              <input
                id="usuario"
                type="email"
                className="log"
                name="email"
                placeholder="ejemplo@email.com"
                required
                
              ></input>
    
              <label htmlFor="password" className="log">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                className="log"
                placeholder="Contraseña"
                name="password"
                required
               
              ></input>
              <a href="#" className="log1" id="cont">
                ¿Olvidaste tu contraseña?
              </a>
              <button type="submit" className="log">
                Ingresar
              </button>
              {/* <Link to={"/register"} className="log1">
                ¿No tienes Cuenta? <b>Registrate</b>
              </Link> */}
            </form>
          </div>
        </div>
      );
}

export default Login;