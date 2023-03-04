function receivesAFunction(cb) {
    console.log(cb());
}

receivesAFunction(function () {return "Spy"});

function jeremysFunction() {
    console.log("Jeremy")
}

function returnsANamedFunction() {
    return jeremysFunction
}

function returnsAnAnonymousFunction() {
    return function() {

    }
}
