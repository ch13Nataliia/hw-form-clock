import React from 'react';
import Surround from './Surround';

function PetCard({ pet }) {
  return (
    <div style={{ width: '600px' }}>
      <Surround color="green">
        <h2 style={{ fontSize: '50px' }}>{pet.name}</h2>
        <p>{pet.age}</p>
        <image>{pet.image}</image>
        <p>{pet.text}</p>
      </Surround>
    </div>
  );
}

export default PetCard;
