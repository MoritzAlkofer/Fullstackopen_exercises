const Header = ({title}) => {
    return (
      <h1>{title}</h1>
      )
    }
  
  const Content = ({parts}) =>{
    return (
      <div>
          {parts.map(part => 
            <p key={part.id}>
              {part.name} {part.exercises}
            </p>
          )}
      </div>
    )
  }
  
  const Total = ({parts})=>{  
    const totalAmount = parts.reduce((sum,part)=>{
      return sum + part.exercises
    },0)
  
    return(
      <p>total of {totalAmount} exercises</p>
    )
  }
  const Course = ({course})=>{
    return(
      <div>
        <Header title={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
  }

export default Course