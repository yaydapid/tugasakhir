import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class LoginBateraService {
    constructor(
        private httpClient : HttpClient
    ){}

    private apiUrl = environment.apiUrl;

    getVerifyLogin(data){
        const url = this.apiUrl + "/login"; 
        let httpHeaders = new HttpHeaders();
        httpHeaders.append("Access-Control-Allow-Origin","*");
        httpHeaders.append("Access-Control-Allow-Methods","PUT, POST, DELETE, GET, OPTIONS");
        httpHeaders.append('Access-Control-Allow-Headers', 'Accept,Authorization,Content-Type')
        httpHeaders.append('Content-Type', 'application/json')
        return this.httpClient.post(url, data, {headers : httpHeaders})
    }

    testAPI() {
        const url = this.apiUrl + "/login"

        const httpHeaders = new HttpHeaders({
            "Access-Control-Allow-Origin" : "*",
            'Access-Control-Allow-Headers' : 'Accept,Authorization,Content-Type',
            "Access-Control-Allow-Methods" : "PUT, POST, DELETE, GET, OPTIONS",
        });

        const data = {
            name : 'Roganda',
            username : 'roganda',
            email : 'roganda@gmail.com',
            password : 12345
        }

        return this.httpClient.post(url, data, )
    }
}