document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('preview').innerHTML = marked(`# Markdown editor \n ## Freecodecamp Frontend Assignment \n [Im an inline-style link](https://www.google.com) \n
  Rendered By Marked https://github.com/markedjs/marked `);

});

function markupChange() {

    let editor = document.getElementById('editor');

    document.getElementById('preview').innerHTML = marked(editor.value);

}