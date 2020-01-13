
var rangeSlider = function(){
    var slider = $('.test');
    
    slider.each(function(){
        var value = $(this).find('input').attr('value');
        $(this).find('span').html(value);
        var x = $(this).find('span')
        $(this).find('input').on('change mousemove', function(){
            var value = $(this).val();
            x.html(value);
            console.log($(this), $(this).val());
        });
    });
};

rangeSlider();
