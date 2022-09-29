fetch('https://restcountries.com/v3.1/region/europe')
.then(resp => resp.json()).then(res => display(res));

function display(dati) {
    const conntainer = document.getElementById('container');
    for (const dato of dati) {
        console.log(dato);
        const divDato = document.createElement('div');
        divDato.classList.add('datooo');


        const paeseName = document.createElement('h2');
        paeseName.innerHTML = '<b>Common :</b>' + ' ' + dato.name.common + ' ' +  '<br>' +'<b>Official :</b>' + ' ' + dato.name.official;
        divDato.appendChild(paeseName);

        // const nativeName = document.createElement('h2');
        // nativeName.innerHTML = '<b>Native Name :</b>' + dato.nativeName.hun.official + dato.nativeName.hun.common;
        // divDato.appendChild(nativeName);

        const independent = document.createElement('h2');
        independent.innerHTML = '<b>Independent: </b>' + dato.independent;
        divDato.appendChild(independent);

        const status = document.createElement('h2');
        status.innerHTML = '<b>Status : </b>' + dato.status;
        divDato.appendChild(status);

        const prova= document.createElement('ul');
        const arry = document.createElement('li');
        for (const key in dato.currencies) {
            if (Object.hasOwnProperty.call(dato.currencies, key)) {
                const element = dato.currencies[key];
                arry.innerHTML = '<b>Currencies : </b>' + element.name;
                prova.classList.add('item');
                divDato.appendChild(arry);
            }
        }


        const capital = document.createElement('ul');
        capital.classList.add('item')
        for (const capital1 of dato.capital) {
            const capitalArry = document.createElement('li');
            capitalArry.innerHTML = '<b>Capital : </b>'  + capital1;
            capital.appendChild(capitalArry);
        }
        divDato.appendChild(capital)


        const altSpellings = document.createElement('ul');
        altSpellings.classList.add('item')
        for (const altSpelling of dato.altSpellings) {
            const arrey = document.createElement('li');
            arrey.innerHTML = '<b>AltSpellings : </b>' + altSpelling ;
            altSpellings.appendChild(arrey);
        }
        divDato.appendChild(altSpellings);


        

        const altSpellings1 = document.createElement('h2');
        altSpellings1.innerHTML = '<b>Region : </b>' + dato.region + '<br> ' +  '<b>subregion : </b>' + dato.subregion;
        divDato.appendChild(altSpellings1);


        const languages = document.createElement('ul')
        languages.classList.add('item');
        const language = document.createElement('li')
        for (const key in dato.languages) {
            if (Object.hasOwnProperty.call(dato.languages, key)) {
                const element = dato.languages[key];
                language.innerHTML = '<b>Languages : </b>' + element;
                divDato.appendChild(language);
            }
        }

        const population = document.createElement('h2');
        population.innerHTML = '<b>Population : </b>' + dato.population;
        divDato.appendChild(population);


        const timezones = document.createElement('ul');
        timezones.classList.add('item');
        for (const timezone of dato.timezones) {
            const timezoneArry = document.createElement('li');
            timezoneArry.innerHTML = '<b>Timezones : </b>' + timezone;
            timezones.appendChild(timezoneArry)
        }
        divDato.appendChild(timezones)
        


        const continents = document.createElement('ul');
        continents.classList.add('item');
        for (const continent of dato.continents) {
            const continentArry = document.createElement('li');
            continentArry.innerHTML = '<b>continents : </b>' + continent;
            continents.appendChild(continentArry)
        }
        divDato.appendChild(continents);


        


  
            const img = document.createElement('img')
            img.src = dato.flags.png;
            img.classList.add('img')
            divDato.appendChild(img);



        
        


        












        // languages.innerHTML = '<b>Languages : </b>' + dato.languages;
        // divDato.appendChild(languages);
        
        // for (const ciao of dato.currencies) {
        //     const arry = document.createElement('li');
        //     arry.innerHTML = ciao.HUF.name +  ciao.HUF.symbol;
        //     prova.appendChild(arry);

        // }
        // divDato.appendChild(prova)





        conntainer.appendChild(divDato);
    }
}