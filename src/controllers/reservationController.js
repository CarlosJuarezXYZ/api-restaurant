import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getReservations = async (req, res) => {
  try {
    const reservations = await prisma.reservation.findMany({
      orderBy: { date: "desc" },
    });
    res.json(reservations);
  } catch (error) {
    throw new Error("Server error reservations");
  }
};

export const createReservation = async (req, res) => {
  try {
    const { name, email, phone, date, peopleCount, message } = req.body;
    const newReservation = await prisma.reservation.create({
      data: { name, email, phone, date, peopleCount, message },
    });

    res.json(newReservation);
  } catch (error) {
    throw new Error("error creating reservation");
  }
};
