import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getCategories = async (_, res) => {
  try {
    const categories = await prisma.category.findMany();

    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const createCategory = async (req, res) => {
  const { name,key,priority } = req.body;
  try {
    const newCategory = await prisma.category.create({ data: {name,key,priority} });

    res.json(newCategory);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const createCategoryWithDishes = async (req, res) => {
  const { name, dishes } = req.body;
  try {
    const newCategory = await prisma.category.create({
      data: {
        name,
        dishes: {
          create: dishes?.map(({ name,key, description, imageUrl, price,categoryType }) => {
            return { name,key, description, imageUrl, price,categoryType };
          }),
        },
        include: { dishes: true },
      },
    });
    res.json(newCategory);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
