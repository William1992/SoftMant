const express = require('express');
const router = express.Router();
const employee = require('../controller/employee.controller');

router.get('/',employee.getEmployees );
router.post('/', employee.createEmploye);
router.get('/id:',employee.getEmployee);
router.put('/id:', employee.editEmploye);
router.delete('/id:',employee.deleteEmploye);


module.exports = router;