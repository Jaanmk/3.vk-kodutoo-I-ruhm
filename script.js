var laheKood = {
    idCount: 0,
    list: ( typeof list != 'undefined' && list instanceof Array ) ? list : [],

    laadimine: function(){
        $('<input/>').attr({type:'text', id: 'smth'}).appendTo('.input');
        $('<button>').attr({type:'button', id:'save'}).html('salvesta').appendTo('.input');

        console.log(this.list);
        for (var i = 0; i < this.list.length; i++) {
                //console.log(laheKood.list[i]);
                if (this.list[i].id.typeof === undefined) {

                }else{
                    laheKood.looList(this.list[i].id,this.list[i].value);
                }

            }

    },

    salvestamine: function(){
        $('<p>').attr({class: 'miskit'}).html($("#smth").val()).appendTo('.content');
        console.log(laheKood.idCount);
        var id = laheKood.list.length ++;
        var value = $("#smth").val();
        laheKood.list.push({
            id: id,
            value: value
        });

        laheKood.kirjutaTxt(laheKood.list);
        console.log(this.list);
    },

    looList: function(id, value){
        $('<p>').attr({class: 'miskit', id: id}).html($("#smth").val()).appendTo('.content');
        console.log(id +' ' +value);
    },

    kirjutaTxt: function(list){
        console.log(list);
        var data = new FormData();
        data.append("data" , JSON.stringify(list));
        var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
        xhr.open( 'post', 'save.php', true );
        xhr.send(data);
    },

    loeTxt: function(){
        /* var andmed;
        return $.ajax({
           url : "saved/smth.txt",
           dataType: "text",
          success : function (data) {
               $(".text").html(data);
               this.andmed = data;
               console.log(this.andmed);

           }


       });*/
       $.ajax({
        url: "saved/smth.txt",
        async: true,   // asynchronous request? (synchronous requests are discouraged...)
        cache: true,   // with this, you can force the browser to not make cache of the retrieved data
        dataType: "text",  // jQuery will infer this, but you can set explicitly
        success: function( data, textStatus, jqXHR ) {
            this.resourceContent = JSON.parse(data); // can be a global variable too...
            // process the content...
            this.list = JSON.parse(data);
            console.log(this.list.length);
            var pikkus = this.list.length;

            for (var i = 1; i < pikkus; i++) {
                    if (this.list[i]===null){
                        delete this.list[i];
                        //console.log(i+'spliced');


                    }else{
                        //delete this.list[i];
                        laheKood.list.push(this.list[i]);
                        //console.log('salvestan listi'+ i);

                    }

                }
            laheKood.laadimine();

            }


        });

   },


};
$( document ).ready( function(){
    laheKood.loeTxt();
    $( '.sisestus' ).click( laheKood.salvestamine() );
});
