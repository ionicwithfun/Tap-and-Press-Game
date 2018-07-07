import { Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'app-reset',
    template:`
    <ion-row>
    <ion-col>
    <button ion-button color="danger" small block (click)="onReset('all')">Reset All</button>
    </ion-col>
    <ion-col>
    <button ion-button (click)="onReset('tap')" small color="danger"  block>Reset "Taps"</button>
    </ion-col>
    <ion-col>
    <button ion-button (click)="onReset('press')" small color="danger" block>Reset "Presses"</button>
    </ion-col>
    </ion-row>
    `
})
export class ResetComponent{
    @Output() didReset = new EventEmitter<string>();

    onReset(text:string){
        this.didReset.emit(text);
    }
}