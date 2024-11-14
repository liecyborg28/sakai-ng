import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { PrinterComponent } from './printer/printer.component';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: PrinterComponent }]),
    ],
})
export class SettingsRoutingModule {}
