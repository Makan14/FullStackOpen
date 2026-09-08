import { useState } from 'react'

// je Refactorise l application afin que l'affichage des statistiques soit extrait dans son propre composant Statistics
const Statistics = (  props) =>{

  return(
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p> 

      {/* j additionne le total de good neutral et bad */}
      <p>all {props.good + props.neutral +props. bad}</p> 

      {/* calcul de la moyenne */}
      <p>average {(props.good - props.bad) / (props.good + props.neutral + props.bad)}</p> 

      {/* pourcentage du retour positif */}
      <p>positif {(props.good * 100) / (props.good + props.neutral + props.bad)} %</p> 
    </div>
  )
};

// je met 3 propriété good, neutral, bad
// const Statistics = ({good, neutral, bad}) =>{

//   return(
//     <div>
//       <p>good {good}</p>
//       <p>neutral {neutral}</p>
//       <p>bad {bad}</p> 

//       {/* j additionne le total de good neutral et bad */}
//       <p>all {good + neutral + bad}</p> 

//       {/* calcul de la moyenne */}
//       <p>average {(good - bad) / (good + neutral + bad)}</p> 

//       {/* pourcentage du retour positif */}
//       <p>positif {(good * 100) / (good + neutral + bad)} %</p> 
//     </div>
//   )
// };

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
      {/* j appel mes propriétés good, neutral, bad */}
      <Statistics good = {good} neutral = {neutral} bad = {bad}/> 

      

    </div>

  )


}

export default App