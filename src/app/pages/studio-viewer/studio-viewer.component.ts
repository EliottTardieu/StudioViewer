import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../../environments/environment";
import {GalleryItem, ImageItem} from "ng-gallery";

@Component({
  selector: 'ngx-app-studio-viewer',
  templateUrl: './studio-viewer.component.html',
  styleUrls: ['./studio-viewer.component.scss']
})
export class StudioViewerComponent implements OnInit {

  public studioId: string = '';
  public background: string = '../../../assets/images/studios/default_background.jpeg';
  public title: string = 'Studio';
  public costs: string = '';
  public payments: string = '';

  public pageTitle: string = '';
  public pageContent: string = '';
  public pageVehicle: string = '';
  public pageWC: string = '';

  public photos: GalleryItem[] = [];

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      this.studioId = map.get('id') ?? 'undefined';
      if(this.studioId === '1') {
        this.photos = [];
        this.background = '../../../assets/images/studios/220_background.jpeg';
        this.title = 'Studio 220';
        this.costs = environment.studios["220"].cost;
        this.payments = environment.studios["220"].payments;
        this.pageTitle = environment.studios["220"].title;
        this.pageContent = environment.studios["220"].content;
        this.pageVehicle = environment.studios["220"].vehicle;
        this.pageWC = environment.studios["220"].WC;
        for (let i = 1; i <= 21; i++) {
          this.photos.push(new ImageItem({ src: '../../../assets/images/studios/220_' + i + '.jpeg', thumb: '../../../assets/images/studios/220_' + i + '.jpeg' }));
        }
      } else if(this.studioId === '2') {
        this.photos = [];
        this.background = '../../../assets/images/studios/3_background.jpeg';
        this.title = 'Studio 3';
        this.costs = environment.studios["3"].cost;
        this.payments = environment.studios["3"].payments;
        this.pageTitle = environment.studios["3"].title;
        this.pageContent = environment.studios["3"].content;
        this.pageVehicle = environment.studios["3"].vehicle;
        this.pageWC = environment.studios["3"].WC;
        for (let i = 1; i <= 24; i++) {
          this.photos.push(new ImageItem({ src: '../../../assets/images/studios/3_' + i + '.jpeg', thumb: '../../../assets/images/studios/220_' + i + '.jpeg' }));
        }
      }
    })
  }

  protected readonly environment = environment;
}
