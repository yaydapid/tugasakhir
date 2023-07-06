import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";

@Injectable({
    providedIn: 'root'
}) 
export class PipingAssetsService {

    constructor(private httpClient : HttpClient) { }
    private apiUrl = environment.apiUrl;

    getPipingAssets() {
        const url = this.apiUrl + "/assets";
        const httpHeaders = new HttpHeaders();
        httpHeaders.append("enctype","multipart/form-data");
        httpHeaders.append("Accept","*/*");
        return this.httpClient.get(url);
    }

    addPipingAssets(data) {
        const url = this.apiUrl + "/assets";
        return this.httpClient.post(url, data);
    }

    updatePipingAssets(data) {  
        const url = this.apiUrl + "/assets/" + data.id;
        return this.httpClient.put(url, data);
    }

    deletePipingAssets(id) {
        const url = this.apiUrl + "/assets/" + id;
        return this.httpClient.delete(url);
    }

    uploadImage(postBody){
        const url = this.apiUrl + "/file/upload";
        return this.httpClient.post(url, postBody, {
          reportProgress : true, observe : 'events'
        })
    }

    importAsset(postBody) {
        const url = this.apiUrl + "/import_assets";
        return this.httpClient.post(url, postBody);
    }
}