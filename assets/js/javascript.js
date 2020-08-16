var button = document.getElementById('button-left');

button.onclick = function() {
    var div = document.getElementById('tab-left');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

var button = document.getElementById('button-right');

button.onclick = function() {
    var div = document.getElementById('tab-right');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};
