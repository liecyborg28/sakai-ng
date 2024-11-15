import { NgModule } from '@angular/core';
import {
    CommonModule,
    HashLocationStrategy,
    LocationStrategy,
    PathLocationStrategy,
} from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { DialogService } from 'primeng/dynamicdialog';

// custom services
import { DialogWrapperModule } from './@core/modules/dialog-wrapper/dialog-wrapper.module';
import { ToastWrapperModule } from './@core/modules/toast-wrapper/toast-wrapper.module';
import { PrimeNgModule } from './@core/modules/prime-ng/prime-ng.module';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        DialogWrapperModule,
        PrimeNgModule,
        ToastWrapperModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService,
        CustomerService,
        EventService,
        IconService,
        NodeService,
        PhotoService,
        ProductService,
        // core
        DialogService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
