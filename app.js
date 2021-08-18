const icon = document.getElementsByClassName("icon");
var body = document.body;
const navbar = document.getElementById("navbar");
const navbar_links = document.getElementsByClassName("navbar_links");
const product = document.getElementsByClassName("product");
const phone_name = document.getElementsByClassName("phone_name");
const phone_price = document.getElementsByClassName("phone_price");
const footer = document.getElementById("footer");
function colorChange() {
  if (body.style.backgroundColor != "#303030") {
    body.style.backgroundColor = "#303030";
    navbar.style.backgroundColor = "#005c58";
    footer.style.backgroundColor = "#005c58";
    for (let i = 0; i < product.length; i++) {
      product[i].style.backgroundColor = "#202020";
    }
    for (let i = 0; i < phone_name.length; i++) {
      phone_name[i].style.color = "#fff";
    }
    for (let i = 0; i < phone_price.length; i++) {
      phone_price[i].style.color = "#fff";
    }
  } else {
    body.style.backgroundColor = rgb(214, 214, 214);
    navbar.style.backgroundColor = "#03dac6";
    footer.style.backgroundColor = "#03dac6";
    for (let i = 0; i < product.length; i++) {
      product[i].style.backgroundColor = "transparent";
    }
    for (let i = 0; i < phone_name.length; i++) {
      phone_name[i].style.color = "black";
    }
    for (let i = 0; i < phone_price.length; i++) {
      phone_price[i].style.color = "black";
    }
  }
  // for (let i = 0; i < navbar_links.length; i++) {
  //   navbar_links[i].style.hover.backgroundColor = "#fff";
  // }
}
icon[0].addEventListener("click", colorChange);
