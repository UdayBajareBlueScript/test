import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomizationComponent } from './customization/customization.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule,Routes} from '@angular/router';
import { UpdateComponent } from './update/update.component'
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { AuthInterceptor } from './user/AuthInterceptor';
import { PackageListComponent } from './package-list/package-list.component';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { DealsComponent } from './deals/deals.component';
import { PackageComponent } from './package/package.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SiteImagesComponent } from './site-images/site-images.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const route:Routes=[
  {path: 'LandingPage', component: LandingPageComponent},
  {path:'customPackage',component: CustomizationComponent},
  {path:'LoginPage',component: UserRegistrationComponent},
  {path:'updatePage',component: UpdateComponent},
  {path:'',redirectTo:'/LandingPage',pathMatch:'full'},
  {path:'HomePage',component: HomePageComponent},
  {path:"deals",component:DealsComponent},
  {path:"package",component:PackageComponent},
  {path:"packageList",component:PackageListComponent},
  {path:"uploadProduct",component:AddProductComponent},
  {path:"productDetails",component:ProductDetailsComponent}
] 
  

@NgModule({
  declarations: [
    AppComponent, 
    CustomizationComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    UpdateComponent,
    UserRegistrationComponent,
    PackageListComponent,
    PackageDetailsComponent,
    HomePageComponent,
    DealsComponent,
    PackageComponent,
    AddProductComponent,
    SiteImagesComponent,
    ProductDetailsComponent

  ],
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    MatSliderModule,
    CarouselModule ,
    OwlModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(route)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }