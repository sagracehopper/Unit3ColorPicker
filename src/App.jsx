// Write your Color component here
import { useState } from 'react';

const Color = ({ color, isSelected, onClick }) => (
  <div className={`${color} ${isSelected ? 'selected' : ''}`} onClick={onClick} />
);

const App = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const colors = ['yellow', 'green', 'black'];

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        {colors.map((color) => (
          <Color 
            key={color} 
            color={color} 
            isSelected={selectedColor === color} 
            onClick={() => setSelectedColor(color)} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;