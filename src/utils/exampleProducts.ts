export type Products = {
  descripcion: string;
  receta: boolean;
  existencia: number;
  precioUnitario: number;
  img: string;
};

export const items: Products[] = [
  {
    descripcion: "Aspirina",
    existencia: 100,
    precioUnitario: 22.5,
    receta: false,
    img: "https://www.costco.com.mx/medias/sys_master/products/h51/hac/48849873207326.jpg",
  },
  {
    descripcion: "Ambroxol",
    existencia: 200,
    precioUnitario: 55.6,
    receta: true,
    img: "https://farmaciadigitalff-media.azureedge.net/catalog/product/cache/a77266c1abf4147499139dcd165bfd03/0/4/04cd79de3168049e7e091f3c114a9fc67321df9afb3f6a30d4af905003a51d5b.jpg",
  },
  {
    descripcion: "Amoxicilina",
    existencia: 150,
    precioUnitario: 40.25,
    receta: true,
    img: "https://www.farmaciasdrahorro.com.mx/wp-content/uploads/2022/12/R00450021570.png",
  },
];
