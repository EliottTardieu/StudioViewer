import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NbMediaBreakpointsService,
  NbMenuItem,
  NbMenuService,
  NbSearchService,
  NbSidebarService,
  NbThemeService
} from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {environment} from "../../../../environments/environment";
import {MENU_ITEMS} from "../../../pages/pages-menu";
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  title: string;
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  constSearchValues: NbMenuItem[];
  searchValues: string;
  searchValue: string;

  themes = [
    {
      value: 'default',
      name: 'Clair',
    },
    {
      value: 'dark',
      name: 'Sombre',
    },
    /*{
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },*/
  ];

  currentTheme = 'dark';

  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserData,
              public router: Router,
              private layoutService: LayoutService,
              private searchService: NbSearchService,
              private breakpointService: NbMediaBreakpointsService) {
    this.title = environment.header.variable;
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    this.initSearch();

    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => this.user = users.nick);

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  initSearch() {
    this.searchValue = '';

    this.constSearchValues = MENU_ITEMS.filter(it => !it.children);
    if(MENU_ITEMS.some(it => it.children)) {
      MENU_ITEMS.filter(it => it.children).forEach(it => {
        this.constSearchValues.push(...it.children);
      });
    }
    this.searchValues = this.constSearchValues.map(it => it.title).toString();
    this.searchService.onSearchInput().subscribe((data: any) => {
      const listItems: Array<string> = this.filter(data.term);
      this.searchValue = listItems[0];
      this.searchValues = listItems.toString();
    });

    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        if(this.constSearchValues.some(it => it.title === data.term)) {
          const item = this.constSearchValues.filter((it) => it.title === data.term)[0];
          this.router.navigate([item.link]);
        } else {
          const item = this.constSearchValues.filter((it) => it.title === this.searchValue)[0];
          this.router.navigate([item.link]);
        }
        this.searchValue = '';
        this.searchValues = this.constSearchValues.map(it => it.title).toString();
      });
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.constSearchValues.map(it => it.title).filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
}
