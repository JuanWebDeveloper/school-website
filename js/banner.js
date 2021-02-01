/*--=====================================================
|-Variables                                         |
=======================================================--*/
var toogle = false;
/*--=====================================================
|-Ocultar Banner                                         |
=======================================================--*/
$("#btnBanner").click(function(){

    if(toogle == false){
        
        toogle = true;

        $("#banner").slideUp("fast");

        $("#btnBanner").html('<i class="fa fa-angle-down"></i>');

    }else{

        toogle = false;

        $("#banner").slideDown("fast");

        $("#btnBanner").html('<i class="fa fa-angle-up"></i>');

    }

})
