"use strict";(self.webpackChunkngx_admin_demo=self.webpackChunkngx_admin_demo||[]).push([[806],{2356:(N,D,l)=>{l.d(D,{Z:()=>p});var m=l(9808),T=l(4738),s=l(3254),C=l(8246),u=l(5e3);let p=(()=>{class d{}return d.\u0275fac=function(h){return new(h||d)},d.\u0275mod=u.oAB({type:d}),d.\u0275inj=u.cJS({imports:[[m.ez,T.O,s.zyh,s.T2N,s.KdK,C.F5,s.j7H.forChild({closeOnBackdropClick:!0})]]}),d})()},2806:(N,D,l)=>{l.r(D),l.d(D,{AssesmentModule:()=>Rt});var m=l(9808),T=l(4738),s=l(3254),C=l(2497),u=l(4847),p=l(8279),d=l(5331),k=l(4641),h=l.n(k),J=l(8493),V=l(7238),E=l.n(V),t=l(5e3);const Y=["pdfThickness"];function I(i,a){if(1&i&&(t.TgZ(0,"th")(1,"b",7),t._uU(2),t.qZA()()),2&i){const e=a.$implicit;t.xp6(2),t.Oqu(e.name)}}function j(i,a){if(1&i&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&i){const e=a.$implicit,n=t.oxw().$implicit;t.xp6(1),t.hij(" ",null==n?null:n[e.props]," ")}}function G(i,a){if(1&i&&(t.TgZ(0,"tr"),t.YNc(1,j,2,1,"td",6),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.pdfHead)}}function z(i,a){if(1&i&&(t.TgZ(0,"table",5)(1,"tr"),t.YNc(2,I,3,1,"th",6),t.qZA(),t.YNc(3,G,2,1,"tr",6),t.qZA()),2&i){const e=t.oxw();t.Akn(e.tableStyle),t.xp6(2),t.Q6J("ngForOf",e.pdfHead),t.xp6(1),t.Q6J("ngForOf",e.tableData)}}h().vfs=J.I.vfs;let S=(()=>{class i{constructor(){this.tableStyle={"font-size":"12px"},this.pdfHead=[{name:"Id",props:"piping_id",width:"*"},{name:"Reading",props:"reading",width:"auto"},{name:"T min",props:"t_min",width:"auto"},{name:"LT CR",props:"lt_cr",width:"auto"},{name:"ST CR",props:"st_cr",width:"auto"},{name:"Remaining",props:"remaining_life",width:"auto"},{name:"Half",props:"half_life",width:"auto"},{name:"Retirement",props:"retirement_date",width:"*"},{name:"Next TM",props:"next_tm_insp_date",width:"*"},{name:"Next VE",props:"next_ve_insp_date",width:"*"},{name:"MAWP",props:"mawp",width:"auto"}]}ngOnInit(){h().tableLayouts={exampleLayout:{hLineWidth:function(e,n){return 0===e||e===n.table.body.length?0:e===n.table.headerRows?2:1},vLineWidth:function(e){return 0},hLineColor:function(e){return 1===e?"black":"#aaa"},paddingLeft:function(e){return 0===e?0:8},paddingRight:function(e,n){return e===n.table.widths.length-1?0:8}}}}generateData(e){this.tableData=e,setTimeout(()=>{this.downloadAsPDF()},500)}downloadAsPDF(){const e=this.pdfThickness.nativeElement,o={content:[E()(e.innerHTML)],pageBreakBefore:function(r){return r.style&&r.style.indexOf("pdf-pagebreak-before")>-1}};h().createPdf(o).print()}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["thickness-pdf"]],viewQuery:function(e,n){if(1&e&&t.Gf(Y,5),2&e){let o;t.iGM(o=t.CRH())&&(n.pdfThickness=o.first)}},decls:6,vars:1,consts:[[1,"container",2,"display","none"],["id","Thickness"],["pdfThickness",""],[2,"width","100%","margin","0 0 1rem 0","color","#5588EE"],["data-pdfmake",'{"widths":["*", "auto", "auto", "auto", "auto", "auto", "auto", "*", "*", "*", "auto"], "layout" : "exampleLayout"}',3,"style",4,"ngIf"],["data-pdfmake",'{"widths":["*", "auto", "auto", "auto", "auto", "auto", "auto", "*", "*", "*", "auto"], "layout" : "exampleLayout"}'],[4,"ngFor","ngForOf"],[2,"font-weight","bold"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1,2)(3,"h5",3),t._uU(4,"Thickness"),t.qZA(),t.YNc(5,z,4,4,"table",4),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("ngIf",n.tableData))},directives:[m.O5,m.sg],encapsulation:2}),i})();const W=["pdfThickness"];function $(i,a){if(1&i&&(t.TgZ(0,"td",10),t._uU(1),t.qZA()),2&i){const e=a.$implicit,n=t.oxw().$implicit,o=t.oxw();t.xp6(1),t.hij(" ",o.externalCheckList[n+e].title," ")}}function K(i,a){if(1&i&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&i){const e=a.$implicit,n=t.oxw().$implicit,o=t.oxw();t.xp6(1),t.hij(" Condition : ",null==o.tableData?null:o.tableData[o.externalCheckList[n+e].conditions.props]," ")}}function X(i,a){if(1&i&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&i){const e=a.$implicit,n=t.oxw().$implicit,o=t.oxw();t.xp6(1),t.hij(" ",null==o.tableData?null:o.tableData[o.externalCheckList[n+e].comment.props]," ")}}function tt(i,a){1&i&&(t.TgZ(0,"td"),t._uU(1,"Source :"),t.qZA())}function et(i,a){if(1&i&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.hij(" \xa0 - ",e.title,"")}}function nt(i,a){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,et,2,1,"span",11),t.qZA()),2&i){const e=a.$implicit,n=t.oxw(3);t.xp6(1),t.Q6J("ngIf",null==n.tableData?null:n.tableData[null==e?null:e.props])}}function it(i,a){if(1&i&&(t.TgZ(0,"td"),t.YNc(1,nt,2,1,"div",8),t.qZA()),2&i){const e=a.$implicit,n=t.oxw().$implicit,o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.externalCheckList[n+e].source)}}const x=function(){return[0,1]};function ot(i,a){1&i&&(t.TgZ(0,"div")(1,"tr"),t.YNc(2,$,2,1,"td",9),t.qZA(),t.TgZ(3,"tr"),t.YNc(4,K,2,1,"td",8),t.qZA(),t.TgZ(5,"tr"),t.YNc(6,X,2,1,"td",8),t.qZA(),t.TgZ(7,"tr"),t.YNc(8,tt,2,0,"td",8),t.qZA(),t.TgZ(9,"tr"),t.YNc(10,it,2,1,"td",8),t.qZA()()),2&i&&(t.xp6(2),t.Q6J("ngForOf",t.DdM(5,x)),t.xp6(2),t.Q6J("ngForOf",t.DdM(6,x)),t.xp6(2),t.Q6J("ngForOf",t.DdM(7,x)),t.xp6(2),t.Q6J("ngForOf",t.DdM(8,x)),t.xp6(2),t.Q6J("ngForOf",t.DdM(9,x)))}const at=function(){return[0,2,4]};h().vfs=J.I.vfs;let q=(()=>{class i{constructor(){this.tableStyle={"font-size":"12px"},this.pdfHead=[{name:"Id",props:"piping_id",width:"*"},{name:"Reading",props:"reading",width:"auto"},{name:"T min",props:"t_min",width:"auto"},{name:"LT CR",props:"lt_cr",width:"auto"},{name:"ST CR",props:"st_cr",width:"auto"},{name:"Remaining",props:"remaining_life",width:"auto"},{name:"Half",props:"half_life",width:"auto"},{name:"Retirement",props:"retirement_date",width:"*"},{name:"Next TM",props:"next_tm_insp_date",width:"*"},{name:"Next VE",props:"next_ve_insp_date",width:"*"},{name:"MAWP",props:"mawp",width:"auto"}]}ngOnInit(){h().tableLayouts={exampleLayout:{hLineWidth:function(e,n){return 0===e||e===n.table.body.length?0:e===n.table.headerRows?2:1},vLineWidth:function(e){return 0},hLineColor:function(e){return 1===e?"black":"#aaa"},paddingLeft:function(e){return 0===e?0:8},paddingRight:function(e,n){return e===n.table.widths.length-1?0:8}}}}generateData(e){this.tableData=e.visual_condition,this.tableHead=e,setTimeout(()=>{this.downloadAsPDF()},500)}downloadAsPDF(){const e=this.pdfThickness.nativeElement,o={content:[E()(e.innerHTML)],pageBreakBefore:function(r){return r.style&&r.style.indexOf("pdf-pagebreak-before")>-1}};h().createPdf(o).print()}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["visual-conditions-pdf"]],viewQuery:function(e,n){if(1&e&&t.Gf(W,5),2&e){let o;t.iGM(o=t.CRH())&&(n.pdfThickness=o.first)}},inputs:{externalCheckList:"externalCheckList"},decls:34,vars:10,consts:[[1,"container",2,"display","none"],["id","Thickness"],["pdfThickness",""],[2,"width","100%","color","#5588EE"],[2,"color","#5588EE"],[2,"color","gray","margin","1rem 0 0.5rem 0"],[2,"font-size","12px"],["data-pdfmake",'{"widths":["*", "*"], "layout" : "noBorders"}'],[4,"ngFor","ngForOf"],["style","color: #5588EE; margin: 0.5rem 0 0 0;",4,"ngFor","ngForOf"],[2,"color","#5588EE","margin","0.5rem 0 0 0"],[4,"ngIf"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1,2)(3,"h5",3),t._uU(4,"Visual Conditions"),t.qZA(),t.TgZ(5,"span",4)(6,"b"),t._uU(7),t.qZA()(),t.TgZ(8,"span",5),t._uU(9,"General"),t.qZA(),t.TgZ(10,"div",6)(11,"span"),t._uU(12,"Condition"),t.qZA(),t.TgZ(13,"span"),t._uU(14," : "),t.qZA(),t.TgZ(15,"span"),t._uU(16),t.qZA()(),t.TgZ(17,"div")(18,"table",7)(19,"tr")(20,"td"),t._uU(21," Finding "),t.qZA(),t.TgZ(22,"td"),t._uU(23," Recomendation "),t.qZA()(),t.TgZ(24,"tr")(25,"td"),t._uU(26),t.qZA(),t.TgZ(27,"td"),t._uU(28),t.qZA()()()(),t.TgZ(29,"span",5),t._uU(30,"External Checklist"),t.qZA(),t.TgZ(31,"div")(32,"table",7),t.YNc(33,ot,11,10,"div",8),t.qZA()()()()),2&e&&(t.xp6(7),t.Oqu(null==n.tableHead?null:n.tableHead.piping_id),t.xp6(9),t.Oqu(null==n.tableData?null:n.tableData.general_condition),t.xp6(2),t.Akn(n.tableStyle),t.xp6(8),t.hij(" ",null==n.tableData?null:n.tableData.general_finding," "),t.xp6(2),t.hij(" ",null==n.tableData?null:n.tableData.general_recomendation," "),t.xp6(4),t.Akn(n.tableStyle),t.xp6(1),t.Q6J("ngForOf",t.DdM(9,at)))},directives:[m.sg,m.O5],encapsulation:2}),i})();var Q=l(2340),L=l(520);let st=(()=>{class i{constructor(e){this.httpClient=e,this.apiUrl=Q.N.apiUrl}getVisualConditions(){return this.httpClient.get(this.apiUrl+"/visual_condition")}updateVisualConditions(e,n){return this.httpClient.put(this.apiUrl+"/visual_condition/"+n,e)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(L.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var F=l(7024),Z=l(4204),O=l(7531),f=l(3075),H=l(4107),lt=l(3252);function rt(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"nb-option",33),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw().filterByConditions(r)}),t._uU(1),t.qZA()}if(2&i){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}const ct=function(){return{width:"40px"}};function pt(i,a){1&i&&(t.TgZ(0,"th",34),t._uU(1," Piping ID "),t.qZA()),2&i&&t.Q6J("ngStyle",t.DdM(1,ct))}const dt=function(i){return{color:i}};function ut(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"td",35,36),t.NdJ("mouseover",function(){return t.CHM(e),t.MAs(1).style.color="#0492c2"})("mouseout",function(){const r=t.CHM(e).$implicit;return t.MAs(1).style.color=t.oxw().selectionData.piping_id==r.piping_id?"#0492c2":"black"})("click",function(){const r=t.CHM(e).$implicit;return t.oxw().showData(r)}),t._uU(2),t.qZA()}if(2&i){const e=a.$implicit,n=t.oxw();t.Q6J("ngStyle",t.VKq(2,dt,n.selectionData.piping_id==e.piping_id?"#0492c2":"black")),t.xp6(2),t.hij(" ",e.piping_id," ")}}function mt(i,a){1&i&&t._UZ(0,"tr",37)}function _t(i,a){1&i&&t._UZ(0,"tr",38)}function gt(i,a){if(1&i&&(t.TgZ(0,"mat-option",39),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}function ht(i,a){if(1&i&&(t.TgZ(0,"mat-option",39),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}function ft(i,a){if(1&i&&(t.TgZ(0,"nb-list-item",2)(1,"span"),t._uU(2),t.qZA(),t._UZ(3,"nb-checkbox",46),t.qZA()),2&i){const e=a.$implicit,n=t.oxw(2);t.xp6(2),t.Oqu(null==e?null:e.title),t.xp6(1),t.Q6J("ngModel",n.convertToBool(null==n.selectionData?null:n.selectionData.visual_condition[e.props]))("name",null==e?null:e.props)}}const R=function(){return["Excellent","Good","Average","Below Average","Poor"]};function bt(i,a){if(1&i&&(t.TgZ(0,"section",40)(1,"div",41)(2,"label",26),t._uU(3),t.qZA(),t.TgZ(4,"mat-form-field")(5,"mat-label"),t._uU(6,"Condition"),t.qZA(),t.TgZ(7,"mat-select",42),t.YNc(8,ht,2,2,"mat-option",24),t.qZA()()(),t.TgZ(9,"div",43),t._UZ(10,"textarea",44),t.qZA(),t.TgZ(11,"nb-list"),t.YNc(12,ft,4,3,"nb-list-item",45),t.qZA()()),2&i){const e=a.$implicit,n=t.oxw();t.xp6(3),t.Oqu(e.title),t.xp6(4),t.Q6J("ngModel",null==n.selectionData?null:n.selectionData.visual_condition[null==e||null==e.conditions?null:e.conditions.props])("name",null==e||null==e.conditions?null:e.conditions.props),t.xp6(1),t.Q6J("ngForOf",t.DdM(8,R)),t.xp6(2),t.Q6J("ngModel",null==n.selectionData?null:n.selectionData.visual_condition[null==e||null==e.comment?null:e.comment.props])("name",null==e||null==e.comment?null:e.comment.props)("id",null==e||null==e.comment?null:e.comment.props),t.xp6(2),t.Q6J("ngForOf",e.source)}}const vt=function(){return["No Filter","Excellent","Good","Average","Below Average","Poor"]};let Dt=(()=>{class i{constructor(e,n,o){this.visualConditionService=e,this.toastrService=n,this.variables=o,this.displayedColumns=["piping_id"],this.resultsLength=0,this.externalCheckList=[{title:"Leaks",conditions:{title:"Leaks",props:"leaks_condition"},comment:{title:"Leaks Comment",props:"leaks_comment"},source:[{title:"Process",props:"leaks_process"},{title:"Steam Tracing",props:"leaks_steam_tracing"},{title:"Existing Clamp",props:"leaks_existing_clamps"}]},{title:"Misalignment",conditions:{title:"Misalignment",props:"misalignment_condition"},comment:{title:"Misalignment Comment",props:"misalignment_comment"},source:[{title:"Piping Misalignment",props:"misalignment_piping_misalignment"},{title:"Expansion Joint Misalignment",props:"misalignment_expainsion_joint"}]},{title:"Vibration",conditions:{title:"Vibration",props:"vibration_condition"},comment:{title:"Vibration Comment",props:"vibration_comment"},source:[{title:"Excessive Overhung Weight",props:"vibration_excessive_overhung"},{title:"Inadequate Support",props:"vibration_inadequate_support"},{title:"Thin, Small-bore, or Alloy Piping",props:"vibration_thin_small"},{title:"Threaded Connections",props:"vibration_threaded_connections"},{title:"Loose Support Causing Metal Wear",props:"vibration_loose_support"}]},{title:"Corrosion",conditions:{title:"Corrosion",props:"corrosion_condition"},comment:{title:"Corrosion Comment",props:"corrosion_comment"},source:[{title:"Bolting Support Points Under Clamps",props:"corrosion_bolting_support"},{title:"Coating/Painting Deterioration",props:"corrosion_coating_painting"},{title:"Soil-to-air Interfaces",props:"corrosion_soil_to_air"},{title:"Insulation Interfaces",props:"corrosion_insulation_interface"},{title:"Bilogical Growth",props:"corrosion_biological_growth"}]},{title:"Supports",conditions:{title:"Supports",props:"supports_condition"},comment:{title:"Support Comment",props:"supports_comment"},source:[{title:"Shoes Off Supports",props:"supports_shoes_supports"},{title:"Hanger Distortion of Breakage",props:"supports_hanger_distortion"},{title:"Bottomed Out Springs",props:"supports_bottomed_out"},{title:"Brace Distorsion/Breakage",props:"supports_brace_distortion"},{title:"Loose Brackets",props:"supports_loose_brackets"},{title:"Slides Plates/Rollers",props:"supports_slides_plates"},{title:"Counter Balance Condition",props:"supports_counter_balance"},{title:"Support Corrosion",props:"supports_support_corrosion"}]},{title:"Insulation",conditions:{title:"Insulation",props:"insulation_condition"},comment:{title:"Insulation Comment",props:"insulation_comment"},source:[{title:"Damage/Penetrations",props:"insulation_damage_penetrations"},{title:"Missing Jacketing Insulation",props:"insulation_missing_jacketing"},{title:"Sealing Deterioration",props:"insulation_sealing_deterioration"},{title:"Bulging",props:"insulation_bulging"},{title:"Banding (Broken/Missing)",props:"insulation_banding"}]}]}ngOnInit(){this.visualConditionService.getVisualConditions().subscribe(({data:e})=>{var n;const o=e.map(r=>{const{general_condition:c,leaks_condition:_,misalignment_condition:b,vibration_condition:g,corrosion_condition:v,supports_condition:y,insulation_condition:P}=r,A=[c,_,b,g,v,y,P].map(w=>this.variables.visualToPoint(w)).reduce((w,U)=>w+U,0)/7;return Object.assign(Object.assign({},r.piping),{visual_condition:Object.assign(Object.assign({},r),{piping:null}),visual_sort:this.variables.visualToLevel(Math.round(A))})});this.tableData=o,this.selectionData=null!==(n=this.selectionData)&&void 0!==n?n:o[0],this.dataSource=new p.by(o),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort})}filterByConditions(e){let n;"No Filter"==e&&(n=this.tableData),"Excellent"==e&&(n=this.tableData.filter(o=>"Excellent"==o.visual_sort)),"Good"==e&&(n=this.tableData.filter(o=>"Good"==o.visual_sort)),"Average"==e&&(n=this.tableData.filter(o=>"Average"==o.visual_sort)),"Below Average"==e&&(n=this.tableData.filter(o=>"Below Average"==o.visual_sort)),"Poor"==e&&(n=this.tableData.filter(o=>"Poor"==o.visual_sort)),this.dataSource=new p.by(n)}showData(e){this.selectionData=e}convertToBool(e){return 0!=e}onSubmit(e){this.visualConditionService.updateVisualConditions(e,this.selectionData.visual_condition.id).subscribe(o=>this.ngOnInit(),()=>this.toastrService.danger("Please input all conditions field.","Your request failed."),()=>this.toastrService.success("Data has been updated.","Your request success."))}applyFilter(e){this.dataSource.filter=e.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(st),t.Y36(s.quB),t.Y36(F.L))},i.\u0275cmp=t.Xpm({type:i,selectors:[["ngx-visual-condition"]],viewQuery:function(e,n){if(1&e&&(t.Gf(S,5),t.Gf(d.NW,5),t.Gf(u.YE,5),t.Gf(q,5)),2&e){let o;t.iGM(o=t.CRH())&&(n.pdfThickness=o.first),t.iGM(o=t.CRH())&&(n.paginator=o.first),t.iGM(o=t.CRH())&&(n.sort=o.first),t.iGM(o=t.CRH())&&(n.visualPDF=o.first)}},decls:65,vars:19,consts:[["nbButton","","outline","","size","small","status","primary",3,"disabled","click"],["icon","printer-outline",1,"m-1"],[1,"d-flex","justify-content-between"],["matInput","","placeholder","Ex. Mia",3,"keyup"],["input",""],[1,"row"],[1,"col"],["placeholder","Conditions","status","primary","size","small",1,"",3,"selected"],[3,"value","click",4,"ngFor","ngForOf"],[1,"col-3"],["matSort","","mat-table","",1,"mat-elevation-z8",2,"width","100%","box-shadow","none",3,"dataSource"],["matColumnDef","piping_id"],["mat-header-cell","","mat-sort-header","",3,"ngStyle",4,"matHeaderCellDef"],["mat-cell","","style","cursor : pointer",3,"ngStyle","mouseover","mouseout","click",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["aria-label","Select page of GitHub search results",3,"length","pageSize"],[1,"col-9",3,"ngSubmit"],["visualConditionForm","ngForm"],["multi",""],["expanded","true"],[1,"fw-bold","text-info"],[1,"my-2"],["name","general_condition","required","",3,"ngModel"],[3,"value",4,"ngFor","ngForOf"],[1,"w-100","px-2"],["for","finding",1,"d-block","mb-2"],["nbInput","","id","finding","fullWidth","","rows","5","name","general_finding",3,"ngModel"],["for","recomendation",1,"d-block","mb-2"],["nbInput","","name","general_recomendation","id","recomendation","fullWidth","","rows","5",3,"ngModel"],["class","pb-5 px-4 col-6",4,"ngFor","ngForOf"],["nbButton","","status","success","type","submit",1,"w-100","m-2",3,"disabled"],[3,"externalCheckList"],[3,"value","click"],["mat-header-cell","","mat-sort-header","",3,"ngStyle"],["mat-cell","",2,"cursor","pointer",3,"ngStyle","mouseover","mouseout","click"],["nameCell",""],["mat-header-row",""],["mat-row",""],[3,"value"],[1,"pb-5","px-4","col-6"],[1,"d-flex","align-items-center","justify-content-between"],["required","",3,"ngModel","name"],[1,"w-100"],["nbInput","","fullWidth","","rows","5",3,"ngModel","name","id"],["class","d-flex justify-content-between",4,"ngFor","ngForOf"],[1,"mx-2",3,"ngModel","name"]],template:function(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"nb-card")(1,"nb-card-body")(2,"button",0),t.NdJ("click",function(){return n.visualPDF.generateData(n.selectionData)}),t._UZ(3,"nb-icon",1),t.TgZ(4,"span"),t._uU(5,"Print"),t.qZA()()()(),t.TgZ(6,"nb-card")(7,"nb-card-header",2)(8,"div")(9,"h5"),t._uU(10,"Visual Condition"),t.qZA(),t.TgZ(11,"mat-form-field")(12,"mat-label"),t._uU(13,"Hit Enter To Search"),t.qZA(),t.TgZ(14,"input",3,4),t.NdJ("keyup",function(c){return n.applyFilter(c)}),t.qZA()()(),t.TgZ(16,"div",5)(17,"div",6),t._uU(18,"Conditions"),t.qZA(),t.TgZ(19,"div",6)(20,"nb-select",7),t.YNc(21,rt,2,2,"nb-option",8),t.qZA()()()(),t.TgZ(22,"nb-card-body",5)(23,"div",9)(24,"table",10),t.ynx(25,11),t.YNc(26,pt,2,2,"th",12),t.YNc(27,ut,3,4,"td",13),t.BQk(),t.YNc(28,mt,1,0,"tr",14),t.YNc(29,_t,1,0,"tr",15),t.qZA(),t._UZ(30,"mat-paginator",16),t.qZA(),t.TgZ(31,"form",17,18),t.NdJ("ngSubmit",function(){t.CHM(o);const c=t.MAs(32);return n.onSubmit(c.value)}),t.TgZ(33,"nb-accordion",19)(34,"nb-accordion-item",20)(35,"nb-accordion-item-header"),t._uU(36,"General"),t.qZA(),t.TgZ(37,"nb-accordion-item-body")(38,"div",2)(39,"span",21),t._uU(40),t.qZA(),t.TgZ(41,"div")(42,"mat-form-field",22)(43,"mat-label"),t._uU(44,"Condition"),t.qZA(),t.TgZ(45,"mat-select",23),t.YNc(46,gt,2,2,"mat-option",24),t.qZA()()()(),t.TgZ(47,"div",2)(48,"div",25)(49,"label",26),t._uU(50,"Finding"),t.qZA(),t._UZ(51,"textarea",27),t.qZA(),t.TgZ(52,"div",25)(53,"label",28),t._uU(54,"Recomendation"),t.qZA(),t._UZ(55,"textarea",29),t.qZA()()()(),t.TgZ(56,"nb-accordion-item",20)(57,"nb-accordion-item-header"),t._uU(58,"External Checklist"),t.qZA(),t.TgZ(59,"nb-accordion-item-body")(60,"div",5),t.YNc(61,bt,13,9,"section",30),t.qZA()()()(),t.TgZ(62,"button",31),t._uU(63,"Submit"),t.qZA()()()(),t._UZ(64,"visual-conditions-pdf",32)}if(2&e){const o=t.MAs(32);t.xp6(2),t.Q6J("disabled",!(null!=n.tableData&&n.tableData.length)),t.xp6(18),t.Q6J("selected","No Filter"),t.xp6(1),t.Q6J("ngForOf",t.DdM(17,vt)),t.xp6(3),t.Q6J("dataSource",n.dataSource),t.xp6(4),t.Q6J("matHeaderRowDef",n.displayedColumns)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("length",n.resultsLength)("pageSize",30),t.xp6(10),t.hij("Selected Pipe : ",null==n.selectionData?null:n.selectionData.piping_id,""),t.xp6(5),t.Q6J("ngModel",null==n.selectionData||null==n.selectionData.visual_condition?null:n.selectionData.visual_condition.general_condition),t.xp6(1),t.Q6J("ngForOf",t.DdM(18,R)),t.xp6(5),t.Q6J("ngModel",null==n.selectionData||null==n.selectionData.visual_condition?null:n.selectionData.visual_condition.general_finding),t.xp6(4),t.Q6J("ngModel",null==n.selectionData||null==n.selectionData.visual_condition?null:n.selectionData.visual_condition.general_recomendation),t.xp6(6),t.Q6J("ngForOf",n.externalCheckList),t.xp6(1),t.Q6J("disabled",!(o.form.valid&&n.selectionData)),t.xp6(2),t.Q6J("externalCheckList",n.externalCheckList)}},directives:[s.Asz,s.yKW,s.DPz,s.fMN,s.ndF,Z.KE,Z.hX,O.Nt,s.rs,m.sg,s.q51,p.BZ,u.YE,p.w1,p.fO,p.ge,u.nU,m.PC,p.Dz,p.ev,p.as,p.XQ,p.nj,p.Gk,d.NW,f._Y,f.JL,f.F,s.qCO,s.SaG,s.YZd,s.AvE,H.gD,f.Q7,f.JJ,f.On,lt.ey,s.h8i,f.Fj,s.zP_,s.qBV,s.NTf,q],encapsulation:2}),i})();var M=l(3858),Tt=l(9371);function Ct(i,a){1&i&&(t.TgZ(0,"nb-alert",4),t._uU(1,"Data Not Available. Please add asset."),t.qZA())}function xt(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"ngx-mat-table",5),t.NdJ("onClickTable",function(o){return t.CHM(e),t.oxw().onClickTable(o.data,o.title)}),t.qZA()}if(2&i){const e=t.oxw();t.Q6J("tableHeader",e.tableHeader)("columnDetails",e.columnDetails)("tableData",e.tableData)}}let Zt=(()=>{class i{constructor(e,n){this.thicknessService=e,this.variables=n,this.tableHeader={title:"Thickness",filter:[{name:"MAWP",value:["No Filter","Normal","Abnormal"],title:"sort-mawp",selection:"No Filter"}]},this.tableData=[],this.columnDetails=[{type:"navto",prop:"piping_id",head:"Piping ID",width:"200px",nav:"/pages/cml/"},{type:"text",prop:"reading",head:"Reading (mm)",width:"200px"},{type:"text",prop:"t_min",head:"T min (mm)",width:"200px"},{type:"text",prop:"lt_cr",head:"LT CR (mm/Year)",width:"200px"},{type:"text",prop:"st_cr",head:"ST CR (mm/Year)",width:"200px"},{type:"text",prop:"remaining_life",head:"Remaining Life (Year)",width:"200px"},{type:"text",prop:"half_life",head:"Half Life (Year)",width:"200px"},{type:"text",prop:"retirement_date",head:"Retirement Date",width:"200px"},{type:"text",prop:"next_tm_insp_date",head:"Next TM Insp Date",width:"200px"},{type:"text",prop:"next_ve_insp_date",head:"Next VE Insp Date",width:"200px"},{type:"text",prop:"mawp",head:"MAWP (psi)",width:"200px",color:"mawp_color"}]}ngOnInit(){this.thicknessService.getDataThickness().subscribe(({data:e})=>{this.tableData=e.map(n=>{const{reading:o,min_required_thickness:r,lt_cr:c,st_cr:_,remaining_life:b,half_life:g,retirement_date:v,next_tm_insp_date:y,next_ve_insp_date:P,mawp:A,max_design_pressure:w}=this.variables.getThicknessCalculation(n),U=A<w?"red":"black";return Object.assign(Object.assign({},n),{reading:o.toFixed(3),t_min:r.toFixed(3),lt_cr:c.toFixed(3),st_cr:_.toFixed(3),remaining_life:b.toFixed(2),half_life:g.toFixed(2),retirement_date:v,next_tm_insp_date:y,next_ve_insp_date:P,mawp:A.toFixed(2),mawp_color:U})})})}onClickTable(e,n){if("sort-mawp"==n){if("No Filter"==e)return this.viewTable.regenerateTable(this.tableData);const o=this.variables.sortByMawp(this.tableData,e);this.viewTable.regenerateTable(o)}}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(Tt.O),t.Y36(F.L))},i.\u0275cmp=t.Xpm({type:i,selectors:[["ngx-thickness"]],viewQuery:function(e,n){if(1&e&&(t.Gf(M.V,5),t.Gf(S,5)),2&e){let o;t.iGM(o=t.CRH())&&(n.viewTable=o.first),t.iGM(o=t.CRH())&&(n.pdfThickness=o.first)}},decls:9,vars:3,consts:[["nbButton","","outline","","size","small","status","primary",3,"disabled","click"],["icon","printer-outline",1,"m-1"],["status","danger",4,"ngIf"],[3,"tableHeader","columnDetails","tableData","onClickTable",4,"ngIf"],["status","danger"],[3,"tableHeader","columnDetails","tableData","onClickTable"]],template:function(e,n){1&e&&(t.TgZ(0,"nb-card")(1,"nb-card-body")(2,"button",0),t.NdJ("click",function(){return n.pdfThickness.generateData(n.tableData)}),t._UZ(3,"nb-icon",1),t.TgZ(4,"span"),t._uU(5,"Print"),t.qZA()()()(),t.YNc(6,Ct,2,0,"nb-alert",2),t.YNc(7,xt,1,3,"ngx-mat-table",3),t._UZ(8,"thickness-pdf")),2&e&&(t.xp6(2),t.Q6J("disabled",!(null!=n.tableData&&n.tableData.length)),t.xp6(4),t.Q6J("ngIf",!n.tableData.length),t.xp6(1),t.Q6J("ngIf",n.tableData.length))},directives:[s.Asz,s.yKW,s.DPz,s.fMN,m.O5,s.$9b,M.V,S],encapsulation:2}),i})(),yt=(()=>{class i{constructor(e){this.httpClient=e,this.apiUrl=Q.N.apiUrl}getDamageMechanism(){return this.httpClient.get(this.apiUrl+"/damage_mechanism")}updateDamageMechanism(e,n){return this.httpClient.put(this.apiUrl+"/damage_mechanism/"+e,n)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(L.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function wt(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"nb-option",19),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw().filterBySuspec(r)}),t._uU(1),t.qZA()}if(2&i){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}const Mt=function(){return{width:"40px"}};function At(i,a){1&i&&(t.TgZ(0,"th",20),t._uU(1," Piping ID "),t.qZA()),2&i&&t.Q6J("ngStyle",t.DdM(1,Mt))}const kt=function(i){return{color:i}};function St(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"td",21,22),t.NdJ("mouseover",function(){return t.CHM(e),t.MAs(1).style.color="#0492c2"})("mouseout",function(){const r=t.CHM(e).$implicit,c=t.MAs(1),_=t.oxw();return c.style.color=(null==_.selectionData?null:_.selectionData.piping_id)==r.piping_id?"#0492c2":"black"})("click",function(){const r=t.CHM(e).$implicit;return t.oxw().showData(r)}),t._uU(2),t.qZA()}if(2&i){const e=a.$implicit,n=t.oxw();t.Q6J("ngStyle",t.VKq(2,kt,(null==n.selectionData?null:n.selectionData.piping_id)==e.piping_id?"#0492c2":"black")),t.xp6(2),t.hij(" ",null==e?null:e.piping_id," ")}}function Ft(i,a){1&i&&t._UZ(0,"tr",23)}function Ot(i,a){1&i&&t._UZ(0,"tr",24)}const Pt=function(){return["No Filter","Low","Medium","High"]},B=function(){return{show:!1}};let Ut=(()=>{class i{constructor(e,n,o,r){this.damageMechanismService=e,this.datePipe=n,this.toastrService=o,this.variables=r,this.columnDetails=[{type:"text",prop:"piping_damage_mechanism",head:"Piping Damage Mechanism",width:"800px"},{type:"check",prop:"active",head:"Active",width:"200px"},{type:"drop-down",prop:"susceptibility",head:"Susceptibility",width:"200px",value:["Low","Medium","High"]},{type:"editable text",prop:"notes",head:"Notes",width:"200px"},{type:"editable text",prop:"type_location",head:"Expected Type/Location",width:"200px"},{type:"editable date",prop:"last_insp_date",head:"Last Insp.Date",width:"200px"},{type:"editable date",prop:"insp_due_date",head:"Insp. Due Date",width:"200px"}],this.displayedColumns=["piping_id"]}ngOnInit(){this.damageMechanismService.getDamageMechanism().subscribe(({data:e})=>{var n;this.regenerateTableData(null===(n=e[0])||void 0===n?void 0:n.damage_mechanism),this.tableData=e.map(o=>{const{damage_mechanism:r,piping:c}=o,_=r?Object.values(r).map(({susceptibility:g})=>this.variables.damageToPoint(g)):[null],b=_.reduce((g,v)=>g+v,0)/_.length;return Object.assign(Object.assign({},o),{piping_id:c.piping_id,suspec:this.variables.damageToLevel(Math.round(b))})}),this.selectionData=this.tableData[0],this.dataSource=new p.by(this.tableData),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort})}regenerateTableData(e){const n=this.variables.damageMechanismName.map(o=>{const{id:r}=o;if(null==e?void 0:e[r]){const{last_insp_date:c,insp_due_date:_}=e[r];return Object.assign(Object.assign(Object.assign({},o),e[r]),{active:!0,last_insp_date:new Date(c),insp_due_date:new Date(_)})}return Object.assign({},o)});this.viewTable.regenerateTable(n)}onSubmit(){const e=this.viewTable.getDataSource()._data._value,n=this.selectionData.id,o=e.filter(c=>null==c?void 0:c.active).map(c=>Object.assign(Object.assign({},c),{last_insp_date:this.datePipe.transform(c.last_insp_date,"yyyy-MM-dd"),insp_due_date:this.datePipe.transform(c.insp_due_date,"yyyy-MM-dd")}));let r={};o.forEach(({id:c,insp_due_date:_,last_insp_date:b,notes:g,susceptibility:v,type_location:y})=>{r[c]={notes:g,type_location:y,susceptibility:v,last_insp_date:b,insp_due_date:_}}),this.damageMechanismService.updateDamageMechanism(n,{damage_mechanism:r}).subscribe(()=>this.ngOnInit(),()=>this.toastrService.danger("Please check your connection and try again.","Your request failed."),()=>this.toastrService.success("Data has been updated.","Your request success."))}filterBySuspec(e){let n;"No Filter"==e&&(n=this.tableData),"No Filter"!=e&&(n=this.tableData.filter(({suspec:o})=>o==e)),this.dataSource=new p.by(n)}showData(e){this.selectionData=e,this.regenerateTableData(null==e?void 0:e.damage_mechanism)}applyFilter(e){this.dataSource.filter=e.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(yt),t.Y36(m.uU),t.Y36(s.quB),t.Y36(F.L))},i.\u0275cmp=t.Xpm({type:i,selectors:[["ngx-demage-mechanism"]],viewQuery:function(e,n){if(1&e&&(t.Gf(M.V,5),t.Gf(d.NW,5),t.Gf(u.YE,5)),2&e){let o;t.iGM(o=t.CRH())&&(n.viewTable=o.first),t.iGM(o=t.CRH())&&(n.paginator=o.first),t.iGM(o=t.CRH())&&(n.sort=o.first)}},decls:31,vars:15,consts:[[1,"d-flex","justify-content-between"],["matInput","","placeholder","Ex. Mia",3,"keyup"],["input",""],[1,"row"],[1,"col"],["placeholder","Susceptibility","status","primary","size","small",1,"",3,"selected"],[3,"value","click",4,"ngFor","ngForOf"],[1,"col-3"],["mat-table","","matSort","",1,"mat-elevation-z8",2,"width","100%","box-shadow","none",3,"dataSource"],["matColumnDef","piping_id"],["mat-header-cell","","mat-sort-header","",3,"ngStyle",4,"matHeaderCellDef"],["mat-cell","","style","cursor : pointer",3,"ngStyle","mouseover","mouseout","click",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["aria-label","Select page of GitHub search results",3,"pageSize"],[1,"col-9"],[3,"tableHeader","tableFooter","columnDetails","tableData"],[1,"w-100","d-flex","justify-content-center"],["nbButton","","size","medium","status","success",3,"disabled","click"],[3,"value","click"],["mat-header-cell","","mat-sort-header","",3,"ngStyle"],["mat-cell","",2,"cursor","pointer",3,"ngStyle","mouseover","mouseout","click"],["nameCell",""],["mat-header-row",""],["mat-row",""]],template:function(e,n){1&e&&(t.TgZ(0,"nb-card")(1,"nb-card-header",0)(2,"div")(3,"h5"),t._uU(4,"Damage Mechanism"),t.qZA(),t.TgZ(5,"mat-form-field")(6,"mat-label"),t._uU(7,"Hit Enter To Search"),t.qZA(),t.TgZ(8,"input",1,2),t.NdJ("keyup",function(r){return n.applyFilter(r)}),t.qZA()()(),t.TgZ(10,"div",3)(11,"div",4),t._uU(12,"Susceptibility"),t.qZA(),t.TgZ(13,"div",4)(14,"nb-select",5),t.YNc(15,wt,2,2,"nb-option",6),t.qZA()()()(),t.TgZ(16,"nb-card-body")(17,"div",3)(18,"div",7)(19,"table",8),t.ynx(20,9),t.YNc(21,At,2,2,"th",10),t.YNc(22,St,3,4,"td",11),t.BQk(),t.YNc(23,Ft,1,0,"tr",12),t.YNc(24,Ot,1,0,"tr",13),t.qZA(),t._UZ(25,"mat-paginator",14),t.qZA(),t.TgZ(26,"div",15),t._UZ(27,"ngx-mat-table",16),t.TgZ(28,"div",17)(29,"button",18),t.NdJ("click",function(){return n.onSubmit()}),t._uU(30,"Save"),t.qZA()()()()()()),2&e&&(t.xp6(14),t.Q6J("selected","No Filter"),t.xp6(1),t.Q6J("ngForOf",t.DdM(12,Pt)),t.xp6(4),t.Q6J("dataSource",n.dataSource),t.xp6(4),t.Q6J("matHeaderRowDef",n.displayedColumns)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("pageSize",30),t.xp6(2),t.Q6J("tableHeader",t.DdM(13,B))("tableFooter",t.DdM(14,B))("columnDetails",n.columnDetails)("tableData",n.tableData),t.xp6(2),t.Q6J("disabled",!n.selectionData))},directives:[s.Asz,s.ndF,Z.KE,Z.hX,O.Nt,s.rs,m.sg,s.q51,s.yKW,p.BZ,u.YE,p.w1,p.fO,p.ge,u.nU,m.PC,p.Dz,p.ev,p.as,p.XQ,p.nj,p.Gk,d.NW,M.V,s.DPz],encapsulation:2}),i})();const Jt=[{path:"",component:l(3870).M,children:[{path:"visual-condition",component:Dt},{path:"thickness",component:Zt},{path:"damage-mechanism",component:Ut}]}];let Et=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[C.Bz.forChild(Jt)],C.Bz]}),i})();var qt=l(9511),Qt=l(2356),Lt=l(2368),Ht=l(7446);let Rt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[m.ez,T.O,s.j5J,Et,Qt.Z,qt.H,s.zyh,s.COg,s.IIj,s.oGl,s.nKr,s.MfT,s.T2N,s.BW0,s.KdK,Lt.rP,p.p0,Ht.p9,Z.lN,O.c,H.LD,d.TU,u.JX,f.u5,s.PYG,s.LW9.forRoot({destroyByClick:!0,duration:3e3,position:s.fe3.BOTTOM_RIGHT,preventDuplicates:!0,limit:3})]]}),i})()},9371:(N,D,l)=>{l.d(D,{O:()=>C});var m=l(2340),T=l(5e3),s=l(520);let C=(()=>{class u{constructor(d){this.httpClient=d,this.apiUrl=m.N.apiUrl}getDataThickness(){return this.httpClient.get(this.apiUrl+"/thickness")}}return u.\u0275fac=function(d){return new(d||u)(T.LFG(s.eN))},u.\u0275prov=T.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);