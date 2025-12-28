const { Router } = require("express");
const usersController = require("../controllers/users.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.use(authMiddleware);

router.post("/", usersController.create);
router.get("/", usersController.getAll);
router.get("/:id", usersController.getById);
router.put("/:id", usersController.update);
router.delete("/:id", usersController.remove);

module.exports = router;
