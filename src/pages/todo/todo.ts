import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {

  // Facebook APIs
  user: any;
  userReady: boolean = false;
  page_data: any;
  pageReady: boolean = false;
  comment_data: any;

  constructor(
    public navCtrl: NavController,
    public fb: Facebook,
    public nativeStorage: NativeStorage
  ) { }

  ionViewCanEnter(){
    this.nativeStorage.getItem('user')
    .then((data) => {
      this.user = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        picture: data.picture
      };
      let params = new Array<string>();
      let comment = ["user_posts",];
      this.getPageData(params,comment,this.user.id);
      this.getPageData(params,comment,"1424494597829737_2073222612956929");
      this.userReady = true;
    }, (error) => {
      console.log(error);
    });
  }

  getPageData(params,comment,page_id){
    // Feed
    this.fb.api("me/feed", params)
    .then((val) => {
      this.page_data = val.data;
      this.pageReady = true;
    }).catch((err) => {

    })

    // Comments
    this.fb.api("me/feed?fields=comments", comment)
    .then((val) => {
      this.comment_data = val;
      console.log(JSON.stringify({val}));
      this.comment_data = val.data;
      console.log(JSON.stringify(this.comment_data));
      this.pageReady = true;
    }).catch((err) => {
      console.log("error : "+JSON.stringify({err}));
    })
  }

}
