$(document).ready(function() {

    $("#what-section").hide();
    $("#why-section").hide();
    
    
    $(".how").on("click", function(){
        $("#how-section").show();

        $("#why-section").hide();
        $("#what-section").hide();
    });
    
    $(".why").on("click", function(){
        $("#why-section").show();

        $("#how-section").hide();
        $("#what-section").hide();
    
    });
    
    $(".what").on("click", function(){
        $("#what-section").show();

        $("#how-section").hide();
        $("#why-section").hide();
    });
});
