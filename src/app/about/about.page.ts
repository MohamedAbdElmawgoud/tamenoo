import { Component, OnInit } from '@angular/core';
import { AllApiService } from "src/app/api-service/all-api.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  english: any;
  arabic: any;
  description:any;
  constructor(private api : AllApiService) { }

 async ngOnInit() {
  await this.getApoutApp()
 
  }
 async getApoutApp(){
  let res= await this.api.getAbout()
  this.arabic = res.about.description_ar
  this.english = res.about.description_en
  const  currentLanguage  =  localStorage.getItem('lng')
  console.log(currentLanguage)

  if(currentLanguage == 'en'){
    this.description = this.english;
  }
  else{
    this.description = this.arabic
  }
 
 }
}
