import { Router } from "express";
import { proxyRequest } from "../utils/proxy";
import { MESSAGE_URL } from "../config";

const router = Router();

router.use("/", proxyRequest(MESSAGE_URL));

export default router;
