/*

Easiest Way to do this is to have the code in a function
and let setInterval just run it every 1000 ms (1 second)

*/
function timePrint() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(timePrint, 1000);