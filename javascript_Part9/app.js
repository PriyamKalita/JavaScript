let smallImage = document.getElementsByClassName("oldImg");

for(let i = 0; i < smallImage.length; i++){
    console.dir(smallImage[i].src);
}

// chance src Value
for(let i = 0; i < smallImage.length; i++){
    smallImage[i].src = "assets/spiderman_img.png";
    console.log(`Value of Imgae no. ${i} is change`);
}

// Query Selectors

console.dir(document.querySelector("p"));

console.dir(document.querySelector("h1"));

console.dir(document.querySelector("#description"));

console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelector("div a"));

console.dir(document.querySelectorAll("div a"));

