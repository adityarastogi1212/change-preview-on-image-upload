import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imageupload';
  url="https://avatars.githubusercontent.com/u/56511496?s=400&u=79abd025d17090bc11ba7a49c5b3c551b4b9c172&v=4";

  selectFile(event) {
    if (event.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {
        this.url = event.target.result
      }
    }
  }
}
