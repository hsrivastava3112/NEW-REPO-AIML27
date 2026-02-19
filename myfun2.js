function myFunction(){
    console.log("Starting a task...");
    setTimeout(() => {
    let sum=0;
    for(let i=0;i<100000000;i++)
    {
        sum +=i;
}
console.log("Task finshed!");
console.log("Result:", sum);},0);

}
console.log("Before the function call");
let result = myFunction();
console.log("After the function call");
console.log("Result:", result);