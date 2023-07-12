import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";

@Injectable({
    providedIn: 'root'
}) 
export class PipingCircuitService {
    constructor(private httpClient : HttpClient) { }
    private apiUrl = environment.apiUrl;

    getPipingCircuits() {
        const url = this.apiUrl + "/circuit";
        return this.httpClient.get(url);
    }

    addPipingCircuits(data) {
        const url = this.apiUrl + "/circuit";
        return this.httpClient.post(url, data);
    }

    updatePipingCircuits(data) {
        const url = this.apiUrl + "/circuit/" + data.id;
        return this.httpClient.put(url, data);
    }

    deletePipingCircuits(id) {
        const url = this.apiUrl + "/circuit/" + id;
        return this.httpClient.delete(url);
    }

    importCircuits(postBody) {
        const url = this.apiUrl + "/import_circuits";
        return this.httpClient.post(url, postBody);
    }
}