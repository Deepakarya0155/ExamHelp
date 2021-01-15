import {Component} from '@angular/core'
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../DataService';
import { AlertMsg } from './AlertMsg';


@Component({
    selector:"AddNewQuestion",
    templateUrl:"./AddNewQuestion.html",
    styles:[`
    `]
})
export class AddNewQuestion{

    myForm:FormGroup;

    

    constructor(public dservice:DataService,public fb:FormBuilder,public dialog:MatDialog,public db:AngularFireDatabase){
        // dservice.screen_size
        this.myForm=fb.group({
            question:["",[Validators.required,Validators.minLength(5)]],
            Ans:["",[Validators.required,Validators.minLength(2)]]})

    }
    add(data){
       if(this.myForm.valid){
        //    console.log(data);
            this.db.list("Exam").push(data).then(res=>console.log("success")).catch(exp=>console.log(exp))
       }else{
           this.dialog.open(AlertMsg,{data:"Please Enter Valid Input"});
       }
    }
}