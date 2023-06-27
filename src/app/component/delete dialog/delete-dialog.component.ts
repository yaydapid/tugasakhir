import { Component, Input } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";

@Component({
    selector : 'ngx-delete-dialog',
    templateUrl : './delete-dialog.component.html'
})
export class DeleteDialogComponent {
    constructor(
        private dialog : NbDialogRef<any>,
    ) {}

    @Input() dialogData;
    closeDialog(arr = null) {
        if(!arr) this.dialog.close();
        if(arr) this.dialog.close(arr);
    }
}