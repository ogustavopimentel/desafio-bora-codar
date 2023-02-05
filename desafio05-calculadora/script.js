
function insert (num) {
    document.getElementById('calc').innerHTML += num;
}

function clean () {
    document.getElementById('calc').innerHTML = "";
}

function cancelEntry () {
    let result = document.getElementById('calc').innerHTML;
    document.getElementById('calc').innerHTML = result.substring(0, result.length -1);
}