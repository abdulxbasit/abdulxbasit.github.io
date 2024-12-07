// Toggle Skills List Visibility
document.getElementById("toggleSkills").addEventListener("click", function() {
    let skillsList = document.getElementById("skillsList");
    let btnText = document.getElementById("toggleSkills");

    if (skillsList.style.display === "none" || skillsList.style.display === "") {
        skillsList.style.display = "block";
        btnText.textContent = "Hide Skills";
    } else {
        skillsList.style.display = "none";
        btnText.textContent = "Show Skills";
    }
});
