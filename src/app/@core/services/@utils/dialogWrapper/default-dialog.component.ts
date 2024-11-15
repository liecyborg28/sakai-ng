import { Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-default-dialog',
    template: `
        <div
            *ngIf="config.data?.loading"
            class="flex justify-content-start gap-2"
        >
            <p>{{ message }}</p>
            <p-progressSpinner
                styleClass="w-2rem h-2rem"
                strokeWidth="6"
                fill="var(--surface-ground)"
                animationDuration=".5s"
            />
        </div>
        <div *ngIf="!config.data?.loading">
            <p>{{ message }}</p>
            <div
                *ngIf="config.data?.confirm"
                class="flex justify-content-end gap-2"
            >
                <p-button
                    (click)="confirm(false)"
                    label="{{ noText }}"
                    severity="secondary"
                />
                <p-button (click)="confirm(true)" label="{{ yesText }}" />
            </div>
            <div
                *ngIf="!config.data?.confirm"
                class="flex justify-content-end gap-2"
            >
                <p-button label="{{ noText }}" (click)="closeDialog()" />
            </div>
        </div>
    `,
})
export class DefaultDialogComponent {
    title: string;
    message: string;
    yesText: string;
    noText: string;

    constructor(
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig
    ) {
        // Mengambil data yang dikirimkan melalui config
        this.title = config.data?.title || 'Default Title';
        this.message =
            config.data?.message || 'This is the default dialog content.';
        this.yesText = config.data?.yesText || 'Yes'; // Menggunakan teks Yes kustom
        this.noText = config.data?.noText || 'No'; // Menggunakan teks No kustom
    }

    closeDialog() {
        this.ref.close();
    }

    confirm(answer: boolean) {
        this.ref.close(answer); // Menutup dialog dan mengirimkan jawaban (true/false)
    }
}
