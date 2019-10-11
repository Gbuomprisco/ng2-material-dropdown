import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Ng2DropdownModule } from '../../src/modules/ng2-dropdown.module';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [Ng2DropdownModule]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
