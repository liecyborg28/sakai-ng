import { NgModule } from '@angular/core';

// Import PrimeNG Modules

// B
import { ButtonModule } from 'primeng/button';

// C
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

// D
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

// F
import { FileUploadModule } from 'primeng/fileupload';

// I
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

// P
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

// R
import { RadioButtonModule } from 'primeng/radiobutton';

// T
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
    imports: [
        ButtonModule,
        CalendarModule,
        CardModule,
        CheckboxModule,
        ConfirmDialogModule,
        DialogModule,
        DropdownModule,
        DynamicDialogModule,
        FileUploadModule,
        InputNumberModule,
        InputTextModule,
        ProgressBarModule,
        ProgressSpinnerModule,
        RadioButtonModule,
        TableModule,
        ToastModule,
        ToolbarModule,
    ],
    exports: [
        ButtonModule,
        CalendarModule,
        CardModule,
        CheckboxModule,
        ConfirmDialogModule,
        DialogModule,
        DropdownModule,
        DynamicDialogModule,
        FileUploadModule,
        InputNumberModule,
        InputTextModule,
        ProgressBarModule,
        ProgressSpinnerModule,
        RadioButtonModule,
        TableModule,
        ToastModule,
        ToolbarModule,
    ],
})
export class PrimeNgModule {}
