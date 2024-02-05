import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineMachineOverviewComponent } from './line-machine-overview.component';

describe('LineMachineOverviewComponent', () => {
    let component: LineMachineOverviewComponent;
    let fixture: ComponentFixture<LineMachineOverviewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LineMachineOverviewComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(LineMachineOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
