import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getComments = async (req, res) => {
  try {
    const comments = await prisma.comment.findMany();
    const commentsWithDateFormat = comments.map((comment)=>({
      ...comment,
      createdAt: new Date(comment.createdAt).toLocaleDateString("es-Es",{
        day:"2-digit",
        month:"long",
        year:"numeric"
      })
    }));
    res.json(commentsWithDateFormat);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const createComment = async (req, res) => {
  try {
    const { author, content,rating } = req.body;
    const newComment = await prisma.comment.create({
      data: { author, content,rating },
    });
    res.json(newComment);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
