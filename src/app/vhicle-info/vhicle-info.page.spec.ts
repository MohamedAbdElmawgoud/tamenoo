import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VhicleInfoPage } from './vhicle-info.page';

describe('VhicleInfoPage', () => {
  let component: VhicleInfoPage;
  let fixture: ComponentFixture<VhicleInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VhicleInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VhicleInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
