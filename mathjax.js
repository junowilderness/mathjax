// $Id$

/**
 * Add MathJax support to HTML using settings variables defined in the module
 */
(function ($) {
  Drupal.behaviors.mathjax = {
    attach: function(context, settings) { // include mathjax only after setting variables are defined
      var mathjax = Drupal.settings.mathjax;
    
      // from http://www.mathjax.org/resources/docs/?dynamic.html
      var script = document.createElement("script");
      script.type = "text/javascript";

  if (mathjax.path=='cdn') {
    script.src  = "https://c328740.ssl.cf1.rackcdn.com/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
  }
  else {
      script.src = mathjax.path;
  }
    
      var config = 'MathJax.Hub.Config({' +
                     'extensions: ["tex2jax.js"],' +
                     'jax: ["input/TeX","output/HTML-CSS"],' +
                     'tex2jax: {' +
                       'inlineMath: [ [\'$\',\'$\'], [\'\\\\(\',\'\\\\)\'] ],' +  // look for $...$ and \(...\) as delimiters for inline math
                       'displayMath: [ [\'$$\',\'$$\'], [\'\\\\[\',\'\\\\]\'] ],' + // look for $$...$$ and \[...\] as delimiters for display math
                       'processEscapes: true' +
                     '}' +
                   '});' +
                   'MathJax.Hub.Startup.onload();';
    
      if (window.opera) {script.innerHTML = config}
                   else {script.text = config}
    
      document.getElementsByTagName("head")[0].appendChild(script);
    }
  };
})(jQuery);
