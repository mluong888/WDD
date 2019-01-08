$(document).ready(function() {
    $("#s1").click(function(){
        $("#body").hide()
        $(".outfit").hide()
         $("#o1").show()
         console.log("123")
    })
    $("#s2").click(function(){
        $("#body").hide()
        $(".outfit").hide()
         $("#o2").show()
         console.log("123")
    })
    $("#s3").click(function(){
        $("#body").hide()
        $(".outfit").hide()
         $("#o3").show()
         console.log("123")
    })
    $("#s4").click(function(){
        $("#body").hide()
        $(".outfit").hide()
         $("#o4").show()
         console.log("123")
    })
    $("#s5").click(function(){
        $("#body").hide()
        $(".outfit").hide()
         $("#o5").show()
         console.log("123")
    })
    // $(".outfit-selection").click(function(){
    //     $("#o"+this.toString().substring(1)).show()
    //     console.log(this.toString().slice(1,2))
    // })
// jQuery and JavaScript code goes in here!
    $("#strip-button").click(function(){
        $(".outfit").fadeOut(200)
        $("#body").fadeIn(200)
    })
});
