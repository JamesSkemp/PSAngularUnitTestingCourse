import { inject, TestBed } from "@angular/core/testing";
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('HeroService', () => {
    let mockMessageService;
    let httpTestingController: HttpTestingController;
    let service: HeroService;

    beforeEach(() => {
        mockMessageService = jasmine.createSpyObj(['add']);

        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [
                HeroService,
                {provide: MessageService, useValue: mockMessageService}
            ]
        });

        //httpTestingController = TestBed.inject(HttpTestingController);
        // Example of how to get a handle to a service.
        //let messageService = TestBed.inject(MessageService);
        //service = TestBed.inject(HeroService);
    });

    describe('getHero', () => {
        xit('should call get with the correct URL (method 1)', () => {
            // similar to method 1, but uncomment and use items above
            // TODO requires a newer version of Angular for the inject usages on TestBed.
        });
        it('should call get with the correct URL (method 2)', inject([HeroService, HttpTestingController], (heroService: HeroService, controller: HttpTestingController) => {
            heroService.getHero(4).subscribe(hero => {
                // Optional.
                expect(hero.id).toBe(4);
            });

            const request = controller.expectOne('api/heroes/4');

            request.flush({ id: 4, name: 'SuperDude', strength: 100});
            // Optional.
            expect(request.request.method).toBe('GET');
            // Makes sure it does exactly the calls we're expecting.
            controller.verify();
        }));
    });
});
