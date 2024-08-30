import { useState } from 'react'

function Formulario() {
    // Declaración de un estado llamado "nombre" con un valor inicial de cadena vacía
    const [nombre, setNombre] = useState('');
    // Declaración de un estado llamado "correo" con un valor inicial de cadena vacía
    const [correo, setCorreo] = useState('');

    // Función que se llama cada vez que cambia el valor del input para "nombre"
    const manejarCambioNombre = (evento) => {
        setNombre(evento.target.value);
    };

    // Función que se llama cada vez que cambia el valor del input para "correo"
    const manejarCambioCorreo = (evento) => {
        setCorreo(evento.target.value);
    };

    return (
        <div className="flex flex-col items-center mt-12">
            <h1 className="mb-6 text-2xl font-bold text-gray-700">Formulario 📝</h1>
            <input
                type="text"
                placeholder="Escribe tu nombre"
                value={nombre}
                onChange={manejarCambioNombre}
                className="w-64 p-3 mb-4 text-lg bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
            />
            <input
                type="text"
                placeholder="Escribe tu correo"
                value={correo}
                onChange={manejarCambioCorreo}
                className="w-64 p-3 mb-6 text-lg bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
            />
            <h1 className="text-xl text-gray-700">
                {nombre ? `Nombre: ${nombre}` : 'Nombre: '}
            </h1>
            <h1 className="text-xl text-gray-700">
                {correo ? `Correo: ${correo}` : 'Correo: '}
            </h1>
        </div>
    );
}

export default Formulario;
