import { AngularFirestore } from '@angular/fire/firestore';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  items: Observable<any[]>;
  public appPages = [];
  private menuRoutes = ['home', 'chats', 'chat'];
  private menuIcons = {
    //current icons, feel free to add any for your routes
    home: 'home',
    chats: 'chatbubbles',
    chat: 'contact',
    list: 'list'
  };

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    db: AngularFirestore
  ) {
    this.items = db.collection('items').valueChanges();
    this.initializeApp();
  }
  getAppPages() {
    routes.forEach(route => {
      if (this.getMenuRoutes(route.path)) {
        this.appPages.push({
          title: route.path,
          url: '/' + route.path,
          icon: this.getIcon(route.path)
        });
      }
    });
  }

  //returns true if the given route should be in the menu routes
  getMenuRoutes(route: string): boolean {
    return this.menuRoutes.includes(route);
  }

  //returns the string name of an icon if the path matches a key
  getIcon(path: string): string {
    let icon;
    for (let prop in this.menuIcons) {
      if (path == prop) {
        icon = this.menuIcons[prop];
      }
    }
    return icon;
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.getAppPages();
    });
  }
}
