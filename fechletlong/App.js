function letlong(city) {
    return new Promise(resolve => {
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`).then((res) => res.json()).then((response) => {
            
            resolve(response);
            return city
            // console.log(city);
    })
});
}   
async function asyncCall() {
    console.log("called letlong");
    let inpData = document.getElementById("inp").value
    const ResponseData = await letlong(inpData);
    console.log("result", ResponseData);
    // console.log("result", ResponseData.results[0].geometry.lat);
    // console.log("result", ResponseData.results[0].geometry.lng);
    document.getElementById("lat-data").innerHTML= ResponseData.results[0].geometry.lat
    document.getElementById("lng-data").innerHTML=ResponseData.results[0].geometry.lng
    console.log("called letlong");
}
// asyncCall()