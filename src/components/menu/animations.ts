import {
    trigger,
    style,
    transition,
    animate,
    state
} from '@angular/core';

export const animations = [
    trigger('fade', [
        state('visible', style({
            width: '250px',
            maxHeight: '300px',
            opacity: 1
        })),
        state('hidden', style({
            width: '0px',
            maxHeight: '0px',
            opacity: 0
        })),
        transition('visible => hidden', [
            animate('50ms ease-out')
        ]),
        transition('hidden => visible', [
            animate('200ms cubic-bezier(0.55, 0, 0.55, 0.2)')
        ])
    ])
];
