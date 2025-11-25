import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getDishes = async (req, res) => {
  try {
    const dishes = await prisma.dish.findMany({ include: { category: true } });

    res.json(dishes);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const createDish = async (req, res) => {
  const { name, categoryType, description, imageUrl, price, categoryId } =
    req.body;
  try {
    const newDish = await prisma.dish.create({
      data: { name, description, imageUrl, price, categoryType, categoryId },
    });

    res.json(newDish);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getDishesByCategory = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const dishes = await prisma.dish.findMany({ where: { categoryId: id } });

    res.json(dishes);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const updateDish = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  if (Object.keys(data).length === 0) {
    return res.status(400).json({ error: "No data provided for update" });
  }

  console.log(id,data,'holas');

  try {
    const dish = await prisma.dish.findUnique({where:{ id }});

    if (!dish) {
      return res.status(404).json({ error: "Dish not found" });
    }
    const updateDish = await prisma.dish.update({
      where: { id },
      data,
    });

    res.json(updateDish);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
};
