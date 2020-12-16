const fs = require('fs')

fs.readFile('./assets/cachorro.jpg', (erro, buffer) => {
    console.log('imagem foi bufferizada');
    console.log(buffer);

    fs.writeFile('./assets/cachorro2.jpg', buffer, erro => {
        console.log('Imagem foi escrita');
    })
})