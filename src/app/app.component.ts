import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testAng';
  public prop1="parent to child";
  public childMessage=""
  public links=["practice","empList","empDetail"];
}
