import { Injectable } from '@angular/core';
declare var bluetoothSerial: any;
declare var cordova: any;

@Injectable({
    providedIn: 'root',
})
export class BluetoothService {
    constructor() {}

    private checkBluetoothPermission() {
        return new Promise((resolve, reject) => {
            console.log('Checking Bluetooth permission...');
            cordova.plugins.permissions
                .hasPermission(cordova.plugins.permissions.BLUETOOTH)
                .then(
                    (result) => {
                        console.log('Permission result:', result);
                        if (result.hasPermission) {
                            resolve(true);
                        } else {
                            cordova.plugins.permissions
                                .requestPermission(
                                    cordova.plugins.permissions.BLUETOOTH
                                )
                                .then(
                                    () => resolve(true),
                                    () => reject('Bluetooth permission denied')
                                );
                        }
                    },
                    (err) => reject('Error checking permission')
                );
        });
    }

    private checkLocationPermission() {
        return new Promise((resolve, reject) => {
            console.log('Checking Location permission...');
            cordova.plugins.permissions
                .hasPermission(cordova.plugins.permissions.ACCESS_FINE_LOCATION)
                .then(
                    (result) => {
                        if (result.hasPermission) {
                            resolve(true);
                        } else {
                            cordova.plugins.permissions
                                .requestPermission(
                                    cordova.plugins.permissions
                                        .ACCESS_FINE_LOCATION
                                )
                                .then(
                                    () => resolve(true),
                                    () => reject('Location permission denied')
                                );
                        }
                    },
                    (err) => reject('Error checking location permission')
                );
        });
    }

    private isCordovaReady() {
        return new Promise((resolve) => {
            if (document.readyState === 'complete') {
                resolve(true);
            } else {
                document.addEventListener(
                    'deviceready',
                    () => resolve(true),
                    false
                );
            }
        });
    }

    // Mendeteksi perangkat bluetooth yang sudah dipasangkan
    listPairedDevices() {
        return new Promise((resolve, reject) => {
            this.isCordovaReady().then(() => {
                this.checkBluetoothPermission()
                    .then(() => {
                        this.checkLocationPermission()
                            .then(() => {
                                bluetoothSerial.list(
                                    (devices) => resolve(devices),
                                    (error) => reject(error)
                                );
                            })
                            .catch((err) => reject(err));
                    })
                    .catch((err) => reject(err));
            });
        });
    }

    // Mendeteksi perangkat bluetooth di sekitar yang belum dipasangkan
    discoverUnpairedDevices() {
        return new Promise((resolve, reject) => {
            console.log(
                'Mendeteksi perangkat Bluetooth yang belum dipasangkan...'
            );

            this.isCordovaReady()
                .then(() => {
                    this.checkBluetoothPermission()
                        .then(() => {
                            this.checkLocationPermission()
                                .then(() => {
                                    bluetoothSerial.discoverUnpaired(
                                        (devices) => {
                                            console.log(
                                                'Perangkat Bluetooth yang terdeteksi:',
                                                devices
                                            );
                                            resolve(devices);
                                        },
                                        (error) => {
                                            console.error(
                                                'Error saat mendeteksi perangkat:',
                                                error
                                            );
                                            reject(error);
                                        }
                                    );
                                })
                                .catch((err) => {
                                    console.error(
                                        'Permission Location Error:',
                                        err
                                    );
                                    reject(err);
                                });
                        })
                        .catch((err) => {
                            console.error('Permission Bluetooth Error:', err);
                            reject(err);
                        });
                })
                .catch(() => {
                    console.error('Cordova belum siap');
                    reject('Cordova is not ready');
                });
        });
    }

    // Menghubungkan ke perangkat Bluetooth dengan address tertentu
    connect(address: string) {
        return new Promise((resolve, reject) => {
            this.isCordovaReady().then(() => {
                this.checkBluetoothPermission()
                    .then(() => {
                        this.checkLocationPermission()
                            .then(() => {
                                bluetoothSerial.connect(
                                    address,
                                    () => resolve(true),
                                    (error) => reject(error)
                                );
                            })
                            .catch((err) => reject(err));
                    })
                    .catch((err) => reject(err));
            });
        });
    }
}
