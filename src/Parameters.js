import React from 'react'
import ParameterInput from './ParameterInput.js'

const Parameters = (props) => (
  <div className='row'>
    <form className='form-horizontal'>
      <ParameterInput
        labelText='Number of Doctors'
        addOnText={null}
        value={props.numDocs}
        changeFn={props.docChange}
        />
      <ParameterInput
        labelText='Mean Time Between Arrivals'
        addOnText='minutes'
        value={props.meanTimeBetweenArrival}
        changeFn={props.timeBetweenChange}
        />
      <ParameterInput
        labelText='Min Visit Time'
        addOnText='minutes'
        value={props.minVisitTime}
        changeFn={props.minTimeChange}
        />
      <ParameterInput
        labelText='Max Visit Time'
        addOnText='minutes'
        value={props.maxVisitTime}
        changeFn={props.maxTimeChange}
        />
      <ParameterInput
        labelText='Number of Simulations'
        addOnText={null}
        value={props.numSims}
        changeFn={props.numSimsChange}
        />
    </form>
  </div>
)

export default Parameters
