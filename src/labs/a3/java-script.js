import VariablesAndConstants from "./variables-and-constants";
import VariableTypes from "./variable-types";
// import BooleanVariables from "./boolean-variables";
import IFELSE from "./if-else";
import WorkingWithFunctions from "./working-with-functions";
import BooleanVariables from "./boolean-variables";
import WorkingWithArrays from "./working-with-arrays";
import House from "./house";
import Spread from "./spread";
import IfElse from "./if-else";
import Destructing from "./destructing";
import TernaryOperator from "./ternary-operator";
import FunctionDestructing from "./function-destructing";
import TemplateLiterals from "./template-literals";
let loggedIn = true;

function add (a, b) {
   return a + b;
 }

 


 const twoPlusFour = add(2, 4);
 console.log(twoPlusFour);


 const squares = [1, 4, 16, 25, 36];



 let numberArray1 = [1, 2, 4, 5, 6];

 const numbersGreaterThan2 = numberArray1
    .filter(a => a > 2);
//  const evenNumbers = numberArray1
//     .filter(a => a % 2 === 0);
//  const oddNumbers = numberArray1
//     .filter(a => a % 2 !== 0);



const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

loggedIn = false;
const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
console.log(greeting2)

function JavaScript() {
    console.log("JavaScript!!!!!");
    return(
       <div>
         <h1>JavaScript</h1>
         <VariablesAndConstants/>
         <VariableTypes/>
         <IFELSE/>
         <WorkingWithFunctions />
         <WorkingWithArrays/>
        <BooleanVariables/>
        <IfElse/>
        <TernaryOperator/>
        <WorkingWithFunctions/>
        <WorkingWithArrays/>
        <TemplateLiterals/>
        <House/>
        <Spread/>
        <Destructing/>
        <FunctionDestructing/>

         <div>
           <h2>Logged In</h2>
           { loggedIn ? <p>Welcome</p> : <p>Please login</p> }
        </div>


      <h2>Functions</h2>
      <h3>Legacy ES5 functions</h3>
      twoPlusFour = { twoPlusFour }<br />
      add(2, 4) = { add(2, 4) }<br />



      <h3>JSON Stringify</h3>
      squares = { JSON.stringify(squares) } <br />


      numbersGreaterThan2 = {numbersGreaterThan2}<br />
      

      <div> House = { JSON.stringify(House) }<br /></div>
      <div>
         <Spread/>
      </div>
         

      <div>
         <Destructing/>
      </div>


      <div>
         <FunctionDestructing/>
      </div>
       </div>


    );
 }
 export default JavaScript