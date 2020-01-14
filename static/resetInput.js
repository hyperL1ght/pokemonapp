// VERY INEFFICIENT, OPTIMIZE LATTER 

var elements = document.getElementById("param_form").elements;

for(var p in params){
    param = params[p]
    for(var i = 0, e; e = elements[i++];){
        if(e.name === param.param){
            e.value = param.value
        }
    }
}

var slider = $('.test');
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