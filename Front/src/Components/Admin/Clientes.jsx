import { Edit, Trash2, Eye} from 'lucide-react';
import { Table,TableBody,TableCell,TableHead,TableHeader,TableRow } from '@/Components/ui/table';
import { Button } from '@/Components/ui/button.jsx';
import { Card,CardContent,CardHeader,CardTitle } from '@/Components/ui/card';

import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { AuthContext } from "../../firebaseConfig/AuthProvider.jsx";
import { db } from "../../firebaseConfig/firebase.js";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
    FadeLoader
} from 'react-spinners';
import '../Mascotas/HistoriaClinica.css';

const mySwal = withReactContent(Swal);

const LogInLinks = ({ id, getClientes }) => {
    
    const User = useContext(AuthContext);
    const user = User.currentUser;
    let isUserLoggedIn = User.currentUser !== null;


    const deleteCliente = async () => {
        const clienteDoc = doc(db, `/Clientes/${id}`)
        await deleteDoc(clienteDoc)
        getClientes()
    }

    const confirmDelete = () => {
        Swal.fire({
            title: 'Estas Seguro/a?',
            text: "No podes revertir esta Accion!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Deseo Borrarlo!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteCliente()
                Swal.fire(
                    'Borrado!',
                    'La Entrada ha sido Borrada.',
                    'success'
                )
            }
        })
    }

    if (isUserLoggedIn && user.email == import.meta.env.VITE_EMAIL) {
        return (
            <>
             <TableCell className="text-right space-x-2">
                <Link to={`/editarPerfil/${id}`}>
                    <Button variant="ghost" size="icon" className="hover:bg-blue-50 text-blue-600"
                    >
                        <Edit className='h-4 w-4'/>
                    </Button>
                </Link>
                <Button onClick={()=>{confirmDelete()}} variant="ghost" size="icon" className="hover:bg-red-50 text-red-600">
                    <Trash2 className='h-4 w-4'/>
                </Button>
            </TableCell> 
            </>
        );
    }
}

const Clientes = () =>{
    const [loading, setLoading] = useState(true);


    const [clientes, setClientes] = useState([])
    const clientesCollection = collection(db, "Clientes")

    const getClientes = async () => {
        const data = await getDocs(clientesCollection)
        /*  console.log(data.docs); */
        setClientes(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        getClientes()
    }, [])

    if (loading) {
        return (
            <div className='loader_container'>
                <FadeLoader />
            </div>)
    }


    return(
        <div className="container mx-auto py-8 px-4">
            <Card className="shadow-lg">
                <CardHeader className="border-b bg-gray-50/80">
                <CardTitle className="text-2xl font-bold text-gray-800">
                    Clientes
                </CardTitle>
                
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-gray-50/50">
                                <TableHead className="font-semibold">Nombre</TableHead>
                                <TableHead className="font-semibold">Apellido</TableHead>
                                <TableHead className="font-semibold">Email</TableHead>
                                <TableHead className="font-semibold">Mascotas</TableHead>
                                <TableHead className="font-semibold">Acciones</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {clientes.map((cliente)=>(
                                    <TableRow key={cliente.id} className="hover:bg-gray-50/50">
                                        <TableCell>{cliente.Nombre}</TableCell>
                                        <TableCell>{cliente.Apellido}</TableCell>
                                        <TableCell>{cliente.Email}</TableCell>
                                        <TableCell>
                                            <Link to={`/misMascotas/${cliente.id}`}>
                                                 <Button variant="outline" className="text-primary hover:text-primary hover:bg-primary/10">
                                            Ver Mascotas
                                            </Button>
                                            </Link>
                                        </TableCell>
                                        <LogInLinks id={cliente.id} getClientes={getClientes}></LogInLinks>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );


}


export default Clientes;