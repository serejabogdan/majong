import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-rect',
    templateUrl: './rect.component.html',
    styleUrls: ['./rect.component.css']
})
export class RectComponent implements OnInit {
    @Input() inputItem: number;
    constructor() { }

    ngOnInit() {
    }

}
