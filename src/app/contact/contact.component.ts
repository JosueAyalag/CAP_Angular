import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { contactRequest } from '../model/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formContact: FormGroup = this.formBuilder.group({});
  constructor(private formBuilder: FormBuilder) {
    this.formContact = this.formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      message:['',[Validators.required]]

    })
  }

  ngOnInit(): void {
  }

  contact(): void{
    const name = this.formContact.get('username')?.value;
    const email = this.formContact.get('email')?.value;
    const message = this.formContact.get('email')?.value;

    const data  = {
      name: name,
      email: email,
      message: message
    } as contactRequest;

    console.log(data);

    /// mandar llamar servicio de login

  }


}
