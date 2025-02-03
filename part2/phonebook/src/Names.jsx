import Person from "./Person"

const Names = ({names}) =>{
  return(
    <div>
      {names.map((name) => {
        return <Person name={name} key={name.name}/>
          }
        )
      }
    </div>
  )
}

export default Names