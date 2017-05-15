import React from 'react'
import runClinic from './Clinic.js'
import PercentileResult from './PercentileResult.js'

const Results = (props) => {
  let res = runClinic(props.numDocs, props.meanTimeBetweenArrival, props.minVisitTime, props.maxVisitTime, props.numSims)
  const toSummarize = {
    numPatients: 'Total number of patients',
    numWaits: 'Number of patients who had to wait',
    avgWait: 'Average time for those who had to wait',
    maxWait: 'Maximum wait time',
    minsLate: 'Minutes past 4PM clinic closed'
  }
  // const summaryBools = [
  //   {desc: "No patient had to wait", predicateFn: function(x) {return x.numWaits === 0 ? 1 : 0;}},
  //   {desc: "Clinic closed on time", predicateFn: function(x) {return x.minsLate === 0 ? 1 : 0;}},
  //   {desc: "Clinic closed after 4:30", predicateFn: function(x) {return x.minsLate > 30 ? 1 : 0;}},
  // ];
  let summaries = Object.keys(toSummarize).map((elem) => (<PercentileResult
    key={elem}
    res={res}
    elem={elem}
    elemText={toSummarize[elem]}
  />))

  return (
    <div>
      <h5 className='row'>
        <div className='col-sm-4'>Quantity</div>
        <div className='col-sm-2'>25th Percentile</div>
        <div className='col-sm-2'>50th Percentile</div>
        <div className='col-sm-2'>75th Percentile</div>
        <div className='col-sm-2'>Mean</div>
      </h5>
      {summaries}
    </div>
  )
}

export default Results
