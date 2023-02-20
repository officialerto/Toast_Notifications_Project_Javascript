const buttons = document.querySelectorAll(".buttons .btn");

buttons.forEach(btn => {

	btn.addEventListener("click", () => createToast())

});