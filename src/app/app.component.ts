import { Component } from '@angular/core';
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
  public appPages = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
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
    const menuRoutes = ['home', 'chats'];
    return menuRoutes.includes(route);
  }

  //returns the string name of an icon if the path matches a key
  getIcon(path: string): string {
    const icons = {
      //current icons, feel free to add any for your routes
      home: 'home',
      chats: 'chatbubbles',
      list: 'list'
    };
    let icon;
    for (let prop in icons) {
      console.log('prop', prop);
      console.log('str', path);

      if (path == prop) {
        icon = icons[prop];
        console.log('match found: ', icon);
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
