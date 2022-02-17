const express = require('express');
const sql = require('mssql');

const app = express();
const port = 5500;

const config = {
   user: 'sa',
   password: 'ThisIsNotASecurePassword123',
   server: 'localhost',
   database: 'AdventureWorks2019',
   trustServerCertificate: true,
}

app.get('/products', (req, res) => {
   const productQuery = `SELECT TOP 20 pc.Name  as CategoryName,
                           psc.Name as SubCategoryName,
                          p.name   as ProductName
                       FROM [Production].[ProductSubCategory] psc
                       JOIN [Production].[Product] p ON psc.ProductSubcategoryID = p.productsubcategoryid
                       JOIN [Production].[ProductCategory] pc on psc.ProductCategoryID = pc.ProductCategoryID`
   const request = new sql.Request();
   request.query(productQuery, (err, result) => {
      if (err) res.status(500).send(err);
      res.send(result);
   });
});

sql.connect(config, err => {
   if (err) {
      console.log('Failed to open a SQL Database connection.', err.stack);
      process.exit(1);
   }
   app.listen(port, () => {
      console.log(`App is listening at http://localhost:${port}`);
   });
});