import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.scss'],
})
export class FieldErrorsComponent implements OnInit {
  objectKeys = Object.keys;
  private _formField!: AbstractControl;

  @Input()
  public set formField(control: AbstractControl) {
    this._formField = control;
  }
  public get formField() {
    return this._formField;
  }

  @Input()
  fieldName!: String;
  constructor() {}

  ngOnInit(): void {}

  log(a:any){
    console.log(a);
  }
}
