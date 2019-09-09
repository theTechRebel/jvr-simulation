import {Directive, Inject, ElementRef, OnInit} from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit{
    private el: HTMLElement;

    constructor(el:ElementRef, @Inject(JQ_TOKEN) private $:any){
        this.el = el.nativeElement;
    }
    ngOnInit(){
        this.el.addEventListener('click',e=>{
            this.$('#simple-modal').modal({});
        })
    }
}