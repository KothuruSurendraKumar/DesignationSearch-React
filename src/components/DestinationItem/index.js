// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationsDetails} = props
  const {imageUrl, name} = destinationsDetails
  return (
    <li className="container">
      <img src={imageUrl} alt={name} className="img" />
      <p className="text">{name}</p>
    </li>
  )
}
export default DestinationItem
