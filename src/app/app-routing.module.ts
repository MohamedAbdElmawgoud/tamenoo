import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./policy/policy.module').then( m => m.PolicyPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'vhicle-info',
    loadChildren: () => import('./vhicle-info/vhicle-info.module').then( m => m.VhicleInfoPageModule)
  },
  {
    path: 'owner-info',
    loadChildren: () => import('./owner-info/owner-info.module').then( m => m.OwnerInfoPageModule)
  },
  {
    path: 'traffic-violation',
    loadChildren: () => import('./traffic-violation/traffic-violation.module').then( m => m.TrafficViolationPageModule)
  },
  {
    path: 'add-driver',
    loadChildren: () => import('./add-driver/add-driver.module').then( m => m.AddDriverPageModule)
  },
  {
    path: 'all-detials',
    loadChildren: () => import('./all-detials/all-detials.module').then( m => m.AllDetialsPageModule)
  },
  {
    path: 'payment-method',
    loadChildren: () => import('./payment-method/payment-method.module').then( m => m.PaymentMethodPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
