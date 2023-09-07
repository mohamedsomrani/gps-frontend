import React, { useState, useEffect } from 'react';
import './App.css';
import InputGPSPosition from './components/InputGPSPosition';
import GPSPositionList from './components/GPSPositionList';
import GPSProximityCheck from './components/GPSProximityCheck';
import { getGPSPositions, createGPSPosition, deleteGPSPosition, checkProximity } from './services/api';

function App() {
  const [positions, setPositions] = useState([]);
  const [proximityResult, setProximityResult] = useState(null); // State for proximity result

  useEffect(() => {
    // Fetch the list of GPS positions when the component mounts
    fetchPositions();
  }, []);

  const fetchPositions = () => {
    getGPSPositions()
      .then((response) => {
        setPositions(response);
      })
      .catch((error) => {
        console.error('Error fetching positions:', error);
      });
  };

  const handleCreatePosition = (newPosition) => {
    createGPSPosition(newPosition)
      .then((response) => {
        setPositions([...positions, response]);
      })
      .catch((error) => {
        console.error('Error creating position:', error);
      });
  };

  const handleDeletePosition = (positionId) => {
    deleteGPSPosition(positionId)
      .then(() => {
        const updatedPositions = positions.filter((position) => position.id !== positionId);
        setPositions(updatedPositions);
      })
      .catch((error) => {
        console.error('Error deleting position:', error);
      });
  };

  const handleCheckProximity = (position1, position2) => {
    checkProximity(position1, position2)
      .then((isWithin10Km) => {
        if (isWithin10Km) {
          setProximityResult('The two positions are within 10 kilometers of each other.');
        } else {
          setProximityResult('The two positions are NOT within 10 kilometers of each other.');
        }
      })
      .catch((error) => {
        console.error('Error checking proximity:', error);
        setProximityResult('Error checking proximity.');
      });
  };

  return (
    <div className="App">
      <h1>GPS Position Tracker</h1>
      <InputGPSPosition onSubmit={handleCreatePosition} />
      <GPSPositionList positions={positions} onDelete={handleDeletePosition} />
      <GPSProximityCheck positions={positions} onCheckProximity={handleCheckProximity} />
      {proximityResult && <p>{proximityResult}</p>} {/* Display proximity result */}
    </div>
  );
}

export default App;
