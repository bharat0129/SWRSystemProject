const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
//app.use(express.static('1.Presentation'));


const mysql = require('mariadb');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'swrsystem',
  port: 3306
});


//---------------------------------- Select Customer from City ------------------------------------------

app.get('/CustomerCity', function (req, res) {
  let content = [];

  const input = req.query.city;
  console.log("input is " + input);

  const sql = 'select Customer_Name, Mobile_No, Email_Id from customer where City  = ?';
  const arr = [input];

  connection.query(sql, arr, function (err, rows) {
    if (err) {
      console.log("Something went wrong");
    }
    else {
      console.log("Number of Rows" + " " + rows.length);
      if (rows.length > 0) {
        content = rows;
      }
    }
    res.send(content);
  });
});

//---------------------------------- Select Customer from State ------------------------------------------

app.get('/CustomerState', function (req, res) {
  let content = [];

  const input = req.query.state;
  console.log("input is " + input);

  const sql = 'select Customer_Name, Mobile_No, Email_Id from customer where State  = ?';
  const arr = [input];

  connection.query(sql, arr, function (err, rows) {
    if (err) {
      console.log("Something went wrong");
    }
    else {
      console.log("Number of Rows" + " " + rows.length);
      if (rows.length > 0) {
        content = rows;
      }
    }
    res.send(content);
  });
});

//---------------------------------- Select All Customers ---------------------------------------------

app.get('/selectcustomer', function (req, res) {
  let content = [];

  const sql = 'select * from customer';

  connection.query(sql, function (err, rows) {
    if (err) {
      console.log("Something went wrong");
    }
    else {
      console.log("Number of Rows" + " " + rows.length);
      if (rows.length > 0) {
        content = rows;
      }
    }
    res.send(content);
  });
});

//---------------------------------- Select All Vendors ---------------------------------------------

app.get('/selectvendor', function (req, res) {
  let content = [];

  const sql = 'select * from vendor';

  connection.query(sql, function (err, rows) {
    if (err) {
      console.log("Something went wrong");
    }
    else {
      console.log("Number of Rows" + " " + rows.length);
      if (rows.length > 0) {
        content = rows;
      }
    }
    res.send(content);
  });
});


//---------------------------------- Select Vendor from City ------------------------------------------

app.get('/VendorCity', function (req, res) {
  let content = [];

  const input = req.query.cityname;
  console.log("input is " + input);

  const sql = ' select * from vendor where City_ID IN (select City_ID from city where City_Name = ? )';
  const arr = [input];

  connection.query(sql, arr, function (err, rows) {
    if (err) {
      console.log("Something went wrong");
    }
    else {
      console.log("Number of Rows" + " " + rows.length);
      if (rows.length > 0) {
        content = rows;
      }
    }
    res.send(content);
  });
});

//---------------------------------- Select Vendor from State ------------------------------------------

app.get('/VendorState', function (req, res) {
  let content = [];

  const input = req.query.state;
  console.log("input is " + input);

  const sql = 'select * from vendor where State_ID IN (select State_ID from state where State_Name = ?)';
  const arr = [input];

  connection.query(sql, arr, function (err, rows) {
    if (err) {
      console.log("Something went wrong");
    }
    else {
      console.log("Number of Rows" + " " + rows.length);
      if (rows.length > 0) {
        content = rows;
      }
    }
    res.send(content);
  });
});

//---------------------------------- Delete from Customer by Mobile No ------------------------------------------

app.get('/DeleteCustomer', function (req, res) {
  let content = [];

  const input = req.query.mobileno;

  console.log("Reading Input " + input);

  const sql = 'Delete from Customer where Mobile_No = ?';
  const arr = [input];


  connection.query(sql, arr, function (err, rows) {
    if (err) {
      console.log("Something went wrong...");
    }
    else {
      console.log("Number of Rows " + rows.length);
      if (rows.length > 0) {
        content = rows;
      }
    }
    res.send(content);
  });
});

//---------------------------------- Delete from Vendor by Mobile No ------------------------------------------

app.get('/DeleteVendor', function (req, res) {
  let content = [];

  const input = req.query.mobileno;

  console.log("Reading Input " + input);

  const sql = 'Delete from vendor where Mobile_No  = ?';
  const arr = [input];


  connection.query(sql, arr, function (err, rows) {
    if (err) {
      console.log("Something went wrong...");
    }
    else {
      console.log("Number of Rows " + rows.length);
      if (rows.length > 0) {
        status.Status = 1;
        status.content = rows;
      }
    }
    res.send(content);
  });
});


app.listen(8081, function () {
  console.log("server listening at port 8081...");
});