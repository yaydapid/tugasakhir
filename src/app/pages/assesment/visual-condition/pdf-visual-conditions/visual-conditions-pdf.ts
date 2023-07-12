import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

@Component({
    selector : 'visual-conditions-pdf',
    templateUrl : './visual-conditions-pdf.html'
})
export class VisualConditionsPDF implements OnInit {
    @ViewChild('pdfThickness') pdfThickness: ElementRef;
    @Input() externalCheckList; 
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
        { name : "Id", props : 'piping_id', width : "*" },
        { name : "Reading", props : 'reading', width : "auto" },
        { name : "T min", props : 't_min', width : "auto" },
        { name : "LT CR", props : 'lt_cr', width : "auto" },
        { name : "ST CR", props : 'st_cr', width : "auto" },
        { name : "Remaining", props : 'remaining_life', width : "auto" },
        { name : "Half", props : 'half_life', width : "auto" },
        { name : "Retirement", props : 'retirement_date', width : "*" },
        { name : "Next TM", props : 'next_tm_insp_date', width : "*" },
        { name : "Next VE", props : 'next_ve_insp_date', width : "*" },
        { name : "MAWP", props : 'mawp', width : "auto" },
    ]

    public generateData(data) {
        this.tableData = data.visual_condition
        setTimeout(() => {
            this.downloadAsPDF()
        }, 500);
    }

    public downloadAsPDF() {   
        const pdfTable = this.pdfThickness.nativeElement;
        let html = htmlToPdfmake(pdfTable.innerHTML);
    
        const documentDefinition = { 
          content: [
            html,
          ],
          pageBreakBefore: function(currentNode) {
            return currentNode.style && currentNode.style.indexOf('pdf-pagebreak-before') > -1;
          }
        };
    
        pdfMake.createPdf(documentDefinition).print();
    }
}