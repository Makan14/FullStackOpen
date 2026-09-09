import { useState } from 'react'

const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad +1)}>bad</button>

      <h2>statistics</h2>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p> 

      {/* j additionne le total de good neutral et bad */}
      <p>all {good + neutral + bad}</p> 

      {/* calcul de la moyenne */}
      <p>average {" "} {(good - bad) / (good + neutral + bad)}</p> 

      {/* pourcentage du retour positif */}
      <p>positif {" "} {(good * 100) / (good + neutral + bad)} %</p> 

    </div>

  )


}

export default App