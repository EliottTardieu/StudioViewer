import { Component } from '@angular/core';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      <b><a>{{ environment.footer.variable }}</a></b> {{currentYear}}
    </span>
    <div class="socials">
      <a href=" {{ environment.footer.socials.facebook }}" target="_blank" class="ion ion-social-facebook"></a>
      <a href=" {{ environment.footer.socials.linkedin }}" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
  public currentYear: number;
  constructor() {
    this.currentYear = (new Date()).getFullYear();
  }

  protected readonly environment = environment;
}
