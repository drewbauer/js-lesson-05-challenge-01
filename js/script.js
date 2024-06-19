var button = document.querySelector(".show-cat");
//console.log(button.outerHTML);

var cat = document.querySelector(".cat");
//console.log(cat.outerHTML);

button.addEventListener("click", function () {
  if (cat.classList.contains("show")) {
    //console.log("Yes");
    cat.classList.remove("show");
    button.innerText = "Here, kitty, kitty!";
    button.classList.add("disappear");
  } else {
    //console.log("No");
    cat.classList.add("show");
    button.innerText = "Shoo, cat!!";
    button.classList.remove("disappear");
  }
});
