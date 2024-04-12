import { Component } from '@angular/core';

@Component({
  selector: 'app-sepek',
  standalone: true,
  imports: [],
  templateUrl: './sepek.component.html',
  styleUrl: './sepek.component.scss'
})
export class SepekComponent {
  kurwa = 2137
  gunwo() {
    const kurwa2 = 87
    console.log('GUNWO')
    this.kurwa = this.kurwa - 5
    console.log(this.kurwa)
  }


}
