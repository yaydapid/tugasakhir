import { Component, Injector, OnInit } from "@angular/core";

@Component({
    selector: 'base',
    template: ''
})
export class PageBaseComponent implements OnInit {

    get user() { return JSON.parse(localStorage.getItem('user')) }


    constructor(injector: Injector) {
    }

    ngOnInit(): void {
    }
}