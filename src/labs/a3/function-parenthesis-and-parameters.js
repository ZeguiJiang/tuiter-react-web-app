

function parenthesisandparameters(){
    const square = a => a * a;
const plusOne = a => a + 1;

const twoSquared = square(2);
const threePlusOne = plusOne(3);

console.log(twoSquared);
return (
    <div>
        <h1>parenthesis and parameters</h1>
        twoSquared = {twoSquared}
    </div>);
}
