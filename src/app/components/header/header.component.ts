import { Component, Input, OnInit } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
@Input() titulo: string="";

  constructor() { }

  ngOnInit() {}

}
