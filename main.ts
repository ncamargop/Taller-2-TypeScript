import { Serie } from "./Serie.js";

import { series } from "./data.js";

let seriesTbody: HTMLElement = document.getElementById('series')!; // Nodo tbody que tiene el id="series"
const cardDescription: HTMLElement = document.getElementById("card")!;
renderSeriesInTable(series);
renderPromedioTemps(series);

function renderSeriesInTable(series: Serie[]): void {
  series.forEach((c) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.idSerie}</td>
                           <td><button type="button" class="btn btn-link" id="button-serie-${c.idSerie}">${c.nombreSerie}</button></td>
                           <td>${c.canal}</td>
                           <td>${c.temps}</td>`;
    seriesTbody.appendChild(trElement);
    let serieButton: HTMLElement = document.getElementById("button-serie-" + c.idSerie)!;
    serieButton.onclick = () => renderCardDescription(c);
  });
}


function renderPromedioTemps(series: Serie[]): void{
    let promedio: number = 0;
    series.forEach(serie => {
        promedio = promedio + serie.temps;
    });
    promedio = promedio/series.length;
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>Temporadas promedio: ${promedio}</td>`

    seriesTbody.appendChild(trElement);
}


function renderCardDescription(serie: Serie): void {
    cardDescription.innerHTML = `<img class="card-img-top" src=${serie.foto} alt="${serie.foto}"/>
                                <div class="card-body">
                                <h5 class="card-title">${serie.nombreSerie}</h5>
                                <p class="card-text">${serie.resumen}</p>
                                </div>
                                <div class="card-body">
                                <class="card-link">${serie.pagina}</a>
                                </div>`;
}