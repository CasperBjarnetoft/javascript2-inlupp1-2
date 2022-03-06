const Model = require('./productSchema')

// GET (all models)
exports.getModels = async (req, res) => {

    try {
        const data = await Model.find()
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Somthing went wrong when fetching the models'
        })
    }

}


// GET (one model by id)
exports.getModelById = (req, res) => {

    Model.exists({ _id: req.params.id }, (err, model) => {

        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'You made a bad request'
            })
        }

        if(!model) {
            res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'Oops, that model does not exist',
            })
        }

        Model.findById(req.params.id)
          .then(data => res.status(200).json(data))
          .catch(err => {
            res.status(500).json({
                statusCode: 500,
                status: false,
                message: err.message || 'Internal server error'
            })
        })       
    })
}

// POST (Create a model)
exports.createModel = (req, res) => {

    Model.exists({ model: req.body.model }, (err, result) => {

        if(err) {
            return res.status(500).json(err)
        }

        if(result) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'That motorycle model already exist'
            })
        }
        Model.create({
            image:          req.body.image,       
            model:          req.body.model,
            year:           req.body.year,
            price:          req.body.price,
            description:    req.body.description
            
        })
        .then(data => {
            res.status(201).json({
                statusCode: 201,
                status: true,
                message: 'motorcycle model created successfully',
                data
            })
        })
        .catch(err => {
            res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed to add motorcycle model',
                err
            })
        })

    })
}

// PATCH (uppdate model)
exports.uptadeModel = (req, res) => {

    Model.exists({ _id: req.params.id }, (err, result) => {

        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'You made a bad request'
            })
        }

        if(!result) {
            res.status(401).json({
                statusCode: 401,
                status: false,
                message: 'Oops, that model does not exist',
            })
        }

        Model.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then(data => {
                res.status(200).json({
                    statusCode: 200,
                    status: true,
                    message: 'motorcycle model uppdated successfully',
                    data
                })
            })
            .catch(err => {
                if(err.code === 10000) {
                    return res.status(400).jso({
                        statusCode: 400,
                        status: false,
                        message: 'A product with that name already exist'
                    })
                }

                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to update product'
                })
            })
    })
}

// DELETE (remove model)
exports.deleteModel = (req, res) => {

    Model.exists({ _id: req.params.id }, (err, result) => {

        if(err) {
            res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'You made a bad request',
            })
        }

        if(!result) {
            res.status(401).json({
                statusCode: 401,
                status: false,
                message: 'Oops, that model does not exist',
            })
        }

        Model.deleteOne({ _id: req.params.id })
            .then(() => {
                res.status(200).json({
                    statusCode: 200,
                    status: true,
                    message: 'Model deleted',
                })
            })
            .catch(err => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to delete model',
                    err
                })
            })
    })
}