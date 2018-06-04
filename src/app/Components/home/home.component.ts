import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger, animation} from '@angular/animations'
import { DataService } from '../../Services/data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], 
  animations :[
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity:0 }), {optional: true}),
        
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-10%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(10px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1})
          ]))]),{optional: true} ),

          query(':leave', stagger('300ms', [
            animate('.4s ease-in', keyframes([
              style({opacity: 0, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(10px)', offset: .3}),
              style({opacity: 1, transform: 'translateY(-10%)', offset: 1})
            ]))]),{optional: true} )

      ])
    ])
  ]
})
export class HomeComponent implements OnInit {


  btnText: String = "Add Item"
  itemCount: Number = 1
  goals: String[]
  goaltext: String = "My Life Goal"

  constructor(private _date: DataService) { 
    
   }

  ngOnInit() {
    //this.goals = _date.//["Scuba Diving", "hill climbing", "Blub"]
    this._date.goal.subscribe(res => this.goals = res);
    this.bind()
    
  }

  addItem(){
    this.goals.push(this.goaltext)
    this.goaltext = ''
    this.bind()
  }

  removeItem(i){
    this.goals.splice(i, 1)
    this.bind()
  }


  bind(){
    this.itemCount = this.goals.length
    this._date.changeGoal(this.goals)
  }
}
