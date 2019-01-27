import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	messageForm:FormGroup;
	submitted = false;
	success = false;

   constructor(private fb:FormBuilder) { }

  ngOnInit() {
  	this.messageForm = this.fb.group({
  		name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
  		message:['', Validators.compose([Validators.required, Validators.minLength(50)])],
  		mobile: ['',Validators.compose([Validators.maxLength(10),Validators.minLength(10)])],
  		email: ['', Validators.compose([Validators.required, Validators.pattern("[^ @]*@[^ @]*")])]
  	});
  }

  onSubmit() {
  	this.submitted=true;
  	if (this.messageForm.invalid) {
  		return;
  	}
  	this.success =true;
  }

}
