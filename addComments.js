



function insertData(){
    
// console.log("hello from insertData function")
if(textInput.value === "" || firstName.value === ""){
    alert("Please Insert a name and a textmessage");
}else{

    const textInput = document.getElementById("textInput");
    const firstName = document.getElementById("firstName");
    const userName = firstName.value;
    const message = textInput.value;

    console.log(userName)
    console.log(message)

    //create Documents
    const section = document.createElement('section');
    const headline = document.createElement("h5");
    const paragraph = document.createElement("p");

    console.log(section);
    //adjust elements I created
    
    // paragraph.innerHTML = message;
    // section.classList.add("message");
    // section.appendChild(h5);
    // section.appendChild(p);

    // //display Elements
    
    // const textOut = document.getElementById("commentOutPut");
    // textOut.appenChild(section);
    


    //reset form value

    firstName.value = null
    textArea.value = null


}

}