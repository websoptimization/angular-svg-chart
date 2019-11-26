import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public xLabels : Array<any> = [];
  public bars : Array<any> = [];
  public yLabels : Array<any> = [];
  public xSize:any;
  public ySize:any;
  public xMainLabel:any;
  public yMainLabel:any;
  
  ngOnInit() {
	//this.xLabels=[{"id":1,"label":'Copper'},{"id":2,"label":'Silver'},{"id":3,"label":'Gold'}];
	this.xLabels=[ 'Copper' , 'Silver', 'Gold' , 'Platinum' ];
	this.bars= [ 8, 12 , 18 , 24 ];
	this.yLabels= [  5 , 10 , 15 , 20 , 25 ];
  }

}
