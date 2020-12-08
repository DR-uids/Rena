import localforage from 'localforage'

const dbName = 'renaDB';

// Create table 1 in databaseName
const fileTable = localforage.createInstance({
    name        : dbName,
    storeName   : 'file-table',
    description : 'store the file info.'
});

export { fileTable }