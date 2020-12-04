import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  isOpen: boolean;

  @Input() labelTemplate: TemplateRef<any>;
  @Input() optionsTemplate: TemplateRef<any>;

  constructor() {
    this.isOpen = false;
  }

  ngOnInit(): void {
  }

  openCloseOptions() {
    this.isOpen = !this.isOpen;
  }
}
