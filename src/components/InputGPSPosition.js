import React, { useState } from 'react';


function InputGPSPosition({ onSubmit }) {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ latitude, longitude });
    setLatitude('');
    setLongitude('');
  };

  return (
    <div>
      <h2>Input GPS Position</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <input
          type="number"
          placeholder="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InputGPSPosition;
