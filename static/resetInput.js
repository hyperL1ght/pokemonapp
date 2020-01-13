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
