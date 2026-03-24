// src/services/contact.service.js


import { prisma } from "../lib/prisma.js";
// 👉 Get all contacts
export const getAllContacts = async () => {
  return await prisma.contact.findMany({
    orderBy: { createdAt: "desc" },
  });
};

// 👉 Get single contact
export const getContactById = async (id) => {
  return await prisma.contact.findUnique({
    where: { id: Number(id) },
  });
};

// 👉 Create contact
export const createContact = async (data) => {
  return await prisma.contact.create({
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      designation: data.designation,
      country: data.country,
      image: data.image,
      rating: data.rating || 0,
    },
  });
};

// 👉 Update contact
export const updateContact = async (id, data) => {
  return await prisma.contact.update({
    where: { id: Number(id) },
    data,
  });
};

// 👉 Delete contact
export const deleteContact = async (id) => {
  return await prisma.contact.delete({
    where: { id: Number(id) },
  });
};