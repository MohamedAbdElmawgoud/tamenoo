import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  textDir = 'ltr';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public translate:  TranslateService,
    private router : Router,
  ) {
    this.initializeApp();
    this.translate.setDefaultLang('en');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    
    
    // const  currentLanguage  =  localStorage.getItem('lng') || 'en'
    // this.Translate(currentLanguage);
    
    
    // this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
    // {
    //   if(event.lang == 'ar')
    //   {
    //     this.textDir = 'rtl';
    //   }
    //   else
    //   {
    //     this.textDir = 'ltr';
    //   }
    // });
  
  }

  
  Translate(type: string){
    
    
      this.translate.use(type);// ar or en
      
    
    }
  goToHistory(){
    this.router.navigate(['history'])
  }

  goToPolicy(){
    this.router.navigate(['policy'])
  }

  goToAbout(){
    this.router.navigate(['about'])
  }
}
