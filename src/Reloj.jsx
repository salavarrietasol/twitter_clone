import { useState, useEffect } from "react";

function Reloj() {
  // Estado para almacenar la hora actual
  const [hora, setHora] = useState(new Date());

  // Función para formatear la hora en un formato de 24 horas
  const formatearHora = (date) => {
    const horas = String(date.getHours()).padStart(2, "0");
    const minutos = String(date.getMinutes()).padStart(2, "0");
    const segundos = String(date.getSeconds()).padStart(2, "0");
    return `${horas}:${minutos}:${segundos}`;
  };

  // useEffect para actualizar la hora cada segundo utilizando setInterval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setHora(new Date());
    }, 1000); // Actualiza el estado cada segundo

    // Cleanup function para limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []); // El array vacío [] asegura que el efecto se ejecute solo una vez

  return (
    <div className="flex items-center justify-center w-64 p-4 mx-auto mt-12 bg-purple-100 rounded-lg shadow-md">
      <p className="text-xl font-semibold text-purple-700">Hora Actual: {formatearHora(hora)}</p>
    </div>
  );
}

export default Reloj;
