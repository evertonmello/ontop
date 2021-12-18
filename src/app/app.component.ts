import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ontop';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon("logo", this.domSanitizer.bypassSecurityTrustResourceUrl('./../assets/icons/tune_24px.svg'));
    this.matIconRegistry.addSvgIcon("calendar", this.domSanitizer.bypassSecurityTrustResourceUrl('./../assets/icons/calendar.svg'));
    this.matIconRegistry.addSvgIcon("arrowdown", this.domSanitizer.bypassSecurityTrustResourceUrl('./../assets/icons/arrowdown.svg'));
    this.matIconRegistry.addSvgIcon("plus", this.domSanitizer.bypassSecurityTrustResourceUrl('./../assets/icons/plus.svg'));
    this.matIconRegistry.addSvgIcon("filter", this.domSanitizer.bypassSecurityTrustResourceUrl('./../assets/icons/filter.svg'));
    this.matIconRegistry.addSvgIcon("edit", this.domSanitizer.bypassSecurityTrustResourceUrl('./../assets/icons/edit.svg'));
    this.matIconRegistry.addSvgIcon("logo", this.domSanitizer.bypassSecurityTrustResourceUrl('./../assets/icons/tune_24px.svg'));
    this.matIconRegistry.addSvgIcon("docs", this.domSanitizer.bypassSecurityTrustResourceUrl('./../assets/icons/docs.svg'));
    this.matIconRegistry.addSvgIcon("card", this.domSanitizer.bypassSecurityTrustResourceUrl('./../assets/icons/card.svg'));
    this.matIconRegistry.addSvgIcon("profile", this.domSanitizer.bypassSecurityTrustResourceUrl('./../assets/icons/profile.svg'));
    this.matIconRegistry.addSvgIcon("search", this.domSanitizer.bypassSecurityTrustResourceUrl('./../assets/icons/search.svg'));
    this.matIconRegistry.addSvgIcon("actions", this.domSanitizer.bypassSecurityTrustResourceUrl('./../assets/icons/actions.svg'));
    this.matIconRegistry.addSvgIcon("trash", this.domSanitizer.bypassSecurityTrustResourceUrl('./../assets/icons/trash.svg'));
    this.matIconRegistry.addSvgIcon("sign", this.domSanitizer.bypassSecurityTrustResourceUrl('./../assets/icons/sign.svg'));
  }
}
