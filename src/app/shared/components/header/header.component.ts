import { Component, ViewChild } from '@angular/core';
import { TooltipDirective } from 'ngx-bootstrap/tooltip';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = "MyFitnessApp";

}
