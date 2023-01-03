import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Data.service';
import { ResultListGetterService } from '../result-list-getter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchForm! : FormGroup;
  data: any;
  searchTerm: string = '';
  has_searched: boolean = false;



  constructor(private http : HttpClient, private getter : ResultListGetterService, private dataservice : DataService, private router: Router) {
    this.data = [{
      title: 'test',
    },
    {
      title: 'test2',
    },
    {
      title: 'test3',
    },
    {
      title: 'test4',
    },
    {
      title: 'test5',
    },
    {
      title: 'test6',
    },
    {
      title: 'test7',
    },{
      title: 'test2',
    },
    {
      title: 'test3',
    },
    {
      title: 'test4',
    },
    {
      title: 'test5',
    },
    {
      title: 'test6',
    },
    {
      title: 'test5',
    },
    {
      title: 'test6',
    },
    {
      title: 'test7',
    },{
      title: 'test2',
    },
    {
      title: 'test3',
    },
    {
      title: 'test4',
    },
    {
      title: 'test5',
    },
    {
      title: 'test6',
    },];

    if(!localStorage.getItem('token')) {
      //this.router.navigateByUrl('/login');
    }

   }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchTerm: new FormControl('', [Validators.required]),
    });
  }

  search() {
    this.getter.getResultList(this.searchForm.value.searchTerm).subscribe(data => {
      this.searchTerm = this.searchForm.value.searchTerm;
      console.log(data);
      this.data = data;
      this.dataservice.sendData(data);
    });
  }
  searchtest(){
      this.has_searched = true;
  }

}
