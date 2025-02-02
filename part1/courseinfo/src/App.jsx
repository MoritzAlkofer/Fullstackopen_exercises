const Header = (props) => {
  return (
    <>
      <h1>
        {props.course}
      </h1>
    </>
  )
}

const Part = ({course}) => {
  return (
    <>
      <p>
        {course.name} {course.exercises}
      </p>
    </>
  )
}

const Content = ({courses}) => {
  return (
    <>
      <Part course = {courses[0]} />
      <Part course = {courses[1]} />
      <Part course = {courses[2]} />
    </>
  )
}
const Total = ({courses}) => {
  let sum = 0;
    for (let i = 0; i < courses.length; i++) {
      sum += courses[i].exercises;
  }
  
  return (
    <>
      number of exercises {sum}
    </>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
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

  return (
    <div>
      <Header course = {course.name}/>
      < Content courses={course.parts}/>
      < Total courses = {course.parts} />      
    </div>
  )
}

export default App