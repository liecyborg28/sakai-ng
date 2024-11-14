import { NgModule } from '@angular/core';

// Import PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
    imports: [
        ButtonModule,
        CardModule,
        TableModule,
        InputTextModule,
        DropdownModule,
        DialogModule,
        ToastModule,
        ToolbarModule,
        CalendarModule,
        CheckboxModule,
        RadioButtonModule,
        ProgressBarModule,
        InputNumberModule,
        FileUploadModule,
    ],
    exports: [
        ButtonModule,
        CardModule,
        TableModule,
        InputTextModule,
        DropdownModule,
        DialogModule,
        ToastModule,
        ToolbarModule,
        CalendarModule,
        CheckboxModule,
        RadioButtonModule,
        ProgressBarModule,
        InputNumberModule,
        FileUploadModule,
    ],
})
export class PrimeNgModule {}
