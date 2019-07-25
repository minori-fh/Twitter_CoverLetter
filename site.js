$(document).ready(function() {

    $("#what-section").hide();
    $("#why-section").hide();
    
    
    $(".how").on("click", function(){
        $("#how-section").show();
        $(".how").css("color", "black")

        $("#why-section").hide();
        $("#what-section").hide();
        $(".why").css("color", "white")
        $(".what").css("color", "white")
    });
    
    $(".why").on("click", function(){
        $("#why-section").show();
        $(".why").css("color", "black")

        $("#how-section").hide();
        $("#what-section").hide();
        $(".how").css("color", "white")
        $(".what").css("color", "white")
    });
    
    $(".what").on("click", function(){
        $("#what-section").show();
        $(".what").css("color", "black")

        $("#how-section").hide();
        $("#why-section").hide();
        $(".how").css("color", "white")
        $(".why").css("color", "white")
    });
});
