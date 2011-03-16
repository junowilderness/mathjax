// $Id$

/**
 * Add MathJax support to HTML using settings variables defined in the module
 */
Drupal.behaviors.mathjax = function(context) { // include mathjax only after setting variables are defined
  var mathjax = Drupal.settings.mathjax;

  // from http://www.mathjax.org/resources/docs/?dynamic.html
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = mathjax.path;

  var config = 'MathJax.Hub.Config({' +
                 'extensions: ["tex2jax.js","TeX/AMSmath.js","TeX/AMSsymbols.js","TeX/noErrors.js","TeX/autobold.js"],' +
                 'jax: ["input/TeX","output/HTML-CSS"],' +
                 'tex2jax: {' +
                   'inlineMath: [[\'$\',\'$\'], ["\\\\(","\\\\)"]],' +
                   'processEscapes: true' +
                 '}' +
               '});' +
               'MathJax.Hub.Startup.onload();';

  if (window.opera) {script.innerHTML = config}
               else {script.text = config}

  document.getElementsByTagName("head")[0].appendChild(script);
};

