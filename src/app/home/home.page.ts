import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  loginStatus = true;
  slideOpts = {

    slidesPerView: 1,
    autoplay:true,
    
  }
  constructor(private router : Router,) { }

  ngOnInit() {
    this.changeStyle()
  }


  changeStyle(){
    if(this.loginStatus) {
      document.getElementById('login').style.cssText = 
      ' border-bottom-right-radius: 20px;background: #2582c4;color: #c7e3f7;';
      document.getElementById('register').style.cssText =
      'border-bottom-left-radius: 0px;background: white;color: #4196d5;';
    }
    else{
      document.getElementById('login').style.cssText =
       'border-bottom-right-radius: 0px;background: white;color: #4196d5;';
      document.getElementById('register').style.cssText =
       'border-bottom-left-radius: 20px;background: #2582c4;color: #c7e3f7;';
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
  vhicleinfo(){
    this.router.navigate(['vhicle-info'])
  }
}
