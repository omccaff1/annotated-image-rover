$("body").on("click", ".dot", function (e) {
	//on click add an active class to the dot that was clicked
	e.preventDefault();
	//Negates any of the browser's default behavior
	//We wrap it in $ to make it into jQuery.
	const $this_dot = $(this);
	//Const can't change; let loves to be changed; use const most of the time. You can name variable
	//anything you want, but use $ for jQuery elements so you remember what they are.
	$this_dot.addClass("active");
	//Right side is dot that we just clicked on
});

$("body").on("click", ".dot .close", function (e) {
	//on click add an active class to the dot that was clicked
	e.preventDefault();
	e.stopPropagation();
	//Says don't worry about my parents; don't propagate up. Bc close is inside of Dot
	//and dot has its own actions that we don't want to get fired.

	const $this_close = $(this);
	const $this_dot = $this_close.closest(".dot");
	//Closest only applies to grandparents, antecedents, not children or siblings

	$this_dot.removeClass("active");
});