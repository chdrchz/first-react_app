import React, { useState, useEffect } from 'react';
import data from "./characters.json";
import { Character } from "./types";
import './App.css';

// Testing returning a single character
export function MapCharacters(): Character {
  return data[0];
}

// Maps json data to fields
function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="character-cards">
      <h1>{character.name}</h1>
      <h3>BIRTHDAY: {character.birthday}</h3>
      <p>LIKES: {character.likes.join(', ')}</p>
      <p>DISLIKES: {character.dislikes.join(', ')}</p>
    </div>
  );
}

// Renders
function App() {

  // Get character names
  const characterNames = data.map(character => character.name);

  // Initial state set to the first character's name by default
  const [selectedCharacterName, setSelectedCharacterName] = useState<string>(characterNames[0]);

  // Handle when a button is clicked
  const handleButtonClick = (name: string) => {
    setSelectedCharacterName(name);
  }

  // Find the character based on the name
  const selectedCharacter = data.find(character => character.name === selectedCharacterName);

  // Creates HTML template
  return (
    <div className="container">

      {/* BUTTONS SECTION */}
      <div className="buttons">
        <button className="btn" onClick={() => handleButtonClick(characterNames[0])}>Select Character</button> 
        {characterNames.map((name, index) => (
          <button className="btn" key={index} onClick={() => handleButtonClick(name)}>{name}</button> 
        ))}
      </div>

      {/* CHARACTERS SECTION */}
      <div className="characters-cards">
        {selectedCharacter && <CharacterCard character={selectedCharacter} />}
      </div>
    </div>
  );
}

export default App;