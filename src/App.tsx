import React from 'react'
import styles from './App.module.css'

export function App() {
  const [showTranslation, setShowTranslation] = React.useState(false)

  return (
    <div className="App">
      <div className={styles.container}>
        <h2 className={styles.title}>English Flash Cards</h2>
        <div>
          <img 
            src="https://images.freeimages.com/images/large-previews/1cb/close-squirrel-1381764.jpg" 
            alt="word"
            width="200px"
            height="200px"
          />
          <p className="word">Squirrel</p>
          {showTranslation && <p className="translation">Esquilo</p>}
          <button onClick={() => setShowTranslation(true)} style={{display: "block"}}>See translation</button>
          <button>Next Word</button>
        </div>
      </div>
    </div>
  );
}
