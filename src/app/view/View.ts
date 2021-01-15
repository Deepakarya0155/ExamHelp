import {Component, ElementRef, OnDestroy,EventEmitter,Output} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {QuestionAndOptionDO} from './QuestionAndOptionDO'
import {AngularFireDatabase} from '@angular/fire/database'
import { Subscription } from 'rxjs';



@Component({
    selector:'view',
    templateUrl:"./view.html",
    styles:[`table{width:100%}`]
})
export class View implements OnDestroy{

    subscription:Subscription

    

    @Output() totalAnsEmiter=new EventEmitter<number>();

    columnlist=["Question","Ans"]
    Qsarray:Array<QuestionAndOptionDO>=[];

    Ds=new MatTableDataSource();
    constructor(public db:AngularFireDatabase){

        this.subscription=db.list("Exam").valueChanges().subscribe((res:any)=>{
            this.Qsarray=[];
            res.map(item=>{
                this.Qsarray.push( new QuestionAndOptionDO(item.question,item.Ans))
            })
            this.Ds.data=this.Qsarray;
            this.totalAnsEmiter.emit(this.Qsarray.length);
        });
    }

    serach(a:HTMLInputElement){
            this.Ds.filter=a.value
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}