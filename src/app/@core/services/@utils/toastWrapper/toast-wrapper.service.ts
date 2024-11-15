import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api'; // Import MessageService dari PrimeNG

@Injectable({
    providedIn: 'root',
})
export class ToastWrapperService {
    constructor(private messageService: MessageService) {}

    /**
     * Menampilkan toast notifikasi dengan jenis 'success'
     * @param summary - Judul toast
     * @param detail - Detail pesan toast
     */
    showSuccess(summary: string, detail: string): void {
        this.messageService.add({ severity: 'success', summary, detail });
    }

    /**
     * Menampilkan toast notifikasi dengan jenis 'info'
     * @param summary - Judul toast
     * @param detail - Detail pesan toast
     */
    showInfo(summary: string, detail: string): void {
        this.messageService.add({ severity: 'info', summary, detail });
    }

    /**
     * Menampilkan toast notifikasi dengan jenis 'warn'
     * @param summary - Judul toast
     * @param detail - Detail pesan toast
     */
    showWarn(summary: string, detail: string): void {
        this.messageService.add({ severity: 'warn', summary, detail });
    }

    /**
     * Menampilkan toast notifikasi dengan jenis 'error'
     * @param summary - Judul toast
     * @param detail - Detail pesan toast
     */
    showError(summary: string, detail: string): void {
        this.messageService.add({ severity: 'error', summary, detail });
    }

    /**
     * Menampilkan toast notifikasi dengan jenis 'custom' (untuk pesan kustom)
     * @param severity - Jenis toast (success, info, warn, error)
     * @param summary - Judul toast
     * @param detail - Detail pesan toast
     */
    showCustom(severity: string, summary: string, detail: string): void {
        this.messageService.add({ severity, summary, detail });
    }
}
