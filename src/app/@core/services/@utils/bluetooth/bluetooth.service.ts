import { Injectable } from '@angular/core';

declare var bluetoothSerial: any;

@Injectable({
    providedIn: 'root',
})
export class BluetoothService {
    private isCordovaReady = false;

    constructor() {
        document.addEventListener(
            'deviceready',
            () => {
                this.isCordovaReady = true;
                console.log('Cordova is ready');
            },
            false
        );
    }

    private checkCordovaReady() {
        if (!this.isCordovaReady) {
            throw new Error(
                'Cordova is not ready. Please wait for the deviceready event.'
            );
        }
    }

    listPairedDevices() {
        return new Promise((resolve, reject) => {
            this.checkCordovaReady();
            bluetoothSerial.list(
                (devices: any) => resolve(devices),
                (error: any) => reject(error)
            );
        });
    }

    discoverUnpairedDevices() {
        return new Promise((resolve, reject) => {
            this.checkCordovaReady();
            bluetoothSerial.discoverUnpaired(
                (devices: any) => resolve(devices),
                (error: any) => reject(error)
            );
        });
    }

    connect(address: string) {
        return new Promise((resolve, reject) => {
            this.checkCordovaReady();
            bluetoothSerial.connect(
                address,
                () => resolve(true),
                (error: any) => reject(error)
            );
        });
    }
}
