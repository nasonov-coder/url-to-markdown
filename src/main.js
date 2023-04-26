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

// Decode the base64-encoded value
const value = (new URLSearchParams(window.location.search)).get('text') || (()=>{
  const base64Param = (new URLSearchParams(window.location.search)).get('base64');
  console.log(base64Param)
  const atob = window.atob(base64Param)
  console.log(atob)
  const escape = window.escape(atob);
  console.log(escape)
  const decodeURIComponent = window.decodeURIComponent(escape);
  console.log(decodeURIComponent)
  return decodeURIComponent
})()
document.getElementById('rendered-md').innerHTML = md.render(value);

hljs.highlightAll();
