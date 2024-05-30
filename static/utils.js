const fs = require("fs");
// const url_to_base = require("../data/base/base.js");
// const url_to_file = require("../data/file/file.js");
const os = require("os");
const networks = os.networkInterfaces();
const result = Object.create({});
let ip_address = null;

for (const name of Object.keys(networks)) {
    for (const network of networks[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
        const familyV4Value = typeof network.family === "string" ? "IPv4" : 4;
        if (network.family === familyV4Value && !network.internal) {
            ip_address = network.address;
            if (!result[name]) {
                result[name] = [];
            }
            result[name].push(network.address);
        }
    }
};

// function randomId() {
//     let id;
//     id = Date.now();
//     id = String(id);
//     id = id.substring(id.length - 6);
//     id = Number(id);
//     return id;
// }

// function stringify(data) {
//     return JSON.stringify(data);
// }

// function updateFile(file_name, data) {
//     fs.writeFile(`${url_to_base}/${file_name}.json`, stringify(data), (err) => {
//         if (err) {
//             throw err;
//         } else {
//             console.log(`${file_name}.json changed`);
//         }
//     });
// }

// const jwt = require('jsonwebtoken');

// function verifyToken(req, res, next) {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];

//     if (!token) {
//         return res.status(401).json({ message: 'Missing authorization header' });
//     }

//     try {
//         const decoded = jwt.verify(token, 'secret-key');
//         req.user = decoded;
//         next();
//     } catch (error) {
//         return res.status(401).json({ message: 'Invalid token' });
//     }
// }

// function deleteFile(file_name) {
//     let errr = null
//     fs.unlinkSync(file_name, (err) => {
//         if (err) errr = err;
//         console.log(`${file_name} was deleted`);
//     });
//     return new Promise((resolve, reject) => {
//         if (errr) reject(errr)
//         else resolve('Succesful')
//     })
// }

module.exports = { ip_address, };