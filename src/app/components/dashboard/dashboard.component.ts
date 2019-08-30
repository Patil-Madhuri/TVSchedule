import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { seriesList } from 'src/app/services/constant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  seriesList;
  showDetails = false;
  show;
  constructor(private httpSerive: HttpService) { }

  ngOnInit() {
    // this.getSchedule();
    this.seriesList = seriesList;
  }

  getSchedule() {
    var contentBody = { url: 'schedule', params: { country: 'US', date: '2014-12-01' } }

    this.httpSerive.httpGet(contentBody).subscribe(res => {
      console.log(res);

    });
  }
  receiveMessage($event) {
    this.showDetails = true;    
    this.show = $event;
    console.log($event);    
    this.getEpisodes()
  }

  getEpisodes() {
    var contentBody = {url: 'shows/'+this.show.show.id+'/episodes'};
    this.httpSerive.httpGet(contentBody).subscribe(res => {
      console.log(res);

    });
  }
}
