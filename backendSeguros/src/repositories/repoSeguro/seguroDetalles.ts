export const SQL_SEGURO_DETALLES ={
    DETALLES: 'SELECT codseguro, nombre, productopermitido  \
    FROM datosseguro \
    WHERE codseguro = $1',
}