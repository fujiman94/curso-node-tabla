const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10)  => {

    try {

        if ( listar ) {
            console.log('==========================')
            console.log(colors.green('      Tabla del:', base    ))
            console.log('==========================')
        }

        let salida = '';

        for ( let i = 1; i <= `${hasta}` ; i++) {
            salida += (`${base} x ${ i } = ${ base * i}\n`);
        }

        if ( listar ) {
            console.log(salida);
        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida, (err) => {
            if ( err ) throw err;

            return(`tabla-${ base }.txt creado`);
        })
    } catch (error) {
        throw error;
    }


}

module.exports = {
    crearArchivo: crearArchivo
}