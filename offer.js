generateOffer = (img, index) => {
  let day = new Date().getDay();
  const Monday = ["Chicken Salad", "Chicken Salad", "Chicken Salad"];
  const Tuesday = ["Chicken Salad", "Chicken Salad", "Chicken Salad"];
  const Wednesday = ["Chicken Salad", "Chicken Salad", "Chicken Salad"];
  const Thursday = ["Chicken Salad", "Chicken Salad", "Chicken Salad"];
  const Friday = ["Chicken Salad", "Chicken Salad", "Chicken Salad"];
  const Saturday = ["Chicken Salad", "Chicken Salad", "Chicken Salad"];
  const Sunday = ["Chicken Salad", "Chicken Salad", "Chicken Salad"];

  if (img.src.indexOf("tacos") == -1) return;
  let src;
  if (day === 1) {
    document.getElementById("dish-1").innerHTML = Monday[0];
    document.getElementById("dish-2").innerHTML = Monday[1];
    document.getElementById("dish-3").innerHTML = Monday[2];
    if (index === 1) src = "images/ChickenSalad.png";
    else if (index === 2) src = "images/ChickenSalad.png";
    else src = "images/ChickenSalad.png";
  } else if (day === 2) {
    document.getElementById("dish-1").innerHTML = Tuesday[0];
    document.getElementById("dish-2").innerHTML = Tuesday[1];
    document.getElementById("dish-3").innerHTML = Tuesday[2];
    if (index === 1) src = "images/FajitaBeefBurrito.png";
    else if (index === 2) src = "images/FajitaBeefBurrito.png";
    else src = "images/FajitaBeefBurrito.png";
  } else if (day === 3) {
    document.getElementById("dish-1").innerHTML = Wednesday[0];
    document.getElementById("dish-2").innerHTML = Wednesday[1];
    document.getElementById("dish-3").innerHTML = Wednesday[2];
    if (index === 1) src = "images/FriedPotatoes.png";
    else if (index === 2) src = "images/FriedPotatoes.png";
    else src = "images/FriedPotatoes.png";
  } else if (day === 4) {
    document.getElementById("dish-1").innerHTML = Thursday[0];
    document.getElementById("dish-2").innerHTML = Thursday[1];
    document.getElementById("dish-3").innerHTML = Thursday[2];
    if (index === 1) src = "images/FriedPotatoes.png";
    else if (index === 2) src = "images/FriedPotatoes.png";
    else src = "images/FriedPotatoes.png";
  } else if (day === 5) {
    document.getElementById("dish-1").innerHTML = Friday[0];
    document.getElementById("dish-2").innerHTML = Friday[1];
    document.getElementById("dish-3").innerHTML = Friday[2];
    if (index === 1) src = "images/FriedPotatoes.png";
    else if (index === 2) src = "images/FriedPotatoes.png";
    else src = "images/FriedPotatoes.png";
  } else if (day === 6) {
    document.getElementById("dish-1").innerHTML = Saturday[0];
    document.getElementById("dish-2").innerHTML = Saturday[1];
    document.getElementById("dish-3").innerHTML = Saturday[2];
    if (index === 1) src = "images/FriedPotatoes.png";
    else if (index === 2) src = "images/FriedPotatoes.png";
    else src = "images/FriedPotatoes.png";
  } else if (day === 0) {
    document.getElementById("dish-1").innerHTML = Sunday[0];
    document.getElementById("dish-2").innerHTML = Sunday[1];
    document.getElementById("dish-3").innerHTML = Sunday[2];
    if (index === 1) src = "images/FriedPotatoes.png";
    else if (index === 2) src = "images/FriedPotatoes.png";
    else src = "images/FriedPotatoes.png";
  }

  img.src = src;
};

