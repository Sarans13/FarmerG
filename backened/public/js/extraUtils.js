const numericInputs = document.querySelectorAll(`[inputmode="numeric"]`);

numericInputs.forEach((input) => {
	validateInput(input);
});

function validateInput(el) {
	el.addEventListener("beforeinput", function (e) {
		let beforeValue = el.value;
		e.target.addEventListener(
			"input",
			function () {
				if (el.validity.patternMismatch) {
					el.value = beforeValue;
				}
			},
			{ once: true }
		);
	});
}

// password show and hide
const registerPassword = Array.of(
	document.querySelectorAll(`[id$="-password"`)
)[0];
const registerPasswordLabel = Array.of(
	document.querySelectorAll(`label[for$="-password"]`)
)[0];
const passwordPairedArray = [];

registerPassword.forEach((item, index) => {
	let obj = {
		labelField: registerPasswordLabel[index],
		inputField: item,
	};
	passwordPairedArray.push(obj);
});

for (const { labelField, inputField } of passwordPairedArray) {
	labelField.addEventListener("click", () => {
		toggleShowPassword(inputField, labelField);
	});
}

function toggleShowPassword(inputField, labelField) {
	if (inputField.type === "password") {
		inputField.type = "text";
		labelField.setAttribute("data-content", "hide");
	} else {
		inputField.type = "password";
		labelField.setAttribute("data-content", "show");
	}
}
