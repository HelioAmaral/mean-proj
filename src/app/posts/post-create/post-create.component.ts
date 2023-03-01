import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  //property to bind ngModule (2 way binding)
  addedValue = '';

  //property that will store the new post value
  newPost = '';

  //method that is called once the button is clicked
  onAddPost(){
    this.newPost = this.addedValue;
  }
}
