console.log('Is this working?');

let viz;

const url = "https://public.tableau.com/views/AwesomeChocolateSalesReport/Dashboard1?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link";

const vizContainer = document.getElementById('vizContainer');
const options = {
    hideTabs: true,
    height: 1000,
    width: 1200,
    onFirstInteraction: function() {
        workbook = viz.getWorkbook();
        activeSheet = workbook.getActiveSheet();
        console.log("My dashboard is interactive");
    }
};

function initViz() {
    console.log('Executing the initViz function!');
    viz = new tableau.Viz(vizContainer, url, options);
}

document.addEventListener("DOMContentLoaded", initViz);