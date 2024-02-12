import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { AppComponent } from './app.component';
import { DataViewModule } from 'primeng/dataview';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PasswordModule } from 'primeng/password';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { Divider, DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { CardComponent } from './card/card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProdctComponent } from './pages/prodct/prodct.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { LoginComponent } from './pages/login/login.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ProdctComponent,
    CheckOutComponent,
    LoginComponent,
    UserDashboardComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    CardModule,
    HttpClientModule,
    DropdownModule,
    ButtonModule,
    DialogModule,
    TabViewModule,
    ConfirmDialogModule,
    DividerModule,
    FieldsetModule,
    SplitterModule,
    SidebarModule,
    TooltipModule,
    SplitButtonModule,
    DataViewModule,
    TriStateCheckboxModule,
    RadioButtonModule,
    PasswordModule,
    MultiSelectModule,
    InputTextModule,
    InputMaskModule,
    InputGroupModule,
    InputGroupAddonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    MenubarModule,
    CardModule,
    DialogModule,
    DropdownModule,
    ButtonModule,
    TabViewModule,
    ConfirmDialogModule,
    DividerModule,
    FieldsetModule,
    SplitterModule,
    SidebarModule,
    TooltipModule,
    SplitButtonModule,
    DataViewModule,
    TriStateCheckboxModule,
    RadioButtonModule,
    PasswordModule,
    MultiSelectModule,
    InputTextModule,
    InputMaskModule,
    InputGroupModule,
    InputGroupAddonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
