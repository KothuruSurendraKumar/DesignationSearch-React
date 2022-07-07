// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    changeInput: '',
  }

  onChangeInput = event => {
    this.setState({changeInput: event.target.value})
  }

  render() {
    const {changeInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(changeInput.toLowerCase()),
    )
    return (
      <div className="container">
        <div className="app-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              onChange={this.onChangeInput}
              placeholder="search here"
              className="search-item"
            />
            <img
              alt="img"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-icon"
            />
          </div>
          <ul className="list-container">
            {searchResults.map(each => (
              <DestinationItem key={each.id} destinationDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
