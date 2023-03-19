let $addQuantity = $(".btn-quantity.plus"),
	$minusQuantity = $(".btn-quantity.minus"),
	$removeItem = $(".btn-remove");

$addQuantity.on("click", function (e) {
	e.preventDefault();
	let $item = $(this).parents(".item"),
		$quantityField = $item.find(".quantity_field"),
		currentQuantity = $quantityField.val(),
		nextQuantity = parseFloat(currentQuantity) + 1;

	$item.find(".current_quantity").html(nextQuantity);
	$quantityField.val(nextQuantity);

	calculateTotal();
});

$minusQuantity.on("click", function (e) {
	e.preventDefault();
	let $item = $(this).parents(".item"),
		$quantityField = $item.find(".quantity_field"),
		currentQuantity = $quantityField.val();
	let prevQuantity =
		currentQuantity <= 1 ? 0 : parseFloat(currentQuantity) - 1;

	$item.find(".current_quantity").html(prevQuantity);
	$quantityField.val(prevQuantity);

	calculateTotal();
});

$removeItem.on("click", function () {
	let $item = $(this).parents(".item");
	$item.remove();

	calculateTotal();
});

let calculateTotal = function () {
	let newSubTotal = 0;
	$(".quantity_field").each(function () {
		let quantity = $(this).val(),
			price = $(this).data("price");

		newSubTotal += parseFloat(quantity * price);
	});

	$(".price:first").html(newSubTotal.toFixed(2));
	let shipping = $(".price").eq(2).val();
	let delivery = $(".price").eq(3).val();

	let withGST = newSubTotal * 1.05;
	$(".price")
		.eq(3)
		.html((newSubTotal * 0.025).toFixed(2));
	$(".price")
		.eq(4)
		.html((newSubTotal * 0.025).toFixed(2));

	let newTotal = withGST + shipping + delivery;

	$(".price:last").html(Number(newTotal).toFixed(2));
};

calculateTotal();
