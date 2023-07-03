import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";

@Injectable({
    providedIn : 'root'
})
export class DamageMechanismService {
    constructor(private httpClient : HttpClient) { }
    private apiUrl = environment.apiUrl;

    getDamageMechanism() {
        const url = this.apiUrl + "/damage_mechanism";
        return this.httpClient.get(url);
    }

    updateDamageMechanism(id, data) {
        const url = this.apiUrl + "/damage_mechanism/" + id;
        return this.httpClient.put(url, data);
    }
}