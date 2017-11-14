module.exports =  function(env) {
    let host = ''
    if (env == 'dev') {
        host = "'http://localhost:8081'";
    } else {
        host = "'.'"
    }

    var fileData = `export let hostConfig = {
      host: ${host}
    }`
    require('fs').writeFile(require('path').join(__dirname, './host.config.js'), fileData);
    // return obj;
}
