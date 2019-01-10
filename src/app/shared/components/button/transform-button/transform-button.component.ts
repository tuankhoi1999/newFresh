import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transform-button',
  templateUrl: './transform-button.component.html',
  styleUrls: ['./transform-button.component.scss']
})
export class TransformButtonComponent implements OnInit {
  isShow = true;
  currentShow: any;
  transformBtn() {
    this.currentShow = { active: this.isShow };
    this.isShow = !this.isShow;
  }
  constructor() { }

  ngOnInit() {
  }

}
