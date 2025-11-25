// prisma/seed.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // --- Limpieza (útil en dev) ---
  await prisma.dish.deleteMany();
  await prisma.category.deleteMany();
  await prisma.comment.deleteMany();

  // --- Crear categorías + platos ---
  const entradas = await prisma.category.create({
    data: {
      key: "entradas",
      name: "Entradas",
      dishes: {
        create: [
          {
            name: "Causa Limeña",
            description:
              "Tradicional causa rellena de pollo con mayonesa y palta.",
            price: 18.5,
            imageUrl:
              "https://www.recetasnestle.com.pe/sites/default/files/styles/recipe_detail_desktop/public/2022-05/causa-limena.jpg",
            categoryType: "entradas",
          },
          {
            name: "Papa a la Huancaína",
            description:
              "Papas amarillas con crema de ají amarillo, queso fresco y leche.",
            price: 15.0,
            imageUrl:
              "https://www.comeperuano.pe/wp-content/uploads/2020/07/papa-a-la-huancaina.jpg",
            categoryType: "entradas",
          },
          {
            name: "Tiradito de Pescado",
            description:
              "Finas láminas de pescado bañadas en salsa de ají amarillo.",
            price: 22.0,
            imageUrl:
              "https://www.comeperuano.pe/wp-content/uploads/2020/05/tiradito.jpg",
            categoryType: "entradas",
          },
        ],
      },
    },
  });

  const fondos = await prisma.category.create({
    data: {
      key: "fondos",
      name: "Platos de Fondo",
      dishes: {
        create: [
          {
            name: "Lomo Saltado",
            description:
              "Trozos de carne salteados con cebolla, tomate y papas fritas.",
            price: 32.0,
            imageUrl:
              "https://www.comeperuano.pe/wp-content/uploads/2020/05/lomo-saltado.jpg",
            categoryType: "fondos",
          },
          {
            name: "Ají de Gallina",
            description: "Pollo deshilachado en crema de ají amarillo y queso.",
            price: 28.0,
            imageUrl:
              "https://www.comeperuano.pe/wp-content/uploads/2020/05/aji-de-gallina.jpg",
            categoryType: "fondos",
          },
          {
            name: "Arroz con Pollo",
            description:
              "Arroz verde cocinado con cilantro acompañado de pollo dorado.",
            price: 26.0,
            imageUrl:
              "https://www.comeperuano.pe/wp-content/uploads/2020/05/arroz-con-pollo.jpg",
            categoryType: "fondos",
          },
        ],
      },
    },
  });

  const postres = await prisma.category.create({
    data: {
      key: "postres",
      name: "Postres",
      dishes: {
        create: [
          {
            name: "Arroz con Leche",
            description: "Arroz cocido en leche, azúcar y canela.",
            price: 12.0,
            imageUrl:
              "https://www.comeperuano.pe/wp-content/uploads/2020/05/arroz-con-leche.jpg",
            categoryType: "postres",
          },
          {
            name: "Mazamorra Morada",
            description: "Postre típico a base de maíz morado y frutas.",
            price: 10.0,
            imageUrl:
              "https://www.comeperuano.pe/wp-content/uploads/2020/05/mazamorra-morada.jpg",
            categoryType: "postres",
          },
          {
            name: "Suspiro a la Limeña",
            description:
              "Dulce de manjar blanco coronado con merengue al oporto.",
            price: 14.0,
            imageUrl:
              "https://www.comeperuano.pe/wp-content/uploads/2020/05/suspiro-a-la-limena.jpg",
            categoryType: "postres",
          },
        ],
      },
    },
  });

  // --- Crear 2 comentarios iniciales ---
  await prisma.comment.createMany({
    data: [
      {
        author: "Carlos",
        content:
          "Excelente atención y la comida estuvo deliciosa. Volveré pronto.",
      },
      {
        author: "Charly",
        content:
          "Me encantó el Lomo Saltado, la porción fue perfecta y el servicio rápido.",
      },
    ],
  });

  console.log("Seed completado: categorías, platos y comentarios creados ✅");
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
