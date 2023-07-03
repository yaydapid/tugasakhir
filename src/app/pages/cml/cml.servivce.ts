import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
}) 
export class CMLService {
    constructor(private httpClient : HttpClient) { }
    private apiUrl = environment.apiUrl;

    getCMLs(){
        const url = this.apiUrl + "/cml";
        return this.httpClient.get(url);
    }

    getCML(id) {
        const url = this.apiUrl + "/cml/" + id;
        return this.httpClient.get(url);
    }

    addCML(data) {
        const url = this.apiUrl + "/cml";
        return this.httpClient.post(url, data);
    }

    deleteCML(id) {
        const url = this.apiUrl + "/cml/" + id;
        return this.httpClient.delete(url);
    }

    updateCML(data) {
        const url = this.apiUrl + "/cml/" + data.id;
        return this.httpClient.put(url, data);
    }
}