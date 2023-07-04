"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"],{

/***/ 79138:
/*!*****************************************************************!*\
  !*** ./src/app/component/delete dialog/delete-dialog.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteDialogModule": () => (/* binding */ DeleteDialogModule)
/* harmony export */ });
/* harmony import */ var _delete_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-dialog.component */ 13872);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class DeleteDialogModule {
}
DeleteDialogModule.ɵfac = function DeleteDialogModule_Factory(t) { return new (t || DeleteDialogModule)(); };
DeleteDialogModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DeleteDialogModule });
DeleteDialogModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__.ThemeModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbDialogModule.forChild({
                closeOnBackdropClick: true
            }),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbIconModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbButtonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DeleteDialogModule, { declarations: [_delete_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DeleteDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__.ThemeModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbDialogModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbIconModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbButtonModule], exports: [_delete_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DeleteDialogComponent] }); })();


/***/ }),

/***/ 24789:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class DashboardComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["ngx-dashboard"]], decls: 1, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 71659:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.routing */ 45774);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ 24789);
/* harmony import */ var _component_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/top-bar/top-bar.module */ 8351);
/* harmony import */ var _piping_assets_piping_assets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./piping-assets/piping-assets.component */ 58804);
/* harmony import */ var _piping_circuits_piping_circuits_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./piping-circuits/piping-circuits.component */ 75233);
/* harmony import */ var _view_proposal_view_proposal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-proposal/view-proposal.component */ 56161);
/* harmony import */ var _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/mat-table/mat-table.module */ 39511);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ 33244);
/* harmony import */ var _piping_assets_add_assets_add_assets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./piping-assets/add-assets/add-assets.component */ 39267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _piping_circuits_add_circuit_add_circuit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./piping-circuits/add-circuit/add-circuit.component */ 24651);
/* harmony import */ var _view_proposal_add_proposal_add_proposal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-proposal/add-proposal/add-proposal.component */ 58189);
/* harmony import */ var _component_delete_dialog_delete_dialog_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../component/delete dialog/delete-dialog.module */ 79138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);

























class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbMenuModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbOptionModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbSelectModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbAccordionModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbInputModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbDatepickerModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbButtonModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbIconModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbListModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbIconModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbToastrModule.forRoot({
                destroyByClick: true,
                duration: 3000,
                position: _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbGlobalPhysicalPosition.BOTTOM_RIGHT,
                preventDuplicates: true,
                limit: 3
            }),
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_15__.NgxQRCodeModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
            _dashboard_routing__WEBPACK_IMPORTED_MODULE_1__.DashboardsRoutingModule,
            _component_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_3__.TopBarModule,
            _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_7__.MaterialTableModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggleModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
            _component_delete_dialog_delete_dialog_module__WEBPACK_IMPORTED_MODULE_11__.DeleteDialogModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
        _piping_assets_piping_assets_component__WEBPACK_IMPORTED_MODULE_4__.PipingAssetsComponent,
        _piping_circuits_piping_circuits_component__WEBPACK_IMPORTED_MODULE_5__.PipingCircuitsComponent,
        _view_proposal_view_proposal_component__WEBPACK_IMPORTED_MODULE_6__.ViewProposalComponent,
        _piping_assets_add_assets_add_assets_component__WEBPACK_IMPORTED_MODULE_8__.AddAssetsComponent,
        _piping_circuits_add_circuit_add_circuit_component__WEBPACK_IMPORTED_MODULE_9__.AddCircuitComponent,
        _view_proposal_add_proposal_add_proposal_component__WEBPACK_IMPORTED_MODULE_10__.AddProposalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbMenuModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbOptionModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbSelectModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbAccordionModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbDatepickerModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbButtonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbIconModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbListModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbIconModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbToastrModule, _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_15__.NgxQRCodeModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _dashboard_routing__WEBPACK_IMPORTED_MODULE_1__.DashboardsRoutingModule,
        _component_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_3__.TopBarModule,
        _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_7__.MaterialTableModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggleModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
        _component_delete_dialog_delete_dialog_module__WEBPACK_IMPORTED_MODULE_11__.DeleteDialogModule] }); })();


/***/ }),

/***/ 45774:
/*!******************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.routing.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardsRoutingModule": () => (/* binding */ DashboardsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 24789);
/* harmony import */ var _piping_assets_piping_assets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piping-assets/piping-assets.component */ 58804);
/* harmony import */ var _piping_circuits_piping_circuits_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./piping-circuits/piping-circuits.component */ 75233);
/* harmony import */ var _view_proposal_view_proposal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-proposal/view-proposal.component */ 56161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [{
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
        children: [
            {
                path: 'piping-assets',
                component: _piping_assets_piping_assets_component__WEBPACK_IMPORTED_MODULE_1__.PipingAssetsComponent,
                data: {
                    routename: "assets"
                }
            },
            {
                path: 'piping-circuits',
                component: _piping_circuits_piping_circuits_component__WEBPACK_IMPORTED_MODULE_2__.PipingCircuitsComponent,
                data: {
                    routename: "circuit"
                }
            },
            {
                path: 'view-proposal',
                component: _view_proposal_view_proposal_component__WEBPACK_IMPORTED_MODULE_3__.ViewProposalComponent,
                data: {
                    routename: "proposal"
                }
            },
        ],
    }];
class DashboardsRoutingModule {
}
DashboardsRoutingModule.ɵfac = function DashboardsRoutingModule_Factory(t) { return new (t || DashboardsRoutingModule)(); };
DashboardsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DashboardsRoutingModule });
DashboardsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DashboardsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts.js.map