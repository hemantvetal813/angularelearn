import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-asd',
  template: 
  // <h2>{{greet()}}</h2>

  // <input #myInput [(ngModel)]='greeting' type='text' value='hemant' [disabled]=isDisabled/>
  // <button (click)="logMessage(myInput.value)">Log</button>
  // <button (click)="logMessage($event)">Log</button>
  // {{greeting}}

  // <h2 class="text-success">Codevolution</h2>
  // <h2 [class]="successClass">Codevolution</h2>
  // <h2 [class.text-danger]="hasError">Codevolution</h2>
  // <h2 [ngClass]="messageClasses">Codevolution</h2>

  // <h2 [ngStyle]="styleClasses">style Binding</h2>
  // <h2 [style.color]="hasError?'red':'yellow'">style Binding</h2>

  // <div *ngFor='let color of colors; index as i'>
  // <h2>{{i}}{{color}}</h2>

  // </div>
  `<h2>{{parentData}}</h2>
  <button (click)="fireEvent()">send event</button>
  <h2>{{name1 | lowercase}}</h2>
  <h2>{{name1 | titlecase}}</h2>
  <h2>{{name1 | slice:3:5}}</h2>
  <h2>{{styleClasses | json}}</h2>
  <h2>{{5.678 | number:'3.4-5'}}</h2>
  <h2>{{5.678 | percent}}</h2>
  <h2>{{5.678 | currency:'INR'}}</h2>
  `,
  styles: [`
  .text-success{
    color:green;
  }

  .text-danger{
    color:red;
  }
  .text-special {
    font-style:italic;
  }
  `]
})
export class AsdComponent implements OnInit {

  private name1 = "hemant"
  private isDisabled = false
  private successClass = "text-success"
  private hasError=true
  public colors=["red",'yellow','green']
  private greeting=""
  private messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":true
  }
  private styleClasses={
    color:"yellow",
    fontStyle:"italic"
  }

  @Input() public parentData
  @Output() public childData=new EventEmitter()
  constructor() {
  }

  ngOnInit() {
  }
  greet() {
    return `hello ${this.name1}`
  }
  logMessage(value){
    this.greeting=value;
  }
  fireEvent(){
    this.childData.emit("child to parent")
  }
}
