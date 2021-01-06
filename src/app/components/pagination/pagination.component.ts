import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  list : any;
  curPage : any;
  pageSize : any;
  tutorials : any;
  constructor(private tutorialService: TutorialService) { 
    this.list = [
      {name:'Prashobh',age:'25'},
      {name:'Abraham',age:'35'},
      {name:'Anil',age:'40'},
      {name:'Sam',age:'40'},
      {name:'Philip',age:'40'},
      {name:'Bal',age:'40'},
      {name:'Anu',age:'20'}
    ],
    this.curPage = 1;
    this.pageSize = 3; // any page size you want 
  }
  
  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe(
        data => {
          this.tutorials = data;
        },
        error => {
          console.log(error);
        });
  }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

}
