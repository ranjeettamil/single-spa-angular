import { Component, OnInit } from '@angular/core';


import { login } from '@example/auth';

@Component({
  selector: 'sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: string;


  ngOnInit() {
   // console.log(login());
    //  this.message = login();
      //  console.log(login());
  }

  title = 'micro-sample';


}
