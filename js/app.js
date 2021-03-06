$(document).ready(function(){

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;

     $(".next").click(function(){

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();


        $($(this).parent()).each(function(){
            var totalPoints = 0;
            var totalNumberInput = 0;
            var totalTextInput = 0;
            var erreurs = 0;

            $(this).find('input[type="text"]').each(function(){
                totalTextInput += 1; //<==== a catch  in here !! read below
                if ($(this).val() === ""){
                    erreurs += 1;
                }

            });

            $(this).find('input[type="number"]').each(function(){
                totalPoints += parseInt($(this).val()); //<==== a catch  in here !! read below
                totalNumberInput +=1;
            });

            if(totalPoints === 12 || totalTextInput !== 0 || totalNumberInput === 0){

                if(erreurs !== 0){
                    alert("Merci de renseigner tous les champs");
                }
                else{
                    //Add Class Active
                    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
                    //show the next fieldset
                    next_fs.show();
                    //hide the current fieldset with style
                    current_fs.animate({opacity: 0}, {
                        step: function(now) {
                            // for making fielset appear animation
                            opacity = 1 - now;

                            current_fs.css({
                                'display': 'none',
                                'position': 'relative'
                            });
                            next_fs.css({'opacity': opacity});
                        },
                        duration: 600
                    });
                }
            }else{
                alert("vous avez renseigné " + totalPoints + " point(s). Le total doit être de 12 pour pousuivre")
            }
        });
    });

    $(".previous").click(function(){

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({'opacity': opacity});
            },
            duration: 600
        });
    });

    $('.radio-group .radio').click(function(){
        $(this).parent().find('.radio').removeClass('selected');
        $(this).addClass('selected');
    });

    $(".submit").click(function(){
        return false;
    })

});