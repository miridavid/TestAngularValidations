import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-welcom',
  templateUrl: './welcom.component.html',
  styleUrls: ['./welcom.component.scss']
})
export class WelcomComponent implements OnInit {
name$?:Observable<string>

  constructor( public activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   this.name$=this.activedRoute.queryParams.pipe(map(p=>p.name))
  }

}
