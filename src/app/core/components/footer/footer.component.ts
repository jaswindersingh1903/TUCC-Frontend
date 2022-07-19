import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor() { }
  dockBasicItems!: MenuItem[];
  ngOnInit(): void {
    this.dockBasicItems = [
      {
          label: 'Catalog',
          icon: "https://cdn-icons-png.flaticon.com/512/3486/3486578.png",
          routerLink: 'catalog'
      },
      {
          label: 'App Store',
          icon: "assets/showcase/images/dock/appstore.svg"
      },
      {
          label: 'Photos',
          icon: "assets/showcase/images/dock/photos.svg"
      },
      {
          label: 'Trash',
          icon: "assets/showcase/images/dock/trash.png"
      }
  ];

  }

}
