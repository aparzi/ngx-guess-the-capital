import {Component, OnInit} from '@angular/core';
import {BusinessLogicService} from '../../services/business-logic.service';
import {LabelValue} from '../../models/LabelValue';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public capitals: Array<LabelValue<string>> = [];
  public selectedCapital: string;

  constructor(private businessLogicService: BusinessLogicService) {
  }

  ngOnInit(): void {
    this.getCountries();
  }

  private getCountries(): void {
    this.businessLogicService.getData().pipe(
      map(data => data.map(el => new LabelValue<string>(el.capital[0], el.capital[0])))
    ).subscribe(data => this.capitals = data);
  }

}
