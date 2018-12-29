type MeuToken = string |  number;

function processaToken(token: MeuToken) {
    if(typeof(token) === 'string') {

        // typescript entende que é o tipo string e faz autocomplete para este tipo. A função replace só existe em string
        return token.replace(/2/g,'X');
    } else {
        // toFixed só existe em mumber!
        return token.toFixed().replace(/2/g,'X');
    }
}

const tokenProcessado = processaToken('1234');