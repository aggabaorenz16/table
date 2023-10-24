const getValue = () => {
    const A1 = document.querySelector("#A1");
    const B1 = document.querySelector("#B1");

    if(A1.value === "T" && B1.value === "T") {
        alert("Result is : True");
    } 
    else if(A1.value === "F" && B1.value === "T") { 
        alert("Result is : False");
    } 
    else if(A1.value === "F" && B1.value === "F") { 
        alert("Result is : False");
    }
    else if(A1.value === "T" && B1.value === "F") { 
        alert("Result is : False");
    } 
    else {
        alert("Error!");
    }
}