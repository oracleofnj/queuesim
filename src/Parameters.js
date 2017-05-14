import React from 'react'
import ParameterInput from './ParameterInput.js'

const Parameters = (props) => (
  <div className='container-fluid'>
    <div className='row'>
      <h3 className='col-sm-12'>Parameters</h3>
    </div>
    <div className='row'>
      <form className='form-horizontal'>
        <ParameterInput name='foo' labelText='Number of Doctors' addOnText={null} />
        <ParameterInput name='foo' labelText='Mean Time Between Arrivals' addOnText='minutes' />
        <ParameterInput name='foo' labelText='Min Visit Time' addOnText='minutes' />
        <ParameterInput name='foo' labelText='Max Visit Time' addOnText='minutes' />
        <ParameterInput name='foo' labelText='Number of Simulations' addOnText={null} />
      </form>
    </div>
  </div>
)

export default Parameters
