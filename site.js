$(document).ready(function() {

    $("#what-section").hide();
    $("#why-section").hide();
    
    
    $(".how").on("click", function(){
        $("#how-section").show();
        $(".how").css("border-bottom", "solid white 1px")

        $("#why-section").hide();
        $("#what-section").hide();
        $(".why").css("border-bottom", "none")
        $(".what").css("border-bottom", "none")
    });
    
    $(".why").on("click", function(){
        $("#why-section").show();
        $(".why").css("border-bottom", "solid white 1px")

        $("#how-section").hide();
        $("#what-section").hide();
        $(".how").css("border-bottom", "none")
        $(".what").css("border-bottom", "none")
    
    });
    
    $(".what").on("click", function(){
        $("#what-section").show();
        $(".what").css("border-bottom", "solid white 1px")

        $("#how-section").hide();
        $("#why-section").hide();
        $(".how").css("border-bottom", "none")
        $(".why").css("border-bottom", "none")
    });
});
