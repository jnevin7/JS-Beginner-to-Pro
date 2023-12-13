const output = document.querySelector(".output");
const mainList = output.querySelector("ul");
mainList.id = "mainList";
console.log(mainList);
const eles = document.querySelectorAll("div");
console.log(eles);
for (let x = 0; x < eles.length; x++) {
    eles[x].id = "id" + (x + 1);
    console.log(eles[x].tagName);
    if (x % 2) {
        eles[x].style.color = "red";
    } else {
        eles[x].style.color = "blue";
    }
}
console.log(eles);