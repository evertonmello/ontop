import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  public contracts = [
    { name: "Darlene Robertson", type: "Traditional", startDate: "Mar 4, 2021", amount: 200, status: true },
    { name: "Darlene Robertson", type: "Traditional", startDate: "Mar 4, 2021", amount: 300, status: true },
    { name: "Darlene Robertson", type: "Traditional", startDate: "Mar 4, 2021", amount: 200, status: false }]

  constructor() { }

  ngOnInit(): void {
  }


}
