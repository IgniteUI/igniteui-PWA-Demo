import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IGX_DROP_DOWN_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IgxAvatarComponent, IgxDropDownItemComponent, IgxIconButtonDirective, IgxIconComponent, IgxToggleActionDirective } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  imports: [IGX_DROP_DOWN_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IgxDropDownItemComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
