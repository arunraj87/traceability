(function(){

    $.fn.timeline =function(data, opts){
        var linkWidth = 100/data.length;
        var that = this;
        var defaults = {
               rawTemplate : getTemplate()
           };
        /*   var template = Handlebars.compile(defaults.rawTemplate);
           $(this).append(template({events: data}));*/
        var template = '';
        var tempateToParse = defaults.rawTemplate.status;
        data.forEach(function(value, index){
            tempateToParse = defaults.rawTemplate.status;
            tempateToParse = tempateToParse.replace('##index##', index);
            tempateToParse = tempateToParse.replace('##index##', index);
            tempateToParse = tempateToParse.replace('##index##', index);
            tempateToParse = tempateToParse.replace('##index##', index);
            tempateToParse = tempateToParse.replace('##index##', index);
            tempateToParse = tempateToParse.replace('##status##', value.status);
            tempateToParse = tempateToParse.replace('##date##', new Date().toDateString());
            tempateToParse = tempateToParse.replace('##comment##', value.comment);
            tempateToParse = tempateToParse.replace('##completed##', value.completed ? 'indicator-completed':'');
            if(data[index+1] && data[index+1].completed) {
                tempateToParse = tempateToParse.replace('##connector-completed##', value.completed ? 'connector-completed' : '');
            }
            template = template + tempateToParse;
        });
        $(that).append($(defaults.rawTemplate.container).html($(defaults.rawTemplate.content).html(template)));
    };
    var getTemplate = function () {
        var parentContainerDOM = '<div class="container col-sm-12"></div>';
        var contentDOM = '<div class="content"></div>';
        var statusTemplate = '<div class="link">' +
                                '<div class="status status-transition top-content" style="transition-delay:##index##s">' +
                                    '<span>##status##</span>' +
                                '</div>' +
                                '<div class="indicator ##completed##" style="transition-delay:##index##s"></div>' +
                                '<div class="connector-container">' +
                                    '<div class="##connector-completed##" style="transition-delay:##index##s;"></div>' +
                                '</div><div class="bottom-content">' +
                                '<div class="status status-transition" style="transition-delay:##index##s">' +
                                    '<span>##date##</span>' +
                                '</div>' +
                                '<div class="status status-transition" style="transition-delay:##index##s">' +
                                    '<span>##comment##</span>' +
                                '</div>' +
                             '</div></div>';
        return {
            container: parentContainerDOM,
            content: contentDOM,
            status:statusTemplate
        };
    };

}());