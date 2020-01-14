// INEFFICIENT, OPTIMIZE LATTER 
// after predict.html is rendered, set the value of inputs to what user sent (stored in params returned by Flask) 

var elements = document.getElementById("param_form").elements;

for(var p in params){
    param = params[p]
    for(var i = 0, e; e = elements[i++];){
        if(e.name === param.param){
            e.value = param.value
        }
    }
}

var slider = $('.slider_container');
slider.each(function(){
    var name = $(this).find('input').attr('name');
    var value = $(this).find('input').val();
    for(var p in params){
        param = params[p];
        if(name === param.param){
            $(this).find('span').html(value);
        }
    }
});