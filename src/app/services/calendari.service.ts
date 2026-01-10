import { Injectable } from '@angular/core';
import { DiaCalendari } from '../models/models-dades';

@Injectable({
  providedIn: 'root'
})
export class CalendariService {

  constructor() { }

  /**
   * Genera tots els dies per a un any complet
   * @param any - Any a mostrar
   * @returns Array amb tots els mesos i els seus dies
   */
  generarAnyComplet(any: number): DiaCalendari[][] {
    const mesos:  DiaCalendari[][] = [];

    for (let mes = 0; mes < 12; mes++) {
      mesos.push(this.generarDiesMes(any, mes));
    }

    return mesos;
  }

  /**
   * Genera tots els dies d'un mes concret
   * @param any - Any del mes
   * @param mes - Mes (0-11)
   * @returns Array de dies del mes
   */
  private generarDiesMes(any: number, mes: number): DiaCalendari[] {
    const dies: DiaCalendari[] = [];

    // Primer dia del mes
    const primerDia = new Date(any, mes, 1);
    const primerDiaSetmana = primerDia. getDay();

    // Últim dia del mes
    const ultimDia = new Date(any, mes + 1, 0);
    const diesDelMes = ultimDia.getDate();

    // Afegir dies buits al principi (dies del mes anterior)
    const diesBuitsInici = primerDiaSetmana === 0 ? 6 : primerDiaSetmana - 1;
    for (let i = diesBuitsInici; i > 0; i--) {
      const data = new Date(any, mes, 1 - i);
      dies.push(this.crearDiaCalendari(data, false));
    }

    // Afegir tots els dies del mes
    for (let dia = 1; dia <= diesDelMes; dia++) {
      const data = new Date(any, mes, dia);
      dies.push(this.crearDiaCalendari(data, true));
    }

    // Completar la darrera setmana amb dies del mes següent
    const diesTotals = dies.length;
    const diesBuitsFinal = diesTotals % 7 === 0 ? 0 : 7 - (diesTotals % 7);
    for (let i = 1; i <= diesBuitsFinal; i++) {
      const data = new Date(any, mes + 1, i);
      dies.push(this.crearDiaCalendari(data, false));
    }

    return dies;
  }

  /**
   * Crea un objecte DiaCalendari a partir d'una data
   */
  private crearDiaCalendari(data: Date, esDinsDelMes: boolean): DiaCalendari {
    return {
      data: data,
      numero: data.getDate(),
      esDinsDelMes: esDinsDelMes,
      esCapDeSetmana: this.esCapDeSetmana(data),
      esFestiu: false, // Els alumnes completaran això
      esDiaPractiques: false // Els alumnes completaran això
    };
  }

  /**
   * Comprova si una data és cap de setmana
   */
  private esCapDeSetmana(data: Date): boolean {
    const dia = data.getDay();
    return dia === 0 || dia === 6;
  }

  /**
   * Obté el nom del mes
   */
  getNomMes(indexMes: number): string {
    const noms = [
      'Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny',
      'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'
    ];
    return noms[indexMes];
  }
}
