$(document).ready(function(){
    $.ajax({
        type: 'GET',
        url: 'https://inshorts.deta.dev/news?category=technology',
        contentType: 'application/json; charset-utf-8',
        dataType: 'json',
        success: function (data) {
            for (let item of data.data) {
                $("#post-1").empty();
                
                $("#post-1").append(`
                        <div class="post-header">
                            <div class="post-img-1"></div>
                        </div>
                        <div class="post-body">
                            <span class="fecha-blog" id="fecha-blog">${item.date}</span>
                            <h5 class="titulo-blog">${item.title}</h5>
                            <p class="texto-itemlog">${item.content}</p>
                            <a href="${item.readMoreUrl}" class="post-link">Leer más</a>
                        </div>
                `)
            }
        }
    })
})
