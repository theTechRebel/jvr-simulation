import {Component, Input} from '@angular/core';

@Component({
    selector:'userlist-modal',
    template:`
            <div id="userlist-modal" class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">{{title}}</h4>
                        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                        </div>
                        <div class="modal-body">
                        <ng-content></ng-content>
                        </div>
                    </div>
                </div>
            </div>
             `,
    styles:[``]
})

export class UserListModalComponent{
    @Input() title: string;
    
}