function toggleForm(){
    if($(".home-parent").hasClass("hideForm")){
        $(".form-part").css("visibility" , "visible");
        $(".form-part").css("width" , "30%");
        // $(".form-part").css("display" , "block");
        $(".home-slide").css("width" , "70%");
        $("#ViewForm").css("display" , "none");
        
    }
    else{
        $(".form-part").css("visibility" , "hidden");
        $(".form-part").css("width" , "0%");
        $(".home-slide").css("width" , "100%");
        $("#ViewForm").css("display" , "block");

     
    }

}

$("#ViewForm").click(function(){
    $(".home-parent").addClass("hideForm")
    toggleForm();
 
})
$(".close").click(function(){
    $(".home-parent").removeClass("hideForm")
    toggleForm();
 
})

function mobileNav() {
    $("#togglmenu").click(function () {
        $(".mobile-nav-content").css("right", "0");
    })
    $("#closemenu").click(function () {
        $(".mobile-nav-content").css("right", "-1000px");
    })
}
mobileNav()