import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    hovered: boolean = false;
    onTop: boolean = true;
    display: boolean = this.hovered || this.onTop;
    constructor() {}

    ngOnInit(): void {}

    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        console.log('hovered : ', this.hovered);
        console.log('onTop : ', this.onTop);
        console.log('display : ', this.display);
        if (window.pageYOffset > 0) {
            this.onTop = false;
        } else {
            this.onTop = true;
        }
    }

    onMouseEnter() {
        this.hovered = true;
    }

    onMouseLeave() {
        this.hovered = false;
    }
}
