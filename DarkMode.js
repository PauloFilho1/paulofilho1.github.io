const $html = document.querySelector('html');
const $checkbox = document.getElementById('switch');

$checkbox.addEventListener('change', function() {
    $html.classList.toggle('dark-mode')
});