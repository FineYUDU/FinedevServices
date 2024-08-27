import { computed, Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CompanyService {

    private _lada = signal<string>('+52');
    private _phoneNumber = signal<string>('8110812976');

    private _companyName = signal<string>('FineDev');
    private _footer = signal<string>('FineDev 2024');
    private _email = signal<string>('contact@findedev.com');

    public company = computed<string>( ()=> this._companyName() );
    public email = computed<string>( ()=> this._email() );
    public footer = computed<string>( ()=> this._footer() );
    public whatsApp = computed<string>( ()=> `${this._lada()} ${this._phoneNumber()}`);
}