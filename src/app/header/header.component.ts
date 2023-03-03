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
    displayHeader: boolean = this.updateDisplay();
    displayMenu: boolean = false;
    menuImage: string = 'assets/images/icons/menu.svg';
    constructor(private router: Router) {}

    ngOnInit(): void {}

    updateDisplay() {
        return !this.onTopOfPage || this.hoveredHeader;
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        if (window.pageYOffset > 0) {
            this.onTopOfPage = false;
        } else {
            this.onTopOfPage = true;
        }
    }

    onMouseEnter() {
        this.hoveredHeader = true;
    }

    onMouseLeave() {
        this.hoveredHeader = false;
    }

    homePage() {
        this.router.navigateByUrl('/');
    }

    toggleMenu() {
        this.displayMenu = !this.displayMenu;
        if (this.displayMenu) {
            this.menuImage = 'assets/images/icons/close.svg';
        } else {
            this.menuImage = 'assets/images/icons/menu.svg';
        }
    }
}
