function addTagToTextarea(spanId, textareaId) {
    document.getElementById(spanId).onclick = function () {
        const tagContent = this.innerHTML; // Get the innerHTML of the span
        const textarea = document.getElementById(textareaId); // Get the textarea element
        textarea.value += tagContent; // Append the tag content to the textarea
    };
}

/*
document.getElementById('post').onfocus = function () {
    this.select(); // Select all content in the textarea
};
*/
