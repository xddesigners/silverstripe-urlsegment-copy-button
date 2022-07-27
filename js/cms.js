(function($){
    $.entwine('copybutton', function($) {
        $('.field.urlsegment .btn.copy').entwine({
            onmatch: function () {
                if (navigator.clipboard == undefined) {
                    $('.field.urlsegment .btn.copy').remove();
                }
                this._super();
            },
            onclick: function() {
                var url = document.getElementsByClassName('URL-link')[0].href;
                url = url.replace('?stage=Stage', '');
                navigator.clipboard.writeText(url)
                    .then(() => {
                        console.log("Text copied to clipboard...")
                    })
                    .catch(err => {
                        console.log('link copying not supported')
                    })
            }
        });
    });
}(jQuery));
