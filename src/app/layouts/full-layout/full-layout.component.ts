import { AfterViewChecked, ApplicationRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { interval } from 'rxjs';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit, AfterViewChecked {

  isOffline = false

  constructor(
    private router: Router,
    private swUpdate: SwUpdate,
    private swPush: SwPush,
    private appRef: ApplicationRef,
    ) {
    setTimeout(() => {
      router.events.subscribe((val: any) => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      });
    })
  }

  ngOnInit(): void {
    this.isOffline = !navigator.onLine;
    this.autoCheckForUpdate();
    this.onUpdateVersion();
  }

  ngAfterViewChecked() {
    this.isOffline = !navigator.onLine;
  }

  onUpdateVersion() {
    if (!this.swUpdate.isEnabled) {
      console.log('Not enable to update');
      return;
    }
    this.swUpdate.versionUpdates.subscribe((event: any) => {
      console.log(`current`, event.current, `available`, event.available);
      if (
        confirm(
          'Phiên bản mới đã sẵn sàng, hãy đồng ý để cập nhật phiên bản mới ngay!!'
        )
      ) {
        this.swUpdate.activateUpdate().then(() => location.reload());
      }
    });
    this.swUpdate.versionUpdates.subscribe((event: any) => {
      console.log(`current`, event.previous, `available`, event.current);
    });
  }

  autoCheckForUpdate() {
    this.appRef.isStable.subscribe((isStable: any) => {
      if (!isStable) {
        const timeInterval = interval(8 * 60 * 60 * 1000);
        // const timeInterval = interval(2000);
        timeInterval.subscribe(() => {
          this.swUpdate.checkForUpdate().then(() => {
            console.log('auto check for update');
            this.onUpdateVersion();
            location.reload();
          });
        });
      }
    });
  }
}
