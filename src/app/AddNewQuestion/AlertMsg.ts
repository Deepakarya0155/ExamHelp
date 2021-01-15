import {Component, Inject} from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector:'AlertMsg',
    template:`
       <mat-dialog-content class="mat-typography">
        {{data}}
       </mat-dialog-content>
       <mat-dialog-actions align="end"> 
       <button mat-button mat-dialog-close>OK</button>
       </mat-dialog-actions>
    `
})
export class  AlertMsg{

    constructor(@Inject(MAT_DIALOG_DATA) public data:any){}

}