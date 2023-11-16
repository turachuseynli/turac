import React from 'react';
import './App.css';
import Blue from './components/Button';
import watch from './components/a.png';
import cofe from './components/cofe.png';
import trc from './components/trc.jpeg';
import img from './components/img.png';

function App() {
  const containers = [
    { header: "watch", image: watch, description: "rolex watch", price: "500$" },
    { header: "cofe", image: cofe, description: "coffee", price: "2$" },
    { header: "trc", image: trc, description: "telescope", price: "100$" },
    { header: "slm", image: img, description: "slime", price: "5$" }
  ];

  return (
    <div className="App">
      {containers.map(function (data, index) {
        return (
          <Blue
            key={index}
            header={data.header}
            image={data.image}
            description={data.description}
            price={data.price}
          />
        );
      })}
    </div>
  );
}

export default App;