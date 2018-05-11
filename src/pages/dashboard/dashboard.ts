import { Component ,ViewChild } from '@angular/core';
import { NavController ,Slides } from 'ionic-angular';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  PieCharts: any; // HighCharts is PieCharts
  ColumnCharts: any; // HighCharts is ColumnCharts
  BarCharts: any; // HighCharts is BarCharts

  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;
  SwipedTabsIndicator :any= null;
  tabs:any=[];

  constructor(public navCtrl: NavController) {
    this.tabs=["page1","page2","page3"];
    
    // HighCharts is PieCharts
    this.PieCharts = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'สรุปงานทั้งหมด'
      },
      xAxis: {
          categories: ['Todo', 'In Progress', 'Done']
      },
      plotOptions: {
          series: {
              allowPointSelect: true
          }
      },
      series: [{
          name: ['is'],
          data: [
            { name: 'Todo', y: 1 },
            { name: 'In Progress', y: 3 },
            { name: 'Done', y: 4 }
          ]
      }]
    }

    // HighCharts is ColumnCharts
    this.ColumnCharts = {
      chart: {
        type: 'column',
      },
      title: {
          text: 'สรุปสถานะการทำงานทั้งหมด'
      },
      xAxis: {
          categories: ['งาน']
      },
      yAxis: {
          title: {
              text: 'จำนวนงาน'
          }
      },
      series: [{
          name: 'งานทั้งหมดที่มีคนทำ',
          data: [1]
      }, {
          name: 'งานทั้งหมดที่กำลังทำอยู่',
          data: [5]
      }, {
          name: 'งานทั้งหมดที่ทำเสร็จแล้ว',
          data: [3]
      }, {
          name: 'งานทั้งหมดที่ทำเสร็จตามเวลา',
          data: [2]
      }, {
          name: 'งานทั้งหมดที่ทำเสร็จล่าช้า',
          data: [4]
      }]
    }

    // HighCharts is BarCharts
    this.BarCharts = {
      chart: {
        type: 'bar'
      },
      title: {
          text: 'สรุปการทำงานทั้งหมดของแต่ละบุคคล'
      },
      xAxis: {
          categories: ['พนักงาน ก.','พนักงาน ข.','พนักงาน ค.','พนักงาน ง.','พนักงาน จ.']
      },
      yAxis: {
          title: {
              text: 'จำนวนงาน'
          }
      },
      series: [{
          name: 'งาน',
          data: [1, 5, 3, 2, 4]
      }]
    }

  }
  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
  }

  selectTab(index) {    
    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0)';
    this.SwipedTabsSlider.slideTo(index, 500);
  }

  updateIndicatorPosition() {
      // this condition is to avoid passing to incorrect index
  	if( this.SwipedTabsSlider.length()> this.SwipedTabsSlider.getActiveIndex()){
  		this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(this.SwipedTabsSlider.getActiveIndex() * 100)+'%,0,0)';
  	}
  }

  animateIndicator($event) {
  	if(this.SwipedTabsIndicator)
   	    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress* (this.SwipedTabsSlider.length()-1))*100) + '%,0,0)';
  }

}
