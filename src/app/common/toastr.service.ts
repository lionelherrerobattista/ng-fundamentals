import { InjectionToken } from "@angular/core";

export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr');

export interface Toastr {
    success (ms: string, title?: string): void;
    info (ms: string, title?: string): void;
    warning (ms: string, title?: string): void;
    error (ms: string, title?: string): void;
}