const App = () => {
  // je modif course en 1 seul objet javascript
const course = {
    name: 'Half Stack application development',
    // tableau parts
    parts: [
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
  }
  // const totalExercises = part1.exercises + part2.exercises + part3.exercises  
  return (

    <div>
      <Header course = {course} />
      <Content course = {course} />
      <Total course = {course}/> 
    </div>
  )
}

// component header
const Header = (props) => {

  return (
    <div>
      {/* je rajoute name car c 1 clés */}
      <h1>{props.course.name}</h1>
    </div>
  )
}


// component content
const Content = (props) => {

  return (
    <div>
      <p>
        {/* je met la propriété course et je selectionne le 1er 2eme et 3eme objet du tableau parts dans const App */}
        {props.course.parts[0].name} {props.course.parts[0].exercises}
      </p>
      <p>
        {props.course.parts[1].name} {props.course.parts[1].exercises}
      </p>
      <p>
        {props.course.parts[2].name} {props.course.parts[2].exercises}
      </p>
    </div>
  )
}

// // component total
const Total = (props) => {

  return (
    <p>Number of exercises {" "}
      {props.course.parts[0].exercises +
        props.course.parts[1].exercises +
        props.course.parts[2].exercises}
    </p>
  )
}

export default App