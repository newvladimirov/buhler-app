import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LineMachineNavigationComponent} from './line-machine-navigation.component';

describe('LineMachineNavigationComponent', () => {
  let component: LineMachineNavigationComponent;
  let fixture: ComponentFixture<LineMachineNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineMachineNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineMachineNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
