import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ElementRef } from '@angular/core';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { ResponsiveDirective } from './responsive.directive';

describe('ResponsiveDirective', () => {
  it('should create an instance', () => {
    let directive: ResponsiveDirective;
    let mockElementRef: ElementRef;
    let mockBreakpointObserver: jasmine.SpyObj<BreakpointObserver>;
    let breakpointSubject: BehaviorSubject<any>;

    beforeEach(() => {
      // Mock ElementRef with a real div
      mockElementRef = new ElementRef(document.createElement('div'));

      // Use BehaviorSubject to dynamically emit values for BreakpointObserver
      breakpointSubject = new BehaviorSubject({
        breakpoints: {
          [Breakpoints.HandsetPortrait]: false,
          [Breakpoints.WebLandscape]: false,
        },
      });

      // Create a mock BreakpointObserver
      mockBreakpointObserver = jasmine.createSpyObj('BreakpointObserver', ['observe']);
      mockBreakpointObserver.observe.and.returnValue(breakpointSubject.asObservable());

      // Initialize TestBed
      TestBed.configureTestingModule({
        providers: [
          { provide: ElementRef, useValue: mockElementRef },
          { provide: BreakpointObserver, useValue: mockBreakpointObserver },
        ],
      });
    });

    it('should create an instance', () => {
      directive = new ResponsiveDirective(mockElementRef, mockBreakpointObserver);
      expect(directive).toBeTruthy();
    });

    it('should remove "pc" class when in HandsetPortrait mode', fakeAsync(() => {
      directive = new ResponsiveDirective(mockElementRef, mockBreakpointObserver);

      // Emit new breakpoint value
      breakpointSubject.next({
        breakpoints: {
          [Breakpoints.HandsetPortrait]: true,
          [Breakpoints.WebLandscape]: false,
        },
      });

      tick(); // Process async operations

      expect(mockElementRef.nativeElement.classList.contains('pc')).toBeFalse();
    }));

    it('should add "pc" class when in WebLandscape mode', fakeAsync(() => {
      directive = new ResponsiveDirective(mockElementRef, mockBreakpointObserver);

      // Emit WebLandscape breakpoint
      breakpointSubject.next({
        breakpoints: {
          [Breakpoints.HandsetPortrait]: false,
          [Breakpoints.WebLandscape]: true,
        },
      });

      tick(); // Process async operations

      expect(mockElementRef.nativeElement.classList.contains('pc')).toBeTrue();
    }))
  })
});