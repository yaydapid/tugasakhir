import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
}) 
export class VisualConditionService {
    constructor(private httpClient : HttpClient) { }
    private apiUrl = environment.apiUrl;

    getVisualConditions() {
        const url = this.apiUrl + "/visual_condition";
        return this.httpClient.get(url);
    }

    updateVisualConditions(data, id) {
        const url = this.apiUrl + "/visual_condition/" + id;
        return this.httpClient.put(url, data);
    }
}