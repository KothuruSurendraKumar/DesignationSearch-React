// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationsDetails} = props
  const {imgUrl, name} = destinationsDetails
  return (
    <li className="container">
      <img src={imgUrl} alt={name} className="img" />
      <p className="text">{name}</p>
    </li>
  )
}
export default DestinationItem
