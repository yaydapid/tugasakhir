import { Component, OnInit } from "@angular/core";
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } 
        from '@techiediaries/ngx-qrcode';

@Component({
    selector: 'ngx-qr-code',
    template : `
        <ngx-qrcode
            [elementType]="elementType"
            [errorCorrectionLevel]="correctionLevel"
            [value]="value"
        ></ngx-qrcode>
    `
  })
export class PrintQRCodeComponent implements OnInit { 
    ngOnInit(): void {
        
    }

    elementType = NgxQrcodeElementTypes.URL;
    correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
    
    // Need to specify the valid website address
    value = 'https://www.google.com/';
}