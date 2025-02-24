import './Login.css'

const Login = () =>{
    return (
        <div id="contenedor-login">
          <div className="contenedor-photo">
            <img className='photo-login' src="/images/login-photo.jpg" alt="Photo login" />
          </div>
          <div id="login">
            <div className="titulo_login"> Ingresa a tu cuenta</div>
            <form id="loginform">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="usuario"
                type="email"
                className="form-input"
                name="email"
                placeholder="ejemplo@email.com"
                required
                
              ></input>
    
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                className="form-input"
                placeholder="Contraseña"
                name="password"
                required
               
              ></input>
              <a href="#" className="bold-text" id="cont">
                ¿Olvidaste tu contraseña?
              </a>
              <button type="submit" className="log">
                Ingresar
              </button>
              <h3>¿No tienes Cuenta? <b>Registrate</b></h3>
              {/* <Link to={"/register"} className="bold-text">
                ¿No tienes Cuenta? <b>Registrate</b>
              </Link> */}
            </form>
          </div>
        </div>
      );
}

export default Login;