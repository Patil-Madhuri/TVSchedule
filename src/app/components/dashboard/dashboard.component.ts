import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
// import { seriesList } from 'src/app/services/constant';
import {
  HttpClient
} from "@angular/common/http";
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from "rxjs/operators";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  seriesList;
  showDetails = false;
  show;
  apiRoot: string = " http://api.tvmaze.com/";
//  schedule?country=US&date=2014-12-01

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getSchedule();
    // this.seriesList = seriesList;
  }

  getSchedule() {

    // var contentBody = { url: 'schedule', params: { country: 'US', date: '2014-12-01' } }

    // this.httpSerive.httpGet(contentBody).subscribe(res => {
    //   console.log(res);

    // });
    let apiURL = `${this.apiRoot}schedule?country=US&date=2019-08-31`;
    console.log(apiURL);
    const res = this.returnResponse(apiURL);
    console.log(res);
    
  }
  receiveMessage($event) {
    this.showDetails = true;    
    this.show = $event;
    console.log($event);    
    // this.getEpisodes()
  }

  returnResponse(apiURL) {
    return this.http.jsonp(apiURL, "callback").pipe(
      map(res => {
        console.log(res);
        return res;
      }))

  }
  // getEpisodes() {
  //   var contentBody = {url: 'shows/'+this.show.show.id+'/episodes'};
  //   this.httpSerive.httpGet(contentBody).subscribe(res => {
  //     console.log(res);

  //   });
  // }
}
