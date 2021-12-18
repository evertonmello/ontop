import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menuItemSelected: number = 0;
  public menuItems = [
    { label: 'Contracts', icon: 'profile' },
    { label: 'Documents', icon: 'docs' },
    { label: 'Payout', icon: 'card' },
    { label: 'Time', icon: 'calendar' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
