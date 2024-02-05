import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'buhler-app-error-description',
  standalone: true,
  imports: [],
  templateUrl: './error-description.component.html',
  styleUrl: './error-description.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorDescriptionComponent {
    @Input({required: true})
    public error: string = '';
}
