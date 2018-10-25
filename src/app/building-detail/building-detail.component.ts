import { Component, OnInit, Input } from '@angular/core';
import {Building} from '../classes/building';
import { BuildingService } from '../building/services/building.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  styleUrls: ['./building-detail.component.css',
  '../app.component.css']
})
export class BuildingDetailComponent implements OnInit {

  building: Building;
  
  constructor( 
    private buildingService: BuildingService,
    private activatedRoute: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    // this.getBuilding()
  }

/*   getBuilding(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.buildingService.getBuilding(id).subscribe(building => this.building = building);
  } */

  goBack(): void{
    this.location.back();
  }
}
