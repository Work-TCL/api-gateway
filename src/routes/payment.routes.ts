import { Router } from "express";
import { proxyRequest } from "../utils/proxy";
import { PAYMENT_URL } from "../config";


const router = Router();

router.use("/", proxyRequest(PAYMENT_URL));

export default router;
