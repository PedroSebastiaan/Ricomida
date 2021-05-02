$( document ).ready(function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)

    });

    $('#enviarCorreo').bind('click', function () {
        alert('El correo fue enviado correctamente...');
    });

    $(".main-title").on("dblclick", function () {
        $(this).css("color", "red");
    });

    $(".card-img-top").click(function () {
        $(".card-body").toggle("slow", function () {
        });
    });
});