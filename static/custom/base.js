
// display current value of range inputs
var rangeSlider = function(){
    // return list of selector for elements whose class = "slider_container"
    var slider = $('.slider_container'); 
    
    // for each of such element 
    slider.each(function(){
        $(this).find('div label').css('width', "200px");
        // set text displayed in span as the current value of input 
        var value = $(this).find('input').val();
        $(this).find('span').html(value);
        // update the text as input changes
        var x = $(this).find('span')
        $(this).find('input').on('change mousemove', function(){
            var value = $(this).val();
            x.html(value);
        });
    });
};

rangeSlider();
