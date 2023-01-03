import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../Data.service';
import { ResultListGetterService } from '../result-list-getter.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() data: any = [];
  @Input() searchTerm: string = '';
  page: number = 1;


 constructor(private dataservice: DataService, private getter: ResultListGetterService) {
   this.receiveData();
   
 }

 ngOnInit() {
   
 }


 receiveData() {
   this.data = this.dataservice.receiveData();
 }

 addPages() {
   if(this.data.has_more) {
     this.getter.getResultList(this.searchTerm, this.page + 1).subscribe((data: any) => {
       this.page += 1;
       this.data.has_more = data.has_more;
       this.data.data.push(...data.data);
       console.log(this.page);
       console.log(this.data.has_more);
       console.log(data);
     });
   }
 }
}
