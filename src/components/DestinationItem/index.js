// Write your code here

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imageUrl} = destinationDetails
  return (
    <li className="container">
      <img src={imageUrl} alt={name} className="img" />
      <p className="text">{name}</p>
    </li>
  )
}
export default DestinationItem
