import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OlvidasteClaveFormPage } from './olvidaste-clave-form.page';

describe('OlvidasteClaveFormPage', () => {
  let component: OlvidasteClaveFormPage;
  let fixture: ComponentFixture<OlvidasteClaveFormPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OlvidasteClaveFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OlvidasteClaveFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
