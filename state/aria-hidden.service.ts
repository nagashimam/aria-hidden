import { Injectable } from '@angular/core';
import { AriaHiddenStore } from './aria-hidden.store';

@Injectable({ providedIn: 'root' })
export class AriaHiddenService {
  constructor(private ariaHiddenStore: AriaHiddenStore) {}

  hide() {
    this.ariaHiddenStore.update((_) => ({
      hidden: true,
    }));
  }

  show() {
    this.ariaHiddenStore.update((_) => ({
      hidden: false,
    }));
  }
}
