import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

type Produkt = {

  title: string
  price: number
  image: string
}



@Component({
  selector: 'app-produkty',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './produkty.component.html',
  styleUrl: './produkty.component.scss'

})
export class ProduktyComponent implements OnInit {


  produkty: Produkt[] = []
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getData().subscribe(kontener => {
      console.log(kontener)
      this.produkty = kontener
    })
  }
  getData(): Observable<any> {
    return this.http.get<any>('https://fakestoreapi.com/products');
  }

}
