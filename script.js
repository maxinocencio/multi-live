document.getElementById('submit').onclick = function() {

    var stream1 = document.getElementById('streamer1').value
    var stream2 = document.getElementById('streamer2').value
    
    var removerEscolha = document.getElementById('escolha');
        removerEscolha.parentNode.removeChild(removerEscolha);
    
    document.getElementById('streams').innerHTML += `
    <div class="stream">
        <h2>${stream1}</h2>
        <twitch-stream channel="${stream1}" width = 924 height = 600></twitch-stream>
    </div>

    <div class="stream">
        <h2>${stream2}</h2>
        <twitch-stream channel="${stream2}" width = 924 height = 600></twitch-stream>
    </div>

    `
}