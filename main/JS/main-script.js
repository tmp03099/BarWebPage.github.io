$(document).ready(function(){
    
    //create slide toggle for menu icon//
    $(".menu-icon").click(function(){

        $(".menu-bar").slideToggle();
           
    });

    // resize window to show menu bar or not//
    $(window).resize(function(){
        var win=$(this);
        if (win.width() >= 995){
            $(".menu-bar").show();
        }

        else {
            $(".menu-bar").hide();
        }
    });


    //On menu page//
    // hide food list//
    $(".list-food").hide();
    $(".button-menu-drink").css({"background-color":"#ffff68"});

    //when click drink hide food menu//
    $(".button-menu-drink").click(function(){
        $(".list-drink").show();
        $(".list-food").hide();
        $(".button-menu-drink").css({"background-color":"#ffff68"});
        $(".button-menu-food").css({"background-color":"#ffffff00"});
    
    });

    //when click food hide drink menu//
    $(".button-menu-food").click(function(){
        $(".list-drink").hide();
        $(".list-food").show();
        $(".button-menu-food").css({"background-color":"#ffff68"});
        $(".button-menu-drink").css({"background-color":"#ffffff00"});
        
    });

    //Reservation page
    // Set a validation for form
    $("#reser-form").validate({
        rules:{
            name: "required",
            phone: "required"

        },
        messages:{
            name:"Please fill out your name.",
            phone:"Please fill out your phone"

        },
        submitHandler: function(form){
            form.submit();
            alert("Your reservation is submitted!")
        }
    });


});



