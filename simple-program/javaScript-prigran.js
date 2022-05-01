// comment of javascript
// single line comment
/*
    multi line comment
 */

function sayHello() {
    alert('hee boss');
}

document.getElementById(div);
document.write("hii gagan");

function problem() {
    document.write("Entering the loop!<br /> ");
    outerloop: // This is the label name
        for (var i = 0; i < 5; i++) {
            document.write("Outerloop: " + i + "<br />");
            innerloop:
                for (var j = 0; j < 5; j++)
                    Javascript
            61
            {
                if (j > 3) break; // Quit the innermost loop
                // if (i == 2) break innerloop; // Do the same thing
                if (i == 4) break outerloop; // Quit the outer loop
                document.write("Innerloop: " + j + " <br />");
            }
        }
    document.write("Exiting the loop!<br /> ");

}

// function over() {
//     document.write ("Mouse Over");
// }
// function out() {
//     document.write ("Mouse Out");
// }
