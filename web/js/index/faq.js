document.querySelectorAll(".accordion__button").forEach((button) => {
    button.addEventListener("click", () => {
        document
            .querySelectorAll(".accordion__button")
            .forEach((otherButton) => {
                if (
                    otherButton !== button &&
                    otherButton.classList.contains("active")
                ) {
                    otherButton.classList.remove("active");
                    otherButton.nextElementSibling.style.maxHeight = null;
                }
            });
        const content = button.nextElementSibling;
        button.classList.toggle("active");
        content.style.maxHeight = button.classList.contains("active")
            ? content.scrollHeight + "px"
            : null;
    });
});