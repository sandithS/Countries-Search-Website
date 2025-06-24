
function searchByName() {

    let searchValue = document.getElementById("txtSearchBox").value;

    console.log(searchValue);


    fetch("https://restcountries.com/v3.1/name/" + searchValue).then(res => res.json()).then(data => {
        console.log(data);


        let root = document.getElementById("root");
        let countryName = document.getElementById("countryName");
        let countryFlag = document.getElementById("countryFlag");

        data.forEach(element => {

            const currencyKey = Object.keys(element.currencies)[0];
            const currencyData = element.currencies[currencyKey];

            const languageKey1 = Object.keys(element.languages)[0];
            const languageKey2 = Object.keys(element.languages)[1];

            countryName.innerHTML = `
                <h1>${element.name.common}</h1>
             `
            countryFlag.innerHTML = `
                <img src="${element.flags.png}" alt="">
             `

            root.innerHTML = `
                    <section class="alert alert-primary">
                        <h5>Official Name: ${element.name.official}</h5>
                        <h5>Capital: ${element.capital[0]}</h5>
                        <h5>Population: ${element.population}</h5>
                        <h5>Region: ${element.region}</h5>                   
                        <h5>Currency: ${currencyData.name}  ( ${currencyData.symbol} )<h5>
                        <h5>Languages: ${element.languages[languageKey1]} , ${element.languages[languageKey2]}</h5>                   
                     </section>
             `

            console.log(element.name.official);
            console.log(element.name.common);
            console.log(element.flags.png);
            console.log(element.capital[0]);
            console.log(element.languages[languageKey1]);
            console.log(element.languages[languageKey2]);
        });

    })


}