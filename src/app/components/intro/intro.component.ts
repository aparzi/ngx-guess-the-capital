import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  title = 'ngx-guess-the-capital';

  constructor(private router: Router) {
  }

  goToGame(): void {
    this.router.navigate(['game']);
  }

}
