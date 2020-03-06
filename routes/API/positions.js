const router = require("express").Router();
const positionControl = require("../../controllers/positionController"); //CRUD Operations

//matches "api/position" path
router.route("/")
    .get(positionControl.findAll)
    .post(positionControl.create);

//matches "api/position/:id" path
router.route("/:id")
    .get(positionControl.findById)
    .put(positionControl.update)
    .delete(positionControl.delete);

module.exports=router;