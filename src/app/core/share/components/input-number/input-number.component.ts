import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CartStoreService } from '../../stores/cart-store.service';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {
  @Input() num = 1;
  @Output() numChange = new EventEmitter<number>();
  constructor(
  ) { }

  ngOnInit(): void {
  }
  sum() {
    this.num = this.num + 1;
    this.numChange.emit(this.num);
  }
  minus() {
    this.num = this.num - 1;
    this.numChange.emit(this.num);
  }
}
