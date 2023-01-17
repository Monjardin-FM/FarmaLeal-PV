export type Product = {
  clave: string;
  claveAlterna?: string;
  servicio?: boolean;
  descripcion?: string;
  categoria?: string;
  departamento?: string;
  unidadCompra: string;
  unidadVenta: string;
  impuestos: {
    iva: boolean;
    ieps: boolean;
  };
  precioCompra: number;
  precioCompraWI: number;
  precioCompraProm?: number;
  precioCompraPromWI?: number;
  precio1: {
    precioVenta: number;
    utilidad: number;
    precioVentaNeto: number;
    unidadesMayoreo: number;
  };
  precio2: {
    precioVenta: number;
    utilidad?: number;
    precioVentaNeto?: number;
    unidadesMayoreo?: number;
  };
  precio3: {
    precioVenta: number;
    utilidad?: number;
    precioVentaNeto?: number;
    unidadesMayoreo?: number;
  };
  precio4: {
    precioVenta?: number;
    utilidad?: number;
    precioVentaNeto?: number;
    unidadesMayoreo?: number;
  };
  claveSAT: string;
  inventarioMinimo?: number;
  inventarioMaximo?: number;
  loteSerie?: boolean;
  receta?: boolean;
  granel?: boolean;
  productImage?: File | undefined;
  caracteristicas?: string;
  tags?: string[];
};
