function changeBackground()
{
    const selectedColor = document.getElementById("backgroundColor").value;
    document.body.style.backgroundColor = selectedColor;
}

function applyChanges()
{
    const message = document.getElementById("message").value;
    document.getElementById("display").textContent = message;
    const id = document.getElementById("backgroundColor").value;
    document.body.style.backgroundColor= selectedColor;
}
function displayMessage()
{
    let message = document.getElementById("message").value;
    document.getElementById("display").textContent = message;
    changeBackground();
}