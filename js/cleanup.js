document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelectorAll('.two-factor-not-configured').forEach(function (el) {
        el.parentNode.parentNode.removeChild(el.parentNode);
    })
})
