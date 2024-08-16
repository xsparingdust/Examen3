import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ input1: '', input2: '' });
  const [error, setError] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { input1, input2 } = formData;

    if (input1.trim().length < 3 || input1.startsWith(' ') || input2.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setShowCard(false);
    } else {
      setError('');
      setShowCard(true);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input1">Ingresa tu nombre:</label>
          <input
            type="text"
            id="input1"
            name="input1"
            value={formData.input1}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="input2">Ingresa tu numero telefonico:</label>
          <input
            type="text"
            id="input2"
            name="input2"
            value={formData.input2}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {error && <p className="error">{error}</p>}

      {showCard && <Card data={formData} />}
    </div>
  );
}

function Card({ data }) {
  return (
    <div className="card">
      <h2>Información Ingresada</h2>
      <p><strong>hola:</strong> {data.input1}</p>
      <p><strong>Tu numero de telefono es:</strong> {data.input2}</p>
    </div>
  );
}

export default App;