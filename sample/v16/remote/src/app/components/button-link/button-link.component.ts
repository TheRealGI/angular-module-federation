import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.scss']
})
export class ButtonLinkComponent {
  @Input({required: true}) url!: string;
  @Input({required: true}) name!: string;

}
