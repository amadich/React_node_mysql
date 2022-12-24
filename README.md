# React_node_mysql
I Created a Web React With used Database [@nodejs &amp;&amp; @Mysql ] , 🌹
###
First You need To Talk the protocole sql with type This command 
```sql
          alter user 'root'@'localhost' identified with mysql_native_password by 'password';
```
![image](https://user-images.githubusercontent.com/74735976/209447643-bb88b995-6a63-44c3-b665-5566d55b7c42.png)

After This You need To Create a Schema (DataBase) and Tables => colomns
![image](https://user-images.githubusercontent.com/74735976/209447684-cc3e54c5-5ecc-454d-a270-e8c413e9b2f2.png)

#
so You need to Create two Folders for (client and server) : 
![image](https://user-images.githubusercontent.com/74735976/209447711-d8f7419f-96b4-46c6-817c-d353372f5b27.png)
###
in The folder server open terminal or type (cd ./server) and install packages : [express , mysql]
```cmd
npm init
npm install mysql express
```
###
if you finish your projectand you have a bad Problem install this pack : [cors]
```cmd
npm install cors
```
###
and let's requires all packs : 
|| Write This Code in index.js  
```js
const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require("cors");

app.use(cors());
app.use(express.json());

```
###

For import DataBase in server (index.js) : 
```js
const db = mysql.createConnection({
    user: "root",
    host: 'localhost',
    password: "admin",
    database: "users_sys"
})
```
 i think this is mysql_connect in php
#
after this Start in your Project in folder [client]
