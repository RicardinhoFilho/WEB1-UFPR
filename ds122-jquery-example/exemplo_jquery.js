function createParagraph(content){
  return($("<p></p>").html(content));
}

$(document).ready(function(){
	console.log("OK!");

  $("p").css("text-align","center");

  $("p").on("click",function(event){
    var ta =  $(this).css("text-align");

    if (ta == "left") {
      $(this).css("text-align","center");
    }
    else{
      $(this).css("text-align","left");
    }

    $(this).after(createParagraph("Novo paragrafo!"));
  });
});
