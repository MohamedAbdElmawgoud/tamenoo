import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrafficViolationPage } from './traffic-violation.page';

describe('TrafficViolationPage', () => {
  let component: TrafficViolationPage;
  let fixture: ComponentFixture<TrafficViolationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficViolationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrafficViolationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
