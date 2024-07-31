import { rowID, rowElement } from './interface';
import * as CRUD from './crud';

const row: rowElement= {
    firstName: 'Gullaume',
    lastName: 'Salva'
}

const newRowID: rowID = CRUD.insertRow
row.age = 23;
const updateRow: rowElement = row;

CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);
