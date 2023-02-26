import React from 'react';
import PetList from './PetList';
import AdoptionForm from './AdoptionForm';

function Adopt() {
  return (
    <div>
      <h1>Adoption form</h1>
      <AdoptionForm />
      <PetList />
    </div>
  );
}

export default Adopt;
