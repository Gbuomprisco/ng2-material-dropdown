const components = require('./dist/ng2-dropdown.bundle.js');

const Ng2Dropdown = components.Ng2Dropdown;
const Ng2DropdownMenu = components.Ng2DropdownMenu;
const Ng2MenuItem = components.Ng2MenuItem;
const Ng2DropdownButton = components.Ng2DropdownButton;

exports.Ng2Dropdown = Ng2Dropdown;
exports.Ng2DropdownMenu = Ng2DropdownMenu;
exports.Ng2DropdownMenuItem = Ng2MenuItem;
exports.Ng2DropdownButton = Ng2DropdownButton;

export { Ng2Dropdown, Ng2DropdownMenu, Ng2DropdownButton, Ng2MenuItem };

const NG2_DROPDOWN_DIRECTIVES = [Ng2Dropdown, Ng2DropdownMenu, Ng2DropdownButton, Ng2MenuItem];

exports.NG2_DROPDOWN_DIRECTIVES = NG2_DROPDOWN_DIRECTIVES;
export { NG2_DROPDOWN_DIRECTIVES };
