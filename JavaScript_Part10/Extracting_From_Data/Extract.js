let form = document.querySelector("#form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Approach No. (i)
        // let user = document.querySelector("#user");
        // let pass = document.querySelector("#pass");

        // Approach No. (ii)
        console.log(form);

        let user = this.elements[0];   // form.elements[0]
        let pass = this.elements[1];   // form.elements[1]

        console.log(user.value);
        console.log(pass.value);

        alert(`Hi ${user.value}, Your Password is set to ${pass.value}`);
    });