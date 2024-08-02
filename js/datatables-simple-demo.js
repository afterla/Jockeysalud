window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesHistorial = document.getElementById('datatablesHistorial');
    if (datatablesHistorial) {
        new simpleDatatables.DataTable(datatablesHistorial);
    }

    const datatablesFamRegistrados = document.getElementById('datatablesFamRegistrados');
    if (datatablesFamRegistrados) {
        new simpleDatatables.DataTable(datatablesFamRegistrados);
    }

});
