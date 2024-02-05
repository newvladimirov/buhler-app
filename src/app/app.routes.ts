import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./features/line-machine/pages/line-machine/line-machine.component').then(
                (m) => m.LineMachineComponent,
            ),
    },
];
