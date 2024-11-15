import { Injectable } from '@angular/core';

declare var bluetoothSerial: any;

@Injectable({
    providedIn: 'root',
})
export class BluetoothService {
    constructor() {}

    // Memeriksa apakah Bluetooth aktif
    isBluetoothEnabled(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            bluetoothSerial.isEnabled(
                () => resolve(true), // Bluetooth aktif
                () => resolve(false) // Bluetooth tidak aktif
            );
        });
    }

    // Meminta pengguna untuk mengaktifkan Bluetooth
    enableBluetooth(): Promise<void> {
        return new Promise((resolve, reject) => {
            bluetoothSerial.enable(
                () => resolve(), // Bluetooth berhasil diaktifkan
                (error) => reject(error) // Gagal mengaktifkan Bluetooth
            );
        });
    }

    // Mendeteksi perangkat Bluetooth yang sudah dipasangkan
    listPairedDevices(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            bluetoothSerial.list(
                (devices) => resolve(devices),
                (error) => reject(error)
            );
        });
    }

    // Mendeteksi perangkat Bluetooth di sekitar yang belum dipasangkan
    discoverUnpairedDevices(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            bluetoothSerial.discoverUnpaired(
                (devices) => resolve(devices),
                (error) => reject(error)
            );
        });
    }

    // Menghubungkan ke perangkat Bluetooth dengan address tertentu
    connect(address: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            bluetoothSerial.connect(
                address,
                () => resolve(true),
                (error) => reject(error)
            );
        });
    }
}
