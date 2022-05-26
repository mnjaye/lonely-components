import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss']
})


export class SecondComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

const routes = [
  {
    path : '' , component : SecondComponentComponent,
    children :[
      {
       path : 'test' , Component : TestComponent
      }
    ]
  }
]
