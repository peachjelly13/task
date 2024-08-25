import { Router } from "express";
import { userResponse } from "../controllers/userController.js";
import { operation } from "../controllers/userController.js";
const router = Router();

router.route("/bfhl").post(userResponse);
router.route("/bfhl").get(operation);

export default router;
