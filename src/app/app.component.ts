import {Component, OnInit} from '@angular/core';
import {BusinessLogicService} from "./services/business-logic.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private businessLogicService: BusinessLogicService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.businessLogicService.login();
    }, 3000);
  }


}
