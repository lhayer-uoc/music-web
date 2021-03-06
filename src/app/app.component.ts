import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { AngularFirestore } from "@angular/fire/compat/firestore";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'music-web';
  constructor
  (private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
    ){
    this.matIconRegistry.addSvgIcon(
      "next-song",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/next-song.svg")
    );
  }
  
}
