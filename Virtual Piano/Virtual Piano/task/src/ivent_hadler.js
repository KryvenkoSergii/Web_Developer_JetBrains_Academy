document.addEventListener("keydown", function (event) {
    const array_white_keys = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];
    const array_black_keys = ['W', 'E', 'T', 'Y', 'U'];

    let pressedKey = event.key.toUpperCase();
    if (array_white_keys.includes(pressedKey)) {
        new Audio("../src/white_keys/" + event.key + ".mp3").play();
        console.log("The '" + event.key + "' key is pressed.");
    } else if (array_black_keys.includes(pressedKey)) {
        new Audio("../src/black_keys/" + event.key + ".mp3").play();
        console.log("The '" + event.key + "' key is pressed.");
    } else {
        console.log("Warning: wrong key");
    }

    // if (event.code == "KeyA") {
    //     let audioA = new Audio("../src/white_keys/A.mp3");
    //     audioA.play();
    //     console.log("The '" + event.key + "' key is pressed.");
    // } else if (event.code == "KeyS") {
    //     let audioS = new Audio("../src/white_keys/S.mp3");
    //     audioS.play();
    //     console.log("The '" + event.key + "' key is pressed.");
    // } else if (event.code == "KeyD") {
    //     let audioD = new Audio("../src/white_keys/D.mp3");
    //     audioD.play();
    //     console.log("The '" + event.key + "' key is pressed.");
    // } else if (event.code == "KeyF") {
    //     let audioF = new Audio("../src/white_keys/F.mp3");
    //     audioF.play();
    //     console.log("The '" + event.key + "' key is pressed.");
    // } else if (event.code == "KeyG") {
    //     let audioG = new Audio("../src/white_keys/G.mp3");
    //     audioG.play();
    //     console.log("The '" + event.key + "' key is pressed.");
    // } else if (event.code == "KeyH") {
    //     let audioH = new Audio("../src/white_keys/H.mp3");
    //     audioH.play();
    //     console.log("The '" + event.key + "' key is pressed.");
    // } else if (event.code == "KeyJ") {
    //     let audioJ = new Audio("../src/white_keys/J.mp3");
    //     audioJ.play();
    //     console.log("The '" + event.key + "' key is pressed.");
    // } else {
    //     console.log("Warning: wrong key '" + event.key + "'");
    // }
});