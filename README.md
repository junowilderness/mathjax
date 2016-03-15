Mathjax for Backdrop CMS
========================

This module integrates the MathJax library into your Backdrop site. MathJax is the
modern JavaScript-based LaTeX rendering solution for the Internet.

INSTALLATION
============

Using the MathJax CDN (recommended)
-------------------------------

1. Install and enable this module.

2. Add the MathJax filter to an existing or new text format under 
   Administration >> Configuration >> Text Formats. Put the MathJax filter at
   the bottom of the "Filter processing order".

3. Test it by adding a LaTeX formula between '$' in any node body (for example: 
   $2 + 2 = 4$). Select the body text format you configured on the Text Formats
   administration screen.


Using a local copy of MathJax (relies on libraries module)
----------------------------------------------------------

1. Install and enable this module.

2. Install and enable "libraries". See https://github.com/backdrop-contrib/libraries.

3. Install the third-party MathJax software:
     Download MathJax source from the MathJax website.
     Un-archive it into your "libraries" directory (e.g. sites/all/libraries).
     You may need to create the "libraries" directory first.
     Rename it to "mathjax" (lower case).
Relying on the libraries module to locate the 'mathjax' folder allows you to place
it in a site-specific directory (e.g. sites/mysite/libraries) or in the default directory
(e.g. sites/all/libraries). Site-specific versions are selected preferentially.

4. Follow from step #2 above.

ORIGINAL AUTHOR
===============
Module written by Thomas Julou.

http://drupal.org/user/273952

CREDITS
=============
2013: Chris McCafferty (cilefen) https://drupal.org/u/cilefen

2014: P. Magunia (pmagunia) https://www.drupal.org/u/pmagunia

