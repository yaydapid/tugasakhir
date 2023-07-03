import { Component, Input } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";

@Component({
    selector : 'ngx-add-cml',
    templateUrl : './add-cml.component.html'
})
export class AddCMLComponent {
    constructor(
        private dialog : NbDialogRef<any>,
    ) {}

    @Input() dialogData;
    closeDialog(arr = null) {
        if(!arr) this.dialog.close()
        if(arr) this.dialog.close(arr)
    }
}