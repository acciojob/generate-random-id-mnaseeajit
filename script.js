function getRandomChar() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
}

function makeid(l) {
    let res = "";
    for (let i = 0; i < l; i++) {
        res += getRandomChar();
    }       
    return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
