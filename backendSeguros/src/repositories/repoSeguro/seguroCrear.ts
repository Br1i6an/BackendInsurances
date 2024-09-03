export const SQL_SEGURO_CREAR ={
    CREAR:
    "INSERT INTO datosseguro(nombre,productopermitido,codplan) values($1,$2,$3) RETURNING codseguro",
  
    CONFIRMARSEGURO:
    "SELECT COUNT(codseguro) AS amount\
    FROM datosseguro \
    WHERE codseguro=$1",
}