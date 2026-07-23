import { Component } from '@angular/core';
import { Avatar } from '@fundamental-ngx/ui5-webcomponents/avatar';
import { ButtonComponent } from '@fundamental-ngx/core';


@Component({
  selector: 'app-buggy-component',
  imports: [Avatar, ButtonComponent],
  templateUrl: './buggy-component.html',
  styleUrl: './buggy-component.scss',
})
export default class BuggyComponent {}
