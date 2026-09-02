const App = () => {
  const course = 'Half Stack application development';
  
  // je crée ds objets
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10 
  }
  
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  
  const part3 = {
    name: 'State of a component',
    exercises: 14
  } 
  
  const totalExercises = part1.exercises + part2.exercises + part3.exercises  
  return(
    
    <div>
      <Header course = {course}/> 
      <Content part={part1.name} exercises={part1.exercises}/> 
      <Content part={part2.name} exercises={part2.exercises}/> 
      <Content part={part3.name} exercises={part3.exercises}/> 
      <Total totalExercises = {totalExercises}/> 
    </div>
  )
}

// component header
const Header = (props) =>{

  return(
    <div>
      <h1>{props.course}</h1> 
    </div>
  )
}


// component content
const Content = (props) =>{
  
  return(
    <div>
      <p>
        {props.part} {props.exercises} 
      </p>
    </div>
  )
}

// component total
const Total = (props) =>{

  return(         
      <p>Number of exercises {props.totalExercises}</p>  
  )
} 

export default App