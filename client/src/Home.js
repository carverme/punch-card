import React, { Component } from 'react';
import Map from './Map';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return (
      <div>
        <p>
          Come get your punch cards! Today!!!
        </p>
        <input value="search" type="submit" onChange={this.handleChange} />
        <button type="submit">Search</button>
        <Map />
      </div>
    )
  }
}

export default Home;