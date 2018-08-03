function main() {

    var userInput = prompt("Enter a Letter: ");

    switch (userInput) {
        case 'A':
            document.write("Your grade is between 90 to 100");
            break;
        case 'B':
            document.write("Your grade is between 80 to 89");
            break;
        case 'C':
            document.write("Your grade is between 70 to 79");
            break;
        case 'D':
            document.write("Your grade is between 60 to 69");
            break;
        case 'F':
            document.write("Your grade is between 0 to 59");
            break;
        default:
            document.write("Invalid grade");
            break;
    }
}

main();