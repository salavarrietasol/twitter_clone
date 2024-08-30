import { useState } from 'react'


function MeGusta() {
    // Declaración de un estado llamado "count" con un valor inicial de 0
    const [count, setCount] = useState(0);

    // Función para incrementar el contador
    const incrementar = () => {
      setCount(count + 1);
    };

  return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Me gusta 👍: {count}</h1>
          <button onClick={incrementar} style={{ padding: '10px 20px', fontSize: '16px' }}>
            Incrementar
          </button>
        </div>
      );
}

export default MeGusta
