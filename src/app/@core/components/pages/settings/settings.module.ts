import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/@core/modules/prime-ng/prime-ng.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { PrinterComponent } from './printer/printer.component';
import { DialogWrapperService } from 'src/app/@core/services/@utils/dialogWrapper/dialog-wrapper.service';

@NgModule({
    declarations: [PrinterComponent],
    imports: [CommonModule, PrimeNgModule, SettingsRoutingModule],
})
export class SettingsModule {}
