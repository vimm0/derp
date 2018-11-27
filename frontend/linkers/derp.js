// function initDerp() {
//
//
// }

window.onload = function () {
    let {PythonShell} = require('python-shell')
    var path = require("path")


    var options = {
        scriptPath: path.join(__dirname, '/../backend/'),
        args : 'runserver'
    }

    var derp = new PythonShell('./manage.py', options);
    derp.on('message', function (message) {
        console.log(message);
    })
}
