import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  posts=[
    {
      title: 'Mon premier post',
      content: 'Mon premier post Mon premier post Mon premier post Mon premier post Mon premier post Mon premier post Mon premier post Mon premier post Mon premier post Mon premier post Mon premier post ',
      createdAt: new Date(),
      loveIt: 0
    },
    {
      title: 'Mon deuxième post',
      content: 'Mon deuxième post Mon deuxième post Mon deuxième post Mon deuxième post Mon deuxième post Mon deuxième post Mon deuxième post Mon deuxième post Mon deuxième post ',
      createdAt: new Date(),
      loveIt: 0
    },
    {
      title: 'Mon troisième post',
      content: 'Mon troisième post Mon troisième post Mon troisième post Mon troisième post Mon troisième post ',
      createdAt: new Date(),
      loveIt: 0
    },
    {
      title: 'Mon quatrième post',
      content: 'Mon quatrième post Mon quatrième post',
      createdAt: new Date(),
      loveIt: 0
    },
  ]


}
