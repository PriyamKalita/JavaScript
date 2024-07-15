let btn = document.querySelector("button");

let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
    let link = await getImage();

    let img = document.querySelector("#result");
    img.setAttribute("src", link);
    console.log(link); 
});

async function getImage() {
    try {
        let res = await axios.get(url); // Ensure axios is included in your project
        return res.data.message;
    } catch (e) {
        console.log("Error - ", e);
        return "No Image Found";
    }
}
