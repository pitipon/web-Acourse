import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { NewsService } from './news.service';
import { ProductService } from './shared/product.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { SlideComponent } from './slide/slide.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { AboutComponent } from './about/about.component';
import { StaffComponent } from './staff/staff.component';
import { NewsallComponent } from './newsall/newsall.component';
import { ProductRateComponent } from './product/product-rate.component';
import { MypipePipe } from './shared/mypipe.pipe';
import { ProductFilterPipe } from './product/product-filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    BestsellerComponent,
    NewsComponent,
    LoginComponent,
    SlideComponent,
    ProductComponent,
    ProductDetailComponent,
    AboutComponent,
    StaffComponent,
    NewsallComponent,
    ProductRateComponent,
    MypipePipe,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
        { path: '', component: NewsComponent},
        { path: 'product', component: ProductComponent},
        { path: 'product/:id/product_name/:product_name', component: ProductDetailComponent },
        { path: 'newsall', component: NewsallComponent },
        { path: 'staff', component: StaffComponent },
        { path: 'about', component: AboutComponent },
        { path: '**', redirectTo: '' } //other link redirect to default page
    ], {useHash: true}) //useHash for define route only angular not server
  ],
  providers: [Title, NewsService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
