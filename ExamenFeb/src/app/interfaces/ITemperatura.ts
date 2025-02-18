export interface ITemperatura {
  status: string;
  autonomias: Autonomia[];
}

export interface Autonomia {
  source: Source;
  provincias: Provincia[];
}

export interface Provincia {
  name: string;
  temp: number;
}

export interface Source {
  id: null;
  name: string;
  description: string;
  visible: boolean;
}
