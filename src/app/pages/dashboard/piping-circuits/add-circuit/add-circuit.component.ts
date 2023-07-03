import { Component, Input } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";
import { PipingAssetsService } from "../../piping-assets/piping-assets.service";
import { PageMenuService } from "../../../pages-service";
import { environment } from "../../../../../environments/environment";

@Component({
    selector: 'ngx-add-circuit',
    templateUrl: './add-circuit.component.html',
})
export class AddCircuitComponent {
        
    constructor(
        private dialog: NbDialogRef<any>,
        private assetsService : PipingAssetsService,
        private pageMenuService : PageMenuService
    ) { }

    private apiUrl = environment.apiUrl;

    ngOnInit(): void {
        this.assetsService.getPipingAssets()
        .subscribe(({data} : any) => {
            this.piping = data.filter(item => !item.piping_circuit 
                || this.dialogData?.data?.piping_id.includes(item.id)
                );
        })

        const images = this.dialogData?.data?.images
        if(images)
        this.imageLink = images.map(image => (
          {src : this.apiUrl + "/image/" + image, alt : 'Piping Assets'}
        ))
    }

    @Input() dialogData : any;
    piping
    
    imageLink : any= [
        // { src : "https://wallpapercave.com/wp/wp6954364.jpg", alt : "Pipe 1"},
        // { src : "https://th.bing.com/th/id/OIP.AYvIW8-BF1Kfk1LvIq2WagAAAA?pid=ImgDet&w=400&h=400&rs=1", alt : "Pipe 2"},
        // { src : "https://th.bing.com/th/id/OIP.buLgFymST5kZJoEQjTQVxQHaE7?pid=ImgDet&rs=1", alt : "Pipe 3"},
    ]

    
    attachment
    onUploadAttachment(res) {
        const file = res.target.files[0]
        const formData = new FormData(); 
        formData.append('document', file);
        this.pageMenuService.addDocument(formData)
        .subscribe(({data} : any) => {
        this.attachment = data.id
        })
    }

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

    closeDialog(arr = null) {
      // return console.log(arr)
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