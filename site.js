$(document).ready(function() {
    // Hide what and why sections on page load
    $("#what-section").hide();
    $("#why-section").hide();
    
    // Event handler for when user clicks on "how i got here"
    $(".how").on("click", function(){
        $("#how-section").show();
        // Change color of active menu item
        $(".how").css("color", "black")

        $("#why-section").hide();
        $("#what-section").hide();
        $(".why").css("color", "white")
        $(".what").css("color", "white")
    });

    // Event handler for when user clicks on "what sets me apart"
    $(".what").on("click", function(){
        $("#what-section").show();
        // Change color of active menu item
        $(".what").css("color", "black")

        $("#how-section").hide();
        $("#why-section").hide();
        $(".how").css("color", "white")
        $(".why").css("color", "white")
    });
    
    // Event handler for when user clicks on "why I want this apprenticeship"
    $(".why").on("click", function(){
        $("#why-section").show();
        // Change color of active menu item
        $(".why").css("color", "black")

        $("#how-section").hide();
        $("#what-section").hide();
        $(".how").css("color", "white")
        $(".what").css("color", "white")
    });
    
});
