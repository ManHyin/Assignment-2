var vg_1 = "Inflation2021.json";
vegaEmbed("#map", vg_1).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "GoodsandServices.json";
vegaEmbed("#bar", vg_2).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "CPIPercentageChange.json";
vegaEmbed("#line", vg_3).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "QuaterlyPercentageChange.json";
vegaEmbed("#scatter", vg_3).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);