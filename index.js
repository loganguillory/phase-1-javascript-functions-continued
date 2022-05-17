// code your solution here
/*  console.log("You've been razzled!");
}
razzle();
//=> "You've been razzled!");

razzle(); //=> "You've been razzled!"
    function razzle() {
        console.log(You've been razzled!); 
    }
*/

function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()

function mondayWork(action = 'go to the office'){
    return `This Monday, I will ${action}.`
}
mondayWork()



function wrapAdjective(star = "*"){
    return function
    innerFunction(adjective = "special"){
        return `You are ${star}${adjective}${star}!`;
    };
};
wrappedAdjective();
