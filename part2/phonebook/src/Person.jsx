const Person = ({name}) =>{
    return (
      <p key={name.name}>
            {name.name} {name.number} 
          </p>)
  }
  
export default Person