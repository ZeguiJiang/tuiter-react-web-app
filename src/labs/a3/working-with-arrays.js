
function WorkingWithArrays(){
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
    ];


    const square = a => a * a;

    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);
    let stringArray2 = [];
    for (let i = 0;
         i < stringArray1.length;
         i++) {
      const string1 = stringArray1[i];
      stringArray2.push(
        string1.toUpperCase());
    }
  

    return(
        <div>
            <h1>WorkingWithArrays</h1>
            variableArray1 = { variableArray1 }<br/>
            stringArray2 = {stringArray2}   <br/>
            squares = {squares}   <br/>
        </div>
    );

}

export default WorkingWithArrays

