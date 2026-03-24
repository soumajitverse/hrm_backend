// src/routes/contact.routes.js
import express from "express";
import { getContact, getContacts,createContact,deleteContact,updateContact } from "../controllers/contact.controller.js";



const router = express.Router();

router.get("/", getContacts);
router.get("/:id", getContact);
router.post("/", createContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

export default router;