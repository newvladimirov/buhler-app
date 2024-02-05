import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MachineStateWrapperComponent} from './machine-state-wrapper.component';

describe('MachineStateWrapperComponent', () => {
  let component: MachineStateWrapperComponent;
  let fixture: ComponentFixture<MachineStateWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineStateWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineStateWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
