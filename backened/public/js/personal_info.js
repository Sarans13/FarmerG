import { titleCase } from "./utils.js";

const stateList = document.querySelector(`[data-js="state-list"]`);
const districtList = document.querySelector(`[data-js="district-list"]`);

async function fetchAndPopulateStates() {
	let respState = await fetch("./data/stateList.json");
	let respDist = await fetch("./data/districtList.json");
	let states = await respState.json();
	let districts = await respDist.json();

	for (const state of states.states) {
		stateList.innerHTML += `<option value="${state}">${titleCase(
			state
		)}</option>`;
	}
	return { states, districts };
}

async function main() {
	let { districts } = await fetchAndPopulateStates();

	stateList.addEventListener("change", (e) => {
		// filter a certain state from states array
		let selectedState = e.target.value;
		let [respectiveDistricts] = districts.states.filter((state) => {
			return state.state === selectedState;
		});

		// Reset options to default
		districtList.innerHTML = `<option value="none" selected disabled hidden>Select District</option>`;

		// Iterate and populate Districts
		for (const district of respectiveDistricts.districts) {
			districtList.innerHTML += `<option value="${district}">${titleCase(
				district
			)}</option>`;
		}
	});
}

main();

document.querySelector(".submit-button").addEventListener("click", () => {
	alert("Your items have been listed.");
	window.location.href = "/";
});
