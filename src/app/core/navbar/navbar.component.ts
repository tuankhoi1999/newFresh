import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isShow = true;
  currentShow: any;
  showNavbar() {
    this.currentShow = { active: this.isShow};
    this.isShow = !this.isShow;
  }

  constructor() {

  }
  ngOnInit() { }

}
