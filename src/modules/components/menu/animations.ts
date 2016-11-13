import {
    trigger,
    style,
    transition,
    animate,
    state
} from '@angular/core';

export const animations: any = [
    trigger('fade', [
        state('visible', style({
            width: '100%',
            maxHeight: '350px',
            opacity: 1
        })),
        state('hidden', style({
            width: '0px',
            maxHeight: '0px',
            opacity: 0
        })),
        transition('visible => hidden', [
            animate('100ms ease-out')
        ]),
        transition('hidden => visible', [
            animate('150ms cubic-bezier(0.55, 0, 0.55, 0.2)')
        ])
    ])
];
