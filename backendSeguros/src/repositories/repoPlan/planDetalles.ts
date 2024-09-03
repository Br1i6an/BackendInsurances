export const SQL_PLAN_DETALLES ={
    DETALLES: 'SELECT codplan, nombre, cuotasplan, edadminima, edadmaxima  \
    FROM plan \
    WHERE codplan = $1',
}