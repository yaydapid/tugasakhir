import { HttpClient } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
}) 
export class ServiceBaseComponent {
    constructor(public httpClient : HttpClient) {

    }
    private apiUrl = environment.apiUrl;
}