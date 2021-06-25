let readerResult;

/** read local csv **/
function readFile(fileInput) {
    let reader = new FileReader();

    reader.onload = function () {
        document.getElementById('out').innerHTML = reader.result;
        document.getElementById('final-output').innerHTML = "";
        readerResult = reader.result;
        processTextData();
    };

    document.getElementById('lb').innerHTML = fileInput.value.split("\\").pop();
    reader.readAsBinaryString(fileInput.files[0]);
}

/** process Text file **/
function processTextData() {
    var wordCountOubject = {};

    readerResult= readerResult.toLowerCase();
    readerResult = readerResult.replace(/,/g, '');
    readerResult = readerResult.replaceAll('.', '');

    readerResult.split(" ").forEach(function (el, i, arr) {
        wordCountOubject[el] = wordCountOubject[el] ? ++wordCountOubject[el] : 1;
    });

    let outputTable = '<table id="dataTable">';

    outputTable += "<thead>"
    outputTable += "<tr>";
    outputTable += "<th>Word</th>";
    outputTable += "<th>Word Count</th>";
    outputTable += "</tr>";
    outputTable += "</thead>";

    outputTable += "<tbody>";
    Object.entries(wordCountOubject).forEach(entry => {
        outputTable += "<tr>";
        const [key, value] = entry;
        outputTable += "<td>"+key+"</td>";
        outputTable += "<td>"+value+"</td>";
        outputTable += "</td>";
      });
    outputTable += "</tbody>";
    outputTable += "</table>";

    document.getElementById('final-output').innerHTML = outputTable;
    sorttable.makeSortable(document.getElementById('dataTable'));
}

function toggle(element) {
    let el = document.getElementById(element);
    if (el.style.display === 'none') {
        el.style.display = 'block';
    } else {
        el.style.display = 'none';
    }
}