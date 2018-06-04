import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../../Services/data.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

goals: any

  constructor(private route: ActivatedRoute, private router: Router, private _date: DataService) {
    this.route.params.subscribe(res => console.log(res.id))
   }

  ngOnInit() {
    this._date.goal.subscribe(res => this.goals = res);
  }

  sendHome() {
    this.router.navigate(['']);
  }

}
