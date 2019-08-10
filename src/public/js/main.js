$(document).ready(function(){

    $('#Resultados').hide();
    $('#mensaje').hide();
    
    if ($('#Primera').attr('disable') == 'no') {
        $('#Primera').removeClass('disabled');
    }

    if ($('#Primera').attr('disable') == 'yes') {
        $('#Primera').addClass('disabled');
    }

    if ($('#ultima').attr('disable') == 'no') {
        $('#ultima').removeClass('disabled');
    }

    if ($('#ultima').attr('disable') == 'yes') {
        $('#ultima').addClass('disabled');
    }
    
    $('#busqueda').keyup(function() {
        var termino = $(this).val();
        var url = $(this).attr('url');

        if (termino !='') {
            $('#Resultados').show();
            $('.contenido').hide();
        } else {
            $('#Resultados').hide();
            $('.contenido').show();
        }

        $.ajax({
            url,
            type: 'POST',
            data: {termino},
            success: function(res) {
                var articulos = res;
                var resultado = "";
                for (let articulo of articulos) {
                    resultado += `<tr>
                                    <td>${articulo.Nombre}</td>
                                    <td>${articulo.Precio}</td>
                                    <td>${articulo.Stock}</td>
                                    <td>
                                        <button class="btn btn-warning edit"><i class="fa fa-edit"></i></button>
                                        <button class="btn btn-danger delete"><i class="fa fa-trash"></i></button>
                                    </td>
                                  </tr>`;
                }
                

                $('.busqueda').html(resultado);
                
            }
        })
    });


    $('.delete').click(function (e) {
        e.preventDefault();
        if (confirm("Estas seguro de eliminar el articulo?")) {
            var fila = $(this)[0].parentElement.parentElement;
            var url = $(this).attr('href');

            $.ajax({
                url,
                type: 'DELETE',
                success: function(res) {
                    $(fila).fadeOut();
                    
                    $('#text').html(`El articulos <strong>${res[0].Nombre}</strong> ha sido eliminado`);
                    $('#mensaje').show();
                }
            })
        }
        
        
    });

    $('.edit').click(function(e) {
        e.preventDefault();
        var url = $(this).attr('href');

        $.ajax({
            url,
            type: 'GET',
            success: function(res) {
                var articulo = res[0];

                $('#txtId').val(articulo.IdArticulos);
                $('#txtNombre').val(articulo.Nombre);
                $('#txtPrecio').val(articulo.Precio);
                $('#txtStock').val(articulo.Stock);
            }
        });

    });


    
});