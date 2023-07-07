import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

@Component({
    selector : 'cml-pdf',
    templateUrl : './cml-pdf.html'
})
export class CMLPDF implements OnInit {
    @ViewChild('pdfThickness') pdfThickness: ElementRef;
    ngOnInit(): void {
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

    public generateData(data) {
        this.tableData = data
        console.log(data)
        setTimeout(() => {
            this.downloadAsPDF()
        }, 500);
    }

    public downloadAsPDF() {   
        const pdfTable = this.pdfThickness.nativeElement;
        let html = htmlToPdfmake(pdfTable.innerHTML);
        console.log(html)
    
        const documentDefinition = { 
          content: [
            html,
          ],
          pageBreakBefore: function(currentNode) {
            return currentNode.style && currentNode.style.indexOf('pdf-pagebreak-before') > -1;
          }
        };
    
        pdfMake.createPdf(documentDefinition).open();
    }
}