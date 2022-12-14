import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Team } from '../models/Team';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  constructor() { }

  @Output()
  moveTeam = new EventEmitter<any>();

  @Input()
  groups!: Team[][];

  ngOnInit(): void {
    this.initGroup();
  }

  initGroup() {
    this.groups = [];
    for(let i=0; i < 8; i++) {
      this.groups[i] = [
        {name: 'Nome', img: ''},
        {name: 'Nome', img: ''},
        {name: 'Nome', img: ''},
        {name: 'Nome', img: ''},
      ]
    }
  }

  drop(event: any, index: number) {
    moveItemInArray(this.groups[index], event.previousIndex, event.currentIndex);
    this.moveTeam.emit(this.groups);
  }
}
