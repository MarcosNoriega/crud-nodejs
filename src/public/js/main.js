$(document).ready(function(){

    $('#Resultados').hide();
    
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
                                        <button class="btn btn-warning"><i class="fa fa-edit"></i></button>
                                        <button class="btn btn-danger"><i class="fa fa-trash"></i></button>
                                    </td>
                                  </tr>`;
                }

                console.log(resultado);
                

                $('.busqueda').html(resultado);
                
            }
        })
    });
    
});