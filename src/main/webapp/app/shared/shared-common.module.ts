import { NgModule } from '@angular/core';

import { BackendJhipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [BackendJhipsterSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [BackendJhipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class BackendJhipsterSharedCommonModule {}
