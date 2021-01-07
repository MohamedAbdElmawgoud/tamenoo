import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vhicle-info',
  templateUrl: './vhicle-info.page.html',
  styleUrls: ['./vhicle-info.page.scss'],
})
export class VhicleInfoPage implements OnInit {

  constructor(private router : Router,) { }

  ngOnInit() {
  }
  ownerinfo(){
    this.router.navigate(['owner-info'])
  }
}
