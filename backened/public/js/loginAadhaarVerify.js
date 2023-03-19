async function main() {
    const registerAadhaar = document.querySelector("#login-aadhaar");
    const registerAadhaarIncorrect = document.querySelector(
        `[data-js="loginAadhaarIncorrect"]`
    );
    const submitBtn = document.querySelector(".submit-btn");


    registerAadhaar.addEventListener("focusout", async (e) => {
        let innerValue = e.target.value;
        if (innerValue.length != 12) {
            if (innerValue.length === 0) {
                registerAadhaarIncorrect.style.color = "transparent";
                registerAadhaar.style["outline"] = "2px solid transparent";
                return;
            }
            registerAadhaarIncorrect.style.color = "red";
            registerAadhaar.style["outline"] = "2px solid red";
            return;
        }
        let resp = await fetch(`http://127.0.0.1:8000/aadhar/${innerValue}`);
        let aadhaarValid = await resp.json();
        console.log(aadhaarValid);
        if (!aadhaarValid.is_valid) {
            registerAadhaarIncorrect.style.color = "red";
            registerAadhaar.style["outline"] = "2px solid red";
            submitBtn.disabled = true;
        } else {
            registerAadhaarIncorrect.style.color = "transparent";
            registerAadhaar.style["outline"] = "2px solid transparent";
            submitBtn.disabled = false;
        }
    });
}

main()