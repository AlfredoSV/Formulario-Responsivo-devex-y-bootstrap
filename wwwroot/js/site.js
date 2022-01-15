// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(() => {
    
    $('#gridContainer').dxDataGrid({
        dataSource: [],
        showBorders: true,
        remoteOperations: true,
        paging: {
            pageSize: 12,
        },

        noDataText: "Sin datos...",
        loadPanel: {
            enabled: true,
            shading: true,
            showPane: true,
            width: 300,
            height:100
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [8, 12, 20],
        },
        columns: [{
            dataField: 'id',
            dataType: 'string',
            caption: 'Id',
        }, {
            dataField: 'nombre',
            dataType: 'string',
            caption: 'Nombre',
        }, {
            dataField: 'apellidoPaterno',
            dataType: 'string',
            caption: 'Apellido Paterno'
        }, {
            dataField: 'apellidoMaterno',
            dataType: 'string',
            caption: 'Apellido Materno',
        }],
    }).dxDataGrid('instance');
});

const enviarDatos = document.querySelector("#btnGuardarPaciente");


enviarDatos.addEventListener("click", (e) => {


    guardarEnServidor("POST", "Home/GuardarPaciente");

    e.preventDefault();



});

const guardarEnServidor = (meth, urlSe) => {

    $.ajax({
        method: meth,
        url: urlSe
    }).done((result) => {

        alert("Correcto:" + result.nombre);

        let dataGrid = $("#gridContainer").dxDataGrid({
        }).dxDataGrid("instance");
        let dataSource = dataGrid.getDataSource();

        result.forEach((reg) => {
            dataSource.store().insert(reg).then(function () {
                dataSource.reload();
            })
        })

      
       
        console.log(result);


    });

}

