import React, { useState } from 'react';

function GPSProximityCheck({ positions, onCheckProximity }) {
  const [position1, setPosition1] = useState('');
  const [position2, setPosition2] = useState('');
  const [result, setResult] = useState('');

  const handleCheck = () => {
    const pos1 = positions.find((pos) => pos.id === parseInt(position1));
    const pos2 = positions.find((pos) => pos.id === parseInt(position2));

    if (pos1 && pos2) {
      onCheckProximity(pos1, pos2);
    } else {
      setResult('Invalid positions');
    }
  };

  return (
    <div>
      <h2>GPS Proximity Check</h2>
      <div>
        <label>Select Position 1:</label>
        <select onChange={(e) => setPosition1(e.target.value)}>
          <option value="">Select</option>
          {positions.map((position) => (
            <option key={position.id} value={position.id}>
              {position.latitude}, {position.longitude}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Position 2:</label>
        <select onChange={(e) => setPosition2(e.target.value)}>
          <option value="">Select</option>
          {positions.map((position) => (
            <option key={position.id} value={position.id}>
              {position.latitude}, {position.longitude}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleCheck}>Check Proximity</button>
      <p>Result: {result}</p> {/* Display the result message here */}
    </div>
  );
}

export default GPSProximityCheck;
