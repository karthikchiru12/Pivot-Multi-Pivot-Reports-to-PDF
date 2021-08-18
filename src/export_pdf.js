console.log(window.location.href);
var url = window.location.href;

if (!url.includes("&sysparm_media=print")) {
    var export_to_pdf = document.querySelector('#report-sharing-sidebar > div.rd-side-content-body > div > div > div:nth-child(4)');
    export_to_pdf.innerHTML = '<a id="export-to-pdf-button" data-original-title="Export to PDF">Export to PDF</a>';

    document.querySelector('#report-sharing-sidebar > div.rd-side-content-body > div > div > div:nth-child(4)').addEventListener('click', function () {
        window.open(window.location.href + "&sysparm_media=print");
    });

}
else {

    window.addEventListener("load", function () {

        console.log("Yes its 50% done");
        this.window.print();
        this.window.onafterprint = (event) => {
            this.window.close();
        };

    });
}