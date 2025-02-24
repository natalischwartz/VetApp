import './Registro.css';

const Registro = () =>{
    return (
        <div id="contenedor-register">
            <div className="contenedor-photo">
                <img className='photo-register' src="/images/register-photo.jpg" alt="Photo register" />
            </div>
            <div id="registro">
                <div className="titulo_register"> Registro</div>
                <form method="POST" action="" id="registroform">
                    <label className='form-label'>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="ejemplo@email.com"
                        required
                        className="form-input"
                        // onChange={(e) => setEmail(e.target.value)}
                    ></input>
            
                    <label className='form-label'>Password</label>
                    <input
                        type="password"
                        name="password"
                        // placeholder="Mínimo 6 caracteres"
                        required
                        className="form-input"
                        // onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    {/* <PasswdError /> */}
            
                    <label className='form-label'>Nombre</label>
                    <input
                        type="nombre"
                        name="nombre"
                        placeholder="Nombre..."
                        required
                        className="form-input"
                        // onChange={(e) => setNombre(e.target.value)}
                    ></input>
            
                    <label className='form-label' >Apellido</label>
                    <input
                        type="apellido"
                        name="apellido"
                        placeholder="Apellido..."
                        required
                        className="form-input"
                        // onChange={(e) => setApellido(e.target.value)}
                    ></input>
            
                    {/* <Link to={"/"} className="Link"> */}
                        <button
                        className=""
                        type="submit"
                        title="Registrarse"
                        name="Registrarse"
                        // disabled={password.length < 6}
                        // onClick={submit}
                        >
                        Registrarse
                        </button>
                    {/* </Link> */}
                    <h3 className="signup_link">
                        ¿Ya tenes una cuenta?{" "}
                    </h3>
                    {/* <Link to={"/Login"} className="bold">
                    <b>Ingresá acá</b>
                    </Link> */}
                    <h3 className='bold-text'>Ingresá acá</h3>
                </form>
          </div>
        </div>
      );
}

export default Registro;