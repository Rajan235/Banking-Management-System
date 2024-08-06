for(var i=0;i<$(".panel").length;i++){
        $(".panel").on("click",function(){
        removeActiveClasses();
        $(this).addClass("active");
    });
}
  function removeActiveClasses(){
    for(var i=0;i<$(".panel").length;i++){
        $(".panel").removeClass("active");
    }
  }