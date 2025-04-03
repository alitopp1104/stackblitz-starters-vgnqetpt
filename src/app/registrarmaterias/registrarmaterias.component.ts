import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/core';

@Component({
  selector: 'app-registrarmaterias',
  imports: [ReactiveFormsModule],
  templateUrl: './registrarmaterias.component.html',
  styleUrl: './registrarmaterias.component.css',
})
export class RegistrarmateriasComponent {
  public name: string = '';
  public apellido: string = '';
  public saludar: boolean = true;
  public frm: FormGroup;
  public carreras: string[] = ['ing. Computacion', 'Mecatronica', 'Diseño'];

  constructor(private formBuilder: FormBuilder) {
    // this.name = 'Alo';
    //this.apellido = '';
    this.frm = this.formBuilder.group({
      valorA: '',
      valorB: '',
      resultado: '',
    });
  }

  public metodo1(): void {
    this.carreras.push('Ing en Computacion');
    this.saludar = false;
  }

  onSubmit(): void {
    //let valorA=parseInt(this.frm.get('valorA')!.value);
    //let valorB=parseInt(this.frm.get('valorB')!.value);
    //this.name= (valorA+valorB) +'';
    //this.name=this.obtenerTabla(valorA);
    let valorATabla = Number(this.frm.get('valorA')!.value);
    this.frm.get('resultado')!.setValue(this.obtenerTabla(valorATabla));
  }

  private obtenerTabla(tabla: number): string {
    let i: number;
    let r = '';
    for (i = 0; i < 10; i++) {
      r = r + i + ' x ' + tabla + ' = ' + i * tabla;
    }
    return r;
  }
}
