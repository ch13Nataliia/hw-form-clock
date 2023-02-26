import React from 'react';
import PetCard from '../components/PetCard';
import rex from './image/cat1.jpg';
import simba from './image/cat2.jpg';
import polly from './image/cat3.jpg';

function PetList() {
  const petNames = [
    {
      name: 'Angus',
      age: '2 years old',
      image: <img src={rex} />,
      text: 'Angus is a beautiful, playful boy, but can be a little boisterous and thinks humans are litter mates with whom he can have ruff and tumble play. Initially when coming into care he did nibble his human friends. It was good natured and not aggressive. Over the last week this behaviour has stopped but we are still looking for an adult only home with experienced cat owners. he would benefit from a home environment with another young confident and playful cat.',
    },
    {
      name: 'Simba',
      age: '2 months old',
      image: <img src={simba} />,
      text: 'She was timid and a bit hissy when she came into care but after a few days she settled and became sweet and affectionate, now always wanting a fuss.',
    },
    {
      name: 'Polly',
      age: '12 years old',
      image: <img src={polly} />,
      text: 'She is very timid and spends most of her time in her quiet hide, she will let you stroke her but she doesnt currently come to you for a fuss. She will take some time to adjust to her new home and needs a quiet home with a patient family who will allow her to come out to them on her own terms.',
    },
  ];
  return (
    
    <ul>
      {petNames.map((pet) => (
        <PetCard pet={pet} />
      ))}
    </ul>
  );
}

export default PetList;
