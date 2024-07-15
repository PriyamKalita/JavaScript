let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((response) => {
//         console.log(response);
//         // console.log(response.json())

//         // response.json().then((data) => {
//         //     console.log(data);
//         // });

//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         console.log(data.fact);

//     })
//     .catch((err) => {
//         console.log("ERROR -", err);
//     });

async function getacts() {
    try{
        let res = await fetch(url);
        let data = await res.json();
    
        console.log(data);
        console.log(data.fact);
    
    }catch(e){
        console.log("Error - ", e)
    }

    console.log("HELLO WORLD");
}