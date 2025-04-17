import React from "react";
import { useState, useEffect, useContext } from "react";
import "./HistoriaClinica.css";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/Components/ui/card";
import {Button} from "@/Components/ui/button";
import { CalendarDays, Stethoscope, Trash2 , PlusCircle, Loader2,Pencil,FileSearch,ArrowLeft} from "lucide-react";
import { AuthContext } from "../../firebaseConfig/AuthProvider";
import { db } from "../../firebaseConfig/firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import whitReactContent from "sweetalert2-react-content";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { FadeLoader } from "react-spinners";


const mySwal = whitReactContent(Swal);


//Maneja toda la logica de permisos y acciones
const LogInLinks = ({isUserLoggedIn,idUsuario,id,idHistoria,getHistoriaClinica,
}) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  const deleteEntrada = async (idHistoria) =>{
    try {
      const entradaDoc = doc(db, `/Clientes/${idUsuario}/Mascotas/${id}/HistoriaClinica/${idHistoria}`);

      await deleteDoc(entradaDoc);
      getHistoriaClinica();
      mySwal.fire("Eliminado","La entrada ha sido borrada", "success");
      
    } catch (error) {
      mySwal.fire("Error","No se pudo eliminar la entrada","error")
    }
  };

  const confirmDelete = (idHistoria) => {
    mySwal.fire({
      title:"Estas seguro?",
      text:"No podras revertir esta accion!",
      icon:"warning",
      showCancelButton:true,
      confirmButtonColor:"#3085d6",
      cancelButtonColor:"#d33",
      confirmButtonText:"Si, borrarlo!"
    }).then((result)=>{
    if(result.isConfirmed){
      deleteEntrada(idHistoria);
    }
  })
  }
  //permisos

    if (isUserLoggedIn && user?.email === import.meta.env.VITE_EMAIL){
    return(
      <div className="flex gap-2">
        <Link to={`/editarHistoria/${idUsuario}/${id}/${idHistoria}`}>
          <Button variant="outline" size="sm">
            <Pencil className="w-4 h-4 mr-2"/>
            Editar
          </Button>
        </Link>

        <Button variant="destructive" size="sm" onClick={()=>confirmDelete(idHistoria)}>
          <Trash2 className="w-4 h-4 mr-2"/>
          Eliminar
        </Button>
      </div>
    );
  }
  return null   
}

//Se enfoca en mostrar los datos
const HistoriaClinica = () => {

  const [loading, setLoading] = useState(true);
  const [historiaClinica, setHistoriaClinica] = useState(null);
  const User = useContext(AuthContext);
  const uid = User.currentUser?.uid;
  const auth = getAuth();
  let isUserLoggedIn = User.currentUser !== null;
  const { idUsuario, id, idHistoria } = useParams();
  console.log(idHistoria)

  const isAdmin = User.currentUser?.email === import.meta.env.VITE_EMAIL;

  const getHistoriaClinica = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, `/Clientes/${idUsuario}/Mascotas/${id}/HistoriaClinica`)
      );
  
      if (!querySnapshot.empty) {
        const historias = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setHistoriaClinica(historias); // Ahora es un array
        console.log(historiaClinica)
      } else {
        setHistoriaClinica([]);
      }
    } catch (error) {
      console.error("Error obteniendo historias clínicas:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    if (User.currentUser !== null) {
      getHistoriaClinica();
      setLoading(false);
    }
  }, [idUsuario,id, idHistoria]);

  if (loading) {
    return (
      <div className="loader_container">
        <FadeLoader />
      </div>
    );
  }


  return (
     <div className="container mx-auto px-4 py-8 max-w-4xl">
    <div className="mb-8 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Historia Clínica</h1>
      <div className="flex items-center justify-center gap-2 text-gray-600">
        <Stethoscope className="w-5 h-5" />
        <span>Registro de consultas veterinarias</span>
      </div>
    </div>

    {/* Botón para nueva entrada (solo visible para admin) */}
    {isAdmin && (
      <div className="mb-6 text-right">
        <Link to={`/nuevaEntrada/${idUsuario}/${id}`}>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <PlusCircle className="mr-2" />
            Nueva entrada
          </Button>
        </Link>
      </div>
    )}

    {/* Estado de carga */}
    {loading && (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin w-10 h-10 text-purple-600" />
      </div>
    )}

    {/* Cuando ya terminó de cargar */}
    {!loading && (
      <div className="space-y-6">
        {/* Caso 1: Hay historias clínicas */}
        {historiaClinica && historiaClinica.length > 0 ? (
          historiaClinica.map((entrada) => (
            <Card key={entrada.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CalendarDays className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">
                      Consulta del {entrada.Fecha?.toDate?.().toLocaleDateString() || 'Fecha no disponible'}
                    </CardTitle>
                    <CardDescription className="text-gray-500">
                      {entrada.Consulta || 'Consulta general'}
                    </CardDescription>
                  </div>
                </div>
                {/* Botones de acción (solo para admin) */}
                <LogInLinks 
            isUserLoggedIn={isUserLoggedIn} 
            idUsuario={idUsuario} 
            id={id} 
            idHistoria={entrada.id} 
            getHistoriaClinica={getHistoriaClinica}
          />
            </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-2">Observaciones:</h3>
                    <p className="text-gray-600">{entrada.Observaciones || 'Sin observaciones'}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-2">Tratamiento:</h3>
                    <p className="text-gray-600">{entrada.Tratamiento || 'Sin tratamiento indicado'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : 
        /* Caso 2: No hay historias clínicas */
        !loading && (
          <div className="text-center py-12">
            <FileSearch className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-600">No hay registros de historias clínicas</h3>
            <p className="text-gray-500 mt-2">Aún no se han registrado consultas para esta mascota</p>
            {isAdmin && (
              <Link to={`/nuevaEntrada/${idUsuario}/${id}`} className="mt-4 inline-block">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <PlusCircle className="mr-2" />
                  Crear primera entrada
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    )}

    {/* Botón para volver */}
    <div className="mt-8">
      <Link to={`/misMascotas/${idUsuario}`}>
        <Button variant="outline">
          <ArrowLeft className="mr-2" />
          Volver a mis mascotas
        </Button>
      </Link>
    </div>
    
  </div>

  );
};

export default HistoriaClinica;