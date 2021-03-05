import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface AriaHiddenState {
  hidden: boolean;
}

export function createInitialState(): AriaHiddenState {
  return {
    hidden: false,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'aria-hidden' })
export class AriaHiddenStore extends Store<AriaHiddenState> {
  constructor() {
    super(createInitialState());
  }
}
