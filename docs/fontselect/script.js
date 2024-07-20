let selectnumber = 0;
document.getElementById('link1').addEventListener('click', function(event) {
    localStorage.setItem('selectnumber', 1);
});

document.getElementById('link2').addEventListener('click', function(event) {
    localStorage.setItem('selectnumber', 2);
});

document.getElementById('link3').addEventListener('click', function(event) {
    localStorage.setItem('selectnumber', 3);
});

document.getElementById('link4').addEventListener('click', function(event) {
    localStorage.setItem('selectnumber', 4);
});