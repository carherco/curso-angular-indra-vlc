import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  user: User;
  userForm: FormGroup;
  nameControl: FormControl;
  usernameControl: FormControl;
  emailControl: FormControl;
  addressControl: FormGroup;
  streetControl: FormControl;
  cityControl: FormControl;
  zipcodeControl: FormControl;

  constructor(
    private ruta: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder) {

    this.ruta.params.subscribe(
      params => {
        this.userService.getOne(params.id).subscribe(
          u => { this.user = u; this.setValues(); }
        );
      }
    );
  }

  // Clases: AbstractControl, FormControl, FormGroup, FormArray
  // Servicio: FormBuilder

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.userForm = new FormGroup({});

    this.nameControl = new FormControl('', [Validators.required]);
    this.usernameControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.emailControl = new FormControl('', [Validators.email]);
    this.addressControl = new FormGroup({});
    this.streetControl = new FormControl('');
    this.cityControl = new FormControl('');
    this.zipcodeControl = new FormControl('');

    this.userForm.addControl('name', this.nameControl);
    this.userForm.addControl('username', this.usernameControl);
    this.userForm.addControl('email', this.emailControl);

    this.addressControl.addControl('street', this.streetControl);
    this.addressControl.addControl('city', this.cityControl);
    this.addressControl.addControl('zipcode', this.zipcodeControl);

    this.userForm.addControl('address', this.addressControl);

    let telefonos = new FormArray([]);

    this.userForm.valueChanges.subscribe( v => console.log(v));

    // this.userForm = new FormGroup({
    //   name: new FormControl(),
    //   username: new FormControl(),
    //   email: new FormControl(),
    //   address: new FormGroup({
    //     street: new FormControl(),
    //     city: new FormControl(),
    //     zipcode: new FormControl()
    //   })
    // });

    // this.userForm = this.fb.group({
    //   name: this.fb.control(''),
    //   username: this.fb.control(''),
    //   email: this.fb.control(''),
    //   address: this.fb.group({
    //     street: this.fb.control(''),
    //     city: this.fb.control(''),
    //     zipcode: this.fb.control(''),
    //   })
    // });
  }

  setValues() {
    this.nameControl.setValue(this.user.name);
    this.usernameControl.setValue(this.user.username);
    this.emailControl.setValue(this.user.email);
    this.streetControl.setValue(this.user.address.street);
    this.cityControl.setValue(this.user.address.city);
    this.zipcodeControl.setValue(this.user.address.zipcode);
  }

  submit() {
    this.userService.save(this.userForm.value).subscribe();
  }

}
