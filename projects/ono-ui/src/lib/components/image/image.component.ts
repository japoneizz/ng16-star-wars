import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ono-ui-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  @Input({ required: true }) src = '';
  @Input() alt = '';
}
