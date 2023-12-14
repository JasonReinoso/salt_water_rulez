import express from "express";
import {handleRereshToken} from "../RefreshTokenController";

const router = express.Router();


router.get('/',handleRereshToken);

module.exports = router;