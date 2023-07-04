"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_cml_cml_module_ts"],{

/***/ 40938:
/*!*************************************************!*\
  !*** ./src/app/pages/cml/cml-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CMLRoutingModule": () => (/* binding */ CMLRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _cml_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cml.component */ 55526);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{
        path: '',
        component: _cml_component__WEBPACK_IMPORTED_MODULE_0__.CmlComponent,
        data: {
            routename: "cml"
        }
    }];
class CMLRoutingModule {
}
CMLRoutingModule.ɵfac = function CMLRoutingModule_Factory(t) { return new (t || CMLRoutingModule)(); };
CMLRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CMLRoutingModule });
CMLRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CMLRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 74845:
/*!*****************************************!*\
  !*** ./src/app/pages/cml/cml.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CMLModule": () => (/* binding */ CMLModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _cml_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cml.component */ 55526);
/* harmony import */ var _cml_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cml-routing.module */ 40938);
/* harmony import */ var _component_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/top-bar/top-bar.module */ 8351);
/* harmony import */ var _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/mat-table/mat-table.module */ 39511);
/* harmony import */ var _add_cml_add_cml_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-cml/add-cml.component */ 46415);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);











class CMLModule {
}
CMLModule.ɵfac = function CMLModule_Factory(t) { return new (t || CMLModule)(); };
CMLModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CMLModule });
CMLModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
            _cml_routing_module__WEBPACK_IMPORTED_MODULE_2__.CMLRoutingModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbIconModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbInputModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbButtonModule,
            _component_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_3__.TopBarModule,
            _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_4__.MaterialTableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbDatepickerModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbToastrModule.forRoot({
                destroyByClick: true,
                duration: 3000,
                position: _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbGlobalPhysicalPosition.BOTTOM_RIGHT,
                preventDuplicates: true,
                limit: 3
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CMLModule, { declarations: [_cml_component__WEBPACK_IMPORTED_MODULE_1__.CmlComponent,
        _add_cml_add_cml_component__WEBPACK_IMPORTED_MODULE_5__.AddCMLComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
        _cml_routing_module__WEBPACK_IMPORTED_MODULE_2__.CMLRoutingModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbIconModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbButtonModule,
        _component_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_3__.TopBarModule,
        _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_4__.MaterialTableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbDatepickerModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbToastrModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_cml_cml_module_ts.js.map