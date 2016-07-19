export interface Ng2MenuItemComponent {
    preventClose: boolean;
    isSelected: boolean;
    value: any;
    select(): void;
}
