"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_report_report_module_ts"],{

/***/ 78539:
/*!************************************************************************!*\
  !*** ./src/app/pages/dashboard/piping-assets/piping-assets.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipingAssetsService": () => (/* binding */ PipingAssetsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class PipingAssetsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    getPipingAssets() {
        const url = this.apiUrl + "/assets";
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        httpHeaders.append("enctype", "multipart/form-data");
        httpHeaders.append("Accept", "*/*");
        return this.httpClient.get(url);
    }
    addPipingAssets(data) {
        const url = this.apiUrl + "/assets";
        return this.httpClient.post(url, data);
    }
    updatePipingAssets(data) {
        const url = this.apiUrl + "/assets/" + data.id;
        return this.httpClient.put(url, data);
    }
    deletePipingAssets(id) {
        const url = this.apiUrl + "/assets/" + id;
        return this.httpClient.delete(url);
    }
    uploadImage(postBody) {
        const url = this.apiUrl + "/file/upload";
        return this.httpClient.post(url, postBody, {
            reportProgress: true, observe: 'events'
        });
    }
    importAsset(postBody) {
        const url = this.apiUrl + "/import_assets";
        return this.httpClient.post(url, postBody);
    }
}
PipingAssetsService.ɵfac = function PipingAssetsService_Factory(t) { return new (t || PipingAssetsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
PipingAssetsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PipingAssetsService, factory: PipingAssetsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 60133:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/report/piping-assets/chart/remaining-chart.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRemainingChart": () => (/* binding */ DashboardRemainingChart)
/* harmony export */ });
/* harmony import */ var _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../component/chart/charts-component */ 17313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class DashboardRemainingChart extends _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__.ChartsComponent {
    constructor() {
        super();
        this.defineOptions({
            chartTitle: "Remaining Life vs Year",
            yTitle: 'Remaining Life (years)',
            xTitle: 'Year'
        });
    }
    ngOnInit() {
        this.generateChart('DashboardRemaining');
    }
}
DashboardRemainingChart.ɵfac = function DashboardRemainingChart_Factory(t) { return new (t || DashboardRemainingChart)(); };
DashboardRemainingChart.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardRemainingChart, selectors: [["ngx-dashboard-remaining-chart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "DashboardRemaining"]], template: function DashboardRemainingChart_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0);
    } }, encapsulation: 2 });


/***/ }),

/***/ 3009:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/report/piping-assets/chart/thickness-chart.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardThicknessChart": () => (/* binding */ DashboardThicknessChart)
/* harmony export */ });
/* harmony import */ var _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../component/chart/charts-component */ 17313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class DashboardThicknessChart extends _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__.ChartsComponent {
    constructor() {
        super();
        this.defineOptions({
            chartTitle: "Thickness vs Year",
            yTitle: 'Thickness (mm)',
            xTitle: 'Year'
        });
    }
    ngOnInit() {
        this.generateChart('DashboardThickness');
    }
}
DashboardThicknessChart.ɵfac = function DashboardThicknessChart_Factory(t) { return new (t || DashboardThicknessChart)(); };
DashboardThicknessChart.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardThicknessChart, selectors: [["ngx-dashboard-thickness-chart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "DashboardThickness"]], template: function DashboardThicknessChart_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0);
    } }, encapsulation: 2 });


/***/ }),

/***/ 76851:
/*!********************************************************************!*\
  !*** ./src/app/pages/report/piping-assets/report-piping-assets.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportPipingAssets": () => (/* binding */ ReportPipingAssets)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ 33244);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/mat-table/mat-table.component */ 53858);
/* harmony import */ var _chart_thickness_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart/thickness-chart.component */ 3009);
/* harmony import */ var _chart_remaining_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart/remaining-chart.component */ 60133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _dashboard_piping_assets_piping_assets_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dashboard/piping-assets/piping-assets.service */ 78539);
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../report-service */ 51683);
/* harmony import */ var _component_common_variable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../component/common-variable */ 47024);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _assesment_thickness_thickness_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assesment/thickness/thickness-service */ 19371);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);























function ReportPipingAssets_nb_option_15_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nb-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReportPipingAssets_nb_option_15_Template_nb_option_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13); const option_r11 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r12.filterByClass(option_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](option_r11);
} }
const _c0 = function () { return { "width": "40px" }; };
function ReportPipingAssets_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Piping ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function (a0) { return { "color": a0 }; };
function ReportPipingAssets_td_21_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mouseover", function ReportPipingAssets_td_21_Template_td_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](1); return _r15.style.color = "#0492c2"; })("mouseout", function ReportPipingAssets_td_21_Template_td_mouseout_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17); const element_r14 = restoredCtx.$implicit; const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](1); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r18.pipeData == element_r14 ? _r15.style.color = "#0492c2" : _r15.style.color = "black"; })("click", function ReportPipingAssets_td_21_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17); const element_r14 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r19.showData(element_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c1, ctx_r3.pipeData == element_r14 ? "#0492c2" : "black"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", element_r14.piping_id, " ");
} }
function ReportPipingAssets_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 29);
} }
function ReportPipingAssets_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 30);
} }
function ReportPipingAssets_h5_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Please Add Asset Data.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ReportPipingAssets_section_29_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No Image Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ReportPipingAssets_section_29_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 47)(1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const image_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", i_r25 == 0 ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", image_r24.src, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", image_r24 == null ? null : image_r24.alt);
} }
function ReportPipingAssets_section_29_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 50)(1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const spec_r26 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](spec_r26.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r23.pipeData[spec_r26.props]);
} }
function ReportPipingAssets_section_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section")(1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3)(4, "div", 31)(5, "div", 32)(6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, ReportPipingAssets_section_29_span_7_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, ReportPipingAssets_section_29_div_8_Template, 3, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 40)(18, "div")(19, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "ngx-qrcode", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "See Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 44)(24, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Date In Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Class");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Recomendation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, ReportPipingAssets_section_29_div_41_Template, 5, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Piping Assets ", ctx_r7.pipeData == null ? null : ctx_r7.pipeData.piping_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r7.imageLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r7.imageLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("elementType", ctx_r7.elementType)("errorCorrectionLevel", ctx_r7.correctionLevel)("value", ctx_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((ctx_r7.pipeData == null ? null : ctx_r7.pipeData.date_in_service) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((ctx_r7.pipeData == null ? null : ctx_r7.pipeData.class) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((ctx_r7.pipeData == null ? null : ctx_r7.pipeData.notes) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((ctx_r7.pipeData == null ? null : ctx_r7.pipeData.recomendation) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r7.spesificationItem);
} }
function ReportPipingAssets_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 3)(1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const visual_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](visual_r27.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](visual_r27.data || "-");
} }
function ReportPipingAssets_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 50)(1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const spec_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](spec_r28.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((spec_r28 == null ? null : spec_r28.data) || "-");
} }
const _c2 = function () { return { show: false }; };
function ReportPipingAssets_ngx_mat_table_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-mat-table", 23);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c2))("tableFooter", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c2))("columnDetails", ctx_r10.inspectionHistoryDetails)("tableData", ctx_r10.inspectionHistoryData);
} }
const _c3 = function () { return ["All", 1, 2, 3, 4]; };
const _c4 = function () { return { pageSize: 5 }; };
class ReportPipingAssets {
    constructor(pipingAssetsService, reportService, variables, toastr, thicknesService) {
        this.pipingAssetsService = pipingAssetsService;
        this.reportService = reportService;
        this.variables = variables;
        this.toastr = toastr;
        this.thicknesService = thicknesService;
        this.elementType = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_9__.NgxQrcodeElementTypes.URL;
        this.correctionLevel = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_9__.NgxQrcodeErrorCorrectionLevels.HIGH;
        this.value = 'https://www.google.com/';
        this.tablePosition = [];
        this.displayedColumns = ['piping_id'];
        this.resultsLength = 0;
        this.imageLink = [];
        this.spesificationItem = [
            { props: 'nominal_pipe_size', name: "Nominal Pipe Size", unit: 'mm' },
            { props: 'pipe_design_code', name: "Pipe Design Code" },
            { props: 'schedule', name: "Schedule", unit: 'mm' },
            { props: 'outside_diameter', name: "Outside Diameter" },
            { props: 'longtd_quality_factor', name: "Longtd. Quality Factor (E)" },
            { props: 'weld_joint_factor', name: "Weld Joint Factor (W)" },
            { props: 'allowable_unit_stress', name: "Allowable Unit Stress (S)", unit: 'psi' },
            { props: 'coefficient', name: "Coefficient (Y)" },
            { props: 'min_design_pressure', name: "Min. Design Pressure (P min)", unit: 'psig' },
            { props: 'max_design_pressure', name: "Max. Design Pressure (P max)", unit: 'psig' },
            { props: 'min_design_temperature', name: "Min. Design Temperature (T min)", unit: 'F' },
            { props: 'max_design_temperature', name: "Max Design Temperature (T max)", unit: 'F' },
            { props: 'corrosion_allowance', name: "Corrosion Allowance", unit: 'mm' },
            { props: 'mechanical_allowance', name: "Mechanical Allowances", unit: 'mm' },
            { props: 'min_structural_thickness', name: "Min. Structural Thickness", unit: 'mm' },
            { props: 'min_alert_thickness', name: "Min. Alert Thickness", unit: 'mm' },
            { props: 'nominal_thickness', name: "Nominal Thickness", unit: 'mm' },
        ];
        this.pipingVisual = [
            { name: 'Leaks', props: 'leaks_condition', data: null },
            { name: 'Misalignment', props: 'misalignment_condition', data: null },
            { name: 'Vibration', props: 'vibration_condition', data: null },
            { name: 'Supports', props: 'supports_condition', data: null },
            { name: 'Corrosion', props: 'corrosion_condition', data: null },
            { name: 'Insulation', props: 'insulation_condition', data: null },
        ];
        this.pipingThickness = [
            { name: 'Reading', props: 'reading' },
            { name: 'Long Term Cr', props: 'lt_cr' },
            { name: 'Remaining Life', props: 'remaining_life' },
            { name: 'Thick. Min', props: 't_min' },
            { name: 'Short Term CR', props: 'st_cr' },
            { name: 'Half Life', props: 'half_life' },
            { name: 'Retirement Date', props: 'retirement_date' },
        ];
        this.damageMechanismDetails = [
            { type: 'text', prop: 'piping_damage_mechanism', head: 'Piping Damage Mechanism', width: '200px' },
            { type: 'text', prop: 'notes', head: 'Notes', width: '200px' },
            { type: 'text', prop: 'type_location', head: 'Expected Type/Location', width: '200px' },
            { type: 'text', prop: 'last_insp_date', head: 'Last Insp.Date', width: '200px' },
            { type: 'text', prop: 'insp_due_date', head: 'Insp. Due Date', width: '200px' },
        ];
        this.inspectionHistoryData = [];
        this.inspectionHistoryDetails = [
            { type: 'text', prop: 'proposal_id', head: 'Inspection Id', width: '100px' },
            { type: 'editable date', prop: 'inspection_date', head: 'Inspection Date', width: '200px' },
            { type: 'text', prop: 'inspection_summary', head: 'Inspection Summary', width: '300px' },
            { type: 'check', prop: 'caried_out', head: 'Caried Out', width: '50px' },
        ];
    }
    ngOnInit() {
        this.thicknesService.getDataThickness()
            .subscribe(({ data }) => {
            this.tablePosition = data;
            const firsData = data[0];
            if (!firsData)
                return;
            this.showData(firsData);
            this.getReportData(firsData === null || firsData === void 0 ? void 0 : firsData.id);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }, () => this.toastr.danger('Please add asset data.', 'Data not found.'));
    }
    getReportData(id) {
        this.reportService.getAssetsReport(id)
            .subscribe(({ data: { damage_mechanism, visual_condition, proposal, asset, cml } }) => {
            var _a;
            this.damageMechanismData = this.variables.damageMechanismName.map(({ id, piping_damage_mechanism }) => {
                const damage = damage_mechanism === null || damage_mechanism === void 0 ? void 0 : damage_mechanism[id];
                if (damage)
                    return Object.assign(Object.assign({}, damage), { piping_damage_mechanism });
                return null;
            })
                .filter(item => item != null);
            this.viewTable.regenerateTable(this.damageMechanismData);
            this.pipingVisual = this.pipingVisual.map(({ name, props }) => {
                var _a;
                return ({
                    name, props, data: (_a = visual_condition[props]) !== null && _a !== void 0 ? _a : null
                });
            });
            this.inspectionHistoryData = [Object.assign(Object.assign({}, proposal), { inspection_summary: (_a = proposal === null || proposal === void 0 ? void 0 : proposal.inspection_method) === null || _a === void 0 ? void 0 : _a.map(({ type, method, technique }) => ` ${type} ${method} ${technique}`) })];
            this.pipingThickness = this.pipingThickness.map(({ name, props }) => {
                const { reading, min_required_thickness, lt_cr, st_cr, remaining_life, half_life, retirement_date, next_tm_insp_date, next_ve_insp_date, mawp } = this.variables.getThicknessCalculation(Object.assign(Object.assign({}, asset), { cml }));
                const dataThickness = Object.assign(Object.assign({}, asset), { reading: reading.toFixed(4), t_min: min_required_thickness.toFixed(4), lt_cr: lt_cr.toFixed(4), st_cr: st_cr.toFixed(4), remaining_life: remaining_life.toFixed(4), half_life: half_life.toFixed(4), retirement_date,
                    next_tm_insp_date,
                    next_ve_insp_date, mawp: mawp.toFixed(4) });
                return {
                    name,
                    props,
                    data: dataThickness[props]
                };
            });
        }, () => this.toastr.danger('Please add asset data.', 'Data not found.'));
    }
    showData(element) {
        this.pipeData = element;
        this.imageLink = typeof element.images == "object"
            ? element.images.map(image => ({ src: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '/image/' + image, alt: 'Pipe Asssets' }))
            : [];
        this.variables.removeChartData(this.thicknessChart);
        this.variables.removeChartData(this.remainingChart);
        this.thicknessChartData(this.thicknessChart, element);
        this.remainingLifeChartData(this.remainingChart, element);
    }
    thicknessChartData(chart, { cml }) {
        const { datasets, allYear } = this.variables.getCharCML(cml, "last_thickness_reading");
        chart.data.labels = allYear;
        chart.chart.data.datasets = datasets;
        chart.chart.update();
    }
    corrosionChartData(chart, asset) {
        const cml = this.variables.getCMLCalc(asset);
        const { datasets, allYear } = this.variables.getCharCML(cml, "lt_cr");
        chart.data.labels = allYear;
        chart.chart.data.datasets = datasets;
        chart.chart.update();
    }
    remainingLifeChartData(chart, asset) {
        const cml = this.variables.getCMLCalc(asset);
        const { datasets, allYear } = this.variables.getCharCML(cml, "remaining_life");
        chart.data.labels = allYear;
        chart.chart.data.datasets = datasets;
        chart.chart.update();
    }
    filterByClass(val) {
        let tableData = this.tablePosition.filter(item => item.class == val);
        if (val == "All")
            tableData = this.tablePosition;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(tableData);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
ReportPipingAssets.ɵfac = function ReportPipingAssets_Factory(t) { return new (t || ReportPipingAssets)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_dashboard_piping_assets_piping_assets_service__WEBPACK_IMPORTED_MODULE_4__.PipingAssetsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_report_service__WEBPACK_IMPORTED_MODULE_5__.ReportService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_component_common_variable__WEBPACK_IMPORTED_MODULE_6__.Variables), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_assesment_thickness_thickness_service__WEBPACK_IMPORTED_MODULE_7__.ThicknessService)); };
ReportPipingAssets.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ReportPipingAssets, selectors: [["ngx-report-piping-assets"]], viewQuery: function ReportPipingAssets_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_1__.MatTableComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_chart_thickness_chart_component__WEBPACK_IMPORTED_MODULE_2__.DashboardThicknessChart, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_chart_remaining_chart_component__WEBPACK_IMPORTED_MODULE_3__.DashboardRemainingChart, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.viewTable = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.thicknessChart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.remainingChart = _t.first);
    } }, decls: 53, vars: 19, consts: [[1, "d-flex", "justify-content-between"], ["matInput", "", "placeholder", "Ex. Mia", 3, "keyup"], ["input", ""], [1, "row"], [1, "col"], ["placeholder", "Class", "status", "primary", "size", "small", 1, "mx-5"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "col-3"], ["mat-table", "", 1, "mat-elevation-z8", 2, "width", "100%", "box-shadow", "none", 3, "dataSource"], ["matColumnDef", "piping_id"], ["mat-header-cell", "", 3, "ngStyle", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "cursor : pointer", 3, "ngStyle", "mouseover", "mouseout", "click", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of GitHub search results", 3, "length", "pageSize"], [1, "col-9"], [4, "ngIf"], [1, "fw-bolder", "text-primary", "mb-2", "d-block"], [1, "row", "row-cols-3"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "mt-2"], [1, "row", "row-cols-2", "mt-3"], ["class", "row mb-2", 4, "ngFor", "ngForOf"], [3, "tableHeader", "tableFooter", "columnDetails", "tableData"], [3, "tableHeader", "tableFooter", "columnDetails", "tableData", 4, "ngIf"], [3, "value", "click"], ["mat-header-cell", "", 3, "ngStyle"], ["mat-cell", "", 2, "cursor", "pointer", 3, "ngStyle", "mouseover", "mouseout", "click"], ["nameCell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "col-8"], ["id", "carouselExampleInterval", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], ["class", "carousel-item", "data-bs-interval", "10000", 3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-target", "#carouselExampleInterval", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleInterval", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "col-4", "d-flex", "justify-content-center", "align-self-center"], [1, "border", "rounded"], [3, "elementType", "errorCorrectionLevel", "value"], ["nbButton", "", "status", "primary", "size", "small", "outline", "", 1, "mt-2", "w-100"], [1, "row", "mt-3"], [1, "text-secondary", "col-4"], [1, "text-secondary"], ["data-bs-interval", "10000", 1, "carousel-item", 3, "ngClass"], [1, "overflow-hidden", "d-flex", "align-justify-center", 2, "height", "15rem"], [1, "w-100", "img-fluid", 3, "src", "alt"], [1, "row", "mb-2"], [1, "col-8", "text-secondary"], [1, "col", "text-secondary"]], template: function ReportPipingAssets_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header", 0)(2, "div")(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Piping Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "mat-form-field")(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Hit Enter To Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function ReportPipingAssets_Template_input_keyup_8_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 3)(11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 4)(14, "nb-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, ReportPipingAssets_nb_option_15_Template, 2, 2, "nb-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "nb-card-body", 3)(17, "div", 7)(18, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](19, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, ReportPipingAssets_th_20_Template, 2, 2, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, ReportPipingAssets_td_21_Template, 3, 4, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, ReportPipingAssets_tr_22_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, ReportPipingAssets_tr_23_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "mat-paginator", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, ReportPipingAssets_h5_26_Template, 2, 0, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "nb-card")(28, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, ReportPipingAssets_section_29_Template, 42, 11, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "section")(31, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "Piping Visual");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, ReportPipingAssets_div_34_Template, 5, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "section", 20)(36, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Piping Calculation");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, ReportPipingAssets_div_39_Template, 5, 2, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "section")(41, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "Piping Damage Mechanism");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "ngx-mat-table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "section")(45, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "Inspection History");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, ReportPipingAssets_ngx_mat_table_47_Template, 1, 6, "ngx-mat-table", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "section")(49, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "Trend");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](51, "ngx-dashboard-remaining-chart")(52, "ngx-dashboard-thickness-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](16, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("length", ctx.resultsLength)("pageSize", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.pipeData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.pipeData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.pipingVisual);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.pipingThickness);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](17, _c2))("tableFooter", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](18, _c4))("columnDetails", ctx.damageMechanismDetails)("tableData", ctx.damageMechanismData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.inspectionHistoryData.length);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardHeaderComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbOptionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardBodyComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgStyle, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_9__.QrcodeComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbButtonComponent, _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_1__.MatTableComponent, _chart_remaining_chart_component__WEBPACK_IMPORTED_MODULE_3__.DashboardRemainingChart, _chart_thickness_chart_component__WEBPACK_IMPORTED_MODULE_2__.DashboardThicknessChart], encapsulation: 2 });


/***/ }),

/***/ 80962:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/report/piping-circuits/chart/piping-circuit-trend-chart.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipingCircuitChart": () => (/* binding */ PipingCircuitChart)
/* harmony export */ });
/* harmony import */ var _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../component/chart/charts-component */ 17313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class PipingCircuitChart extends _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__.ChartsComponent {
    constructor() {
        super();
        this.chartType = 'bar';
        this.yLabels = [];
        this.legendPosition = 'bottom';
        this.showRightSclae = true;
        this.datasets = [
        // {
        //     label: "Reading (mm)",
        //     yAxisID: 'A',
        //     data: ['467', '576', '572', '79', '92'],
        //     backgroundColor: 'rgba(255,0,0,.5)',
        //     borderColor: 'rgba(255,0,0,.5)',
        // },
        // {
        //     label: "T minimum (mm)",
        //     yAxisID: 'A',
        //     data: ['542', '542', '536', '327', '17'],
        //     backgroundColor: 'rgba(100,100,0,.5)',
        //     borderColor: 'rgba(100,100,0,.5)',
        // },
        // {
        //     label: "Nominal Thickness (mm)",
        //     yAxisID: 'A',
        //     data: ['504', '142', '336', '317', '100'],
        //     backgroundColor: 'rgba(10,50,100,.5)',
        //     borderColor: 'rgba(10,50,100,.5)',
        // },
        // {
        //     label: "Corrosion Rate (mm/Year)",
        //     yAxisID: 'B',
        //     data: ['0.052', '0.042', '0.336', '0.527', '0.517'],
        //     backgroundColor: 'rgba(90,190,90,.5)',
        //     borderColor: 'rgba(90,190,90,.5)',
        // },
        ];
        this.defineOptions({
            chartTitle: "Chart Piping Circuit",
        });
    }
    ngOnInit() {
        this.generateChart('piping_circuit_chart');
    }
}
PipingCircuitChart.ɵfac = function PipingCircuitChart_Factory(t) { return new (t || PipingCircuitChart)(); };
PipingCircuitChart.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PipingCircuitChart, selectors: [["ngx-piping-circuit-chart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "piping_circuit_chart"]], template: function PipingCircuitChart_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0);
    } }, encapsulation: 2 });


/***/ }),

/***/ 94724:
/*!***********************************************************************!*\
  !*** ./src/app/pages/report/piping-circuits/report-piping-circuit.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportPipingCircuit": () => (/* binding */ ReportPipingCircuit)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ 33244);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _chart_piping_circuit_trend_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart/piping-circuit-trend-chart */ 80962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _dashboard_piping_circuits_piping_circuits_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dashboard/piping-circuits/piping-circuits.service */ 52787);
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../report-service */ 51683);
/* harmony import */ var _component_common_variable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../component/common-variable */ 47024);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../component/mat-table/mat-table.component */ 53858);



















function ReportPipingCircuit_nb_option_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ReportPipingCircuit_nb_option_15_Template_nb_option_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const option_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r9.filterByClass(option_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", option_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](option_r8);
} }
const _c0 = function () { return { "width": "40px" }; };
function ReportPipingCircuit_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Circuit Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function (a0) { return { "color": a0 }; };
function ReportPipingCircuit_td_21_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseover", function ReportPipingCircuit_td_21_Template_td_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1); return _r12.style.color = "#0492c2"; })("mouseout", function ReportPipingCircuit_td_21_Template_td_mouseout_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const element_r11 = restoredCtx.$implicit; const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r15.selectionData.piping_circuit_name == element_r11.piping_circuit_name ? _r12.style.color = "#0492c2" : _r12.style.color = "black"; })("click", function ReportPipingCircuit_td_21_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const element_r11 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r16.showData(element_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c1, ctx_r3.selectionData.piping_circuit_name == element_r11.piping_circuit_name ? "#0492c2" : "black"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r11.piping_circuit_name, " ");
} }
function ReportPipingCircuit_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 21);
} }
function ReportPipingCircuit_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 22);
} }
function ReportPipingCircuit_h5_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Please Add Circuit Data.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ReportPipingCircuit_nb_card_27_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Image Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ReportPipingCircuit_nb_card_27_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 45)(1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const image_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", i_r25 == 0 ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", image_r24.src, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", image_r24 == null ? null : image_r24.alt);
} }
function ReportPipingCircuit_nb_card_27_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3)(1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const visual_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](visual_r26.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](visual_r26.data);
} }
const _c2 = function () { return { show: false }; };
const _c3 = function () { return { pageSize: 5 }; };
function ReportPipingCircuit_nb_card_27_ngx_mat_table_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-mat-table", 49);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c2))("tableFooter", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c3))("columnDetails", ctx_r21.columnDetails)("tableData", ctx_r21.pipingThicknessData);
} }
function ReportPipingCircuit_nb_card_27_nb_list_item_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-list-item", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mechanism_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", mechanism_r27, " ");
} }
function ReportPipingCircuit_nb_card_27_ngx_mat_table_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-mat-table", 49);
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c2))("tableFooter", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c3))("columnDetails", ctx_r23.inspectionHistoryDetails)("tableData", ctx_r23.inspectionHistoryData);
} }
function ReportPipingCircuit_nb_card_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-body")(2, "section")(3, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3)(6, "div", 24)(7, "div", 25)(8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ReportPipingCircuit_nb_card_27_span_9_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ReportPipingCircuit_nb_card_27_div_10_Template, 3, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 33)(20, "div")(21, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "ngx-qrcode", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "See Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 37)(26, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Date In Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Class");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Recomendation");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "section")(43, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Piping Visual");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, ReportPipingCircuit_nb_card_27_div_46_Template, 5, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "section", 42)(48, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Piping Thickness");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, ReportPipingCircuit_nb_card_27_ngx_mat_table_50_Template, 1, 6, "ngx-mat-table", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "section")(52, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Piping Circuit Damage Mechanisms");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Active Damage Mechanism");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "nb-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, ReportPipingCircuit_nb_card_27_nb_list_item_57_Template, 2, 1, "nb-list-item", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "section")(59, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Inspection History");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, ReportPipingCircuit_nb_card_27_ngx_mat_table_61_Template, 1, 6, "ngx-mat-table", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "section")(63, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "Trend");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](65, "ngx-piping-circuit-chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.selectionData == null ? null : ctx_r7.selectionData.piping_circuit_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r7.imageLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r7.imageLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("elementType", ctx_r7.elementType)("errorCorrectionLevel", ctx_r7.correctionLevel)("value", ctx_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.selectionData == null ? null : ctx_r7.selectionData.date_in_service);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.selectionData == null ? null : ctx_r7.selectionData.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.selectionData == null ? null : ctx_r7.selectionData.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.selectionData == null ? null : ctx_r7.selectionData.recomendation);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r7.pipingVisual);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.pipingThicknessData);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r7.activeDamageMechaninsm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.inspectionHistoryData.length);
} }
const _c4 = function () { return ["All", 1, 2, 3, 4]; };
class ReportPipingCircuit {
    constructor(pipingCircuitService, reportService, variables) {
        this.pipingCircuitService = pipingCircuitService;
        this.reportService = reportService;
        this.variables = variables;
        this.elementType = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__.NgxQrcodeElementTypes.URL;
        this.correctionLevel = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__.NgxQrcodeErrorCorrectionLevels.HIGH;
        this.value = 'https://www.google.com/';
        this.datasets = [
            {
                label: "Reading (mm)",
                yAxisID: 'A',
                prop: 'reading'
            },
            {
                label: "T minimum (mm)",
                yAxisID: 'A',
                prop: 'min_required_thickness'
            },
            {
                label: "Nominal Thickness (mm)",
                yAxisID: 'A',
                prop: 'nominal_thickness'
            },
            {
                label: "Corrosion Rate (mm/Year)",
                yAxisID: 'B',
                prop: 'lt_cr'
            },
        ];
        this.tablePosition = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(this.tablePosition);
        this.displayedColumns = ['piping_circuit_name'];
        this.resultsLength = 0;
        this.imageLink = [];
        this.pipingVisual = [
            { name: 'Leaks', props: 'leaks_condition', data: null },
            { name: 'Misalignment', props: 'misalignment_condition', data: null },
            { name: 'Vibration', props: 'vibration_condition', data: null },
            { name: 'Supports', props: 'supports_condition', data: null },
            { name: 'Corrosion', props: 'corrosion_condition', data: null },
            { name: 'Insulation', props: 'insulation_condition', data: null },
        ];
        this.activeDamageMechaninsm = [];
        this.columnDetails = [
            { type: 'text', prop: 'piping_id', head: 'Piping Id', width: '200px' },
            { type: 'text', prop: 'reading', head: 'Reading (mm)', width: '200px' },
            { type: 'text', prop: 'min_required_thickness', head: 'T min (mm)', width: '200px' },
            { type: 'text', prop: 'lt_cr', head: 'LT CR (mm/Year)', width: '200px' },
            { type: 'text', prop: 'st_cr', head: 'ST CR (mm/Year)', width: '200px' },
            { type: 'text', prop: 'remaining_life', head: 'RL (Years)', width: '200px' },
            { type: 'text', prop: 'half_life', head: 'HL (Years)', width: '200px' },
            { type: 'text', prop: 'retirement_date', head: 'Retirement date', width: '200px' },
            { type: 'text', prop: 'next_tm_insp_date', head: 'Next TM', width: '200px' },
            { type: 'text', prop: 'next_ve_insp_date', head: 'Next VE', width: '200px' },
            { type: 'text', prop: 'mawp', head: 'MAWP', width: '200px' },
        ];
        this.inspectionHistoryData = [];
        this.inspectionHistoryDetails = [
            { type: 'text', prop: 'proposal_id', head: 'Inspection Id', width: '100px' },
            { type: 'editable date', prop: 'inspection_date', head: 'Inspection Date', width: '200px' },
            { type: 'text', prop: 'inspection_summary', head: 'Inspection Summary', width: '300px' },
            { type: 'check', prop: 'caried_out', head: 'Caried Out', width: '50px' },
        ];
    }
    ngOnInit() {
        this.pipingCircuitService.getPipingCircuits()
            .subscribe(({ data }) => {
            this.tablePosition = data;
            const firstData = data[0];
            if (!firstData)
                return;
            this.showData(firstData);
            this.getCircuitReport(firstData === null || firstData === void 0 ? void 0 : firstData.id);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    getCircuitReport(id) {
        this.reportService.getCircuitReport(id)
            .subscribe(({ data: { assets } }) => {
            const chartData = assets.map(({ asset, cml }) => (Object.assign(Object.assign({}, asset), { cml })));
            this.circuitChartData(this.circuitChart, { piping: chartData });
            this.pipingVisual = this.pipingVisual.map(({ name, props }) => ({
                name, props,
                data: this.switchToLevel(Math.round(this.visualConditionAvg(assets, props) / assets.length))
            }));
            assets.filter(x => x != null).forEach(({ damage_mechanism, proposal }) => {
                var _a;
                const inspectionProposal = this.inspectionHistoryData.find(i => i.id == (proposal === null || proposal === void 0 ? void 0 : proposal.id));
                if (!inspectionProposal) {
                    const inspection_summary = proposal
                        ? (_a = proposal.inspection_method) === null || _a === void 0 ? void 0 : _a.map(({ type, technique, method }) => ` ${type} ${method} ${technique}`)
                        : [];
                    this.inspectionHistoryData.push(Object.assign(Object.assign({}, proposal), { inspection_summary }));
                }
                const damage = this.variables.damageMechanismName
                    .map(({ id, piping_damage_mechanism }) => {
                    const damage = damage_mechanism === null || damage_mechanism === void 0 ? void 0 : damage_mechanism[id];
                    if (damage)
                        return Object.assign(Object.assign({}, damage), { piping_damage_mechanism });
                    return null;
                })
                    .filter(item => item != null)
                    .map(({ piping_damage_mechanism }) => piping_damage_mechanism);
                damage.forEach(element => {
                    if (!this.activeDamageMechaninsm.includes(element))
                        this.activeDamageMechaninsm.push(element);
                });
            });
            this.pipingThicknessData = assets.map(asset => {
                const { min_required_thickness, reading, lt_cr, st_cr, remaining_life, half_life, retirement_date, next_tm_insp_date, next_ve_insp_date, mawp } = this.variables.getThicknessCalculation(Object.assign(Object.assign({}, asset.asset), { cml: asset.cml }));
                return Object.assign(Object.assign({}, asset.asset), { min_required_thickness: min_required_thickness.toFixed(2), reading: reading.toFixed(2), lt_cr: lt_cr.toFixed(2), st_cr: st_cr.toFixed(2), remaining_life: remaining_life.toFixed(2), half_life: half_life.toFixed(2), retirement_date,
                    next_tm_insp_date,
                    next_ve_insp_date, mawp: mawp.toFixed(2) });
            });
        });
    }
    circuitChartData(chart, circuit) {
        const { piping } = circuit;
        const allPipe = piping === null || piping === void 0 ? void 0 : piping.map(c => c.piping_id);
        this.variables.removeChartData(this.circuitChart);
        const pipingCalc = piping.map(p => this.variables.getThicknessCalculation(p));
        chart.data.labels = allPipe;
        const dataSet = this.datasets
            .map(item => {
            const color = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
            const data = allPipe.map(pipe => pipingCalc.find(p => p.piping_id == pipe)[item.prop]);
            return Object.assign(Object.assign({}, item), { borderColor: color, backgroundColor: color, data });
        });
        chart.chart.data.datasets = dataSet;
        chart.chart.update();
    }
    visualConditionAvg(asset, props) {
        return asset === null || asset === void 0 ? void 0 : asset.map(x => { var _a; return this.switchToPoint((_a = x === null || x === void 0 ? void 0 : x.visual_condition) === null || _a === void 0 ? void 0 : _a[props]); }).reduce((x, y) => x + y, 0);
    }
    switchToPoint(c) {
        if (c == 'Excellent')
            return 5;
        if (c == 'Good')
            return 4;
        if (c == 'Average')
            return 3;
        if (c == 'Below Average')
            return 2;
        if (c == 'Poor')
            return 1;
        return 0;
    }
    switchToLevel(l) {
        if (l == 5)
            return 'Excellent';
        if (l == 4)
            return 'Good';
        if (l == 3)
            return 'Average';
        if (l == 2)
            return 'Below Average';
        if (l == 1)
            return 'Poor';
        return null;
    }
    filterByClass(val) {
        let tableData = this.tablePosition.filter(item => item.class == val);
        if (val == "All")
            tableData = this.tablePosition;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(tableData);
    }
    showData(element) {
        var _a;
        this.selectionData = element;
        this.getCircuitReport(element.id);
        this.imageLink = (_a = element === null || element === void 0 ? void 0 : element.images) === null || _a === void 0 ? void 0 : _a.map(image => ({ src: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '/image/' + image, alt: 'Pipe Asssets' }));
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
ReportPipingCircuit.ɵfac = function ReportPipingCircuit_Factory(t) { return new (t || ReportPipingCircuit)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_dashboard_piping_circuits_piping_circuits_service__WEBPACK_IMPORTED_MODULE_2__.PipingCircuitService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_report_service__WEBPACK_IMPORTED_MODULE_3__.ReportService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_component_common_variable__WEBPACK_IMPORTED_MODULE_4__.Variables)); };
ReportPipingCircuit.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ReportPipingCircuit, selectors: [["ngx-report-piping-circuit"]], viewQuery: function ReportPipingCircuit_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_chart_piping_circuit_trend_chart__WEBPACK_IMPORTED_MODULE_1__.PipingCircuitChart, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.circuitChart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 28, vars: 10, consts: [[1, "d-flex", "justify-content-between"], ["matInput", "", "placeholder", "Ex. Mia", 3, "keyup"], ["input", ""], [1, "row"], [1, "col"], ["placeholder", "Class", "status", "primary", "size", "small", 1, "mx-5"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "col-3"], ["mat-table", "", 1, "mat-elevation-z8", 2, "width", "100%", "box-shadow", "none", 3, "dataSource"], ["matColumnDef", "piping_circuit_name"], ["mat-header-cell", "", 3, "ngStyle", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "cursor : pointer", 3, "ngStyle", "mouseover", "mouseout", "click", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of GitHub search results", 3, "length", "pageSize"], [1, "col-9"], [4, "ngIf"], [3, "value", "click"], ["mat-header-cell", "", 3, "ngStyle"], ["mat-cell", "", 2, "cursor", "pointer", 3, "ngStyle", "mouseover", "mouseout", "click"], ["nameCell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "fw-bolder", "text-primary", "mb-2", "d-block"], [1, "col-8"], ["id", "carouselExampleInterval", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], ["class", "carousel-item", "data-bs-interval", "10000", 3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-target", "#carouselExampleInterval", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleInterval", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "col-4", "d-flex", "justify-content-center", "align-self-center"], [1, "border", "rounded"], [3, "elementType", "errorCorrectionLevel", "value"], ["nbButton", "", "status", "primary", "size", "small", "outline", "", 1, "mt-2", "w-100"], [1, "row", "mt-3"], [1, "text-secondary", "col-4"], [1, "text-secondary"], [1, "row", "row-cols-3"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "mt-3"], [3, "tableHeader", "tableFooter", "columnDetails", "tableData", 4, "ngIf"], ["style", "height: 1rem;", 4, "ngFor", "ngForOf"], ["data-bs-interval", "10000", 1, "carousel-item", 3, "ngClass"], [1, "overflow-hidden", "d-flex", "align-justify-center", 2, "height", "15rem"], [1, "w-100", "img-fluid", 3, "src", "alt"], [1, "col", "text-secondary"], [3, "tableHeader", "tableFooter", "columnDetails", "tableData"], [2, "height", "1rem"]], template: function ReportPipingCircuit_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header", 0)(2, "div")(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Piping Circuit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-form-field")(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Hit Enter To Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function ReportPipingCircuit_Template_input_keyup_8_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 3)(11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 4)(14, "nb-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ReportPipingCircuit_nb_option_15_Template, 2, 2, "nb-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "nb-card-body", 3)(17, "div", 7)(18, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](19, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, ReportPipingCircuit_th_20_Template, 2, 2, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ReportPipingCircuit_td_21_Template, 3, 4, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ReportPipingCircuit_tr_22_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, ReportPipingCircuit_tr_23_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "mat-paginator", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, ReportPipingCircuit_h5_26_Template, 2, 0, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, ReportPipingCircuit_nb_card_27_Template, 66, 14, "nb-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", ctx.resultsLength)("pageSize", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.selectionData);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectionData);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardHeaderComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbOptionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardBodyComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgStyle, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__.QrcodeComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbButtonComponent, _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_5__.MatTableComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbListComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbListItemComponent, _chart_piping_circuit_trend_chart__WEBPACK_IMPORTED_MODULE_1__.PipingCircuitChart], encapsulation: 2 });


/***/ }),

/***/ 51683:
/*!************************************************!*\
  !*** ./src/app/pages/report/report-service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportService": () => (/* binding */ ReportService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class ReportService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    getAssetsReport(id) {
        const url = this.apiUrl + '/asset_report/' + id;
        return this.httpClient.get(url);
    }
    getCircuitReport(id) {
        const url = this.apiUrl + '/circuit_report/' + id;
        return this.httpClient.get(url);
    }
}
ReportService.ɵfac = function ReportService_Factory(t) { return new (t || ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ReportService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ReportService, factory: ReportService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 31248:
/*!**************************************************!*\
  !*** ./src/app/pages/report/report.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportComponent": () => (/* binding */ ReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class ReportComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReportComponent.ɵfac = function ReportComponent_Factory(t) { return new (t || ReportComponent)(); };
ReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportComponent, selectors: [["ngx-report"]], decls: 1, vars: 0, template: function ReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 81725:
/*!***********************************************!*\
  !*** ./src/app/pages/report/report.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportModule": () => (/* binding */ ReportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.component */ 31248);
/* harmony import */ var _repot_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./repot.routing */ 94134);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _piping_assets_chart_thickness_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./piping-assets/chart/thickness-chart.component */ 3009);
/* harmony import */ var _piping_assets_chart_remaining_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./piping-assets/chart/remaining-chart.component */ 60133);
/* harmony import */ var _piping_assets_report_piping_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./piping-assets/report-piping-assets */ 76851);
/* harmony import */ var _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/mat-table/mat-table.module */ 39511);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ 33244);
/* harmony import */ var _piping_circuits_report_piping_circuit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./piping-circuits/report-piping-circuit */ 94724);
/* harmony import */ var _piping_circuits_chart_piping_circuit_trend_chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./piping-circuits/chart/piping-circuit-trend-chart */ 80962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);





















class ReportModule {
}
ReportModule.ɵfac = function ReportModule_Factory(t) { return new (t || ReportModule)(); };
ReportModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: ReportModule });
ReportModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
            _repot_routing__WEBPACK_IMPORTED_MODULE_2__.ReportRoutingModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbOptionModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbSelectModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbInputModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbListModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbButtonModule,
            _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_6__.MaterialTableModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggleModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule,
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_19__.NgxQRCodeModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbToastrModule.forRoot({
                destroyByClick: true,
                duration: 3000,
                position: _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbGlobalPhysicalPosition.BOTTOM_RIGHT,
                preventDuplicates: true,
                limit: 3
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ReportModule, { declarations: [_report_component__WEBPACK_IMPORTED_MODULE_1__.ReportComponent,
        _piping_assets_chart_thickness_chart_component__WEBPACK_IMPORTED_MODULE_3__.DashboardThicknessChart,
        _piping_assets_chart_remaining_chart_component__WEBPACK_IMPORTED_MODULE_4__.DashboardRemainingChart,
        _piping_assets_report_piping_assets__WEBPACK_IMPORTED_MODULE_5__.ReportPipingAssets,
        _piping_circuits_report_piping_circuit__WEBPACK_IMPORTED_MODULE_7__.ReportPipingCircuit,
        _piping_circuits_chart_piping_circuit_trend_chart__WEBPACK_IMPORTED_MODULE_8__.PipingCircuitChart], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
        _repot_routing__WEBPACK_IMPORTED_MODULE_2__.ReportRoutingModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbOptionModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbSelectModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbListModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbButtonModule,
        _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_6__.MaterialTableModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggleModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule,
        _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_19__.NgxQRCodeModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbToastrModule] }); })();


/***/ }),

/***/ 94134:
/*!***********************************************!*\
  !*** ./src/app/pages/report/repot.routing.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportRoutingModule": () => (/* binding */ ReportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report.component */ 31248);
/* harmony import */ var _piping_assets_report_piping_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piping-assets/report-piping-assets */ 76851);
/* harmony import */ var _piping_circuits_report_piping_circuit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./piping-circuits/report-piping-circuit */ 94724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [{
        path: '',
        component: _report_component__WEBPACK_IMPORTED_MODULE_0__.ReportComponent,
        children: [
            {
                path: 'piping-assets',
                component: _piping_assets_report_piping_assets__WEBPACK_IMPORTED_MODULE_1__.ReportPipingAssets
            },
            {
                path: 'piping-circuits',
                component: _piping_circuits_report_piping_circuit__WEBPACK_IMPORTED_MODULE_2__.ReportPipingCircuit
            },
        ],
    }];
class ReportRoutingModule {
}
ReportRoutingModule.ɵfac = function ReportRoutingModule_Factory(t) { return new (t || ReportRoutingModule)(); };
ReportRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ReportRoutingModule });
ReportRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ReportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_report_report_module_ts.js.map