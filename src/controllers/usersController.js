let usersController = {
    getAll: (req, res) => res.send('estas viendo el listado de usuario'),
    getOne: (req, res) => res.send(`estas viendo el detalle de usuario N° ${req.params.id}`),
}

module.exports = usersController