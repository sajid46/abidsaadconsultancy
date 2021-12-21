import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-myservices',
  templateUrl: './myservices.component.html',
  styleUrls: ['./myservices.component.scss']
})
export class MyservicesComponent implements OnInit {
  @Input() srcImage: string = "../../../../assets/img/salestax.png";
  @Input() heading: string = "sas";
  @Input() description: string = "";
  @Input() aLink: string = "";

constructor() { }

  ngOnInit(): void {
  }

}
