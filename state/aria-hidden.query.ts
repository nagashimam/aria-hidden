import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AriaHiddenStore, AriaHiddenState } from './aria-hidden.store';

@Injectable({ providedIn: 'root' })
export class AriaHiddenQuery extends Query<AriaHiddenState> {

  constructor(protected store: AriaHiddenStore) {
    super(store);
  }

}
