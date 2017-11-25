  $(function(){
    $("#slides").slidesjs({
      play: {
        active: true,
        effect: "slide",
        interval: 5000,
        auto: true,
        swap: true,
        pauseOnHover: false,
        restartDelay: 500
      }
    });
  });
  $(function() {

   var btn_movil = $('#nav-responsive'),
   menu = $('#navegacion').find('ul');

        // Al dar click agregar/quitar clases que permiten el despliegue del menú
        btn_movil.on('click', function (e) {
          e.preventDefault();

          var el = $(this);

          el.toggleClass('nav-active');
          menu.toggleClass('open-menu');  
        });
      });