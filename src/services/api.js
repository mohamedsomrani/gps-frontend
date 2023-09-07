const API_URL = 'http://localhost:8080/api/positions';

export const getGPSPositions = () => {
  return fetch(API_URL, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch positions');
      }
      return response.json();
    });
};

export const createGPSPosition = (position) => {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(position),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to create position');
      }
      return response.json();
    });
};

export const deleteGPSPosition = (id) => {
  return fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to delete position');
      }
    });
};

export const checkProximity = (position1, position2) => {
  return fetch(`${API_URL}/checkProximity`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ position1, position2 }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Proximity check failed');
      }
      return response.json();
    });
};

export const handleDeletePosition = (id) => {
  return deleteGPSPosition(id)
    .then(() => {
      console.log(`Position with ID ${id} deleted successfully.`);
      // You can add additional logic here if needed
    })
    .catch((error) => {
      console.error('Error deleting position:', error);
    });
};