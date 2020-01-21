import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [`
  .footer {
  position:fixed;
  bottom: 0px;
  width: 110%
  height: 5%
  line-height: 30px;
  background-color: #606A75;
  text-align: center;
  color: black;  
  }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
