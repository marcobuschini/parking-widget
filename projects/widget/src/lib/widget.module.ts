import { NgModule, ModuleWithProviders } from '@angular/core';
import { WidgetComponent } from './widget.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [WidgetComponent],
  exports: [WidgetComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class WidgetModule {
  static forRoot(): ModuleWithProviders<WidgetModule> {
    return {
      ngModule: WidgetModule,
      providers: [TranslateService]
    } as ModuleWithProviders<WidgetModule>;
  }
}

/**
 * This function loads the widget translation files from the deployment directory.
 *
 * @param http the HttpClient to load the assets from.
 */
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/widget/i18n/', '.json');
}
