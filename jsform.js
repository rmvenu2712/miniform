

const form = document.getElementById("mainform");

// const btn=document.getElementById("clic")

        form.addEventListener("submit", function(event){
            event.preventDefault();

            const nameInput = document.getElementById("fname");
           const numInput = document.getElementById("inputnum");
            const emailInput = document.getElementById("email");
            const passwordInput = document.getElementById("inputPassword");
            const cpasswordInput = document.getElementById("confirmPassword");
            const lname=document.getElementById("lname")
            const Cbox=document.getElementById("gridCheck")

            const nameError = document.getElementById("fnameerror");
            const numError=document.getElementById("numerror")
            const emailError = document.getElementById("emailerror");
            const passwordError = document.getElementById("passworderror");
            const cpasswordError = document.getElementById("cpasserror");
            const lnameError=document.getElementById("lnameerror")
            const CboxError=document.getElementById("checkError")

            // Clear previous error messages
            nameError.textContent = "";
            lnameError.textContent= "";
            emailError.textContent = "";
            passwordError.textContent = "";
            cpasswordError.textContent = "";
            numError.textContent= " ";
            CboxError.textContent=" ";
 

            // Validate name
            if (nameInput.value.trim() === "") {
                nameError.textContent = "Name is required";
                nameInput.focus();
                return;
            }

//              // Validate lastname
            if (lname.value.trim() === "") {
                lnameError.textContent = "Name is required";
                lname.focus();
                return;
            }

            //validate number
            if (numInput.value.trim() === "") {
                numError.textContent = "Enter valid ph.no";
                numInput.focus();
                return;
}

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = "Invalid email address";
                emailInput.focus();
                return;
            }

            // Validate password
            if (passwordInput.value.length < 6) {
                passwordError.textContent = "Password must be at least 6 characters";
                passwordInput.focus();
                return;
            }

            if (passwordInput.value.trim()!==cpasswordInput.value.trim()){
                cpasswordError.textContent = "Password is not matched";
                cpasswordInput.focus();
                return;
            }
            
            if (Cbox.checked === false){
                CboxError.textContent = "Confirm your details";
                Cbox.focus();
                return;
            }

            // Form is valid, perform further actions
            alert("Registration successful!");
            form.reset();
        })