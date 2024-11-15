import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

// custom
import { DefaultDialogComponent } from '../../services/@utils/dialogWrapper/default-dialog.component';
import { DialogWrapperService } from '../../services/@utils/dialogWrapper/dialog-wrapper.service';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
    declarations: [DefaultDialogComponent],
    imports: [CommonModule, DynamicDialogModule, PrimeNgModule],
    providers: [DialogWrapperService],
    exports: [DefaultDialogComponent],
})
export class DialogWrapperModule {}
