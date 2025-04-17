//campos para el cliente: nombre, apellido, direccion, numero de telefono, email!, 
//campos para la mascota: nombre, especie, raza, sexo, edad/nacimiento, pelaje, castrado? 
import { useState, useContext } from "react";
import './HistoriaClinica.css'
import { useNavigate, useParams, Link } from "react-router-dom";
import { PawPrint, ArrowLeft } from "lucide-react";
import { Card,CardContent,CardHeader,CardTitle } from "@/Components/ui/card.jsx";
import { Input } from "@/Components/ui/input.jsx";
import { Select, SelectContent, SelectGroup,SelectItem,SelectTrigger,SelectValue } from "@/Components/ui/select.jsx"; 
import { Button } from "@/Components/ui/button.jsx";
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig/firebase.js"
import { AuthContext } from "../../firebaseConfig/AuthProvider.jsx"


const AgregarMascota = () => {
    const [Nombre, setNombre] = useState("")
    const [Especie, setEspecie] = useState("Perro")
    const [Raza, setRaza] = useState("")
    const [Color, setColor] = useState("")
    const [Sexo, setSexo] = useState("Macho")
    const [Edad, setEdad] = useState(0)

    const User = useContext(AuthContext);

    const uid = User.currentUser?.uid;
    const { idUsuario } = useParams();

    const navigate = useNavigate()

    const mascotasCollection = collection(db, `/Clientes/${idUsuario}/Mascotas`)

    const crearMascota = async (e) => {
        e.preventDefault()
        await addDoc(mascotasCollection, {
            Nombre: Nombre,
            Especie: Especie,
            Raza: Raza,
            Color: Color,
            Sexo: Sexo,
            Edad: Edad
        })
        navigate(`/misMascotas/${idUsuario}`)

    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 max-w-2xl">
                <Link to={`/misMascotas/${idUsuario}`} className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6">
                <ArrowLeft className="w-4 h-4 mr-2"/>
                Volver
                </Link>

                <Card className="shadow-lg">
                    <CardHeader className="border-b">
                        <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-3 rounded-full">
                                <PawPrint className="w-6 h-6 text-green-600"/>
                            </div>
                            <CardTitle className="text-2xl font-bold">
                                Agregar Nueva Mascota
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <form action="" className="space-y-6" method="POST">
                            <div className="space-y-2">
                                <label htmlFor="nombre" className="text-sm font-medium-text-gray-700">Nombre</label>
                                <Input placeholder="Nombre de la mascota" className="w-full"
                                onChange={(e) => setNombre(e.target.value)}
                                type="text" name="nombre" required/>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="especie" className="text-sm font-medium text-gray-700">Especie</label>
                                <Select
                                required name="especie" id="especie" onChange={(e) => setEspecie(e.target.value)}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Seleccionar especie"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="Perro">Perro</SelectItem>
                                            <SelectItem value="Gato">Gato</SelectItem>
                                            <SelectItem value="Ave">Ave</SelectItem>
                                            <SelectItem value="Otro">Otro</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="raza" className="text-sm font-medium text-gray-700">Raza</label>
                                <Input placeholder="Raza" className="w-full"
                                type="text" name="raza" required onChange={(e) => setRaza(e.target.value)}/>
                            </div>

                            
                            <div className="space-y-2">
                                <label htmlFor="color" className="text-sm font-medium text-gray-700">Color</label>
                                <Input placeholder="Color" className="w-full"
                                type="text" name="color" required onChange={(e) => setColor(e.target.value)}/>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="sexo" className="text-sm font-medium text-gray-700">Sexo</label>
                                <Select required name="sexo" id="sexo" onChange={(e) => setSexo(e.target.value)}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Seleccionar sexo"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="macho">Macho</SelectItem>
                                            <SelectItem value="hembra">Hembra</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="edad" className="text-sm font-medium text-gray-700">Edad (años)</label>
                                <Input type="number" placeholder="Edad" className="w-full"
                                name="edad" required onChange={(e) => setEdad(e.target.value)}/>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <Button type="submit" className="flex-1"
                                onClick={crearMascota}>
                                    Cargar Mascota
                                </Button>
                                <Link to={`/misMascotas/${idUsuario}`}>
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


export default AgregarMascota;