var kood = {

 laadimine: function(){
     $('<input/>').attr({type:'text', id: 'smth'}).appendTo('.input');
     $('<button>').attr({type:'button', id:'save'}).html('salvesta').appendTo('.input');
     $('<p>').attr({class: 'miskit', id: 'tekstikoht'}).html(this.loeServer()).appendTo('.content');
     console.log('siin');
 },
 loeServer: function(){
     $.ajax({
         url:'saved/smth.txt',
         success: function (data){
           $("#tekstikoht").html(data);
         }
       });

},
salvestamine: function(value){
    console.log(value);
    var data = new FormData();
    data.append("data" , value);
    var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
    xhr.open( 'post', 'save.php', true );
    xhr.send(data);
     $("#tekstikoht").html(value);

}
};
window.onload = function(){
    kood.laadimine();
    $("#save").click(function(){
        kood.salvestamine($("#smth").val());

    });
};
