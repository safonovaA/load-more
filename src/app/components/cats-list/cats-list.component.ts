import { Component, OnInit, ChangeDetectorRef, ViewChildren, QueryList, AfterViewInit, ElementRef } from '@angular/core';
import { Cat } from 'src/app/models/cats';
import { CatsService } from 'src/app/services/cats.service';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.scss']
})
export class CatsListComponent implements OnInit, AfterViewInit {
  public PAGE_SIZE = 4;
  public cats: Cat[] = [];
  public page = 0;
  public loading = false;
  public shouldSetFocus = false;
  public isFakeClick = false;
  @ViewChildren('cat') public catElements: QueryList<ElementRef>;

  constructor(
    private catsService: CatsService,
    private cdRef: ChangeDetectorRef,
    ) { }

  ngOnInit(): void {
    this.loadCats(false);
  }

  ngAfterViewInit() {
    this.catElements.changes.subscribe((cats) => {
      const firstLoadedElement = cats._results[(this.page - 1) * this.PAGE_SIZE].nativeElement;
      if (this.shouldSetFocus || this.isFakeClick) {
        setTimeout(() => {
          firstLoadedElement.focus();
        }, 0);
      }
    });
  }

  public loadCats(shouldSetFocus: boolean) {
    this.page++;
    this.loading = true;
    this.shouldSetFocus = shouldSetFocus;

    this.catsService.getCats(this.page.toString()).subscribe((cats) => {
      setTimeout(() => {
        this.loading = false;
        this.cats = this.cats.concat(cats);
        this.cdRef.markForCheck();
      }, 1200);
    });
  }

  public handleMousedown(event: MouseEvent) {
    this.isFakeClick = this.isFakeMousedown(event);
  }

  private isFakeMousedown(event: MouseEvent) {
    return event.buttons === 0;
  }
}
