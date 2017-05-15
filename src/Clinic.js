import PriorityQueue from 'js-priority-queue'

import Queue from './Queue.js'
import randomExponential from './Stats.js'

function generateNextArrival (t, poisTime, maxTime, eventQueue) {
  let nextArrival = t + randomExponential(1.0 / poisTime)
  if (nextArrival < maxTime) {
    eventQueue.queue({eventTime: nextArrival, eventType: 'patientArrival'})
  }
}

function runClinicOnce (numDoctors, minDocTime, maxDocTime, poisTime) {
  const clinicOpen = 9 * 60
  const clinicClose = 16 * 60
  let eventQueue = new PriorityQueue({
    comparator: function (a, b) { return a.eventTime - b.eventTime },
    initialValues: [{eventTime: clinicOpen, eventType: 'clinicOpen'}]
  })
  let docAvailable = []
  let i = 0
  let noDocs = false
  let closeTime = clinicClose
  let numPatients = 0
  let waits = []
  let patientQueue = new Queue()
  let orderedEvents = []
  for (i = 0; i < numDoctors; i++) {
    docAvailable[i] = true
  }
  while (eventQueue.length > 0) {
    var item = eventQueue.dequeue()
    orderedEvents.push(item)
    switch (item.eventType) {
      case 'clinicOpen':
        generateNextArrival(item.eventTime, poisTime, clinicClose, eventQueue)
        break
      case 'patientArrival':
        generateNextArrival(item.eventTime, poisTime, clinicClose, eventQueue)
        noDocs = true
        numPatients++
        for (i = 0; i < numDoctors; i++) {
          if (docAvailable[i]) {
            eventQueue.queue({
              eventTime: item.eventTime,
              eventType: 'seeDoctor',
              docNum: i,
              arrivalTime: item.eventTime
            })
            noDocs = false
            break
          }
        }
        if (noDocs) {
          eventQueue.queue({
            eventTime: item.eventTime,
            eventType: 'getInLine'
          })
        }
        break
      case 'seeDoctor':
        docAvailable[item.docNum] = false
        eventQueue.queue({
          eventTime: item.eventTime + minDocTime + (maxDocTime - minDocTime) * Math.random(),
          eventType: 'docFinish',
          docNum: item.docNum
        })
        break
      case 'docFinish':
        docAvailable[item.docNum] = true
        if (item.eventTime > closeTime) {
          closeTime = item.eventTime
        }
        if (!patientQueue.isEmpty()) {
          let arrivedAt = patientQueue.dequeue()
          waits.push(item.eventTime - arrivedAt)
          eventQueue.queue({
            eventTime: item.eventTime,
            eventType: 'seeDoctor',
            docNum: item.docNum,
            arrivalTime: arrivedAt
          })
        }
        break
      case 'getInLine':
        patientQueue.enqueue(item.eventTime)
        break
      default:
        console.log('Invalid item type')
        break
    }
  }
  return {
    events: orderedEvents,
    numPatients: numPatients,
    numWaits: waits.length,
    avgWait: waits.length !== 0 ? waits.reduce(function (a, b) { return a + b }, 0) / waits.length : 0,
    maxWait: waits.reduce(function (a, b) { return a > b ? a : b }, 0),
    minsLate: closeTime - clinicClose
  }
}

function runClinic (numDocs, poisTime, minDocTime, maxDocTime, numSims) {
  let i = 0
  let sims = []
  for (i = 0; i < numSims; i++) {
    sims.push(runClinicOnce(numDocs, minDocTime, maxDocTime, poisTime))
  }
  return sims
}

export default runClinic
