var hljs = require('highlight.js') // https://highlightjs.org/
hljs.addPlugin(new CopyButtonPlugin());
// Actual default values
var md = require('markdown-it')({
  // highlight: function (str, lang) {
  //   if (lang && hljs.getLanguage(lang)) {
  //     try {
  //       return '<pre class="hljs"><code>' +
  //         hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
  //         '</code></pre>';
  //     } catch (__) {}
  //   }
  //
  //   return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  // }
});
document.getElementById('rendered-md').innerHTML = md.render((new URLSearchParams(window.location.search)).get('text'));

hljs.highlightAll();
