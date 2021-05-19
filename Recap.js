



const sayMyName = (name)=>{
    console.log("Hello" + name)
}

const myFunc = (n1,n2, callBack) =>{
   callBack(n1,n2); // Equivalent to (n1,n2) =>sum(n1,n2, "Stefano")
}

myFunc(4, 5,(number1, number2) => sayMyName (number1, number2,"Stefano"));




