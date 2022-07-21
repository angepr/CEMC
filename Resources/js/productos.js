$.when($.ready).then(function () {
  addCourse();
  addNewCourse();
});

//producto
function addCourse() {
  if (productos.length != 0) {
    $("#idContentProduct").empty();
    for (let p = 0; p < productos.length; p++) {
      $("#idContentProduct").append(`
        <div class="curso">
          <div class="curso-header">
            <div class="curso-img-1">
            <a href="./course.html?id=${productos[p].id}"><img style="width: 100%; height: 200px; background-size: cover; object-fit: cover; background-position: center; transition: .2s; border-top-right-radius: 10px; border-top-left-radius: 10px;" src="../Resources/imagenes/${productos[p].imagen}" alt="${productos[p].nombre}"></a>
            </div>
          </div>
          <div class="curso-body">
            <span style="color: #F8002D;">Inicio: ${productos[p].fechaInicio}</span>
            <a style="text-decoration: none;" href="./course.html?id=${productos[p].id}"><h5>${productos[p].nombre}</h5></a>
            <p>Dictado por: ${productos[p].docente}</p>
            <a href="https://wa.link/zl6npq" class="curso-link">Inscribirse</a>
          </div>
        </div>`);
    }
  }
}

$(document).ready(function () {
  $(".portada-imagenes li").hide();
  $(".portada-imagenes li:first").show();
});



// let date2 = new Date();
// function addNewCourse() {
//   if (date1.getTime() < productos[p].date.getTime()){
//     for (let p = 0; p < productos.length; p++) {
//       $("#idContentProduct").append(`
//         <div class="curso">
//           <div class="curso-header">
//             <div class="curso-img-1">
//             <a href="./course.html?id=${productos[p].id}"><img style="width: 100%; height: 200px; background-size: cover; object-fit: cover; background-position: center; transition: .2s; border-top-right-radius: 10px; border-top-left-radius: 10px;" src="./Resources/imagenes/${productos[p].imagen}" alt="${productos[p].nombre}"></a>
//             </div>
//           </div>
//           <div class="curso-body">
//             <span style="color: #F8002D;">Inicio: ${productos[p].fechaInicio}</span>
//             <a style="text-decoration: none;" href="./course.html?id=${productos[p].id}"><h5>${productos[p].nombre}</h5></a>
//             <p>Dictado por: ${productos[p].docente}</p>
//             <a href="https://wa.link/zl6npq" class="curso-link">Inscribirse</a>
//           </div>
//         </div>`);
//     }
//   }
//   }
    
