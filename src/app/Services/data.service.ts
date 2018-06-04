import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {

  private goals: BehaviorSubject<any>
  public goal;
  
  constructor() {
    this.goals = new  BehaviorSubject<any>(["Scuba Diving", "hill climbing", "Blub"])
    this.goal = this.goals.asObservable()
   }

   changeGoal(goal) {
     this.goals.next(goal)
   }
}
