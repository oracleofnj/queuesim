import React from 'react'

const ParameterInput = (props) => (
  <div className='form-group'>
    <label className='col-sm-4 control-label'>
      {props.labelText}
    </label>
    <div className='col-sm-5'>
      {
        props.addOnText === null
          ? (
            <input
              type='number'
              className='form-control'
              onChange={props.changeFn}
              value={props.value}
            />
          )
          : (
            <div className='input-group'>
              <input
                type='number'
                className='form-control'
                onChange={props.changeFn}
                value={props.value}
              />
              <span className='input-group-addon'>
                {props.addOnText}
              </span>
            </div>
          )
      }
    </div>
  </div>
)

export default ParameterInput
