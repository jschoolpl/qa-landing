// some comments

function helloWorld(str) {
    if (str == 'world') {
        return 'Hello world!';
    } else {
        return 'Hello ' + str + '!';
    }
}

const greeting = helloWorld('world');
console.log(greeting);