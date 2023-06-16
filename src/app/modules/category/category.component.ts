import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryTrainings } from './model/categoryTrainings';
import { Subscription, filter } from 'rxjs';
import { CategoryService } from './category.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

  categoryTrainings?: CategoryTrainings;
  private sub!: Subscription;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => this.getCategoryWithTrainings(0, 10));

    this.getCategoryWithTrainings(0, 10);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getCategoryWithTrainings(page: number, size: number) {
    let slug = this.route.snapshot.params['slug'];
    this.categoryService.getCategoryWithTrainings(slug, page, size)
      .subscribe(categoryTrainings => this.categoryTrainings = categoryTrainings);
  }

  onPageChange(event: PageEvent) {
    this.getCategoryWithTrainings(event.pageIndex, event.pageSize);
  }
}
