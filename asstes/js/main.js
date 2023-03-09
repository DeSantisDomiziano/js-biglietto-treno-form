const btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener("click", function() {
    const fullName = document.getElementById("full_name").value;
    const distance = Number(document.getElementById("distance").value);
    const rangeAge = Number(document.getElementById("age").value);
    console.log("nome", fullName)
    console.log("distanza", distance)
    console.log("eta", rangeAge)

    document.getElementById("passenger_name").innerHTML = fullName
})