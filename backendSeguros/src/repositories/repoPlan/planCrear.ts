export const SQL_PLAN_CREAR ={
    CREAR:
    "INSERT INTO plan() values() RETURNING codplan",
  
    CONSULTARPLAN:
    "SELECT COUNT(codplan) AS amount\
    FROM plan \
    WHERE codplan=$1",
}