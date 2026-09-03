const App = () => {
  const course = 'Half Stack application development';

  // je cree 1 tableau part puis je met les objet dedans
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },

    {
      name: 'Using props to pass data',
      exercises: 7
    },

    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  // const totalExercises = part1.exercises + part2.exercises + part3.exercises  
  return (

    <div>
      <Header course = {course} />
      <Content part = {parts} />
      <Total part = {parts}/> 
    </div>
  )
}

// component header
const Header = (props) => {

  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}


// component content
const Content = (props) => {

  return (
    <div>
      <p>
        {props.part[0].name} {props.part[0].exercises}
      </p>
      <p>
        {props.part[1].name} {props.part[1].exercises}
      </p>
      <p>
        {props.part[2].name} {props.part[2].exercises}
      </p>
    </div>
  )
}

// component total
const Total = (props) => {

  return (
    <p>Number of exercises {" "}
      {props.part[0].exercises +
        props.part[1].exercises +
        props.part[2].exercises}
    </p>
  )
}

export default App