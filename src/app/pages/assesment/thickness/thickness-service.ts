import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn : 'root'
})
export class ThicknessService {
    apiUrl = environment.apiUrl
    constructor(private httpClient : HttpClient) { }

    getDataThickness() {
        const url = this.apiUrl + '/thickness';
        return this.httpClient.get(url);
    }
}