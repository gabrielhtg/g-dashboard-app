import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainDashboardComponent} from "./main-dashboard/main-dashboard.component";
import {CodeSnippetsComponent} from "./code-snippets/code-snippets.component";
import {UsefullLinksComponent} from "./usefull-links/usefull-links.component";
import {CreateAccountComponent} from "./create-account/create-account.component";
import {LogActivityComponent} from "./log-activity/log-activity.component";
import {AddCodeSnippetsComponent} from "./add-code-snippets/add-code-snippets.component";
import {AddUsefulLinksComponent} from "./add-useful-links/add-useful-links.component";

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: MainDashboardComponent,
    title: 'Main Menu',
    children: [
      {
        path: '',
        component: LogActivityComponent,
      },
      {
        path: 'code-snippets',
        component: CodeSnippetsComponent,
        title: 'Code Snippets'
      },
      {
        path: 'usefull-links',
        component: UsefullLinksComponent,
        title: 'Usefull Links'
      },
      {
        path: 'add-code-snippets',
        component: AddCodeSnippetsComponent,
        title: 'Add Code Snippets'
      },
      {
        path: 'add-useful-links',
        component: AddUsefulLinksComponent,
        title: 'Add Useful Link'
      },
      {
        path: 'edit-useful-links/:id',
        component: AddUsefulLinksComponent,
        title: 'Edit Useful Link'
      },
      {
        path: 'usefull-links/:keywords',
        component: UsefullLinksComponent,
        title: 'Usefull Links'
      },
      {
        path: 'code-snippets/:keywords',
        component: CodeSnippetsComponent,
        title: 'Code Snippets'
      },
    ]
  },
  {
    path: 'create-account',
    component: CreateAccountComponent,
    title: 'Create Account'
  }
];
