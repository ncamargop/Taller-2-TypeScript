import { series } from "./data.js";
var seriesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="series"
var cardDescription = document.getElementById("card");
renderSeriesInTable(series);
renderPromedioTemps(series);
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.idSerie, "</td>\n                           <td><button type=\"button\" class=\"btn btn-link\" id=\"button-serie-").concat(c.idSerie, "\">").concat(c.nombreSerie, "</button></td>\n                           <td>").concat(c.canal, "</td>\n                           <td>").concat(c.temps, "</td>");
        seriesTbody.appendChild(trElement);
        var serieButton = document.getElementById("button-serie-" + c.idSerie);
        serieButton.onclick = function () { return renderCardDescription(c); };
    });
}
function renderPromedioTemps(series) {
    var promedio = 0;
    series.forEach(function (serie) {
        promedio = promedio + serie.temps;
    });
    promedio = promedio / series.length;
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td>Temporadas promedio: ".concat(promedio, "</td>");
    seriesTbody.appendChild(trElement);
}
function renderCardDescription(serie) {
    cardDescription.innerHTML = "<img class=\"card-img-top\" src=\"".concat(serie.foto, "\" alt=\"").concat(serie.foto, "\">\n                                <div class=\"card-body\">\n                                <h5 class=\"card-title\">").concat(serie.nombreSerie, "</h5>\n                                <p class=\"card-text\">").concat(serie.resumen, "</p>\n                                </div>\n                                <div class=\"card-body\">\n                                <class=\"card-link\">").concat(serie.pagina, "</a>\n                                </div>");
}
