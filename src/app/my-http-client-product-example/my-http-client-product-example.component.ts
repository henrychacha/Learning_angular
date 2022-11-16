import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-http-client-product-example',
  templateUrl: './my-http-client-product-example.component.html',
  styleUrls: ['./my-http-client-product-example.component.sass'],
})
export class MyHttpClientProductExampleComponent implements OnInit {
  // product list
  private productList:object[] = [];
  constructor(private http: HttpClient) {}

  doServe() {
    // console.log(this.http)
    this.http
      .get('https://www.fastmock.site/mock/f9978dfb07c199773f7beac1f2150263/api-test_mock/api/httpProduct')
      .subscribe((res:any) => {
        console.log(res);
        this.productList = res.data;
      });
    
  }
  ngOnInit(): void {}
}
