import { useState } from 'react'

const Button = (props) =>{
   return <button onClick={props.handleClick}>{props.text}</button>
  
}

const StatisticLine = (props) =>{
  return(
    <p>
      {props.text} {" "} {props.value} 
    </p>
  )
}

// je Refactorise l application afin que l'affichage des statistiques soit extrait dans son propre composant Statistics
const Statistics = (props) =>{
  // je Modifie l'application pour n'afficher les statistiques qu'une fois les commentaires recueillis.
  if (!(props.good || props.neutral || props.bad)) {
    return <p>No feedback given</p> 
  }

  return(
    <div>

      {/* <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>  */}

      {/* j additionne le total de good neutral et bad */}
      {/* <p>all {props.good + props.neutral +props. bad}</p>  */}

      {/* calcul de la moyenne */}
      {/* <p>average {" "} {}</p>  */}

      {/* pourcentage du retour positif */}
      {/* <p>positif {" "} {(props.good * 100) / (props.good + props.neutral + props.bad)} %</p>  */}

      <StatisticLine text="good" value={props.good}/> 
      <StatisticLine text="neutral" value={props.neutral}/> 
      <StatisticLine text="bad" value={props.bad}/> 
      <StatisticLine text="all" value={props.good + props.neutral +props. bad}/> 
      <StatisticLine text="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)}/> 
      <StatisticLine text="positif" value={(props.good * 100) / (props.good + props.neutral + props.bad) + " %"}/> 
    </div>
  )
};


const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // j extrait ls composant Bouton pour définir les boutons utilisés pour soumettre des commentaires
  const goodClick = () =>{
    setGood(good + 1)
  }

  const neutralClick = () =>{
    setNeutral(neutral + 1)
  }

  const badClick = () =>{
    setBad(bad +1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={goodClick} text="good"/>
      <Button handleClick={neutralClick} text="neutral"/>
      <Button handleClick={badClick} text="bad"/>

      <h2>statistics</h2>
      {/* j appel mes propriétés good, neutral, bad */}
      <Statistics good = {good} neutral = {neutral} bad = {bad}/> 


    </div>

  )


}

export default App