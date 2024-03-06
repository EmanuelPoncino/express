let productsController = {
    getAll: (req, res) => res.send('estas viendo el listado de productos'),
    getOne: (req, res) => res.send(`estas viendo el detalle de productos N° ${req.params.id}`),
}

module.exports = productsController