import { Component, OnInit } from '@angular/core';
import { BluetoothService } from 'src/app/@core/services/@utils/bluetooth/bluetooth.service';

@Component({
    selector: 'app-printer',
    // standalone: true,
    // imports: [],
    templateUrl: './printer.component.html',
    styleUrl: './printer.component.scss',
})
export class PrinterComponent implements OnInit {
    constructor(private bluetoothService: BluetoothService) {}

    pairedDevices: any = [];
    unpairedDevices: any = [];
    isConnected: any = false;

    test = 'Printer Works!';

    ngOnInit(): void {
        this.listPairedDevices();
    }

    testFunction() {
        this.test = 'woilah';
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
        try {
            this.unpairedDevices =
                await this.bluetoothService.discoverUnpairedDevices();
            console.log('Unpaired devices:', this.unpairedDevices);
        } catch (error) {
            console.error('Error discovering unpaired devices:', error);
        }
    }
}
