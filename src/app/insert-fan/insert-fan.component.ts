import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormGroupDirective } from '@angular/forms';
import { InsertFanInterface } from './insert-fan-interface';
import { MainServiceService } from '../main-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insert-fan',
  templateUrl: './insert-fan.component.html',
  styleUrls: ['./insert-fan.component.css']
})
export class InsertFanComponent implements OnInit {

  isSubmitted: boolean;
  isValid: boolean;
  clickedSend: boolean;
  gender_val: any;


  form = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    //gender: new FormControl('', Validators.required),
    birthdate: new FormControl('', Validators.required),
    favorite_team: new FormControl('', Validators.required),

  });

  submission = {} as InsertFanInterface;


  constructor(private mainSer: MainServiceService) { 
    this.isSubmitted = false;
    this.isValid = true;
    this.clickedSend = false;
  }

  ngOnInit(): void {
  }


  onSubmit() {
    this.clickedSend = true;
    this.form.markAllAsTouched();
    this.isValid = true;
    if (this.form.valid) {
      this.clickedSend = false;
      this.formResultRow();
      this.recordResult();
    } else {
      this.isValid = false;
    }
  }


  
  recordResult() {
    console.log("tst", this.submission);
    this.mainSer.insertFan(this.submission).subscribe(data => {
      this.form.reset();
      this.isSubmitted = true;
      //document.getElementById('form-body-id').setAttribute('style','display:none');


      setTimeout(() => {
        this.isSubmitted = false;
        //document.getElementById('form-body-id').setAttribute('style','display:block');
      }, 2000);
    });
  }

  formResultRow() {
    this.submission.username = this.form.get('username')?.value;
    this.submission.email = this.form.get('email')?.value;
    this.submission.gender = this.gender_val;
    this.submission.birthdate = this.form.get('birthdate')?.value;;
    this.submission.favorite_team = this.form.get('favorite_team')?.value;;

  } 

  onOptionsSelected(value:string){
    console.log("the selected value is " + value);
    //this.submission.gender = "";
    this.gender_val = value;
    
/*
    this.mainSer.get_club_info({"club_name": value}).subscribe(data => {
      this.club_info = data;
      console.log(this.club_info);
    })
    */
}

}
