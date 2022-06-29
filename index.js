function createEmployeeRecord (array) {
    
    const employeeRecord = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],

    }
console.log(employeeRecord)
return employeeRecord
    

    
   
}


let twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ]
//createEmployeeRecord(["moe", "sizlak", "barkeep", 2])
function createEmployeeRecords (arrayOfArray) {
    
    const employeeRecords = arrayOfArray.map(array => createEmployeeRecord(array))
    
    console.log(employeeRecords.length)
    return employeeRecords

   
   
    
   
   
    
}



function createTimeInEvent(employeeRecord, timeIn) {
   
   let timeInEvent = {
     type: "TimeIn",
      hour: (parseInt(timeIn.slice(11,15))),
        date: (timeIn.slice(0,10))
  }
   
  employeeRecord.timeInEvents.push(timeInEvent)
return employeeRecord
   
}

function createTimeOutEvent(employeeRecord, timeOut) {
   
    let timeOutEvent = {
      type: "TimeOut",
       hour: (parseInt(timeOut.slice(11,15))),
         date: (timeOut.slice(0,10))
   }
    
    employeeRecord.timeOutEvents.push(timeOutEvent)
    return employeeRecord
}
 

 

function hoursWorkedOnDate (employeeRecord, dateInMonthsAndYears ){
    if (dateInMonthsAndYears === employeeRecord.timeInEvents[0].date){
        const hours =  (employeeRecord.timeOutEvents[0].hour - employeeRecord.timeInEvents[0].hour)/100
        console.log(hours)
        return hours
    }

}

function wagesEarnedOnDate (employeeRecord, dateInMonthsAndYears) {
    const hours = hoursWorkedOnDate (employeeRecord,dateInMonthsAndYears)
    const pay = hours * employeeRecord.payPerHour
    return pay
}
// const moeRecord = createEmployeeRecord(["moe", "sizlak", "barkeep", 2])
// createTimeInEvent(moeRecord,"0044-03-15 0900" )
// createTimeOutEvent(moeRecord,"0044-03-15 1100")
// console.log(moeRecord)

// hoursWorkedOnDate(moeRecord,"0044-03-15")