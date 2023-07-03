import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";

@Injectable({
    providedIn: 'root'
}) 
export class ProposalService {
    constructor(private httpClient : HttpClient) { }
    private apiUrl = environment.apiUrl;

    getProposals() {
        const url = this.apiUrl + "/proposal";
        return this.httpClient.get(url);
    }

    addProposals(data) {
        const url = this.apiUrl + "/proposal";
        return this.httpClient.post(url, data);
    }
}