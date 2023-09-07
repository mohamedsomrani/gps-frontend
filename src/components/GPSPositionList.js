// src/components/GPSPositionList.js
import React from 'react';

function GPSPositionList({ positions, onDelete }) {
  return (
    <div>
      <h2>GPS Position List</h2>
      <ul>
        {positions.map((position) => (
          <li key={position.id}>
            Latitude: {position.latitude}, Longitude: {position.longitude}{' '}
            <button onClick={() => onDelete(position.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GPSPositionList;
