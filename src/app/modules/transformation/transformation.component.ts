import { Component, OnInit } from '@angular/core';
import { Transformation } from './model/transformation';
import { TransformationService } from './transformation.service';
import { Page } from '../common/model/page';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.scss']
})
export class TransformationComponent implements OnInit {

  page?: Page<Transformation>; 
 
  constructor(private transformationService: TransformationService) { }

  ngOnInit(): void {
    this.getTransformations();  
  }

  getTransformations() {
    this.getTransformationPage(0, 10);
  }
  
  onPageEvent(event: PageEvent){
    this.getTransformationPage(event.pageIndex, event.pageSize);
  }
  
  private getTransformationPage(page: number, size: number) {
    this.transformationService.getTransformations(page, size)
      .subscribe(page => this.page = page);
  }

  handleImageError(event: any) {
    event.target.src = '/assets/image-placeholder.png';
  }
}
