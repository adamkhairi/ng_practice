import { Component } from '@angular/core';
import {NotificationService} from "./notification/notification.service";

@Component({
  selector: 'sr-c11',
  templateUrl: './c11.component.html',
  styleUrls: ['./c11.component.scss']
})
export class C11Component {
  text = "Example";

  constructor(readonly service: NotificationService) {}

  show() {
    this.service.show(this.text).subscribe();
  }
}
