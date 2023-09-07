const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("list-container");

function addTodo() {
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();

function myFunction(x) {
    if (x.matches) { 
      document.getElementById("left").remove();
      document.body.style.backgroundColor = "rgb(52,81,161)";
    } 
  }
  var x = window.matchMedia("(width < 600px)")
  myFunction(x) 
  x.addListener(myFunction) 