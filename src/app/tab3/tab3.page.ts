import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPageInfo } from 'ngx-virtual-scroller';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  items:any[];
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('../../assets/comics.json').subscribe(
      result => {
        console.log(result);
        this.items = result.comics})

  }
}
