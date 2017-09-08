const gosearch = (name) => {
    fetch(`https://api.punkapi.com/v2/beers/?beer_name=${name}`)
    .then(response => response.json()).then( response => {
        let output = ""
        for(let i = 0; i<response.length;i++ ){
            output += "Name : " + response[i].name + "</br>" + "<image src=" +response[i].image_url + " style ='width:20px' /></br>"
         }
         document.getElementById('showKONG').innerHTML = output;
    })
}
