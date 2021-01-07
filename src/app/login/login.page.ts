import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  loginStatus = true
  constructor() { }
  ngOnInit() {
    document.getElementById('login').style.cssText = 
    'border-radius: 30px;background: white;color: #6ec499;';
  }
  changeStyle(){
    if(this.loginStatus) {
      document.getElementById('login').style.cssText = 
      'border-radius: 30px;background: white;color: #6ec499;';
      document.getElementById('register').style.cssText =
      'border-radius: 0px;background: #eeeeee;color: #3e4a52;';
    }
    else{
      document.getElementById('login').style.cssText =
       'border-radius: 0px;background: #eeeeee;color: #3e4a52;';
      document.getElementById('register').style.cssText =
       'border-radius: 30px;background: white;color: #6ec499;';
    }
    
  }
  
  login(){
    this.loginStatus = true
    this.changeStyle()
  }
  register(){
    this.loginStatus = false
    this.changeStyle()
  }
}
 



