import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'bypassSecurityTrustHtml'
})
export class BypassSecurityTrustHtmlPipe implements PipeTransform {
  constructor(
    private sanitizer: DomSanitizer
  ){}

  transform(safeHtml: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(safeHtml);
  }

}
