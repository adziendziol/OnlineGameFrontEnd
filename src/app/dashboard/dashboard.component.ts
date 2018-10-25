import { Component, OnInit } from '@angular/core';
import { Building } from '../classes/building';
import { BuildingService } from '../building/services/building.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  buildings: Building[] = [];

  constructor(private buildingservice: BuildingService) { }

  ngOnInit() {
    this.getBuildings()
  }

  getBuildings(): void {
    this.buildingservice.getBuildings()
      .subscribe(buildings => this.buildings = buildings.slice(1, 5));

  }

}
