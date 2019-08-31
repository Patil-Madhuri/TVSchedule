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
  episodeList;
  apiRoot: string = environment.baseUrl;
  //  schedule?country=US&date=2014-12-01

  constructor(private httpSerive: HttpService) { }

  ngOnInit() {
    this.getSchedule();
    // this.seriesList = seriesList;
  }

  getSchedule() {
    const URL = this.apiRoot + 'schedule' + "?country=US" + "&date=" + this.convertDate();
    var contentBody = { url: URL }
    this.httpSerive.httpGetJsonp(contentBody).subscribe(res => {
      this.seriesList = res;
    });

  }
  receiveMessage($event) {
    console.log('sdfghdsa');
    
    this.showDetails = true;
    this.show = $event;
    this.getEpisodes()
  }

  convertDate() {
    var currentDate = new Date();
    const month = currentDate.getMonth() + 1
    const date = currentDate.getDate();
    if (month <= 9) {
      if (date <= 9) {
        return currentDate.getFullYear() + '-0' + month + '-0' + date;
      } else {
        return currentDate.getFullYear() + '-0' + month + '-' + currentDate.getDate();
      }
    } else {
      return currentDate.getFullYear() + '-' + month + '-' + currentDate.getDate();
    }
  }


  getEpisodes() {
    const URL = this.apiRoot + 'shows/' + this.show.show.id + '/episodes';

    var contentBody = { url: URL };
    this.httpSerive.httpGetJsonp(contentBody).subscribe(res => {
      this.episodeList = res;
    });
  }
}
