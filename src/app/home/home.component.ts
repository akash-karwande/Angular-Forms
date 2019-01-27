import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:{};
  data:[];

  constructor(private service:ApiService) { }

  ngOnInit() {
  	this.service.getUsers().subscribe(res =>{
  		this.user = res;
  		console.log(this.user);
  	});

  }

}
