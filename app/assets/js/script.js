$( document ).ready(function() {
  console.log('Ready to load the file');
  $.ajax({
    type : "GET",
    url :  "../docs/laposte_hexasmal.csv  ",
    datatype : "text"
  })
    .done( function (data) {
    // console.log(data)
    $("#results").html(JSON.stringify(data))
  })
    .fail(function( jqXHR, textStatus,errorThrow ) {
    //jqXHR sont les erreurs que le serveur à retourné.
    console.log(jqXHR);
    console.log(textStatus);
    console.log(errorThrow);
  })


 
let tableau =[
  //??? les données
]
 
 
 
//ceci est une erreur
  /* const postal = [test];
  const count = postal.push("test2");
  console.log(postal);
  console.log(count); */















});