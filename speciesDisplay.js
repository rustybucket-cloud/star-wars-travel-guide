import { species } from "./species.js";

function displaySpecies() {
    const div = document.createElement('div');
    div.classList.add('data');
    species.forEach( species => {
        const name = species.name;
        const classification = species.classification;
        const designation = species.designation;
        const height = species.average_height;
        const homeworld = species.homeworld;
        const language = species.language;

        const group = document.createElement("div");
        group.classList.add("species");

        const speciesName = document.createElement("h3");
        const speciesNameTxt = document.createTextNode(name);
        speciesName.append(speciesNameTxt);
        group.append(speciesName);

        const speciesClassification = document.createElement("p");
        const speciesClassificationTxt = document.createTextNode(`Classification: ${classification}`);
        speciesClassification.append(speciesNameTxt);
        group.append(speciesClassification);

        const speciesDesignation = document.createElement("p");
        const speciesDesignationTxt = document.createTextNode(`Designation: ${designation}`);
        speciesDesignation.append(speciesDesignationTxt);
        group.append(speciesDesignation);

        const speciesHeight = document.createElement("p");
        const speciesHeightTxt = document.createTextNode(`Height: ${height}`);
        speciesHeight.append(speciesHeightTxt);
        group.append(speciesHeight);

        const speciesHomeworld = document.createElement("p");
        let speciesHomeworldTxt;
        fetch(species.homeworld)
            .then(result => result.json())
            .then(data => {
                const planetName = data.name;
                speciesHomeworld.innerText = planetName;
            })
        speciesHomeworld.append(speciesHomeworldTxt);
        group.append(speciesHomeworld);
        
        div.append(group);
    });
    document.querySelector('#species').append(div);
}
document.addEventListener("DOMContentLoaded", displaySpecies);