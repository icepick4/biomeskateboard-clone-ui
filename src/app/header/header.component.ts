import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    hoveredHeader: boolean = false;
    onTopOfPage: boolean = true;
    displayHeader: boolean = this.hoveredHeader || this.onTopOfPage;
    constructor(private router: Router) {}

    ngOnInit(): void {}

    updateDisplay() {
        this.displayHeader = !this.onTopOfPage || this.hoveredHeader;
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        if (window.pageYOffset > 0) {
            this.onTopOfPage = false;
        } else {
            this.onTopOfPage = true;
        }
        this.updateDisplay();
    }

    onMouseEnter() {
        this.hoveredHeader = true;
        this.updateDisplay();
    }

    onMouseLeave() {
        this.hoveredHeader = false;
        this.updateDisplay();
    }

    homePage() {
        this.router.navigateByUrl('/');
    }
}
