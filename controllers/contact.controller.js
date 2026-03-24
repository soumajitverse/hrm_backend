// src/controllers/contact.controller.js
import * as contactService from "../services/contact.service.js";

// 👉 Get all
export const getContacts = async (req, res) => {
  try {
    const data = await contactService.getAllContacts();
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 Get single
export const getContact = async (req, res) => {
  try {
    const data = await contactService.getContactById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 Create
export const createContact = async (req, res) => {
  try {
    const body = req.body;

    // basic validation
    if (!body.name || !body.email) {
      return res.status(400).json({ message: "Name & Email required" });
    }

    const data = await contactService.createContact(body);

    res.status(201).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 Update
export const updateContact = async (req, res) => {
  try {
    const data = await contactService.updateContact(
      req.params.id,
      req.body
    );

    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 Delete
export const deleteContact = async (req, res) => {
  try {
    await contactService.deleteContact(req.params.id);

    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};