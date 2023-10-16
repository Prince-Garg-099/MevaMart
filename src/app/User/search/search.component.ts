import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  SearchResult:undefined;
  constructor(private activeRoute:ActivatedRoute,private productservice:UserserviceService,private route :Router) { }

  ngOnInit(): void {

    let query = this.activeRoute.snapshot.paramMap.get('query')
    this.route.navigate([`search/${query}`]);
  
    console.warn(query);
    query && this.productservice.searchProduct(query).subscribe((res)=>{
      this.SearchResult  = res;
      console.log(this.SearchResult)
      
    })
  }

}
