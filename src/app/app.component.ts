import { Component, Input, AfterViewInit } from '@angular/core';
import '@polymer/paper-dialog';
import '@polymer/paper-button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-web-components';
  innerHTML = `
<h1>innerHTML web components</h1>
<div>
  <span>
    <mark>Wesbite: <a href="#" onclick='dialog1.open()'>www.bing.com</a></mark>
    <paper-button raised onclick='dialog1.open()'>www.bing.com</paper-button>
  </span>
</div>
<paper-dialog id='dialog1'>
  <h2>Do you wish to open link?</h2>
  <code>https://www.bing.com</code>
  <div class="buttons">
    <paper-button dialog-dismiss>Cancel</paper-button>
    <paper-button dialog-confirm autofocus data-url="https://www.bing.com" onclick="console.log('open https://www.bing.com');">Open</paper-button>
  </div>
</paper-dialog>`
;

  // Angular component handler works with web components, but not with innerHTML
  handleOpen(e: MouseEvent | any) {
    console.log('open', e.currentTarget.getAttribute('data-url'));
  }
}
