import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import { NbToastrService } from "@nebular/theme";
import { ReportService } from "../../report-service";
import { environment } from "../../../../../environments/environment";

@Component({
    selector : 'report-assets-pdf',
    templateUrl : './report-assets-pdf.html'
})
export class PDFReportAssets implements OnInit {
  constructor( 
    private toastr : NbToastrService,
    private reportService : ReportService
  ) {}

    randomString : any;
    @ViewChild('pdfThickness') pdfThickness: ElementRef;
    ngOnInit(): void {
      this.randomString = (Math.random() + 1).toString(36).substring(7);
      pdfMake.tableLayouts = {
          exampleLayout: {
            hLineWidth: function (i, node) {
              if (i === 0 || i === node.table.body.length) {
                return 0;
              }
              return (i === node.table.headerRows) ? 2 : 1;
            },
            vLineWidth: function (i) {
              return 0;
            },
            hLineColor: function (i) {
              return i === 1 ? 'black' : '#aaa';
            },
            paddingLeft: function (i) {
              return i === 0 ? 0 : 8;
            },
            paddingRight: function (i, node) {
              return (i === node.table.widths.length - 1) ? 0 : 8;
            }
          }
      };
    }

    tableData : any
    tableStyle = {'font-size' : '12px'}

    pdfHead = [
        { name : "Id", props : 'cml_id', width : "*" },
        { name : "Gauge Point", props : 'gauge_point', width : "auto" },
        { name : "Location", props : 'point_location', width : "auto" },
        { name : "Nom Thickness", props : 'nominal_thickness', width : "auto" },
        { name : "Min Req Thickness", props : 'min_required_thickness', width : "auto" },
        { name : "Last Thick Read", props : 'last_thickness_reading', width : "auto" },
        { name : "Last Thick Date", props : 'last_thickness_reading_date', width : "auto" },
        { name : "Calc CR", props : 'calculated_cr', width : "*" },
    ]

    damageMechanismDetails = [ 
      { type : 'text', prop : 'piping_damage_mechanism', head : 'Piping Damage Mechanism', width : '200px' },
      { type : 'text', prop : 'notes', head : 'Notes', width : '200px' },
      { type : 'text', prop : 'type_location', head : 'Expected Type/Location', width : '200px' },
      { type : 'text', prop : 'last_insp_date', head : 'Last Insp.Date', width : '200px' },
      { type : 'text', prop : 'insp_due_date', head : 'Insp. Due Date', width : '200px' },
    ]

    spesificationItem = [
      [
        { props : 'nominal_pipe_size', name : "Nominal Pipe Size", unit : 'mm' },
        { props : 'pipe_design_code', name : "Pipe Design Code" },
        { props : 'schedule', name : "Schedule", unit : 'mm' },
        { props : 'outside_diameter', name : "Outside Diameter" },
        { props : 'longtd_quality_factor', name : "Longtd. Quality Factor (E)" },
        { props : 'weld_joint_factor', name : "Weld Joint Factor (W)" },
        { props : 'allowable_unit_stress', name : "Allowable Unit Stress (S)", unit : 'psi' },
        { props : 'coefficient', name : "Coefficient (Y)" },
        { props : 'min_design_pressure', name : "Min. Design Pressure (P min)", unit : 'psig' },
      ],
      [
        { props : 'max_design_pressure', name : "Max. Design Pressure (P max)", unit : 'psig' },
        { props : 'min_design_temperature', name : "Min. Design Temp (T min)", unit : 'F' },
        { props : 'max_design_temperature', name : "Max Design Temp (T max)", unit : 'F' },
        { props : 'corrosion_allowance', name : "Corrosion Allowance", unit : 'mm' },
        { props : 'mechanical_allowance', name : "Mechanical Allowances", unit : 'mm' },
        { props : 'min_structural_thickness', name : "Min. Structural Thickness", unit : 'mm' },
        { props : 'min_alert_thickness', name : "Min. Alert Thickness", unit : 'mm' },
        { props : 'nominal_thickness', name : "Nominal Thickness", unit : 'mm' },
      ]
    ];

    public printAsPDF(data) {
        this.tableData = data
        setTimeout(() => {
            const pdf = this.downloadAsPDF()
            pdf.print();
        }, 500);
    }

    @Output("refresh") refreshPage : EventEmitter<any> = new EventEmitter();
    public publishReport(data) {
      this.tableData = data
      setTimeout(() => {
          const pdf = this.downloadAsPDF()
          pdf.getBlob(blobfile => {
            const fileName = this.tableData?.piping_name
            const file = new File([blobfile], fileName + '.pdf')
            const formData = new FormData()
            formData.append('qr_code', file)
            formData.append('title', this.randomString)

            this.reportService.addQRCode(formData)
            .subscribe(
              () => this.toastr.success('Your Report has been published.', "QR Code has been added."),
              () => this.toastr.danger('Your Report failed to published.', "Failed to generate qr code."),
            )

            this.reportService.publishReportAsett({qr_code : this.randomString}, this.tableData.id)
            .subscribe(
              () => this.toastr.success('Your Report has been published.', "Success Publish Report."),
              () => this.toastr.danger('Your Report failed to published.', "Failed Publish Report."),
              () => this.refreshPage.emit(true)
            )
          })

          pdf.download();
      }, 500);
    }

    public downloadAsPDF() {   
        const pdfTable = this.pdfThickness.nativeElement;
        let html = htmlToPdfmake(pdfTable.innerHTML);
        
        if(this.tableData?.qr_code)
        html[2].table.body[0][2].stack[0] = { qr : environment.apiUrl + "/qr_code/" + this.tableData.qr_code, fit: '135' }
        if(!this.tableData.qr_code)
        html[2].table.body[0][2].stack[0] = { qr : environment.apiUrl + "/qr_code/" + this.randomString, fit: '135' }

        const documentDefinition = { 
          content: [
            html,
            {
              image: this.tableData.thickness_chart,
              fit : [500, 500],
            },
            {
              image: this.tableData.remaining_chart,
              fit : [500, 500],
            },
          ],
          pageBreakBefore: function(currentNode) {
            return currentNode.style && currentNode.style.indexOf('pdf-pagebreak-before') > -1;
          }
        };
        return pdfMake.createPdf(documentDefinition)
    }
}