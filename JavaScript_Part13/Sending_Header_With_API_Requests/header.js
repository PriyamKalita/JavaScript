const url = "https://icanhazdadjoke.com/";

// async function getJock(){
//     try {
//         let res = await axios.get(url);
//         console.log(res.data);
//     } catch (err){
//         console.log(err);
//     }
// }

async function getJock(){
    try {
        const config = { headers: { Accept: "application/json"}};
        let res = await axios.get(url, config);
        console.log(res.data);
    } catch (err){
        console.log(err);
    }
}