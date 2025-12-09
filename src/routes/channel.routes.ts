import { Router } from "express";
import { proxyRequest } from "../utils/proxy";
import { CHANNEL_URL } from "../config";

const router = Router();

router.use("/", proxyRequest(CHANNEL_URL));

export default router;
