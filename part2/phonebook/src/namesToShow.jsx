const namesToShow = ({names, filter}) => {
    return names.filter(name => {return name.name.toLowerCase().includes(filter)})}
    
export default namesToShow