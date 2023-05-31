import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ngx-app-studio-viewer',
  templateUrl: './studio-viewer.component.html',
  styleUrls: ['./studio-viewer.component.scss']
})
export class StudioViewerComponent implements OnInit {

  public studioId: string = '';

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      this.studioId = map.get('id') ?? 'undefined';
    })
  }

}
