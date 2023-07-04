import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import AOS from 'aos';
import { FormService } from 'src/app/shared/service/form.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  background: boolean = false;
  noneLoader: boolean = true;
  noneErrorSend: boolean = true;
  isButtonDisabled: boolean = false;
  constructor(private builder: FormBuilder, private formService: FormService) {
    this.contactForm = this.builder.group({
      // Inicializando atributo value ="" y asignando validaciones para cada input
      name: [
        null,
        [Validators.required, Validators.pattern('^[A-Za-zÑñÁáÉéÍíÓóÚúÜüs]+$')],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            '^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$'
          ),
        ],
      ],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.pattern('^.{1,255}$')]],
    });
  }
  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);

    if (location.pathname === '/contact') {
      this.background = true;
    }
  }
  onSubmit(): void {
    const formData = this.contactForm.value;
    this.isButtonDisabled = true;
    this.noneLoader = false;
    this.noneErrorSend = true;
    console.log(formData);
    this.formService.sendMessage(formData).subscribe({
      next: (resp) => {
        // console.log(resp);
        this.contactForm.reset();
        this.noneLoader = true;
        this.isButtonDisabled = false;
      },
      error: () => {
        this.noneLoader = true;
        this.noneErrorSend = false;
      },
    });
  }
  onCloseError() {
    this.noneErrorSend = true;
  }
}
