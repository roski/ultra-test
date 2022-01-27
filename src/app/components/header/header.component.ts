import { Component } from '@angular/core';
import { ROUTES_PATHS } from '@app-shared/models';

/** Header component with main navigation menu */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly routesPaths = ROUTES_PATHS;
}
