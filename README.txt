DESCRIPTION
===========
MathJax is the up-to-date ajax framework to display math in HTML environment using LaTeX and MathML syntax. This module allows to activate MathJax-based LaTeX rendering on your drupal website.

Currently there is no settings available: MathJax is activated on all nodes and profile pages. LaTeX inline formula can be entered as $formula$ or \(formula\), and display formula as $$formula$$ or \[formula\].

Dollar signs in formulas can be escaped using \. < and > signs must be handled with care as they may be interpreted as start and end of HTML tags: either use spaces around (e.g. $< dx >$) or the HTML special chars &lt; and &gt; or their MathJax LaTeX-like equivalents \lt and \gt.
More details on MathJax TeX support on http://www.mathjax.org/resources/docs/?tex.html


INSTALLATION
============
1. Download and install the "Libraries API" module: uncompress the "libraries" folder, copy it to your "modules" directory, and enable it under Administer >> Site building >> Modules.
http://drupal.org/project/libraries

2. Place the "mathjax" folder in your "modules" directory (e.g. sites/all/modules/mathjax).

3. Install third party MathJax software
     Download MathJax source from MathJax website (e.g. http://sourceforge.net/projects/mathjax/files/MathJax/v1.0.1/MathJax-v1.0.1a.zip)
     Unarchive it into your "libraries" directory (e.g. sites/all/libraries). You may need to create the "libraries" directory first.
     Rename it to "mathjax" (lower case).
NB: Relying on libraries module to locate 'mathjax' folder allows you to place it in a site specific (e.g. sites/mysite/libraries) or default folder (e.g. sites/all/libraries). Site-specific versions are selected preferentially.

3. Enable the MathJax module under Administer >> Site building >> Modules.

4. Test it by adding a LaTeX formula between '$' in any node body (e.g. $2 + 2 = 4$).


INSTALLATION USING DRUSH
========================

drush dl libraries
drush en libraries mathjax
drush mathjax-download


AUTHOR
======
Module written by Thomas Julou.
http://drupal.org/user/273952

MathJax
http://www.mathjax.org/


TO DO
=====
- set mathjax parameters on admin page (size, source type, ...)
- show source code in lightbox-like modules (set link attribute)
- support MathML syntax


CHANGE LOG
==========
0.1: First release.
