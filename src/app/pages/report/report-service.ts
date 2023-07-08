import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn : 'root'
})
export class ReportService {
    apiUrl = environment.apiUrl
    constructor(private httpClient : HttpClient) { }

    getAssetsReport(id) {
        const url = this.apiUrl + '/asset_report/' + id;
        return this.httpClient.get(url);
    }

    getCircuitReport(id) {
        const url = this.apiUrl + '/circuit_report/' + id;
        return this.httpClient.get(url);
    }

    getAttachment(id) {
        const url = this.apiUrl + "/document/" + id;
        return this.httpClient.get(url, {responseType : 'arraybuffer'});
    }

    publishReportAsett(data, id) {
        const url = this.apiUrl + "/publish_asset/" + id;
        return this.httpClient.put(url, data);
    }

    publishReportCircuit(data, id) {
        const url = this.apiUrl + "/publish_circuit/" + id;
        return this.httpClient.put(url, data);
    }

    addQRCode(data) {
        const url = this.apiUrl + "/qr_code";
        return this.httpClient.put(url, data);
    }

    getQRCode(title) {
        const url = this.apiUrl + "/qr_code/" + title;
        return this.httpClient.get(url, {responseType : 'arraybuffer'});
    }

}