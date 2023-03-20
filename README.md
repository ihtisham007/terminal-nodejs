# Consfile

Get data from large file and `Search` from it also generate `SQL` and `JSON` 

### What you can do?
 
`search file`
`search text`
`get file size`
`generate sql`
`generate json`

### Usage/Example
  
### install as Globally

`npm install --global consfile`

### Example(1) Get file and size if it. 

`consfile --file directories/fileName.csv`

### Example(2) search from file

`consfile -f directories/fileName.csv -s 123`

### Example(3) create sql file from csv

`consfile --file userData.csv --generate sql --output newsql.sql`
