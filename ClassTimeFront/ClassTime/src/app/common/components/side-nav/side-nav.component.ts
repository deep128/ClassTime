import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.less']
})
export class SideNavComponent implements OnInit {

  public menuList: {name: string, link: string, selected: boolean}[] = [];

  constructor() {

    this.menuList = [
      {name: 'Dashboard', link: '/productOwner', selected: false},
      {name: 'Schools', link: '/productOwner/schools', selected: false}
    ];

   }

  ngOnInit() {
  }

}
