import { Component, OnInit } from '@angular/core';
import { Transformation } from './model/transformation';
import { TransformationService } from './transformation.service';

@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.scss']
})
export class TransformationComponent implements OnInit {

  transformations: Transformation[] = [];

  constructor(private transformationService: TransformationService) { }

  ngOnInit(): void {
    this.getTransformations();  
  }

  getTransformations() {
    this.transformationService.getTransformations()
    .subscribe(transformations => this.transformations = transformations);
  }
}
