(function (global) {

  var closeToc = function() {
    $(".tocify-wrapper").removeClass('open');
    $("#nav-button").removeClass('open');
  };

    var webalize = function(str){
        var charlist;
        charlist = [
            ['Á', 'A'], ['Ä', 'A'], ['Č', 'C'], ['Ç', 'C'], ['Ď', 'D'], ['É', 'E'], ['Ě', 'E'],
            ['Ë', 'E'], ['Í', 'I'], ['Ň', 'N'], ['Ó', 'O'], ['Ö', 'O'], ['Ř', 'R'], ['Š', 'S'],
            ['Ť', 'T'], ['Ú', 'U'], ['Ů', 'U'], ['Ü', 'U'], ['Ý', 'Y'], ['Ž', 'Z'], ['á', 'a'],
            ['ä', 'a'], ['č', 'c'], ['ç', 'c'], ['ď', 'd'], ['é', 'e'], ['ě', 'e'], ['ë', 'e'],
            ['í', 'i'], ['ň', 'n'], ['ó', 'o'], ['ö', 'o'], ['ř', 'r'], ['š', 's'], ['ť', 't'],
            ['ú', 'u'], ['ů', 'u'], ['ü', 'u'], ['ý', 'y'], ['ž', 'z']
        ];
        for(var i in charlist){
            var re = new RegExp(charlist[i][0], 'g');
            str = str.replace(re, charlist[i][1]);
        }

        str = str.replace(/[^a-z0-9]/ig, '-');
        str = str.replace(/\-+/g, '-');
        if(str[0] == '-'){
            str = str.substring(1, str.length);
        }
        if(str[str.length - 1] == '-'){
            str = str.substring(0, str.length - 1);
        }

        return str.toLowerCase();
    };

    var fixHeadingIds = function(selectors){
        $(selectors).each(function(i, e){
            var el = $(e);
            var newId = el.attr('id');
            el.attr('id', webalize(newId));
        });
    };

  var makeToc = function() {
    var selectors = 'h1, h2, h3, h4';
    fixHeadingIds(selectors);
    global.toc = $("#toc").tocify({
      selectors: selectors,
      extendPage: false,
      theme: 'none',
      smoothScroll: false,
      showEffectSpeed: 0,
      hideEffectSpeed: 180,
      ignoreSelector: '.toc-ignore',
      highlightOffset: 60,
      scrollTo: -1,
      scrollHistory: true,
      hashGenerator: function (text, element) {
        return element.prop('id');
      }
    }).data('toc-tocify');

    $("#nav-button").click(function() {
      $(".tocify-wrapper").toggleClass('open');
      $("#nav-button").toggleClass('open');
      return false;
    });

    $(".page-wrapper").click(closeToc);
    $(".tocify-item").click(closeToc);
  };

  // Hack to make already open sections to start opened,
  // instead of displaying an ugly animation
  function animate () {
    setTimeout(function() {
      toc.setOption('showEffectSpeed', 180);
    }, 50);
  }

  $(makeToc);
  $(animate);

})(window);

