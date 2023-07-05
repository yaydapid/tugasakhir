"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_analytics_analytics_module_ts"],{

/***/ 2733:
/*!********************************************************!*\
  !*** ./src/app/pages/analytics/analytics.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsComponent": () => (/* binding */ AnalyticsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class AnalyticsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AnalyticsComponent.ɵfac = function AnalyticsComponent_Factory(t) { return new (t || AnalyticsComponent)(); };
AnalyticsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalyticsComponent, selectors: [["ngx-analytics"]], decls: 1, vars: 0, template: function AnalyticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 92679:
/*!*****************************************************!*\
  !*** ./src/app/pages/analytics/analytics.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsModule": () => (/* binding */ AnalyticsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _analytics_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics.component */ 2733);
/* harmony import */ var _analytics_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics.routing */ 54625);
/* harmony import */ var _corrosion_rate_trend_corrosion_rate_trend_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./corrosion-rate-trend/corrosion-rate-trend.component */ 80281);
/* harmony import */ var _remaining_life_trend_remaining_life_trend_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remaining-life-trend/remaining-life-trend.component */ 55743);
/* harmony import */ var _corrosion_rate_trend_chart_remaining_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./corrosion-rate-trend/chart/remaining-chart.component */ 29205);
/* harmony import */ var _corrosion_rate_trend_chart_thickness_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./corrosion-rate-trend/chart/thickness-chart.component */ 63511);
/* harmony import */ var _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/mat-table/mat-table.module */ 39511);
/* harmony import */ var _corrosion_rate_trend_chart_corrosionR_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./corrosion-rate-trend/chart/corrosionR-chart.component */ 49668);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _remaining_life_trend_chart_piping_circuit_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./remaining-life-trend/chart/piping-circuit-chart.component */ 63135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);




















class AnalyticsModule {
}
AnalyticsModule.ɵfac = function AnalyticsModule_Factory(t) { return new (t || AnalyticsModule)(); };
AnalyticsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AnalyticsModule });
AnalyticsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbMenuModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbSelectModule,
            _analytics_routing__WEBPACK_IMPORTED_MODULE_2__.AnalyticsRoutingModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbCardModule,
            _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_7__.MaterialTableModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__.MatSlideToggleModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AnalyticsModule, { declarations: [_analytics_component__WEBPACK_IMPORTED_MODULE_1__.AnalyticsComponent,
        _corrosion_rate_trend_corrosion_rate_trend_component__WEBPACK_IMPORTED_MODULE_3__.CorrosionRateTrendComponent,
        _remaining_life_trend_remaining_life_trend_component__WEBPACK_IMPORTED_MODULE_4__.RemainingLifeTrendComponent,
        _corrosion_rate_trend_chart_thickness_chart_component__WEBPACK_IMPORTED_MODULE_6__.ThicknessChartComponent,
        _corrosion_rate_trend_chart_remaining_chart_component__WEBPACK_IMPORTED_MODULE_5__.RemainingChartComponent,
        _corrosion_rate_trend_chart_corrosionR_chart_component__WEBPACK_IMPORTED_MODULE_8__.CorrosionRChartComponent,
        _remaining_life_trend_chart_piping_circuit_chart_component__WEBPACK_IMPORTED_MODULE_9__.PipingCircuitChartComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbMenuModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbSelectModule,
        _analytics_routing__WEBPACK_IMPORTED_MODULE_2__.AnalyticsRoutingModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbCardModule,
        _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_7__.MaterialTableModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__.MatSlideToggleModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule] }); })();


/***/ }),

/***/ 54625:
/*!******************************************************!*\
  !*** ./src/app/pages/analytics/analytics.routing.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsRoutingModule": () => (/* binding */ AnalyticsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _corrosion_rate_trend_corrosion_rate_trend_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./corrosion-rate-trend/corrosion-rate-trend.component */ 80281);
/* harmony import */ var _remaining_life_trend_remaining_life_trend_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remaining-life-trend/remaining-life-trend.component */ 55743);
/* harmony import */ var _assesment_assesment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assesment/assesment.component */ 43870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [{
        path: '',
        component: _assesment_assesment_component__WEBPACK_IMPORTED_MODULE_2__.AssesmentComponent,
        children: [
            {
                path: 'corrosion-rate-trend',
                component: _corrosion_rate_trend_corrosion_rate_trend_component__WEBPACK_IMPORTED_MODULE_0__.CorrosionRateTrendComponent
            },
            {
                path: 'remaining-life-trend',
                component: _remaining_life_trend_remaining_life_trend_component__WEBPACK_IMPORTED_MODULE_1__.RemainingLifeTrendComponent
            },
        ],
    }];
class AnalyticsRoutingModule {
}
AnalyticsRoutingModule.ɵfac = function AnalyticsRoutingModule_Factory(t) { return new (t || AnalyticsRoutingModule)(); };
AnalyticsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AnalyticsRoutingModule });
AnalyticsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AnalyticsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 49668:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/analytics/corrosion-rate-trend/chart/corrosionR-chart.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrosionRChartComponent": () => (/* binding */ CorrosionRChartComponent)
/* harmony export */ });
/* harmony import */ var _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../component/chart/charts-component */ 17313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class CorrosionRChartComponent extends _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__.ChartsComponent {
    constructor() {
        super();
        this.defineOptions({
            chartTitle: "Corrosion Rate vs Year",
            yTitle: 'CR',
            xTitle: 'Piping'
        });
    }
    ngOnInit() {
        this.generateChart('CorrosionR');
    }
}
CorrosionRChartComponent.ɵfac = function CorrosionRChartComponent_Factory(t) { return new (t || CorrosionRChartComponent)(); };
CorrosionRChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CorrosionRChartComponent, selectors: [["ngx-corrosionR-chart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "CorrosionR"]], template: function CorrosionRChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0);
    } }, encapsulation: 2 });


/***/ }),

/***/ 29205:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/analytics/corrosion-rate-trend/chart/remaining-chart.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemainingChartComponent": () => (/* binding */ RemainingChartComponent)
/* harmony export */ });
/* harmony import */ var _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../component/chart/charts-component */ 17313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class RemainingChartComponent extends _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__.ChartsComponent {
    constructor() {
        super();
        this.defineOptions({
            chartTitle: "Remaining Life vs Year",
            yTitle: 'Remaining Life (years)',
            xTitle: 'Year'
        });
    }
    ngOnInit() {
        this.generateChart('Remaining');
    }
}
RemainingChartComponent.ɵfac = function RemainingChartComponent_Factory(t) { return new (t || RemainingChartComponent)(); };
RemainingChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RemainingChartComponent, selectors: [["ngx-remaining-chart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "Remaining"]], template: function RemainingChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0);
    } }, encapsulation: 2 });


/***/ }),

/***/ 63511:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/analytics/corrosion-rate-trend/chart/thickness-chart.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThicknessChartComponent": () => (/* binding */ ThicknessChartComponent)
/* harmony export */ });
/* harmony import */ var _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../component/chart/charts-component */ 17313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class ThicknessChartComponent extends _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__.ChartsComponent {
    constructor() {
        super();
        this.defineOptions({
            chartTitle: "Thickness vs Year",
            yTitle: 'Thickness (mm)',
            xTitle: 'Year'
        });
    }
    ngOnInit() {
        this.generateChart('Thickness');
    }
}
ThicknessChartComponent.ɵfac = function ThicknessChartComponent_Factory(t) { return new (t || ThicknessChartComponent)(); };
ThicknessChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ThicknessChartComponent, selectors: [["ngx-thickness-chart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "Thickness"]], template: function ThicknessChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0);
    } }, encapsulation: 2 });


/***/ }),

/***/ 80281:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/analytics/corrosion-rate-trend/corrosion-rate-trend.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrosionRateTrendComponent": () => (/* binding */ CorrosionRateTrendComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! chart.js */ 83854);
/* harmony import */ var _chart_thickness_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart/thickness-chart.component */ 63511);
/* harmony import */ var _chart_corrosionR_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart/corrosionR-chart.component */ 49668);
/* harmony import */ var _chart_remaining_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart/remaining-chart.component */ 29205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _assesment_thickness_thickness_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assesment/thickness/thickness-service */ 19371);
/* harmony import */ var _component_common_variable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../component/common-variable */ 47024);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);




















function CorrosionRateTrendComponent_nb_option_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CorrosionRateTrendComponent_nb_option_15_Template_nb_option_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const option_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.filterByClass(option_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](option_r3);
} }
const _c0 = function () { return { "width": "40px" }; };
function CorrosionRateTrendComponent_table_19_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Piping ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function (a0) { return { "color": a0 }; };
function CorrosionRateTrendComponent_table_19_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseover", function CorrosionRateTrendComponent_table_19_td_3_Template_td_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1); return _r11.style.color = "#0492c2"; })("mouseout", function CorrosionRateTrendComponent_table_19_td_3_Template_td_mouseout_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const element_r10 = restoredCtx.$implicit; const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r14.selectionData.piping_id == element_r10.piping_id ? _r11.style.color = "#0492c2" : _r11.style.color = "black"; })("click", function CorrosionRateTrendComponent_table_19_td_3_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const element_r10 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r15.showData(element_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c1, ctx_r7.selectionData.piping_id == element_r10.piping_id ? "#0492c2" : "black"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r10.piping_id, " ");
} }
function CorrosionRateTrendComponent_table_19_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 22);
} }
function CorrosionRateTrendComponent_table_19_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CorrosionRateTrendComponent_table_19_tr_5_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const row_r16 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r17.selection.toggle(row_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CorrosionRateTrendComponent_table_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](1, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CorrosionRateTrendComponent_table_19_th_2_Template, 2, 2, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CorrosionRateTrendComponent_table_19_td_3_Template, 3, 4, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CorrosionRateTrendComponent_table_19_tr_4_Template, 1, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, CorrosionRateTrendComponent_table_19_tr_5_Template, 1, 0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx_r2.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumns)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumns);
} }
const _c2 = function () { return ["All", 1, 2, 3, 4]; };
chart_js__WEBPACK_IMPORTED_MODULE_6__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_6__.registerables);
class CorrosionRateTrendComponent {
    constructor(thicknessService, variables) {
        this.thicknessService = thicknessService;
        this.variables = variables;
        this.tableData = [];
        this.displayedColumns = ['piping_id'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__.SelectionModel(true, []);
        this.resultsLength = 0;
    }
    ngOnInit() {
        this.thicknessService.getDataThickness()
            .subscribe(({ data }) => {
            this.selectionData = data[0];
            this.tableData = data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    showData(element) {
        this.selectionData = element;
        this.variables.removeChartData(this.thicknessChart);
        this.thicknessChartData(this.thicknessChart, element);
        this.corrosionChartData(this.corrosionChart, element);
        this.remainingLifeChartData(this.remainingChart, element);
    }
    filterByClass(val) {
        let tableData = this.tableData.filter(item => item.class == val);
        if (val == "All")
            tableData = this.tableData;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(tableData);
    }
    getCharCML(cml, i) {
        let cmlLabel = cml.map(c => c.cml_id);
        cmlLabel = cmlLabel.filter((c, i) => cmlLabel.indexOf(c) == i);
        let allYear = cml.map(c => c.year);
        allYear = allYear.filter((c, i) => allYear.indexOf(c) == i).sort((a, b) => a - b);
        return {
            allYear,
            datasets: cmlLabel.map(c => ({
                label: c,
                yAxisID: 'A',
                data: allYear.map(y => {
                    const thick = cml.find(item => item.year == y && item.cml_id == c);
                    return thick[i];
                }),
                backgroundColor: 'transparent',
                borderColor: "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0"),
            }))
        };
    }
    thicknessChartData(chart, { cml }) {
        const { datasets, allYear } = this.getCharCML(cml, "last_thickness_reading");
        chart.data.labels = allYear;
        chart.chart.data.datasets = datasets;
        chart.chart.update();
    }
    corrosionChartData(chart, asset) {
        const cml = this.variables.getCMLCalc(asset);
        const { datasets, allYear } = this.getCharCML(cml, "lt_cr");
        chart.data.labels = allYear;
        chart.chart.data.datasets = datasets;
        chart.chart.update();
    }
    remainingLifeChartData(chart, asset) {
        const cml = this.variables.getCMLCalc(asset);
        const { datasets, allYear } = this.getCharCML(cml, "remaining_life");
        chart.data.labels = allYear;
        chart.chart.data.datasets = datasets;
        chart.chart.update();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
CorrosionRateTrendComponent.ɵfac = function CorrosionRateTrendComponent_Factory(t) { return new (t || CorrosionRateTrendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_assesment_thickness_thickness_service__WEBPACK_IMPORTED_MODULE_3__.ThicknessService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_component_common_variable__WEBPACK_IMPORTED_MODULE_4__.Variables)); };
CorrosionRateTrendComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CorrosionRateTrendComponent, selectors: [["ngx-corrosion-rate-trend"]], viewQuery: function CorrosionRateTrendComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_chart_thickness_chart_component__WEBPACK_IMPORTED_MODULE_0__.ThicknessChartComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_chart_corrosionR_chart_component__WEBPACK_IMPORTED_MODULE_1__.CorrosionRChartComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_chart_remaining_chart_component__WEBPACK_IMPORTED_MODULE_2__.RemainingChartComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.thicknessChart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.corrosionChart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remainingChart = _t.first);
    } }, decls: 25, vars: 4, consts: [[1, "d-flex", "justify-content-between"], ["matInput", "", "placeholder", "Ex. Mia", 3, "keyup"], ["input", ""], [1, "row"], [1, "col"], ["placeholder", "Class", "status", "primary", "size", "small", 1, "mx-5"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "col-3"], ["style", "width: 100%; box-shadow: none;", "mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], ["aria-label", "Select page of GitHub search results", 3, "pageSize"], [1, "col-9"], [1, "my-2"], [3, "value", "click"], ["mat-table", "", 1, "mat-elevation-z8", 2, "width", "100%", "box-shadow", "none", 3, "dataSource"], ["matColumnDef", "piping_id"], ["mat-header-cell", "", 3, "ngStyle", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "cursor : pointer", 3, "ngStyle", "mouseover", "mouseout", "click", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 3, "ngStyle"], ["mat-cell", "", 2, "cursor", "pointer", 3, "ngStyle", "mouseover", "mouseout", "click"], ["nameCell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function CorrosionRateTrendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header", 0)(2, "div")(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "CML Trend");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-form-field")(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Hit Enter To Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function CorrosionRateTrendComponent_Template_input_keyup_8_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 3)(11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 4)(14, "nb-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, CorrosionRateTrendComponent_nb_option_15_Template, 2, 2, "nb-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "nb-card-body")(17, "div", 3)(18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, CorrosionRateTrendComponent_table_19_Template, 6, 4, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "mat-paginator", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "ngx-thickness-chart", 11)(23, "ngx-corrosionR-chart", 11)(24, "ngx-remaining-chart", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectionData);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSize", 30);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardHeaderComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbOptionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardBodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgStyle, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, _chart_thickness_chart_component__WEBPACK_IMPORTED_MODULE_0__.ThicknessChartComponent, _chart_corrosionR_chart_component__WEBPACK_IMPORTED_MODULE_1__.CorrosionRChartComponent, _chart_remaining_chart_component__WEBPACK_IMPORTED_MODULE_2__.RemainingChartComponent], encapsulation: 2 });


/***/ }),

/***/ 63135:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/analytics/remaining-life-trend/chart/piping-circuit-chart.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipingCircuitChartComponent": () => (/* binding */ PipingCircuitChartComponent)
/* harmony export */ });
/* harmony import */ var _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../component/chart/charts-component */ 17313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class PipingCircuitChartComponent extends _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__.ChartsComponent {
    constructor() {
        super();
        this.chartType = 'bar';
        this.yLabels = ['Pipe 101A', 'Pipe 102A', 'Pipe 103A', 'Pipe 104A', 'Pipe 105A'];
        this.legendPosition = 'bottom';
        this.showRightSclae = true;
        this.datasets = [
            {
                label: "Reading (mm)",
                yAxisID: 'A',
                data: ['467', '576', '572', '79', '92'],
                backgroundColor: 'rgba(255,0,0,.5)',
                borderColor: 'rgba(255,0,0,.5)',
            },
            {
                label: "T minimum (mm)",
                yAxisID: 'A',
                data: ['542', '542', '536', '327', '17'],
                backgroundColor: 'rgba(100,100,0,.5)',
                borderColor: 'rgba(100,100,0,.5)',
            },
            {
                label: "Nominal Thickness (mm)",
                yAxisID: 'A',
                data: ['504', '142', '336', '317', '100'],
                backgroundColor: 'rgba(10,50,100,.5)',
                borderColor: 'rgba(10,50,100,.5)',
            },
            {
                label: "Corrosion Rate (mm/Year)",
                yAxisID: 'B',
                data: ['0.052', '0.042', '0.336', '0.527', '0.517'],
                backgroundColor: 'rgba(90,190,90,.5)',
                borderColor: 'rgba(90,190,90,.5)',
            },
        ];
        this.defineOptions({
            chartTitle: "Chart Piping Circuit",
        });
    }
    ngOnInit() {
        this.generateChart('pipingCircuitChart');
    }
}
PipingCircuitChartComponent.ɵfac = function PipingCircuitChartComponent_Factory(t) { return new (t || PipingCircuitChartComponent)(); };
PipingCircuitChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PipingCircuitChartComponent, selectors: [["ngx-pipingCircuitChart-chart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "pipingCircuitChart"]], template: function PipingCircuitChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0);
    } }, encapsulation: 2 });


/***/ }),

/***/ 55743:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/analytics/remaining-life-trend/remaining-life-trend.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemainingLifeTrendComponent": () => (/* binding */ RemainingLifeTrendComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _dashboard_piping_assets_piping_assets_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dashboard/piping-assets/piping-assets.service */ 78539);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _chart_piping_circuit_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart/piping-circuit-chart.component */ 63135);













function RemainingLifeTrendComponent_nb_option_15_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RemainingLifeTrendComponent_nb_option_15_Template_nb_option_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const option_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.filterByClass(option_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r6);
} }
const _c0 = function () { return { "width": "40px" }; };
function RemainingLifeTrendComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Piping Circuit ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function (a0) { return { "color": a0 }; };
function RemainingLifeTrendComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseover", function RemainingLifeTrendComponent_td_22_Template_td_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); return _r10.style.color = "#0492c2"; })("mouseout", function RemainingLifeTrendComponent_td_22_Template_td_mouseout_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const element_r9 = restoredCtx.$implicit; const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.selectionData.piping_id == element_r9.piping_id ? _r10.style.color = "#0492c2" : _r10.style.color = "black"; })("click", function RemainingLifeTrendComponent_td_22_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const element_r9 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.showData(element_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, ctx_r3.selectionData.piping_id == element_r9.piping_id ? "#0492c2" : "black"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r9.piping_id, " ");
} }
function RemainingLifeTrendComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 20);
} }
function RemainingLifeTrendComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RemainingLifeTrendComponent_tr_24_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const row_r15 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.selection.toggle(row_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c2 = function () { return ["All", 1, 2, 3, 4]; };
class RemainingLifeTrendComponent {
    constructor(pipingAssetsService) {
        this.pipingAssetsService = pipingAssetsService;
        this.tableData = [];
        this.displayedColumns = ['piping_id'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.SelectionModel(true, []);
    }
    ngOnInit() {
        this.pipingAssetsService.getPipingAssets()
            .subscribe(({ data }) => {
            this.selectionData = data[0];
            this.tableData = data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    showData(element) {
        this.selectionData = element;
    }
    filterByClass(val) {
        let tableData = this.tableData.filter(item => item.class == val);
        if (val == "All")
            tableData = this.tableData;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(tableData);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
RemainingLifeTrendComponent.ɵfac = function RemainingLifeTrendComponent_Factory(t) { return new (t || RemainingLifeTrendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dashboard_piping_assets_piping_assets_service__WEBPACK_IMPORTED_MODULE_0__.PipingAssetsService)); };
RemainingLifeTrendComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RemainingLifeTrendComponent, selectors: [["ngx-remaining-life-trend"]], viewQuery: function RemainingLifeTrendComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 28, vars: 7, consts: [[1, "d-flex", "justify-content-between"], ["matInput", "", "placeholder", "Ex. Mia", 3, "keyup"], ["input", ""], [1, "row"], [1, "col"], ["placeholder", "Class", "status", "primary", "size", "small", 1, "mx-5"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "col-3"], ["mat-table", "", 1, "mat-elevation-z8", 2, "width", "100%", "box-shadow", "none", 3, "dataSource"], ["matColumnDef", "piping_id"], ["mat-header-cell", "", 3, "ngStyle", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "cursor : pointer", 3, "ngStyle", "mouseover", "mouseout", "click", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of GitHub search results", 3, "pageSize"], [1, "col-9"], [3, "value", "click"], ["mat-header-cell", "", 3, "ngStyle"], ["mat-cell", "", 2, "cursor", "pointer", 3, "ngStyle", "mouseover", "mouseout", "click"], ["nameCell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function RemainingLifeTrendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header", 0)(2, "div")(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Piping Trend");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field")(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Hit Enter To Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function RemainingLifeTrendComponent_Template_input_keyup_8_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 3)(11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 4)(14, "nb-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, RemainingLifeTrendComponent_nb_option_15_Template, 2, 2, "nb-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "nb-card-body")(17, "div", 3)(18, "div", 7)(19, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](20, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, RemainingLifeTrendComponent_th_21_Template, 2, 2, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, RemainingLifeTrendComponent_td_22_Template, 3, 4, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, RemainingLifeTrendComponent_tr_23_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, RemainingLifeTrendComponent_tr_24_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "mat-paginator", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "ngx-pipingCircuitChart-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSize", 30);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardHeaderComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbOptionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardBodyComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, _chart_piping_circuit_chart_component__WEBPACK_IMPORTED_MODULE_1__.PipingCircuitChartComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_analytics_analytics_module_ts.js.map