function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  saturdayFun()

 function mondayWork(plan = "go to the office"){
    return `This Monday, I will ${plan}.`
}
mondayWork()

function wrapAdjective(style="*"){
    return function(adjective="a hard worker") {
        return `You are ${style}${adjective}${style}!`
      }
}