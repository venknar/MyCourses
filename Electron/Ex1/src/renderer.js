const electron = require('electron')

const ipc = electron.ipcRenderer

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById(`start`).addEventListener(`click`, _=> {        
        ipc.send('countdown-start')
    })
    
})

ipc.on('countdown', (evt, count) => {
    document.getElementById('count').innerHTML = count;
})


