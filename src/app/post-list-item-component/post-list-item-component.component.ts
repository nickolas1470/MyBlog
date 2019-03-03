import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post_title: String;
  @Input() post_content:String;
  @Input() post_loveIts: number;
  @Input() post_created_at: Date;

  constructor() { 
    this.post_created_at= new Date();
  }

  getUp(){
    //console.log(this.post_loveIts);
    this.post_loveIts++;
  }

  getDown(){
    //console.log(this.post_loveIts);
    this.post_loveIts--;
  }

  getColor(){
    if(this.post_loveIts>0){
      return 'green';
    }
    else if(this.post_loveIts<0){
      return 'red';
    }
  }

  ngOnInit() {
  }

  
  

}
