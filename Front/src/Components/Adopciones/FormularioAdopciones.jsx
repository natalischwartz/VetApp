import { Link } from "react-router-dom";
import './FormularioAdopciones.css';

const FormularioDeAdopciones = () => {
    return (
        <div id="wrapper_componente_form_adopciones">
            <h1>Formulario de adopción</h1>
            <div id="contenedor_formulario_adopciones" className="container">
                <form id="adopcion_form" action="" method='POST'>
                    <div className="form-group">
                        <label className="form-label" htmlFor="nombre">Nombre y apellido</label>
                        <input type="text" className="form-input" name='nombre' id="nombre" placeholder="Nombre..." />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input type="email" className="form-input" name='email' id="email" placeholder="Email..." />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="tel">Teléfono</label>
                        <input type="number" className="form-input" name='tel' id="tel" placeholder="Tel..." />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Dirección</label>
                        <div>
                            <input type="text" className="form-input" name='dir' id="dir" placeholder="..." />
                            <span>Calle</span>
                        </div>
                        <div>
                            <input type="text" className="form-input" name='dir' id="dir" placeholder="..." />
                            <span>Altura</span>
                        </div>
                        <div>
                            <input type="text" className="form-input" name='dir' id="dir" placeholder="..." />
                            <span>Código Postal</span>
                        </div>
                        <br />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="nombre">Situacion laboral</label>
                        <input type="text" className="form-input" name='' id="" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="nombre">¿Actualmente tiene mascotas?</label>
                        <input type="text" className="form-input" name='' id="" placeholder="Si/No" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="nombre">¿Cuantas mascotas?</label>
                        <input type="text" className="form-input" name='' id="" placeholder="" />
                    </div>
                    <div className="form-group">
                    <label className="form-label" htmlFor="nombre">Especie/s de la mascota</label>
                            <input type="text" className="form-input" name='' id="" placeholder="Perro/Gato" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="nombre">¿Tiene patio?</label>
                        <input type="text" className="form-control" name='' id="" placeholder="Si/No" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="nombre">En caso afirmativo, ¿Está cercado?</label>
                        <input type="text" className="form-input" name='' id="" placeholder="Si/No" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="nombre">En caso de mudanza, ¿Qué sucederá con su mascota?</label>
                        <input type="text" className="form-input" name='' id="" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="nombre">¿Hay niños en la casa?</label>
                        <input type="text" className="form-input" name='' placeholder="Si/No" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="nombre">¿Los miembros de su familia estan de acuerdo con la adopción?</label>
                        <input type="text" className="form-input" name='' placeholder="Si/No" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="nombre">¿Qué tipo de personalidad busca en su mascota?</label>
                        <input type="text" className="form-input" name='' id="" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="nombre">¿Qué haría en el caso de "mal comportamiento"?</label>
                        <input type="text" className="form-input" name='' id="" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="nombre">¿Esta de acuerdo que se le haga una visita previa a la adopción en su residencia?</label>
                        <input type="text" className="form-input" placeholder="Si/No" />
                    </div>
                    <div className="container_botones">
                        <button type="submit" className="btn-enviar">Enviar</button>
                        <Link to={"/adopciones"}>
                            <button className="btn-volver">Volver</button>
                        </Link>
                    </div>

                </form>


            </div>
        </div>
    )
}
export default FormularioDeAdopciones;