import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllDetialsPage } from './all-detials.page';

describe('AllDetialsPage', () => {
  let component: AllDetialsPage;
  let fixture: ComponentFixture<AllDetialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDetialsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllDetialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
