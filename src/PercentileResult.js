import React from 'react'
import {sum} from 'lodash/math'

const PercentileResult = (props) => {
  function prettyPrint (n) {
    return Number.isInteger(n) ? n : n.toFixed(4)
  }
  let p25 = Math.trunc(0.25 * props.res.length)
  let p50 = Math.trunc(0.5 * props.res.length)
  let p75 = Math.trunc(0.75 * props.res.length)
  let sortedValues = props.res.map(function (x) { return x[props.elem] }).sort(function (x, y) { return x - y })
  return (
    <div className='row'>
      <div className='col-sm-4'>{props.elemText}</div>
      <div className='col-sm-2'>{prettyPrint(sortedValues[p25])}</div>
      <div className='col-sm-2'>{prettyPrint(sortedValues[p50])}</div>
      <div className='col-sm-2'>{prettyPrint(sortedValues[p75])}</div>
      <div className='col-sm-2'>{prettyPrint(sum(sortedValues) / sortedValues.length)}</div>
    </div>
  )
}

export default PercentileResult
