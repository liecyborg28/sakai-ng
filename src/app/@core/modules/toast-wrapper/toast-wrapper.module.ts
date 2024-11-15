import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom
import { MessageService } from 'primeng/api';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, PrimeNgModule],
    providers: [MessageService],
    exports: [],
})
export class ToastWrapperModule {}
