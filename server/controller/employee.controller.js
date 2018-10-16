const employeCtrl={};
const Employe = require('../models/employee'); 

employeCtrl.getEmployees = async(req,res) => {
    const employees = await Employe.find(); //busca todos los elementos de la base de datos
    res.json(employees);
};

employeCtrl.createEmploye = async(req,res)=>{
const employee = new Employe (req.body);
}
employeCtrl.getEmployee = function(){
    
}

employeCtrl.editEmploye = function(){

}
employeCtrl.deleteEmploye =  function(){

}
 

module.exports = employeCtrl;