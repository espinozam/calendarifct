
export interface PeriodePractiques {
  dataInicial: Date;
  dataFinal: Date;
  horesTotals: number;
  horesDiaries: number;
  diesLaborables: number;
}

export interface DiaCalendari {
  data: Date;
  numero: number;
  esDinsDelMes: boolean;
  esCapDeSetmana: boolean;
  esFestiu: boolean;
  esDiaPractiques: boolean; // Heu de marcar això
}
