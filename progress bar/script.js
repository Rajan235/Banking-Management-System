const progress = $("#progress");
const Prev = $("#Prev");
const Next = $("#Next");
const circles = $(".circle");
let currentActive=1;
Next.on("click",function(){
    currentActive++;

    if(currentActive>circles.length){
        currentActive=circles.length;

    }
    update();
    

});
Prev.on("click",function(){
    currentActive--;

    if(currentActive<1){
        currentActive=1;

    }
    update();
    

});
function update(){
    for(var i=0;i<circles.length;i++){
        if(i<currentActive){
            $(circles[i]).addClass("active");
        }
        else{
            $(circles[i]).removeClass("active");
        }
    }
    const actives=$(".active");
    progress.width(((actives.length-1)/(circles.length-1))*100  + "%") ;
    if(currentActive===1){
        Prev.prop("disabled",true);
    }
    else if(currentActive===circles.length){
        Next.prop("disabled",true);
    } 
    else{
        Prev.prop("disabled",false);
        Next.prop("disabled",false);
    }

        
}