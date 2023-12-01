
// provide enum for UI drop-down to select built-in flexFX samples
enum MoodSound {
    //% block="Tweet"
    TWEET = 1,
    //% block="Laugh"
    LAUGH = 2,
    //% block="Snore"
    SNORE = 3,
    //% block="Doo"
    DOO = 4,
    //% block="Eh?"
    QUERY = 5,
    //% block="Uh-oh"
    UHOH = 6,
    //% block="Moan"
    MOAN = 7,
    //% block="Duh!"
    DUH = 8,
    //% block="Waah"
    WAAH = 9,
    //% block="Growl"
    GROWL = 10
}

// *** SIMPLE UI BLOCKS ***


/** 
Hum randomly for a while...
*/
//% block="hum || $repeat times with strength $strength over $duration ms"
//% expandableArgumentMode="toggle"
//% repeat.min=1 repeat.max=100 repeat.defl=10
//% strength.min=0 strength.max=255 strength.defl=180
//% duration.min=1 duration.max=9999 duration.defl=2000
//% weight=250
function hum(repeat = 12, strength = 180, duration = 4000) {
    quiet = false;
    let ave = duration / repeat;
    let gap = 0.2 * ave;
    let skip = true;
    for (let index = 0; index < repeat; index++) {
        let span = randint(0.7 * ave, 1.4 * ave);
        let pitch = randint(200, 400);
        if ((span > ave) || (skip)) {
            // mostly "Dum"...
            flexFX.performFlexFX("hum", true, pitch, strength, span);
            basic.pause(gap);
            skip = false;
        } else {
            // .. with occasional short, higher-pitched "Di" (unrepeated)
            flexFX.performFlexFX("hum", true, 1.33 * pitch, strength, 0.3 * ave);
            basic.pause(gap / 2);
            skip = true;
        }
    }
    quiet = true;
}

/** 
Complain randomly for a while...
*/
//% block="grumble || $repeat times with strength $strength over $duration ms"
//% expandableArgumentMode="toggle"
//% repeat.min=1 repeat.max=100 repeat.defl=5
//% strength.min=0 strength.max=255 strength.defl=250
//% duration.min=1 duration.max=9999 duration.defl=3000
//% weight=245
function grumble(repeat = 5, strength = 180, duration = 4000) {
    quiet = false;
    let ave = duration / repeat;
    let gap = 0.2 * ave;
    for (let index = 0; index < repeat; index++) {
        let span = randint(0.4 * ave, 1.8 * ave);
        if (span > 0.8 * ave) {
            flexFX.performFlexFX("shout", true, randint(150, 300), strength, 0.5 * span);
        } else {
            flexFX.performFlexFX("uhoh", true, randint(100, 200), 1.2 * strength, 2 * span);
        }
        pause(gap);
    }
    quiet = true;
}

/**
Giggle for a bit...
*/
//% block="giggle || $repeat times with strength $strength over $duration ms"
//% expandableArgumentMode="toggle"
//% repeat.min=1 repeat.max=100 repeat.defl=12
//% strength.min=0 strength.max=255 strength.defl=200
//% duration.min=1 duration.max=9999 duration.defl=4000
//% weight=240
function giggle(repeat = 10, strength = 200, duration = 2000) {
    quiet = false;
    let ave = duration / repeat;
    let gap = 0.2 * ave;
    let pitch = randint(350, 700);
    for (let index = 0; index < repeat; index++) {
        let span = randint(0.4 * ave, 1.8 * ave);
        flexFX.performFlexFX("laugh", true, pitch, strength, span);
        pitch = 0.95 * pitch;
        basic.pause(gap);
    }
    quiet = true;
}


/** 
Whistle a happy tune...
*/
//% block="whistle || $repeat times with strength $strength over $duration ms"
//% expandableArgumentMode="toggle"
//% repeat.min=1 repeat.max=100 repeat.defl=8
//% strength.min=0 strength.max=255 strength.defl=180
//% duration.min=1 duration.max=9999 duration.defl=2500
//% weight=235
function whistle(repeat = 12, strength = 180, duration = 2500) {
    quiet = false;
    let ave = duration / repeat;
    let gap = 0.2 * ave;
    for (let index = 0; index < repeat; index++) {
        let span = randint(0.4 * ave, 1.8 * ave);
        flexFX.performFlexFX("tweet", true, randint(800, 2000), strength, span);
        basic.pause(gap);
    }
    quiet = true;
}


/** 
Sleep rather noisily...
*/
//% block="snore || $repeat times with strength $strength over $duration ms"
//% expandableArgumentMode="toggle"
//% repeat.min=1 repeat.max=100 repeat.defl=8
//% strength.min=0 strength.max=255 strength.defl=150
//% duration.min=1 duration.max=9999 duration.defl=5000
//% weight=230
function snore(repeat = 6, strength = 150, duration = 10000) {
    quiet = false;
    let ave = duration / repeat;
    for (let index = 0; index < repeat; index++) {
        let span = randint(0.9 * ave, 1.1 * ave);
        flexFX.performFlexFX("snore", true, 1, 80, 0.3 * span);
        pause(0.1 * ave);
        flexFX.performFlexFX("snore", true,, 1, 150, 0.4 * span);
        pause(0.3 * ave);
    }
    quiet = true;
}


/** 
Be just a bit frightened...
*/
//% block="whimper || $repeat times with strength $strength over $duration ms"
//% expandableArgumentMode="toggle"
//% repeat.min=1 repeat.max=100 repeat.defl=10
//% strength.min=0 strength.max=255 strength.defl=100
//% duration.min=1 duration.max=9999 duration.defl=4000
//% weight=225
function whimper(repeat = 8, strength = 150, duration = 5000) {
    if (quiet) {
        quiet = false;
        let ave = duration / repeat;
        let gap = 0.5 * ave;
        for (let index = 0; index < repeat; index++) {
            flexFX.performFlexFX("moan", true,, randint(350, 550), strength, randint(0.4 * ave, 1.4 * ave));
            basic.pause(gap);
        }
        quiet = true;
    }
}

/** 
Be really sad...
*/
//% block="cry || $repeat times with strength $strength over $duration ms"
//% expandableArgumentMode="toggle"
//% repeat.min=1 repeat.max=100 repeat.defl=8
//% strength.min=0 strength.max=255 strength.defl=200
//% duration.min=1 duration.max=9999 duration.defl=3000
//% weight=220
function cry(repeat = 8, strength = 200, duration = 3500) {
    if (quiet) {
        quiet = false;
        let ave = duration / repeat;
        let gap = 0.3 * ave;
        for (let index = 0; index < repeat; index++) {
            let span = randint(0.5 * ave, 1.2 * ave);
            if (span > ave) {
                flexFX.performFlexFX("moan", true, randint(350, 550), 1.25 * strength, 0.7 * span);
            } else {
                flexFX.performFlexFX("cry", true,, randint(350, 450), 0.25 * strength, 1.3 * span);
            }
            basic.pause(gap);
        }
        quiet = true;
    }
}

/** 
Be a bit angry...
*/
//% block="shout || $repeat times with strength $strength over $duration ms"
//% expandableArgumentMode="toggle"
//% repeat.min=1 repeat.max=100 repeat.defl=5
//% strength.min=0 strength.max=255 strength.defl=250
//% duration.min=1 duration.max=9999 duration.defl=2500
//% weight=215
function shout(repeat = 5, strength = 250, duration = 2500) {
    if (quiet) {
        quiet = false;
        let ave = duration / repeat;
        let gap = 0.3 * ave;
        for (let index = 0; index < repeat; index++) {
            flexFX.performFlexFX("shout", true, randint(320, 450), strength, randint(0.5 * ave, 1.3 * ave));
            basic.pause(gap);
        }
        quiet = true;
    }
}


function doMood(mood: number) {
    switch (mood) {
        case 1: hum();
            break;
        case 2: grumble();
            break;
        case 3: giggle();
            break;
        case 4: whistle();
            break;
        case 5: snore();
            break;
        case 6: whimper();
            break;
        case 7: cry();
            break;
        case 8: shout();
            break;
    }
    basic.pause(1000)
}

function doSound(sound: number) {
    switch (sound) {
        case 1: flexFX.performFlexFX("tweet", true, 800, 200, 400);
            break;
        case 2: flexFX.performFlexFX("laugh", true, 400, 200, 400);
            break;
        case 3: flexFX.performFlexFX("snore", true, 1, 200, 400);
            break;
        case 4: flexFX.performFlexFX("hum", true, 500, 200, 300);
            break;
        case 5: flexFX.performFlexFX("query", true, 400, 200, 700);
            break;
        case 6: flexFX.performFlexFX("uhoh", true, 350, 200, 650);
            break;
        case 7: flexFX.performFlexFX("moan", true, 500, 200, 700);
            break;
        case 8: flexFX.performFlexFX("duh", true 300, 200, 500);
            break;
        case 9: flexFX.performFlexFX("cry", true, 600, 200, 1100);
            break;
        case 10: flexFX.performFlexFX("shout", true, 250, 200, 700);
    }
    basic.pause(1000)
}

// now exercise built-in sounds and moods
let quiet = true
let testMoods = false
let choice = 0;
basic.showNumber(choice + 1);
let top = 10;
input.onButtonPressed(Button.A, function () {
    choice = (++choice) % top;
    basic.showNumber(choice + 1);
})
input.onButtonPressed(Button.B, function () {
    if (testMoods) {
        doMood(choice + 1);
    } else {
        doSound(choice + 1);
    }
})
input.onButtonPressed(Button.AB, function () {
    if (testMoods) {
        testMoods = false;
        top = 10;
    } else {
        testMoods = true;
        top = 8;
    }
    let choice = 0;
    basic.showNumber(choice + 1);
})
