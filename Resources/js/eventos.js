$(document).ready(function(){
    addEvent();
})

function addEvent() {
    if (eventosInfo.length != 0) {
      $("#idContentEvento").empty();
      for (let i = 0; i < eventosInfo.length; i++) {
        $("#idContentEvento").append(`<div class="evento">
            <div class="evento-header">
                <div class="evento-img-1">
                    <img style="width: 100%; height: 200px; background-size: cover; object-fit: cover; background-position: center; transition: .2s; border-bottom-left-radius: 10px; border-top-left-radius: 10px;" src="../Resources/imagenes/${eventosInfo[i].imagenEvento}" alt="${eventosInfo[i].nombreEvento}">
                </div>
            </div>
            <div class="evento-body">
                <span style="color: #F8002D;">${eventosInfo[i].precioEvento}</span>
                <h5>${eventosInfo[i].nombreEvento}</h5>
                <p><i class="fa-regular fa-calendar-days"></i> <strong>¿Cuándo?</strong> ${eventosInfo[i].fechaEvento}</p>
                <a href="https://forms.gle/4Yj2QhsL5J1QGQJd6" class="evento-link">Inscribirse</a>
            </div>
        </div>
                `);
      }
    }
  }
