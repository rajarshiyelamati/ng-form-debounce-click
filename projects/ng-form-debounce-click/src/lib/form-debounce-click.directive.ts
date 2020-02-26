import { Directive, EventEmitter, HostListener, Output, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Directive({
    selector: '[ngFormDebounceClick]'
})
export class NgFormDebounceClickDirective implements OnInit, OnDestroy {
    @Input('validateForm') validateForm: FormGroup;
    @Input() markFormControlsAsTouched = true;
    @Input() debounceTime: number = 500;
    @Output() ngFormDebounceSubmit = new EventEmitter<void>();
    @Output() ngFormInvalid = new EventEmitter<void>();
    private clickStream$ = new Subject();
    clickSubscription: Subscription;
    @HostListener('click', ['$event'])
    handleClick(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.clickStream$.next();
    }

    ngOnInit() {
        this.clickStream$
            .pipe(debounceTime(this.debounceTime))
            .subscribe(e => {
                if (this.validateForm && this.markFormControlsAsTouched) {
                    this.validateForm.markAllAsTouched();
                }
                this.emitEvent();
            });
    }

    private emitEvent() {
        if (!this.validateForm) {
            this.ngFormDebounceSubmit.emit();
        } else if (this.validateForm.valid) {
            this.ngFormDebounceSubmit.emit();
        } else {
            if(this.markFormControlsAsTouched) this.validateForm.markAllAsTouched();
            this.ngFormInvalid.emit();
        }
    }

    ngOnDestroy() {
        if (this.clickSubscription) this.clickSubscription.unsubscribe();
    }

}
