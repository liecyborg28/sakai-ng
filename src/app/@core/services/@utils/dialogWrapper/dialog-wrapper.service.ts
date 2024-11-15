import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ComponentType } from '@angular/cdk/portal';
import { DefaultDialogComponent } from './default-dialog.component';

export interface DefaultDialogData {
    title?: String;
    message?: String;
    confirm?: Boolean;
    loading?: Boolean;
    yesText?: String;
    noText?: String;
}

@Injectable({
    providedIn: 'root',
})
export class DialogWrapperService {
    private dialogRef: DynamicDialogRef | null = null; // Menyimpan referensi dialog yang sedang terbuka

    constructor(private dialogService: DialogService) {}

    /**
     * Membuka dialog dengan komponen yang diberikan dan data.
     * Jika komponen null, maka komponen default yang digunakan.
     * @param component - Komponen yang ingin ditampilkan di dalam dialog. Jika null, gunakan komponen default.
     * @param data - Data opsional yang dapat dikirim ke dalam dialog.
     * @param header - Judul dialog.
     * @param width - Lebar dialog (opsional).
     */

    spinnerStyle = {
        width: '50px',
        height: '50px',
    };
    openAlertDialog(
        component: ComponentType<any> | null = null,
        data: DefaultDialogData = {},
        header: string = 'Dialog',
        width: string = '50%'
    ): void {
        // Jika ada dialog yang sedang terbuka, tutup terlebih dahulu
        if (this.dialogRef) {
            this.dialogRef.close();
        }

        // Jika komponen null, gunakan komponen default
        const componentToUse = component || DefaultDialogComponent;

        // Menentukan konfigurasi untuk responsif dialog
        const dialogConfig = {
            data, // Mengirim data ke dalam dialog
            header,
            width,
            closable: true,
            modal: true,
            responsive: true, // Menambahkan responsivitas
            breakpoints: {
                '1200px': { width: '50%' },
                '960px': { width: '70%' },
                '768px': { width: '80%' },
                '480px': { width: '90%' },
                '320px': { width: '95%' },
            },
        };

        // Membuka dialog dengan komponen yang diberikan atau komponen default
        this.dialogRef = this.dialogService.open(componentToUse, dialogConfig);
    }

    /**
     * Menutup dialog yang sedang terbuka
     */
    closeDialog(): void {
        if (this.dialogRef) {
            this.dialogRef.close();
            this.dialogRef = null; // Reset referensi setelah dialog ditutup
        }
    }

    /**
     * Membuka dialog konfirmasi dengan tombol "Yes" dan "No"
     * @param message - Pesan yang ingin ditampilkan di dialog.
     * @param header - Judul dialog.
     * @param width - Lebar dialog (opsional).
     * @param yesText - Teks untuk tombol Yes (opsional).
     * @param noText - Teks untuk tombol No (opsional).
     * @returns Promise yang menyelesaikan dengan true jika "Yes" dipilih, atau false jika "No" dipilih.
     */
    openConfirmDialog(
        message: string,
        header: string = 'Confirm',
        width: string = '40%',
        yesText: string = 'Yes', // Default text for Yes
        noText: string = 'No' // Default text for No
    ): Promise<boolean> {
        // Jika ada dialog yang sedang terbuka, tutup terlebih dahulu
        if (this.dialogRef) {
            this.dialogRef.close();
        }

        return new Promise((resolve) => {
            const confirmDialog = this.dialogService.open(
                DefaultDialogComponent,
                {
                    data: {
                        title: header,
                        message,
                        confirm: true,
                        yesText,
                        noText,
                    },
                    header,
                    width,
                    closable: true,
                    modal: true,
                    footer: null,
                    breakpoints: {
                        '1200px': { width: '40%' },
                        '960px': { width: '50%' },
                        '768px': { width: '60%' },
                        '480px': { width: '80%' },
                        '320px': { width: '90%' },
                    },
                }
            );

            // Menangani konfirmasi tombol Yes atau No
            confirmDialog.onClose.subscribe((result: boolean) => {
                resolve(result); // Menyelesaikan promise dengan true jika Yes, atau false jika No
            });
        });
    }

    /**
     * Membuka dialog loading (overlay) dengan spinner untuk menunjukkan proses loading.
     * @param message - Pesan yang ditampilkan di dalam loading dialog.
     * @param header - Judul dialog.
     * @param width - Lebar dialog (opsional).
     * @returns Promise yang menyelesaikan ketika loading selesai.
     */
    openLoadingDialog(
        message: string = 'Loading...',
        header: string = 'Please Wait',
        width: string = '30%'
    ): void {
        // Jika ada dialog yang sedang terbuka, tutup terlebih dahulu
        if (this.dialogRef) {
            this.dialogRef.close();
        }

        // Menampilkan dialog loading dengan spinner
        this.dialogRef = this.dialogService.open(DefaultDialogComponent, {
            data: {
                title: header,
                message,
                confirm: false,
                loading: true,
            },
            header,
            width,
            closable: false, // Tidak bisa ditutup secara manual
            modal: true,
            footer: null,
            breakpoints: {
                '1200px': { width: '30%' },
                '960px': { width: '40%' },
                '768px': { width: '50%' },
                '480px': { width: '70%' },
                '320px': { width: '80%' },
            },
        });
    }
}
