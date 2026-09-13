import { useState } from 'react'

const Button = (props) =>{
   return <button onClick={props.handleClick}>{props.text}</button>
  
}

const StatisticLine = (props) =>{
  return(
    
      <tr>
        <td>
          {props.text}
        </td>
        <td>
          {props.value} 
        </td>
      </tr>
    
  )
}

// je Refactorise l application afin que l'affichage des statistiques soit extrait dans son propre composant Statistics
const Statistics = (props) =>{
  // je Modifie l'application pour n'afficher les statistiques qu'une fois les commentaires recueillis.
  if (!(props.good || props.neutral || props.bad)) {
    return <p>No feedback given</p> 
  }

  return(
    <tbody> 

      <StatisticLine text="good" value={props.good}/> 
      <StatisticLine text="neutral" value={props.neutral}/> 
      <StatisticLine text="bad" value={props.bad}/> 
      <StatisticLine text="all" value={props.good + props.neutral +props. bad}/> 
      <StatisticLine text="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)}/> 
      <StatisticLine text="positif" value={(props.good * 100) / (props.good + props.neutral + props.bad) + " %"}/> 
    </tbody>
  )
};


const App = () => {
   const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)

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

  // je crée 1 fonction pour pouvoir me déplacer dns le tableau anecdotes 
  const randomString = () =>{
    const randomIndex = Math.floor(Math.random() * anecdotes.length) 
    setSelected(randomIndex)
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

      {/* pr selectionner 1 element dns mn tableau. Selected représente l indice qu il ya dns 1 tableau*/}
      <p>{anecdotes[selected]}</p>
      <button onClick={randomString}>next anecdote</button> 
    </div>

  )


}

export default App