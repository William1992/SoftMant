const employeCtrl = {};
const Employe = require('../models/employee');
const Resultado_SW = require('../constantes/_CONST');

employeCtrl.getEmployees = async (req, res) => {
    const employees = await Employe.find(); //busca todos los elementos de la base de datos
    res.json(employees);
};

employeCtrl.createEmploye = async (req, res) => {
    const employee = new Employe(req.body);
    await employee.save();
    res.json({
        'status': 'Ingreso correcto'
    });
}
employeCtrl.getEmployee = async (req, res) => {
    console.log(req.params);
    const employe = await Employe.findById(req.params.id);
    res.json(employe);
};

employeCtrl.editEmploye = async (req, res) => {
    const { id } = req.params; // otra forma para coger el ID es lo mismo que 'req.params.id'
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Employe.findByIdAndUpdate(id, { $set: employee }, { new: true });
    res.json({
        status: 'Persona actualizada'
    });

}
employeCtrl.deleteEmploye = async (req, res) => {
    await Employe.findByIdAndRemove(req.params.id);
    res.json({ status: 'Persona eliminada' });
};


module.exports = employeCtrl;