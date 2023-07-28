import { Component,OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  formulario: FormGroup ;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {

    //FORMULARIO REACTIVO

    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required]
    });


  }

  onSubmit() {
    if (this.formulario.valid) {
      // Aquí puedes enviar los datos del formulario al servidor o realizar alguna otra acción.
      console.log(this.formulario.value);
    }
  }
}
