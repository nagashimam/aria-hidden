import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { AriaHiddenService } from '../../../state/aria-hidden.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  constructor(
    private modalController: ModalController,
    private service: AriaHiddenService
  ) {}

  async ngAfterViewInit() {
    const modal = await this.modalController.create({
      component: ModalPage,
    });
    modal.onDidDismiss().then(() => this.service.show());
    this.service.hide();
    modal.prepend();
  }
}
