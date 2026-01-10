import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { calcularDiesLaborables, calcularDataFinal } from '../../utils/calcular-dates';

@Component({
  selector: 'app-formulari-practiques',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulari-practiques.html',
  styleUrl: './formulari-practiques.css',
})
export class FormulariPractiques {

  // formulario
  formulari: FormGroup;

  // fecha de finalizacion
  dataFinal?: Date;

  // constructor
  constructor(private fb: FormBuilder) {

    // creacion del formulario reactivo
    // propiedad: [valor por defecto, validaciones]
    // ejemplo: horesDiaries, valor por defecto = 8, valor minimo = 1, valor maximo = 8
    this.formulari = this.fb.group({
      dataInici: ['', Validators.required],
      horesTotals: [400, [Validators.required, Validators.min(1)]],
      horesDiaries: [8, [Validators.required, Validators.min(1), Validators.max(8)]]
    });
  }

  // funcion enviar
  enviar() {
    // comprobar si los campos del formulario son validos
    if (this.formulari.valid) {
      // imprime en consola los datos del formulario
      console.log(this.formulari.value);

      // obtener datos del formulario
      const { dataInici, horesTotals, horesDiaries } = this.formulari.value;

      // calcular dias dias laborables necesarios
      const diasLaborables = calcularDiesLaborables(horesTotals, horesDiaries);

      // calcular fecha de finalizacion
      this.dataFinal = calcularDataFinal(new Date(dataInici), diasLaborables);

    } else {
      // muestra los errores de validacion en el formulario
      this.formulari.markAllAsTouched();
    }
  }

}
