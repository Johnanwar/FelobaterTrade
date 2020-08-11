$("#ViewForm").click(function(){
    console.log("test")
    $(".home-parent").toggleClass("hideForm")
    
    if($(".home-parent").hasClass("hideForm")){
        $(".form-part").css("visibility" , "visible");
        $(".form-part").css("width" , "30%");
        // $(".form-part").css("display" , "block");
        $(".home-slide").css("width" , "70%");
        $("#ViewForm").text("Close The Form")
        
    }
    else{
        $(".form-part").css("visibility" , "hidden");
        $(".form-part").css("width" , "0%");
        $(".home-slide").css("width" , "100%");
        $("#ViewForm").text("Order Now")

     
    }
 
})