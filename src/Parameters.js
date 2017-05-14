import React, { Component } from 'react'
import ParameterInput from './ParameterInput.js'

class Parameters extends Component {
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
        <div className='row'>
          <form className='form-horizontal'>
            <ParameterInput
              labelText='Number of Doctors'
              addOnText={null}
              value={this.state.numDocs}
              changeFn={this.docChange}
            />
            <ParameterInput
              labelText='Mean Time Between Arrivals'
              addOnText='minutes'
              value={this.state.meanTimeBetweenArrival}
              changeFn={this.timeBetweenChange}
            />
            <ParameterInput
              labelText='Min Visit Time'
              addOnText='minutes'
              value={this.state.minVisitTime}
              changeFn={this.minTimeChange}
            />
            <ParameterInput
              labelText='Max Visit Time'
              addOnText='minutes'
              value={this.state.maxVisitTime}
              changeFn={this.maxTimeChange}
            />
            <ParameterInput
              labelText='Number of Simulations'
              addOnText={null}
              value={this.state.numSims}
              changeFn={this.numSimsChange}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default Parameters
