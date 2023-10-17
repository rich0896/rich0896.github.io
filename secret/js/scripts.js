function post() {
    var answer = document.getElementById("input").value;
    var form = document.getElementById("myForm");

    function handleForm(event) {
        event.preventDefault();
    } 

    document.getElementById("answer").innerHTML = answer;
    form.addEventListener('submit', handleForm);
}

function menu() {
    var x = document.getElementById("links");

    if (x.className === "hidden") {
        x.className = "responsive";
    } else {
        x.className = "hidden";
    }
}