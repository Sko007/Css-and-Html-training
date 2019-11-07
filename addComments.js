

function insertData(){
    
console.log("hello from insertData function")
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


    //adjust elements I created
    headline.innerHTML = userName +" "+ "Said:";
    paragraph.innerHTML = message;    

    section.classList.add("section")
    paragraph.classList.add("para")
    section.appendChild(headline)
    section.appendChild(paragraph)


    // Display data
    const commentSection = document.getElementById("commentOut");
    commentSection.appendChild(section)

    //clear values


}

 }