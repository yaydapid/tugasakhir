import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { environment } from '../../../../../environments/environment';
import { PageMenuService } from '../../../pages-service';

@Component({
  selector: 'ngx-add-assets',
  templateUrl: './add-assets.component.html',
})
export class AddAssetsComponent implements OnInit {

  private apiUrl = environment.apiUrl;

  constructor(
    private dialog: NbDialogRef<any>,
    private pageMenuService : PageMenuService
  ) { }

  ngOnInit(): void { 
    const images = this.dialogData?.data?.images
    if(images)
    this.imageLink = images.map(image => (
      {src : this.apiUrl + "/image/" + image, alt : 'Piping Assets'}
    ))
  }

  @Input() dialogData;

  spesificationItem = [
    { id : 'piping_id', name : "Piping Id" },
    { id : 'piping_name', name : "Piping Name", unbit : 'mm' },
    { id : 'nominal_pipe_size', name : "Nominal Pipe Size" },
    { id : 'pipe_design_code', name : "Pipe Design Code" },
    { id : 'schedule', name : "Schedule" },
    { id : 'outside_diameter', name : "Outside Diameter", unit : 'mm' },
    { id : 'longtd_quality_factor', name : "Longtd. Quality Factor (E)" },
    { id : 'weld_joint_factor', name : "Weld Joint Factor (W)" },
    { id : 'allowable_unit_stress', name : "Allowable Unit Stress (S)", unit : 'psi' },
    { id : 'coefficient', name : "Coefficient (Y)" },
    { id : 'min_design_pressure', name : "Min. Design Pressure (P min)", unit : 'psig' },
    { id : 'max_design_pressure', name : "Max. Design Pressure (P max)", unit : 'psig' },
    { id : 'min_design_temperature', name : "Min. Design Temperature (T min)", unit : 'F' },
    { id : 'max_design_temperature', name : "Max Design Temperature (T max)", unit : 'F' },
    { id : 'corrosion_allowance', name : "Corrosion Allowance", unit : 'mm' },
    { id : 'mechanical_allowance', name : "Mechanical Allowances", unit : 'mm' },
    { id : 'min_structural_thickness', name : "Min. Structural Thickness", unit : 'mm' },
    { id : 'min_alert_thickness', name : "Min. Alert Thickness", unit : 'mm' },
    { id : 'nominal_thickness', name : "Nominal Thickness", unit : 'mm' },
  ];

  imageLink : any = []

  uploadImageFile : any

  parseToInt(num) {
    return parseInt(num)
  }

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
