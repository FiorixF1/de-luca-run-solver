var canvas = document.getElementById("c2canvas");
var ctx = canvas.getContext('webgl2', {preserveDrawingBuffer: true});

var frames = {
                7285: 1,
                8357: 1,
                9470: 1,
                16451: 1,
                18369: 1,
                19590: 1,
                25969: 1,
                28415: 1,
                30173: 1,
                32502: 1,
                34502: 1,
                39233: 1,
                40350: 1,
                46365: 1,
                51120: 1,
                52815: 1,
                54534: 1,
                55815: 1,
                56981: 1,
                58231: 1,
                59365: 1,
                62924: 1,
                64133: 1,
                65255: 1,
                69134: 1,
                70131: 1,
                71919: 1,
                73948: 1,
                76630: 1,
                80080: 1,
                82618: 1,
                84080: 1,
                85599: 1,
                93912: 1,
                96215: 1,
                98750: 1,
                100944: 1,
                102494: 1,
                103529: 1,
                106899: 1,
                108461: 1,
                109929: 1,
                112630: 1,
                120813: 1,
                123761: 1,
                124994: 1,
                125760: 1,
                127782: 1,
                128814: 1,
                130094: 1,
                131427: 1,
                132699: 1,
                134739: 1,
                137187: 1,
                138621: 1,
                141121: 1,
                142775: 1,
                144991: 1,
                146738: 1,
                149079: 1
};

var start;
canvas.addEventListener('click', function() {
    console.log(Date.now() - start)
});

function jump() {
    var e = jQuery.Event( "mousedown", { pageX: 100, pageY: 100 } );
    $('#c2canvas').trigger(e);
    var e = jQuery.Event( "mouseup", { pageX: 100, pageY: 100 } );
    $('#c2canvas').trigger(e);
}

// Assume che il canvas abbia le dimensioni 779*438
function restart() {
    var e = jQuery.Event( "mousedown", { pageX: canvas.offsetLeft + 390, pageY: canvas.offsetTop + 422 } );
    $('#c2canvas').trigger(e);
    var e = jQuery.Event( "mouseup", { pageX: canvas.offsetLeft + 390, pageY: canvas.offsetTop + 422 } );
    $('#c2canvas').trigger(e);
}

// Assume che il canvas abbia le dimensioni 779*438
// Se pixels è uguale a (0, 202, 253) allora GAME OVER
// In realtà NON FUNZIONA perché pixels è sempre (0, 0, 0, 0) per beghe di WebGL
function is_game_over() {
    var pixels = new Uint8Array(4);
    requestAnimationFrame(function() {
        ctx.readPixels(390, 15, 1, 1, ctx.RGBA, ctx.UNSIGNED_BYTE, pixels);
    });
    return pixels.toString() == "0,202,253,255";
}

(function play() {
    jump();
    start = Date.now();
    for (let time in frames) {
        setTimeout(jump, time - 100);
    }
})();
