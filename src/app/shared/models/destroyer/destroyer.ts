import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * Abstract class that we can use
 * inside angular component or service for
 * provide single behavior for unsubscribe from subscriptions
 */
@Injectable()
export abstract class Destroyer implements OnDestroy {
  static readonly destroyAll$ = new Subject<void>();

  protected readonly destroy$ = new Subject<void>();

  protected constructor() {
    Destroyer.destroyAll$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.ngOnDestroy());
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
