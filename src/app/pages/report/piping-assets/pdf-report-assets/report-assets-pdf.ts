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

    public printAsPDF(data) {
      console.log(data)
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
        html[2].table.body[0][2].stack[0] = { qr : environment.apiUrl + "/qr_code/" + this.tableData.qr_code }
        if(!this.tableData.qr_code)
        html[2].table.body[0][2].stack[0] = { qr : environment.apiUrl + "/qr_code/" + this.randomString }

        const documentDefinition = { 
          content: [
            html,
          ],
          pageBreakBefore: function(currentNode) {
            return currentNode.style && currentNode.style.indexOf('pdf-pagebreak-before') > -1;
          }
        };
        return pdfMake.createPdf(documentDefinition)
    }
}