function saklar(action, lampu) {
  let toggle1 = document.getElementById("default-toggle1");
  let toggle2 = document.getElementById("default-toggle2");
  let toggle3 = document.getElementById("default-toggle3");

  let lamp1 = document.getElementById("lamp1");
  let lamp2 = document.getElementById("lamp2");
  let lamp3 = document.getElementById("lamp3");

  if (toggle1.checked) {
    lamp1.src = "assets/images/on.gif"
  } else {
    lamp1.src = "assets/images/off.gif";
  }

  if (toggle2.checked) {
    lamp2.src = "assets/images/on.gif"
  } else {
    lamp2.src = "assets/images/off.gif";
  }

  if (toggle3.checked) {
    lamp3.src = "assets/images/on.gif"
  } else {
    lamp3.src = "assets/images/off.gif";
  }
}