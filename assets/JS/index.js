/* implements jquery just for the sake of remembering it. 
The website works perfectly fine without this script. 
The only thing that is not going to be shown is the names of the logos on the carousel in the index.
Everything else works natively using HTML, CSS and Boostrap only */ 
//made by Leo M
$(function(){
    $("a").click(function(event){
        if (this.hash !==""){
            event.preventDefault();

            var gato = this.hash;

            $('html, body').animate({
                scrollTop: $(gato).offset().top
            },800, function(){window.location.hash =gato;});
        }

    });

    $('[data-toggle="popover"]').popover();
});