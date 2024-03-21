import React from "react";


function App(pp) {
  
  return (
    <div>
      {/* Example usage of the Arrow component */}
      <a href={pp.link}>{pp.title} <span style={{fontSize:'2vh'}}> &rarr; </span> </a>
    </div>
  );
}

export default App;``