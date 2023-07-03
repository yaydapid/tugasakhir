import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn : 'root' 
})
export class PageMenuService {
    constructor(private httpClient : HttpClient) { }
    private apiUrl = environment.apiUrl;

    addImage(data) {
        const url = this.apiUrl + "/image";
        return this.httpClient.post(url, data)
    }

    showImage(id) {
        const url = this.apiUrl + "/image/" + id;
        return this.httpClient.get(url);
    }

    addDocument(data) {
        const url = this.apiUrl + "/document";
        return this.httpClient.post(url, data);
    }

    showDocument(id) {
        const url = this.apiUrl + "/document/" + id;
        return this.httpClient.get(url);
    }
}