import { Component, OnInit } from '@angular/core';
import { Building } from '../classes/building';
import { BuildingService } from './services/building.service';


@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  buildings: Building[];

  getBuildings(): void {
    this.buildingService.getBuildings()
      .subscribe(buildings => this.buildings = buildings);
  }


  constructor(private buildingService: BuildingService) {

  }

  ngOnInit() {
    this.getBuildings();
  }
}