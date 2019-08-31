/**
 * @file http.service.ts
 * @module to make http request
 * @author Madhuri
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn:"root"
})
export class HttpService {
  public baseUrl: string = 'http://api.tvmaze.com/';

  constructor(private http: HttpClient) { }
  
  /**function to respond for get call and return required data*/
  public httpGet(option: any): Observable<any> {
    var httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization':  this.localservice.getData('token')
      })
    };
    if(option.params){
      httpAuthOptions['params'] = option.params 
    }
    option.url = this.baseUrl + option.url;
    return this.http.get(option.url, httpAuthOptions)
  }
  
  /**function to respond for post call */
  public httpPost(option: any, isAuthRequired: boolean): Observable<any> {
    var httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    if (isAuthRequired){
      httpAuthOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'Authorization': this.localservice.getData('token')
        })
      };
    }
    option.url = this.baseUrl + option.url;
    return this.http.post(option.url, option.body, httpAuthOptions)
  }

  /**function to respond for put call */
  public httpPut(option: any): Observable<{}> {
    var httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.localservice.getData('token')
      })
    };

    option.url = this.baseUrl + option.url;
    return this.http.put(option.url, option.body, httpAuthOptions)
  }

  public httpDelete(option: any): Observable<{}> {
    var httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.localservice.getData('token')
      })
    };

    option.url = this.baseUrl + option.url;
    return this.http.delete(option.url,  httpAuthOptions)
  }



  public httpGetJsonp(option: any): Observable<any> {
    var httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization':  this.localservice.getData('token')
      })
    };
    if(option.params){
      httpAuthOptions['params'] = option.params
    }
    return this.http.get(option.url);
  }

}
