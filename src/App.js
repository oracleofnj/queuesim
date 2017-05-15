import React, { Component } from 'react'
import Parameters from './Parameters.js'
import Results from './Results.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      numDocs: 3,
      meanTimeBetweenArrival: 10,
      minVisitTime: 5,
      maxVisitTime: 25,
      numSims: 2000
    }
    this.docChange = this.docChange.bind(this)
    this.timeBetweenChange = this.timeBetweenChange.bind(this)
    this.minTimeChange = this.minTimeChange.bind(this)
    this.maxTimeChange = this.maxTimeChange.bind(this)
    this.numSimsChange = this.numSimsChange.bind(this)
  }
  docChange (e) { this.setState({ ...this.state, numDocs: parseInt(e.target.value, 10) }) }
  timeBetweenChange (e) { this.setState({ ...this.state, meanTimeBetweenArrival: parseInt(e.target.value, 10) }) }
  minTimeChange (e) { this.setState({ ...this.state, minVisitTime: parseInt(e.target.value, 10) }) }
  maxTimeChange (e) { this.setState({ ...this.state, maxVisitTime: parseInt(e.target.value, 10, 10) }) }
  numSimsChange (e) { this.setState({ ...this.state, numSims: parseInt(e.target.value, 10) }) }
  render () {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <h3 className='col-sm-12'>Parameters</h3>
        </div>
        <Parameters
          numDocs={this.state.numDocs}
          meanTimeBetweenArrival={this.state.meanTimeBetweenArrival}
          minVisitTime={this.state.minVisitTime}
          maxVisitTime={this.state.maxVisitTime}
          numSims={this.state.numSims}
          docChange={this.docChange}
          timeBetweenChange={this.timeBetweenChange}
          minTimeChange={this.minTimeChange}
          maxTimeChange={this.maxTimeChange}
          numSimsChange={this.numSimsChange}
        />
        <div className='row'>
          <h3 className='col-sm-12'>Results</h3>
        </div>
        <Results
          numDocs={this.state.numDocs}
          meanTimeBetweenArrival={this.state.meanTimeBetweenArrival}
          minVisitTime={this.state.minVisitTime}
          maxVisitTime={this.state.maxVisitTime}
          numSims={this.state.numSims}
        />
      </div>
    )
  }
}

export default App
