import { useState, useContext, useEffect } from "react";
import '../Mascotas/HistoriaClinica.css';
import { useNavigate, useParams, Link } from "react-router-dom";
import { User, ArrowLeft } from "lucide-react";

import { Card,CardContent,CardHeader,CardTitle } from "@/Components/ui/card.jsx";
import { Input } from "@/Components/ui/input.jsx";
import { Button } from "@/Components/ui/button.jsx";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig/firebase.js";
import { AuthContext } from "../../firebaseConfig/AuthProvider.jsx"

const EditarPerfil = () =>{
    const [Nombre, setNombre] = useState("");
      const [Email, setEmail] = useState("");
      const [Apellido, setApellido] = useState("");
    
      const Usuario = useContext(AuthContext);
      const user = Usuario.currentUser;
      const navigate = useNavigate();
      const { id } = useParams();
    
      const update = async (e) => {
        e.preventDefault();
        const perfilDoc = doc(db, "Clientes", id);
        const data = {
          Nombre: Nombre,
          Apellido: Apellido,
        };
        await updateDoc(perfilDoc, data);
        user.email == import.meta.env.VITE_EMAIL
          ? navigate(`/clientes`)
          : navigate(`/perfil/${id}`);
      };
    
      const getPerfil = async () => {
        const perfilDoc = await getDoc(doc(db, "Clientes", id));
        if (perfilDoc.exists()) {
          setNombre(perfilDoc.data().Nombre);
          setApellido(perfilDoc.data().Apellido);
          setEmail(perfilDoc.data().Email);
        } else {
          console.log("El usuario no existe");
        }
      };
    
      useEffect(() => {
        getPerfil();
      }, []);


      return(
        <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
            <Link to={`/clientes`} className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2"/>
            Volver
            </Link>

            <Card className="shadow-lg">
                <CardHeader className="border-b">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-3 rounded-full">
                            <User className="w-6 h-6 text-green-600" />
                        </div>
                        <CardTitle className="text-2xl font-bold">
                            Editar Perfil
                        </CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="pt-6">
                    <form action="" className="space-y-6" 
                    method="POST">
                        <div className="space-y-2">
                            <label htmlFor="nombre" className="text-sm font-medium-text-gray-700">Nombre</label>
                            <Input value={Nombre} className="w-full"
                            onChange={(e) => setNombre(e.target.value)}
                            type="text" name="nombre" required/>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="apellido" className="text-sm font-medium-text-gray-700">Nombre</label>
                            <Input value={Apellido} className="w-full"
                            onChange={(e) => setApellido(e.target.value)}
                            type="text" name="apellido" required/>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium-text-gray-700">Email</label>
                            <Input value={Email} className="w-full"
                            onChange={(e) => setEmail(e.target.value)}
                            type="text" name="email" required/>
                        </div>



                        <div className="flex gap-4 pt-4">
                            <Button type="submit" className="flex-1"
                            onClick={update}>
                                Guardar
                            </Button>
                            <Link to={`/clientes`}>
                                <Button variant="outline" className="flex-1">
                                    Cancelar
                                </Button>
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    </div>
      )
}

export default EditarPerfil;