let form = document.querySelector("#form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
    });

    let user = document.querySelector("#user");

    // Change Event
    user.addEventListener("change", function(){
        console.log("Change Event");
        console.log("Final Value : " + this.value);
    });

    // Input Event
    user.addEventListener("input", function(){
        console.log("INput Event");
        console.log("Final Value : " + this.value);
    });