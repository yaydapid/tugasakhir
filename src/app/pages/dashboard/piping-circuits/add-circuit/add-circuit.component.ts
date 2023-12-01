import { Component, Input } from "@angular/core";
import { NbDialogRef, NbToastrService } from "@nebular/theme";
import { PipingAssetsService } from "../../piping-assets/piping-assets.service";
import { PageMenuService } from "../../../pages-service";
import { environment } from "../../../../../environments/environment";
import { HttpEventType } from "@angular/common/http";

@Component({
    selector: 'ngx-add-circuit',
    templateUrl: './add-circuit.component.html',
})
export class AddCircuitComponent {
        
    constructor(
        private dialog: NbDialogRef<any>,
        private assetsService : PipingAssetsService,
        private pageMenuService : PageMenuService,
        private toastr : NbToastrService
    ) { }

    private apiUrl = environment.apiUrl;

    ngOnInit(): void {
        console.log(this.dialogData)
        const data = this.dialogData.data
        this.assetsService.getPipingAssets()
        .subscribe(({data : pipe} : any) => { 
            this.piping = pipe.filter(item => (data.id == item.circuit?.id || !item.circuit))
        })

        const images = data?.images
        if(images)
        this.imageLink = images.map(image => (
            {src : this.apiUrl + "/image/" + image, alt : 'Piping Assets'}
        ))
    }

    @Input() dialogData : any;
    piping
    
    imageLink : any= [ ]
    uploadImageFile
    onFileChange(res) {
        const file = res.target.files
        this.uploadImageFile = file
        for(let image of file) {
          var reader = new FileReader()
          reader.readAsDataURL(image)
          reader.onload = (event) => {
            const src = event.target.result
            this.imageLink.push({src, alt : image.name})
          }
        }
    } 

    parseInt(num) {
      if(!num) return null
      return parseInt(num)
    }

    attachment
    loading : any = null
    onUploadAttachment(res) {
      const file = res.target.files[0]
      const formData = new FormData(); 
      formData.append('document', file);
      this.pageMenuService.addDocument(formData)
      .subscribe(res => {
        if ( res.type === HttpEventType.UploadProgress ) {
          this.loading = Math.round(res.loaded / res.total ) * 100;
        } else if ( res.type === HttpEventType.Response ){
          const upload : any = res;
          const { id } = upload.body.data;
          this.attachment = id;
          this.loading = null;
          this.toastr.success('Your File has been uploaded.', "Success upload file.")
        }
      })
    }

    closeDialog(arr = null) {
      if(!arr) this.dialog.close()
      if(arr) {
        arr = {
          ...arr,
          image : this.uploadImageFile,
          attachment : this.attachment
        }
        this.dialog.close(arr)
      }
    }
}