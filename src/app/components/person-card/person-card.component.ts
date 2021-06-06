import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
})
export class PersonCardComponent implements OnInit {
  constructor() {}
  @Input() profilePic = '';
  @Input() name = '';
  @Input() character = '';
  @Input() id = '';

  ngOnInit(): void {}
}
