const btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener("click", function() {
    const fullName = document.getElementById("full_name").value;
    const distance = Number(document.getElementById("distance").value);
    const price = (distance * 0.21).toFixed(2)
    const discountYoung = ( price - (price / 100 * 20)).toFixed(2)
    const discountSenior = ( price - (price / 100 * 40)).toFixed(2)
    const rangeAge = Number(document.getElementById("age").value);
    console.log("nome", fullName);
    console.log("distanza", distance);
    console.log("eta", rangeAge);

    document.getElementById("passenger_name").innerHTML = fullName;
    if(rangeAge < 18 ) {
        document.getElementById("discount").innerHTML = `Sconto Giovani 20% <br> prezzo originario: <br> ${price} €`;
        document.getElementById("carriage").innerHTML = Math.floor(Math.random() * 10);
        document.getElementById("code").innerHTML = Math.floor(Math.random() * 100000);
        document.getElementById("ticket_price").innerHTML = `${discountYoung} €` 
    } else if (rangeAge > 65) {
        document.getElementById("discount").innerHTML = `Sconto Anziani 40% <br> prezzo originario: <br> ${price} €`;
        document.getElementById("carriage").innerHTML = Math.floor(Math.random() * 10);
        document.getElementById("code").innerHTML = Math.floor(Math.random() * 100000);
        document.getElementById("ticket_price").innerHTML = `${discountSenior} €`
    } else {
        document.getElementById("discount").innerHTML = "Tariffa standard";
        document.getElementById("carriage").innerHTML = Math.floor(Math.random() * 10);
        document.getElementById("code").innerHTML = Math.floor(Math.random() * 100000);
        document.getElementById("ticket_price").innerHTML = `${price} €`
    }
})