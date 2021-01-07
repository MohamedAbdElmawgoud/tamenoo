import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OwnerInfoPage } from './owner-info.page';

describe('OwnerInfoPage', () => {
  let component: OwnerInfoPage;
  let fixture: ComponentFixture<OwnerInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OwnerInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
