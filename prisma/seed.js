import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed...");

  // Crear categorías
  await prisma.category.createMany({
    data: [
      { key: "entradas", name: "Entradas", priority: 1 },
      { key: "fondos", name: "Fondos", priority: 2 },
      { key: "bebidas", name: "Bebidas", priority: 3 },
      { key: "postres", name: "Postres", priority: 4 },
    ]
  });

  console.log("✔ Categorías creadas");

  const starters = await prisma.category.findUnique({ where: { key: "entradas" } });
  const funds = await prisma.category.findUnique({ where: { key: "fondos" } });
  const drinks = await prisma.category.findUnique({ where: { key: "bebidas" } });
  const desserts = await prisma.category.findUnique({ where: { key: "postres" } });

  // ----------------------------
  // ENTRADAS (10 platos)
  // ----------------------------
  await prisma.dish.createMany({
    data: [
      { name: "Causa Limeña", description: "Causa de papa amarilla con pollo.", price: 12, imageUrl: "https://cdn0.recetasgratis.net/es/posts/8/6/2/causa_limena_31268_600.jpg", categoryType: "entradas", categoryId: starters.id },
      { name: "Papa a la Huancaína", description: "Papa con salsa huancaína casera.", price: 10, imageUrl: "https://img-global.cpcdn.com/recipes/9dcae0fe27a4c7ec/1200x630cq80/photo.jpg", categoryType: "entradas", categoryId: starters.id },
      { name: "Tequeños", description: "Tequeños rellenos de queso.", price: 15, imageUrl: "https://masana.pe/wp-content/uploads/2024/06/tequenos.webp", categoryType: "entradas", categoryId: starters.id },
      { name: "Palta Rellena", description: "Palta con pollo y verduras.", price: 14, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVgjd9KqPOPhMkfk62sLO5qcSOZHrOk_mIQA&s", categoryType: "entradas", categoryId: starters.id },
      { name: "Choritos a la Chalaca", description: "Choritos con cebolla y limón.", price: 16, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxdBdQU0wPhj8g59ay46qOglb-3UhCCs1Rdg&s", categoryType: "entradas", categoryId: starters.id },
      { name: "Ensalada Fresca", description: "Ensalada de estación.", price: 9, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ZrOgTWAQ5aorjSaQgTiIQmdokRYqZ6tyCQ&s", categoryType: "entradas", categoryId: starters.id },
      { name: "Tamales Criollos", description: "Tamales de cerdo estilo peruano.", price: 11, imageUrl: "https://buenazo.cronosmedia.glr.pe/original/2020/11/26/5fc06dec0616b9765d22eed6.jpg", categoryType: "entradas", categoryId: starters.id },
      { name: "Empanadas", description: "Empanadas de carne o pollo.", price: 12, imageUrl: "https://jameaperu.com/assets/images/empanadas-peruanas_800x534.webp", categoryType: "entradas", categoryId: starters.id },
      { name: "Anticuchos de Corazón", description: "Clásicos anticuchos con papa.", price: 18, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHe-u3SR5UQdUAOCmxpz-vwIVGYLPz3sWQ8Q&s", categoryType: "entradas", categoryId: starters.id },
      { name: "Brochetas de Pollo", description: "Brochetas acompañadas de salsa.", price: 13, imageUrl: "https://newmansown.com/wp-content/uploads/2022/03/Balsamic-Chicken-Kebab.png", categoryType: "entradas", categoryId: starters.id },
    ]
  });

  // ----------------------------
  // FONDOS (10 platos)
  // ----------------------------
  await prisma.dish.createMany({
    data: [
      { name: "Lomo Saltado", description: "Lomo saltado con papas fritas.", price: 28, imageUrl: "https://static.wixstatic.com/media/9755d8_b2d98eade0814b17a67fdf7d95888fdc~mv2.png/v1/fill/w_1000,h_563,al_c,q_90,usm_0.66_1.00_0.01/9755d8_b2d98eade0814b17a67fdf7d95888fdc~mv2.png", categoryType: "fondos", categoryId: funds.id },
      { name: "Arroz con Pollo", description: "Arroz verde con pollo.", price: 22, imageUrl: "https://buenazo.cronosmedia.glr.pe/original/2022/10/24/60d89da6913c240e6725db08.jpg", categoryType: "fondos", categoryId: funds.id },
      { name: "Aji de Gallina", description: "Aji de gallina tradicional.", price: 20, imageUrl: "https://www.recetasnestle.com.pe/sites/default/files/srh_recipes/535186920a8b142c9d521f8e9390fedd.jpg", categoryType: "fondos", categoryId: funds.id },
      { name: "Seco de Res", description: "Carne guisada con frejoles.", price: 26, imageUrl: "https://i.ytimg.com/vi/rMsbGQ2xw-M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA1VSUK1nRo80Bdwo12ASfldK6ofA", categoryType: "fondos", categoryId: funds.id },
      { name: "Milanesa de Pollo", description: "Milanesa crocante con papas.", price: 20, imageUrl: "https://tofuu.getjusto.com/orioneat-local/resized2/z2yhbovSXPzJH3QpT-2400-x.webp", categoryType: "fondos", categoryId: funds.id },
      { name: "Tallarin Saltado", description: "Tallarin estilo chifa.", price: 24, imageUrl: "https://jameaperu.com/assets/images/tallarin-saltado-chino_800x534.webp", categoryType: "fondos", categoryId: funds.id },
      { name: "Ceviche", description: "Ceviche clásico peruano.", price: 30, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSFz0CeE_U6b-pmVsMek1R9ehmaGkka4sGg&s", categoryType: "fondos", categoryId: funds.id },
      { name: "Arroz Chaufa", description: "Chaufa de pollo estilo chifa.", price: 22, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNAbqhGdas-UgPsDp9w32LoOJZaIE0P1AhdQ&s", categoryType: "fondos", categoryId: funds.id },
      { name: "Pollo a la Brasa (1/4)", description: "Pollo a la brasa con papas.", price: 18, imageUrl: "https://buenazo.cronosmedia.glr.pe/original/2023/07/14/64ac3e8c599470217672a906.jpg", categoryType: "fondos", categoryId: funds.id },
      { name: "Bistec a lo Pobre", description: "Bistec con plátano y huevo.", price: 32, imageUrl: "https://comopreparar.pe/app/public_root/imgs/medios/68b5da34a02dd_689533b033860_BISTECK.jpg", categoryType: "fondos", categoryId: funds.id },
    ]
  });

  // ----------------------------
  // BEBIDAS (10 ítems)
  // ----------------------------
  await prisma.dish.createMany({
    data: [
      { name: "Chicha Morada", description: "Chicha natural.", price: 5, imageUrl: "https://tofuu.getjusto.com/orioneat-local/resized2/Dq2a9m4rfFWNFDPuP-2400-x.webp", categoryType: "bebidas", categoryId: drinks.id },
      { name: "Limonada", description: "Refrescante limonada.", price: 5, imageUrl: "https://cdn.shopify.com/s/files/1/0191/9978/files/Como-hacer-limonada.jpg?v=1753088533", categoryType: "bebidas", categoryId: drinks.id },
      { name: "Inca Kola", description: "Botella personal.", price: 4, imageUrl: "https://corporacionliderperu.com/51246-large_default/inca-kola-gaseosas-normal-x-600-ml.jpg", categoryType: "bebidas", categoryId: drinks.id },
      { name: "Agua Mineral", description: "Agua sin gas.", price: 3, imageUrl: "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/a/g/agua-san-luis-sin-gas-625ml-5024-default-1.jpg", categoryType: "bebidas", categoryId: drinks.id },
      { name: "Coca Cola", description: "Botella personal.", price: 4, imageUrl: "https://yopo.pe/wp-content/uploads/2023/12/COCA-500-ORIGINAL-RAPPI.jpg", categoryType: "bebidas", categoryId: drinks.id },
      { name: "Té Helado", description: "Té frío casero.", price: 6, imageUrl: "https://cdn0.uncomo.com/es/posts/5/8/3/como_preparar_te_helado_15385_orig.jpg", categoryType: "bebidas", categoryId: drinks.id },
      { name: "Café Pasado", description: "Café peruano.", price: 6, imageUrl: "https://diariocorreo.pe/resizer/uzaIj7PSM9kdTZKVD5k1uobI0Ak=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/2YVBXVXHVFF7FBGZYMEJXK3U2Q.jpg", categoryType: "bebidas", categoryId: drinks.id },
      { name: "Capuccino", description: "Capuccino espumoso.", price: 8, imageUrl: "https://a.files.bbci.co.uk/worldservice/live/assets/images/2015/09/06/150906142439_capuchino_cafe_historia_624x351_getty.jpg", categoryType: "bebidas", categoryId: drinks.id },
      { name: "Jugo de Papaya", description: "Jugo natural de papaya.", price: 7, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5f_NfPtPWKy6xnssw3Az-8MtEyG0ohiUTAg&s", categoryType: "bebidas", categoryId: drinks.id },
      { name: "Emoliente", description: "Bebida tradicional peruana.", price: 5, imageUrl: "https://comidasperuanas.com.pe/wp-content/uploads/2023/06/Emoliente.jpg", categoryType: "bebidas", categoryId: drinks.id },
    ]
  });

  // ----------------------------
  // POSTRES (10 platos)
  // ----------------------------
  await prisma.dish.createMany({
    data: [
      { name: "Mazamorra Morada", description: "Mazamorra tradicional.", price: 7, imageUrl: "https://perudelights.com/wp-content/uploads/2012/07/DSC058141-1024x565.jpg", categoryType: "postres", categoryId: desserts.id },
      { name: "Arroz con Leche", description: "Arroz con leche casero.", price: 7, imageUrl: "https://www.recetasnestle.com.pe/sites/default/files/srh_recipes/6458c5dfff3606c63d0212a0b6b7a738.jpg", categoryType: "postres", categoryId: desserts.id },
      { name: "Gelatina", description: "Gelatina de sabores.", price: 4, imageUrl: "https://campograndeperu.com/wp-content/uploads/2024/03/maxresdefault-1-min-1-1024x576.jpg", categoryType: "postres", categoryId: desserts.id },
      { name: "Crema Volteada", description: "Postre tradicional.", price: 8, imageUrl: "https://www.recetasnestle.com.pe/sites/default/files/srh_recipes/9df2188d2dca6620686286963604e358.png", categoryType: "postres", categoryId: desserts.id },
      { name: "Suspiro a la Limeña", description: "Postre clásico peruano.", price: 10, imageUrl: "https://www.comida-peruana.com/base/stock/Recipe/suspiro-a-la-limena/suspiro-a-la-limena_web.jpg.webp", categoryType: "postres", categoryId: desserts.id },
      { name: "Pie de Limón", description: "Pie artesanal.", price: 9, imageUrl: "https://www.recetasnestle.cl/sites/default/files/srh_recipes/49d627e69672b6915c22f2eb2dfd1b93.jpg", categoryType: "postres", categoryId: desserts.id },
      { name: "Helado Artesanal", description: "Helado de fresa o vainilla.", price: 6, imageUrl: "https://static.excelenciasgourmet.com/cdn/ff/CW0Rdk3DdpjBTJLGivA3NcaJdOnbLKlZGyEfTXc74BQ/1721683340/public/2019-09/helado-artesanal_0.jpg", categoryType: "postres", categoryId: desserts.id },
      { name: "Queque Casero", description: "Queque de vainilla.", price: 5, imageUrl: "https://cdn0.uncomo.com/es/posts/6/9/5/como_hacer_un_queque_16596_paso_7_600.jpg", categoryType: "postres", categoryId: desserts.id },
      { name: "Brownie", description: "Brownie con chispas.", price: 8, imageUrl: "https://images.aws.nestle.recipes/resized/2024_10_23T08_38_28_badun_images.badun.es_ac5fa47c04dd_brownie_de_chocolate_negro_1290_742.jpg", categoryType: "postres", categoryId: desserts.id },
      { name: "Torta de Chocolate", description: "Porción de torta casera.", price: 9, imageUrl: "https://cdn0.recetasgratis.net/es/posts/1/9/6/torta_de_chocolate_esponjosa_10691_600.jpg", categoryType: "postres", categoryId: desserts.id },
    ]
  });

  // ----------------------------
  // COMENTARIOS
  // ----------------------------
  await prisma.comment.createMany({
    data: [
      { author: "Carlos Juarez", content: "La comida estuvo deliciosa, especialmente el lomo saltado.", rating: 5 },
      { author: "Carlos Pérez", content: "Buen servicio, pero la chicha estaba muy dulce.", rating: 4 },
      { author: "Gian Tuna", content: "Las entradas llegaron rapido y el sabor muy bueno.", rating: 4 },
      { author: "Jorge Ramírez", content: "Excelente atención y platos muy bien servidos.", rating: 5 }
    ]
  });

  console.log("🌱 Seed completado");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
