import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from '@angular/router/testing';
import { HeroComponent } from "./hero.component";

// shallow - normally don't put that in the describe name
describe('HeroComponent (shallow tests)', () => {
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            // structure like app.module.ts
            declarations: [HeroComponent],
            // required for routerLink; another way to handle this is `schemas: [NO_ERRORS_SCHEMA]`
            imports: [RouterTestingModule]
        });
        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the right hero', () => {
        fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3};
        // not required for this, but may be necessary for shallow integration tests
        fixture.detectChanges();

        expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
    });

    it('should render the hero in an anchor tag', () => {
        fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3};
        // is required in this case
        fixture.detectChanges();

        // nativeElement ~= DOM
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');
    });

    it('should render the hero in an anchor tag (debugElement)', () => {
        fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3};
        // is required in this case
        fixture.detectChanges();

        // debugElement wraps nativeElement
        // query/queryAll are usually used; By.css() ~= jQuery selection
        expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent).toContain('SuperDude');
    });
});
