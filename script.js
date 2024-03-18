//WHILE loop -checks the condition first before executing the piece of code
let username =``;

while(username === ``){
    username = window.prompt(`Enter your username`);
}
console.log(`Hello ${username}`);

//FOR loop- repets a piece of code for a given number of times
for(let i = 0; i <=5; i++){
    if(i == 3){
        continue;
    }
    console.log(i);
}
console.log(`HAPPY NEW YEAR !!`);