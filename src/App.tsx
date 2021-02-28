import React from 'react'

export function App() {
  const [showTranslation, setShowTranslation] = React.useState(false)

  return (
    <div className="App">
      <div>
        <h2>English Flash Cards</h2>
        <div>
          <img 
            src="https://images.freeimages.com/images/large-previews/1cb/close-squirrel-1381764.jpg" 
            alt="word"
            width="200px"
            height="200px"
          />
          <p className="word">Squirrel</p>
          {showTranslation && <p className="translation">Esquilo</p>}
          <button onClick={() => setShowTranslation(true)}>See translation</button>
          <button>Next Word</button>
        </div>
      </div>
    </div>
  );
}
