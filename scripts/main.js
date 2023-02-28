const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/mifuneyama.jpeg") {
        myImage.setAttribute("src", "images/mifuneyama2.JPG");
    } else {
        myImage.setAttribute("src", "images/mifuneyama.jpeg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome, ${myName}`;
    }
}

myButton.onclick = () => {
    setUserName();
};