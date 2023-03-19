const allCards = document.querySelectorAll(".card");
const searchCardGrid = document.querySelector(".search-cards-grid");
const searchBox = document.querySelector(".search-bar");
const allRecommendedCards = document.querySelectorAll(".reccomended-card");

searchBox.addEventListener("input", updateSearchBox);

Array.from(allRecommendedCards).forEach((recommendedCard) => {
	recommendedCard.addEventListener("click", (ele) => {
		console.log(ele.target.textContent);
		searchBox.value = "";
		searchBox.value = ele.target.textContent;
		updateSearchBox(ele);
	});
});

function updateSearchBox(e) {
	let searchTerm = e.target.value || e.target.textContent;
	console.log(searchTerm);

	let newCards = Array.from(allCards).filter((element) => {
		let title = element.querySelector(".cropHead").textContent;
		return title.toLowerCase().includes(searchTerm.toLowerCase());
	});

	for (const newNode of allCards) {
		searchCardGrid.replaceChildren(...newCards);
		console.log("hemlo");
	}
}
