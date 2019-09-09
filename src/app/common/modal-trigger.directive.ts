import {Directive, Inject, ElementRef, OnInit} from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';
import { HomeService } from '../home/services/home.service';

@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit{

    constructor( @Inject(JQ_TOKEN) private $:any, private homeService:HomeService){
    }
    ngOnInit(){
        const nodes1 = document.querySelector("[data-new-lecture]");
        nodes1.addEventListener('click',e=>{
            this.$('#userlist-modal').modal({});
        });
    }
}