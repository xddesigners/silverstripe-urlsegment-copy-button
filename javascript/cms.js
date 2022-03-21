(function($){
    $.entwine('copybutton', function($) {
        $('.field.urlsegment .btn.copy').entwine({
            onclick: function() {
                var url = document.getElementsByClassName('URL-link')[0].innerHTML;
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