import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
import { BluetoothService } from 'src/app/@core/services/@utils/bluetooth/bluetooth.service';
import { DialogWrapperService } from 'src/app/@core/services/@utils/dialogWrapper/dialog-wrapper.service';
import { ToastWrapperService } from 'src/app/@core/services/@utils/toastWrapper/toast-wrapper.service';

@Component({
    selector: 'app-printer',
    // standalone: true,
    // imports: [],
    templateUrl: './printer.component.html',
    styleUrl: './printer.component.scss',
})
export class PrinterComponent implements OnInit {
    constructor(
        private bluetoothService: BluetoothService,
        private dialogWrapperService: DialogWrapperService,
        private toastWrapperService: ToastWrapperService
    ) {}

    pairedDevices: any = [];
    unpairedDevices: any = [];
    isConnected: any = false;

    version = '0.5';
    test = 'Printer Works!';

    ngOnInit(): void {
        // this.discoverUnpairedDevices();
        // this.listPairedDevices();
    }

    testLoadingDialog() {
        this.dialogWrapperService.openLoadingDialog(
            'Mohon tunggu beberapa saat...',
            'Sinkronisasi Data',
            '50%'
        );

        setTimeout(() => {
            this.dialogWrapperService.closeDialog();
        }, 2000);
    }

    testConfirmDialog() {
        this.dialogWrapperService
            .openConfirmDialog(
                'Yakin ingin menutup aplikasi?',
                'Konfirmasi Keluar',
                '50%',
                'Ya',
                'Batal'
            )
            .then((confirmed) => {
                console.log(confirmed);
            });
    }

    testDialog() {
        this.dialogWrapperService.openAlertDialog(
            null,
            {
                message: 'Ini adalah pesan',
                noText: 'Batalkan',
            },
            'Contoh Header',
            '50%'
        );
    }

    showToast(severity: string, summary: string, detail: string) {
        switch (severity) {
            case 'info':
                this.toastWrapperService.showInfo(summary, detail);
                break;
            case 'warning':
                this.toastWrapperService.showWarn(summary, detail);
                break;
            case 'success':
                this.toastWrapperService.showSuccess(summary, detail);
                break;
            case 'error':
                this.toastWrapperService.showError(summary, detail);
                break;
            default:
                this.toastWrapperService.showCustom('info', summary, detail);
                break;
        }
    }

    async listPairedDevices() {
        try {
            this.pairedDevices =
                await this.bluetoothService.listPairedDevices();

            console.log('Paired devices:', this.pairedDevices);
        } catch (error) {
            console.error('Error listing paired devices:', error);
        }
    }

    async connectToDevice(address: string) {
        try {
            this.isConnected = await this.bluetoothService.connect(address);
            console.log(`Connected to device: ${address}`);
        } catch (error) {
            console.error('Error connecting to device:', error);
        }
    }

    async discoverUnpairedDevices() {
        this.test = 'Refresh...';
        setTimeout(async () => {
            try {
                this.test = 'Sedang mencari perangkat bluetooth...';
                this.unpairedDevices =
                    await this.bluetoothService.discoverUnpairedDevices();
                this.test = 'Perangkat bluetooth sudah ditemukan...';
                console.log('Unpaired devices:', this.unpairedDevices);
            } catch (error) {
                console.error('Error discovering unpaired devices:', error);
            }
        }, 1000);
    }
}
