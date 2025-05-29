const textInput=document.querySelector("#textInput")
const addlistBtn=document.querySelector("#addlistBtn")

const addlistFn=()=>{
    const listText=textInput.value
    console.log(listText);
}

addlistBtn.addEventListener("click",addlistFn)