import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isFixed = true;
  currentFixed: any;
  isShow = true;
  currentShow: any;
  isPopup = true;
  formPopup: any;

  @HostListener('window:scroll', ['$event'])

  scrollHandler(event) {

    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      this.currentFixed = { fixednav: this.isFixed }
    } else
      this.currentFixed = { fixednav: !this.isFixed }
  }

  infor = {
    location: '221B Baker Stress, London',
    email: 'newfreshtravel@support.com',
    phoneNumber: '08 335 1769',
    language: 'EN'
  }


  showNavbar() {
    this.currentShow = { active: this.isShow };
    this.isShow = !this.isShow;
  }


  openCloseForm() {
    this.formPopup = { formactive: this.isPopup };
    this.isPopup = !this.isPopup;
  }


  constructor() {

  }
  ngOnInit() { }

}
