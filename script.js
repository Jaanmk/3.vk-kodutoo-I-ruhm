var laheKood = {
    idCount: 0,
    list: ( typeof list != 'undefined' && list instanceof Array ) ? list : [],

    laadimine: function(){
        $('<input/>').attr({type:'text', id: 'smth'}).appendTo('.input');
        $('<button>').attr({type:'button', id:'save'}).html('salvesta').appendTo('.input');
        this.list = laheKood.stringify();
        for (i = 0; i < this.list.length; i++) {
            this.looList(this.list[i].id, this.list[i].value);
        }
        laheKood.idCount = this.list.length;
        laheKood.list = this.list;

    },

    salvestamine: function(){
        if (window.console) console.log('sisestus');
        $('<p>').attr({class: 'miskit'}).html($("#smth").val()).appendTo('.content');
        console.log(laheKood.idCount);
        var id = laheKood.list.length ++;
        var value = $("#smth").val();
        laheKood.list.push({
            id: id,
            value: value
        });

        laheKood.kirjutaTxt(laheKood.list);

    },

    looList: function(id, value){
        $('<p>').attr({class: 'miskit', id: id}).html($("#smth").val()).appendTo('.content');

    },

    kirjutaTxt: function(list){
        var data = new FormData();
        data.append("data" , JSON.stringify(list));
        var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
        xhr.open( 'post', 'save.php', true );
        xhr.send(data);
    },

    loeTxt: function(){
        var andmed;
        $.ajax({
           url : "saved/smth.txt",
           dataType: "text",
           success : function (data) {
               $(".text").html(data);
               this.andmed = data;
               console.log(this.andmed);
           }


       });
   },

   stringify: function(){
       var smth = JSON.parse(laheKood.loeTxt);
       console.log(smth);
       return smth;
   }
};
$( document ).ready( function(){
    laheKood.laadimine();
    $( "#save" ).click( laheKood.salvestamine );
});
