import { Component, OnInit } from '@angular/core';
import { AllApiService } from "src/app/api-service/all-api.service";

@Component({
  selector: 'app-policy',
  templateUrl: './policy.page.html',
  styleUrls: ['./policy.page.scss'],
})
export class PolicyPage implements OnInit {
  english: any;
  arabic: any;
  description:any;


  constructor(private api : AllApiService){}

  ngOnInit() {
    this.getPolicyApp()
  }
  async getPolicyApp(){
    let res= await this.api.getPolicy()
    this.arabic = res.policy.description_ar
    this.english = res.policy.description_en
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
  