import { useState } from "react";

function TweetInput({ addTweet }) {
    // Estado para el valor del input del nuevo tweet
    const [nuevoTweet, setNuevoTweetInput] = useState('');

    // Función para manejar el cambio en el campo de entrada
    const manejarCambio = (evento) => {
        setNuevoTweetInput(evento.target.value);
    };

    // Función para agregar una nueva tarea a la lista
    const agregarTweet = () => {
        if (nuevoTweet.trim() !== '') {
            addTweet(nuevoTweet);
            setNuevoTweetInput('');
        }
    };
    // Función para manejar la tecla presionada
    const manejarTecla = (evento) => {
        if (evento.key === 'Enter') {
            evento.preventDefault(); // Evita el comportamiento predeterminado (como un salto de línea)
            agregarTweet();
        }
    };
    
    return (
       <div className="relative max-w-md p-3 mx-auto mb-4 bg-white border border-gray-200 rounded-lg shadow-md">
            <h1 className="p-3 mb-6 text-2xl font-bold text-gray-400">Twitter Básico </h1>
            <input
                type="text"
                placeholder="¿Qué estás pensando?"
                value={nuevoTweet}
                onChange={manejarCambio}
                onKeyDown={manejarTecla}
                className="w-full p-1 mb-4 text-lg bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
            />
                <button
                    onClick={agregarTweet}
                    className="px-6 py-2 mb-6 text-white transition-colors duration-300 bg-purple-500 rounded-lg hover:bg-purple-600"
                >
                    Publicar
                </button>  
            
        </div>
    );
}

export default TweetInput;
