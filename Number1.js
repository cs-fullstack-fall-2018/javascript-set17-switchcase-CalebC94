function main() {

    var userInput = parseInt(prompt("Enter a number: "));

    switch (userInput) {
        case 1:
            console.log(1);
            break;
        case 10:
            console.log(2);
            break;
        case 11:
            console.log(3);
            break;
        case 100:
            console.log(4);
            break;
        case 101:
            console.log(5);
            break;
        default:
            console.log("invalid");
            break;
    }
}

main();