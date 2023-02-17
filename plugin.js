var script = document.createElement('script');

script.onload = function () {
    //do stuff with the script
    $(document).ready(function() {
       alert("Hello World!");
      if($('form[data-type=add-to-cart-form] > div.product-form__buttons').length) {
        $('form[data-type=add-to-cart-form] > div.product-form__buttons').append("<Button class='product-form'>Try Now</Button>");
      }
    });
};
script.src = "https://code.jquery.com/jquery-3.6.3.slim.min.js";
script.type = "text/javascript";

document.head.appendChild(script);
