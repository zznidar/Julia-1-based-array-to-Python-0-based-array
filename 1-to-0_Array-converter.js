// Julia 1-based array to Python/JavaScript 0-based Array in pure JavaScript

input = `2 3 4
    1 5 7
    1 6 8
    1 9 10
    2 6 11
    3 5 12
    2 9 13
    3 10 14
    4 7 15
    4 8 16
    5 13 17
    6 14 17
    7 11 18
    8 12 19
    9 16 18
    10 15 19
    11 12 20
    13 15 20
    14 16 20
    17 18 19`

lines = input.split("\n")
output = []

for (l of lines) {
    cols = l.trim().split(" ");
    tempout = []
    for (c of cols) {
        tempout.push(c-1);
    }
    output.push(tempout);
}
console.log(JSON.stringify(output));