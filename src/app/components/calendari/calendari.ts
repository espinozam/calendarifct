import { Component, OnInit } from '@angular/core';
import { CalendariService } from '../../services/calendari.service';
import { DiaCalendari, PeriodePractiques } from '../../models/models-dades';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendari',
  imports: [CommonModule],
  templateUrl: './calendari.html',
  styleUrls: ['./calendari.css']
})
export class Calendari implements OnInit {

  anyActual: number = 2026;
  mesos: DiaCalendari[][] = [];
  periodePractiques?:  PeriodePractiques;


  ngOnInit(): void {
    this.carregarCalendari();
  }

  /**
   * Carrega el calendari complet de l'any
   */
  carregarCalendari(): void {
    this.mesos = this.calendariService.generarAnyComplet(this.anyActual);
  }

  /**
   * Obté el nom del mes per un índex
   */
  getNomMes(index: number): string {
    return this.calendariService.getNomMes(index);
  }

  /**
   * TODO Part 2 i 3: Els alumnes han d'implementar aquesta funció
   * Aquesta funció s'ha de cridar quan es canviïn els valors del formulari
   * Ha de:
   * 1. Calcular els dies laborables necessaris
   * 2. Calcular la data final
   * 3. Actualitzar periodePractiques
   * 4. Marcar els dies del calendari que són dies de pràctiques
   */
  calcularPeriode(dataInicial: Date, horesTotals: number, horesDiaries: number): void {
    // Els alumnes completaran això a la Part 2 i Part 3
    // calcular dias dias laborables necesarios
    const diasLaborables = calcularDiesLaborables(horesTotals, horesDiaries);

    // calcular fecha de finalizacion
    const dataFinal = calcularDataFinal(new Date(dataInicial), diasLaborables);

    // guardar periodo de practicas
    this.periodePractiques = {
      dataInicial,
      dataFinal,
      horesTotals,
      horesDiaries,
      diesLaborables: diasLaborables
    };

    // limpiar calendario
    this.carregarCalendari();

    // marcar dias de practicas
    this.marcarDiesPractiques(dataInicial, dataFinal);
  }

  /**
   * TODO Part 3: Els alumnes han d'implementar aquesta funció
   * Marca tots els dies del calendari que estan dins del període de pràctiques
   */
  private marcarDiesPractiques(dataInicial:  Date, dataFinal: Date): void {
    // Els alumnes completaran això a la Part 3
    // Pista: Han de recórrer tots els mesos i dies, i marcar dia. esDiaPractiques = true
    // per aquells dies que estiguin entre dataInicial i dataFinal i siguin laborables
    const dataInicialFixed = new Date(dataInicial);
    console.log(dataInicial, dataInicialFixed)
    // bug necesita corregir
    // dataInicial = Tue Jan 13 2026 01:00:00 GMT+0100
    // dataActual  = Wed Jan 14 2026 00:00:00 GMT+0100
    //console.log(this.mesos)
    // recorrer meses del año
    for (const mes of this.mesos) {
      // recorrer dias del mes
      for (const dia of mes) {

        // omitir dias fuera del mes
        if (!dia.esDinsDelMes || !dia.data) {
          continue;
        }

        // fecha actual
        const dataActual = new Date(dia.data);

        // marcar dia de practica
        if (dataActual >= dataInicial &&
          dataActual <= dataFinal &&
          esDiaLaborable(dataActual)
        ) {
          dia.esDiaPractiques = true;
          console.log(dataActual)
        }
        // marcar dia festivo
        if (esFestiu(dataActual)) {
          dia.esFestiu = true;
          //console.log(dataActual)
        }
      }
    }
  }

}
