import { planets } from "./planets.js";

function displayPlanets() {
    const div = document.createElement('div');
    div.classList.add('data');
    let id = 2;
    planets.forEach( planet => {
        const photo = `planets/${id}.jpg`;
        const name = planet.name;
        const terrain = planet.terrain;
        const climate = planet.climate;
        const gravity = planet.gravity;
        const population = planet.population;
        const residents = planet.residents;

        id++;

        const group = document.createElement("div");
        group.classList.add("planet");

        const img = document.createElement('img');
        img.setAttribute('src', photo);
        group.append(img);

        const planetName = document.createElement("h3");
        const planetNameTxt = document.createTextNode(name);
        planetName.append(planetNameTxt);
        group.append(planetName);

        const planetTerrain = document.createElement("p");
        const planetTerrainTxt = document.createTextNode(`Terrain: ${terrain}`);
        planetTerrain.append(planetNameTxt);
        group.append(planetTerrain);

        const planetClimate = document.createElement("p");
        const planetClimateTxt = document.createTextNode(`Climate: ${climate}`);
        planetClimate.append(planetClimateTxt);
        group.append(planetClimate);

        const planetGravity = document.createElement("p");
        const planetGravityTxt = document.createTextNode(`Gravity: ${gravity}`);
        planetGravity.append(planetGravityTxt);
        group.append(planetGravity);

        const planetPop = document.createElement("p");
        const planetPopTxt = document.createTextNode(`Population: ${population}`);
        planetPop.append(planetPopTxt);
        group.append(planetPop);
        
        div.append(group);
    });
    document.querySelector('#planets').append(div);
}
document.addEventListener("DOMContentLoaded", displayPlanets);