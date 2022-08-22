// code your solution here
function saturdayFun(myTask ='roller-skate'){

    return (`This Saturday, I want to ${myTask}!`);

}
saturdayFun('bathe my dog');

const mondayWork=function(activity ='go to the office'){

return `This Monday, I will ${activity}.`
}
mondayWork('attend a meeting')


function wrapAdjective(style = "||") {
  return function (innerParam = "special") {
    return `You are ${style}${innerParam}${style}!`;
  }}
