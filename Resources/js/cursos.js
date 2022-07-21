const queryStr = window.location.search;
const urlParams = new URLSearchParams(queryStr);
const idUrl = urlParams.get('id');
var cursoInfo = productos.find(q => q.id === parseInt(idUrl));

/*nombres de atributos*/
var nombreCurso = cursoInfo.nombre;
var inicioCurso = cursoInfo.fechaInicio;
var horarioCurso = cursoInfo.horario;
var modalidadCurso = cursoInfo.modalidad;
var duracionCurso = cursoInfo.duracion;
var descripCurso = cursoInfo.descripcion;
var publicoCurso = cursoInfo.publico;
var docenteCurso = cursoInfo.docente;
var precioCurso = cursoInfo.precio;

$(document).ready(function(){
    $('#titulo-curso').text(nombreCurso);
    $('#inicio-curso').text(inicioCurso);
    $('#horario-curso').text(horarioCurso);
    $('#modalidad-curso').text(modalidadCurso);
    $('#duracion-curso').text(duracionCurso);
    $('#descripcion-curso').text(descripCurso);
    $('#publico-curso').text(publicoCurso);
    $('#docente-curso').text(docenteCurso);
    $('#precio-curso').text(precioCurso);
})






