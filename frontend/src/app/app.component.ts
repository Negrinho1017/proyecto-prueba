import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MainServiceService } from 'src/app/main-service.service';
import { error } from 'selenium-webdriver';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'frontend';
  valor1: number;
  valor2: number;
  operacion: number = 1;
  valorFinal: number;
  constructor(private mainService: MainServiceService) { }

  obtenerOperacion() {
    this.mainService.obtenerOperacion(this.valor1, this.valor2, this.operacion)
      .subscribe(res => {
        this.valorFinal = res;
        this.mensajeExito("El valor de su operación es: "+this.valorFinal)
      }, error => {
        this.mensajeError(error.error.mensaje);
      });
  }

  mensajeError(mensaje: string) {
    Swal.fire({
      title: 'Error!',
      type: "error",
      text: mensaje,
    });
  }

  mensajeExito(mensaje: string) {
    Swal.fire({
      title: 'Excelente!',
      type: "success",
      text: mensaje,
    });
  }
}
