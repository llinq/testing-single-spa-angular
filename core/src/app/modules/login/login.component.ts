import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private generalService: GeneralService
  ) {

  }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm(): void {
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      this.generalService.setLoggedUser('teste');
      this.router.navigate(['/abastecimento/analise-compra']);
    }
    else {
      this.error = true;
    }
  }

}
