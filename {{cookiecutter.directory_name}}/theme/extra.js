// La siguiente líne no sé para qué sirve. La copié de la documentación de pymdown-extensions
// !function(){"use strict";var e=function(e,t,n){for(var o=function(e){for(var t="",n=0;n<e.childNodes.length;n++){var o=e.childNodes[n];if("code"===o.tagName.toLowerCase())for(var a=0;a<o.childNodes.length;a++){var i=o.childNodes[a];if("#text"===i.nodeName&&!/^\s*$/.test(i.nodeValue)){t=i.nodeValue;break}}}return t},a=function(e){return e.textContent||e.innerText},i=document.querySelectorAll("article"),r=document.querySelectorAll("pre.".concat(t,",div.").concat(t)),d=void 0===n?{}:n,c=0;c<r.length;c++){var l=r[c],s=document.createElement("div");s.className=t,s.style.visibility="hidden",s.style.position="absolute";var u="pre"===l.tagName.toLowerCase()?o(l):a(l);i[0].appendChild(s);e.parse(u).drawSVG(s,d),s.style.visibility="visible",s.style.position="static",l.parentNode.insertBefore(s,l),l.parentNode.removeChild(l)}};!function(e){document.addEventListener?document.addEventListener("DOMContentLoaded",e):document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e()})}(function(){"undefined"!=typeof flowchart&&e(flowchart,"uml-flowchart"),"undefined"!=typeof Diagram&&e(Diagram,"uml-sequence-diagram",{theme:"simple"})})}();
// Lo siguiente es para que funcione KaTeX
(function () {
    'use strict';
    
    var katexMath = (function () {
        var maths = document.querySelectorAll('.arithmatex'),
            tex;
    
        for (var i = 0; i < maths.length; i++) {
          tex = maths[i].textContent || maths[i].innerText;
          if (tex.startsWith('\\(') && tex.endsWith('\\)')) {
            katex.render(tex.slice(2, -2), maths[i], {'displayMode': false});
          } else if (tex.startsWith('\\[') && tex.endsWith('\\]')) {
            katex.render(tex.slice(2, -2), maths[i], {'displayMode': true});
          }
        }
    });
    
    (function () {
      var onReady = function onReady(fn) {
        if (document.addEventListener) {
          document.addEventListener("DOMContentLoaded", fn);
        } else {
          document.attachEvent("onreadystatechange", function () {
            if (document.readyState === "interactive") {
              fn();
            }
          });
        }
      };
    
      onReady(function () {
        if (typeof katex !== "undefined") {
          katexMath();
        }
      });
    })();
    
    }());