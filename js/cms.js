(function($){
    $.entwine('copybutton', function($) {
        $('.field.urlsegment .btn.copy').entwine({
            onclick: function() {
                var url = document.getElementsByClassName('URL-link')[0].href;
                url = url.replace('?stage=Stage', '');

                // check of navigator.clipboard bestaat én of we in veilige context zitten
                if (navigator.clipboard && window.isSecureContext) {
                    navigator.clipboard.writeText(url)
                        .then(() => {
                            console.log("Text copied to clipboard...")
                        })
                        .catch(err => {
                            console.log('Link copying not supported: ', err);
                        });
                } else {
                    console.log("Clipboard API only works on https:// or http://localhost");
                }
            }
        });
    });
}(jQuery));
