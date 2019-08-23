"use strict";

exports.__esModule = true;
exports.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE = exports.FILTERS_BUTTONS_PLACEHOLDER_VALUE = exports.FILTERS_BUTTONS_PLACEHOLDER_SEARCH = exports.FILTERS_BUTTONS_CANCEL = exports.FILTERS_BUTTONS_OK = exports.FILTERS_BUTTONS_CLEAR = exports.FILTERS_BUTTONS_SELECT_ALL = exports.FILTERS_VALUES_BLANK_CELLS = exports.FILTERS_LABELS_DISJUNCTION = exports.FILTERS_LABELS_CONJUNCTION = exports.FILTERS_DIVS_FILTER_BY_VALUE = exports.FILTERS_DIVS_FILTER_BY_CONDITION = exports.FILTERS_CONDITIONS_YESTERDAY = exports.FILTERS_CONDITIONS_TOMORROW = exports.FILTERS_CONDITIONS_TODAY = exports.FILTERS_CONDITIONS_BEFORE = exports.FILTERS_CONDITIONS_AFTER = exports.FILTERS_CONDITIONS_NOT_BETWEEN = exports.FILTERS_CONDITIONS_BETWEEN = exports.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL = exports.FILTERS_CONDITIONS_LESS_THAN = exports.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL = exports.FILTERS_CONDITIONS_GREATER_THAN = exports.FILTERS_CONDITIONS_BY_VALUE = exports.FILTERS_CONDITIONS_NOT_CONTAIN = exports.FILTERS_CONDITIONS_CONTAINS = exports.FILTERS_CONDITIONS_ENDS_WITH = exports.FILTERS_CONDITIONS_BEGINS_WITH = exports.FILTERS_CONDITIONS_NOT_EQUAL = exports.FILTERS_CONDITIONS_EQUAL = exports.FILTERS_CONDITIONS_NOT_EMPTY = exports.FILTERS_CONDITIONS_EMPTY = exports.FILTERS_CONDITIONS_NONE = exports.FILTERS_CONDITIONS_NAMESPACE = exports.FILTERS_NAMESPACE = exports.CONTEXTMENU_ITEMS_SHOW_ROW = exports.CONTEXTMENU_ITEMS_HIDE_ROW = exports.CONTEXTMENU_ITEMS_SHOW_COLUMN = exports.CONTEXTMENU_ITEMS_HIDE_COLUMN = exports.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD = exports.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD = exports.CONTEXTMENU_ITEMS_REMOVE_BORDERS = exports.CONTEXTMENU_ITEMS_BORDERS_LEFT = exports.CONTEXTMENU_ITEMS_BORDERS_BOTTOM = exports.CONTEXTMENU_ITEMS_BORDERS_RIGHT = exports.CONTEXTMENU_ITEMS_BORDERS_TOP = exports.CONTEXTMENU_ITEMS_BORDERS = exports.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM = exports.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE = exports.CONTEXTMENU_ITEMS_ALIGNMENT_TOP = exports.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY = exports.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT = exports.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER = exports.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT = exports.CONTEXTMENU_ITEMS_ALIGNMENT = exports.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT = exports.CONTEXTMENU_ITEMS_REMOVE_COMMENT = exports.CONTEXTMENU_ITEMS_EDIT_COMMENT = exports.CONTEXTMENU_ITEMS_ADD_COMMENT = exports.CONTEXTMENU_ITEMS_UNMERGE_CELLS = exports.CONTEXTMENU_ITEMS_MERGE_CELLS = exports.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN = exports.CONTEXTMENU_ITEMS_FREEZE_COLUMN = exports.CONTEXTMENU_ITEMS_CUT = exports.CONTEXTMENU_ITEMS_COPY = exports.CONTEXTMENU_ITEMS_CLEAR_COLUMN = exports.CONTEXTMENU_ITEMS_READ_ONLY = exports.CONTEXTMENU_ITEMS_REDO = exports.CONTEXTMENU_ITEMS_UNDO = exports.CONTEXTMENU_ITEMS_REMOVE_COLUMN = exports.CONTEXTMENU_ITEMS_REMOVE_ROW = exports.CONTEXTMENU_ITEMS_INSERT_RIGHT = exports.CONTEXTMENU_ITEMS_INSERT_LEFT = exports.CONTEXTMENU_ITEMS_ROW_BELOW = exports.CONTEXTMENU_ITEMS_ROW_ABOVE = exports.CONTEXTMENU_ITEMS_NO_ITEMS = exports.CONTEXT_MENU_ITEMS_NAMESPACE = void 0;

/**
 * Constants for parts of translation.
 */
var CONTEXT_MENU_ITEMS_NAMESPACE = 'ContextMenu:items';
exports.CONTEXT_MENU_ITEMS_NAMESPACE = CONTEXT_MENU_ITEMS_NAMESPACE;
var CONTEXTMENU_ITEMS_NO_ITEMS = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".noItems");
exports.CONTEXTMENU_ITEMS_NO_ITEMS = CONTEXTMENU_ITEMS_NO_ITEMS;
var CONTEXTMENU_ITEMS_ROW_ABOVE = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".insertRowAbove");
exports.CONTEXTMENU_ITEMS_ROW_ABOVE = CONTEXTMENU_ITEMS_ROW_ABOVE;
var CONTEXTMENU_ITEMS_ROW_BELOW = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".insertRowBelow");
exports.CONTEXTMENU_ITEMS_ROW_BELOW = CONTEXTMENU_ITEMS_ROW_BELOW;
var CONTEXTMENU_ITEMS_INSERT_LEFT = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".insertColumnOnTheLeft");
exports.CONTEXTMENU_ITEMS_INSERT_LEFT = CONTEXTMENU_ITEMS_INSERT_LEFT;
var CONTEXTMENU_ITEMS_INSERT_RIGHT = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".insertColumnOnTheRight");
exports.CONTEXTMENU_ITEMS_INSERT_RIGHT = CONTEXTMENU_ITEMS_INSERT_RIGHT;
var CONTEXTMENU_ITEMS_REMOVE_ROW = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".removeRow");
exports.CONTEXTMENU_ITEMS_REMOVE_ROW = CONTEXTMENU_ITEMS_REMOVE_ROW;
var CONTEXTMENU_ITEMS_REMOVE_COLUMN = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".removeColumn");
exports.CONTEXTMENU_ITEMS_REMOVE_COLUMN = CONTEXTMENU_ITEMS_REMOVE_COLUMN;
var CONTEXTMENU_ITEMS_UNDO = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".undo");
exports.CONTEXTMENU_ITEMS_UNDO = CONTEXTMENU_ITEMS_UNDO;
var CONTEXTMENU_ITEMS_REDO = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".redo");
exports.CONTEXTMENU_ITEMS_REDO = CONTEXTMENU_ITEMS_REDO;
var CONTEXTMENU_ITEMS_READ_ONLY = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".readOnly");
exports.CONTEXTMENU_ITEMS_READ_ONLY = CONTEXTMENU_ITEMS_READ_ONLY;
var CONTEXTMENU_ITEMS_CLEAR_COLUMN = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".clearColumn");
exports.CONTEXTMENU_ITEMS_CLEAR_COLUMN = CONTEXTMENU_ITEMS_CLEAR_COLUMN;
var CONTEXTMENU_ITEMS_COPY = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".copy");
exports.CONTEXTMENU_ITEMS_COPY = CONTEXTMENU_ITEMS_COPY;
var CONTEXTMENU_ITEMS_CUT = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".cut");
exports.CONTEXTMENU_ITEMS_CUT = CONTEXTMENU_ITEMS_CUT;
var CONTEXTMENU_ITEMS_FREEZE_COLUMN = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".freezeColumn");
exports.CONTEXTMENU_ITEMS_FREEZE_COLUMN = CONTEXTMENU_ITEMS_FREEZE_COLUMN;
var CONTEXTMENU_ITEMS_UNFREEZE_COLUMN = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".unfreezeColumn");
exports.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN = CONTEXTMENU_ITEMS_UNFREEZE_COLUMN;
var CONTEXTMENU_ITEMS_MERGE_CELLS = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".mergeCells");
exports.CONTEXTMENU_ITEMS_MERGE_CELLS = CONTEXTMENU_ITEMS_MERGE_CELLS;
var CONTEXTMENU_ITEMS_UNMERGE_CELLS = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".unmergeCells");
exports.CONTEXTMENU_ITEMS_UNMERGE_CELLS = CONTEXTMENU_ITEMS_UNMERGE_CELLS;
var CONTEXTMENU_ITEMS_ADD_COMMENT = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".addComment");
exports.CONTEXTMENU_ITEMS_ADD_COMMENT = CONTEXTMENU_ITEMS_ADD_COMMENT;
var CONTEXTMENU_ITEMS_EDIT_COMMENT = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".editComment");
exports.CONTEXTMENU_ITEMS_EDIT_COMMENT = CONTEXTMENU_ITEMS_EDIT_COMMENT;
var CONTEXTMENU_ITEMS_REMOVE_COMMENT = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".removeComment");
exports.CONTEXTMENU_ITEMS_REMOVE_COMMENT = CONTEXTMENU_ITEMS_REMOVE_COMMENT;
var CONTEXTMENU_ITEMS_READ_ONLY_COMMENT = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".readOnlyComment");
exports.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT = CONTEXTMENU_ITEMS_READ_ONLY_COMMENT;
var CONTEXTMENU_ITEMS_ALIGNMENT = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".align");
exports.CONTEXTMENU_ITEMS_ALIGNMENT = CONTEXTMENU_ITEMS_ALIGNMENT;
var CONTEXTMENU_ITEMS_ALIGNMENT_LEFT = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".align.left");
exports.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT = CONTEXTMENU_ITEMS_ALIGNMENT_LEFT;
var CONTEXTMENU_ITEMS_ALIGNMENT_CENTER = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".align.center");
exports.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER = CONTEXTMENU_ITEMS_ALIGNMENT_CENTER;
var CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".align.right");
exports.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT = CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT;
var CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".align.justify");
exports.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY = CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY;
var CONTEXTMENU_ITEMS_ALIGNMENT_TOP = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".align.top");
exports.CONTEXTMENU_ITEMS_ALIGNMENT_TOP = CONTEXTMENU_ITEMS_ALIGNMENT_TOP;
var CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".align.middle");
exports.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE = CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE;
var CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".align.bottom");
exports.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM = CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM;
var CONTEXTMENU_ITEMS_BORDERS = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".borders");
exports.CONTEXTMENU_ITEMS_BORDERS = CONTEXTMENU_ITEMS_BORDERS;
var CONTEXTMENU_ITEMS_BORDERS_TOP = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".borders.top");
exports.CONTEXTMENU_ITEMS_BORDERS_TOP = CONTEXTMENU_ITEMS_BORDERS_TOP;
var CONTEXTMENU_ITEMS_BORDERS_RIGHT = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".borders.right");
exports.CONTEXTMENU_ITEMS_BORDERS_RIGHT = CONTEXTMENU_ITEMS_BORDERS_RIGHT;
var CONTEXTMENU_ITEMS_BORDERS_BOTTOM = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".borders.bottom");
exports.CONTEXTMENU_ITEMS_BORDERS_BOTTOM = CONTEXTMENU_ITEMS_BORDERS_BOTTOM;
var CONTEXTMENU_ITEMS_BORDERS_LEFT = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".borders.left");
exports.CONTEXTMENU_ITEMS_BORDERS_LEFT = CONTEXTMENU_ITEMS_BORDERS_LEFT;
var CONTEXTMENU_ITEMS_REMOVE_BORDERS = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".borders.remove");
exports.CONTEXTMENU_ITEMS_REMOVE_BORDERS = CONTEXTMENU_ITEMS_REMOVE_BORDERS;
var CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".nestedHeaders.insertChildRow");
exports.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD = CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD;
var CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".nestedHeaders.detachFromParent");
exports.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD = CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD;
var CONTEXTMENU_ITEMS_HIDE_COLUMN = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".hideColumn");
exports.CONTEXTMENU_ITEMS_HIDE_COLUMN = CONTEXTMENU_ITEMS_HIDE_COLUMN;
var CONTEXTMENU_ITEMS_SHOW_COLUMN = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".showColumn");
exports.CONTEXTMENU_ITEMS_SHOW_COLUMN = CONTEXTMENU_ITEMS_SHOW_COLUMN;
var CONTEXTMENU_ITEMS_HIDE_ROW = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".hideRow");
exports.CONTEXTMENU_ITEMS_HIDE_ROW = CONTEXTMENU_ITEMS_HIDE_ROW;
var CONTEXTMENU_ITEMS_SHOW_ROW = "".concat(CONTEXT_MENU_ITEMS_NAMESPACE, ".showRow");
exports.CONTEXTMENU_ITEMS_SHOW_ROW = CONTEXTMENU_ITEMS_SHOW_ROW;
var FILTERS_NAMESPACE = 'Filters:';
exports.FILTERS_NAMESPACE = FILTERS_NAMESPACE;
var FILTERS_CONDITIONS_NAMESPACE = "".concat(FILTERS_NAMESPACE, "conditions");
exports.FILTERS_CONDITIONS_NAMESPACE = FILTERS_CONDITIONS_NAMESPACE;
var FILTERS_CONDITIONS_NONE = "".concat(FILTERS_CONDITIONS_NAMESPACE, ".none");
exports.FILTERS_CONDITIONS_NONE = FILTERS_CONDITIONS_NONE;
var FILTERS_CONDITIONS_EMPTY = "".concat(FILTERS_CONDITIONS_NAMESPACE, ".isEmpty");
exports.FILTERS_CONDITIONS_EMPTY = FILTERS_CONDITIONS_EMPTY;
var FILTERS_CONDITIONS_NOT_EMPTY = "".concat(FILTERS_CONDITIONS_NAMESPACE, ".isNotEmpty");
exports.FILTERS_CONDITIONS_NOT_EMPTY = FILTERS_CONDITIONS_NOT_EMPTY;
var FILTERS_CONDITIONS_EQUAL = "".concat(FILTERS_CONDITIONS_NAMESPACE, ".isEqualTo");
exports.FILTERS_CONDITIONS_EQUAL = FILTERS_CONDITIONS_EQUAL;
var FILTERS_CONDITIONS_NOT_EQUAL = "".concat(FILTERS_CONDITIONS_NAMESPACE, ".isNotEqualTo");
exports.FILTERS_CONDITIONS_NOT_EQUAL = FILTERS_CONDITIONS_NOT_EQUAL;
var FILTERS_CONDITIONS_BEGINS_WITH = "".concat(FILTERS_CONDITIONS_NAMESPACE, ".beginsWith");
exports.FILTERS_CONDITIONS_BEGINS_WITH = FILTERS_CONDITIONS_BEGINS_WITH;
var FILTERS_CONDITIONS_ENDS_WITH = "".concat(FILTERS_CONDITIONS_NAMESPACE, ".endsWith");
exports.FILTERS_CONDITIONS_ENDS_WITH = FILTERS_CONDITIONS_ENDS_WITH;
var FILTERS_CONDITIONS_CONTAINS = "".concat(FILTERS_CONDITIONS_NAMESPACE, ".contains");
exports.FILTERS_CONDITIONS_CONTAINS = FILTERS_CONDITIONS_CONTAINS;
var FILTERS_CONDITIONS_NOT_CONTAIN = "".concat(FILTERS_CONDITIONS_NAMESPACE, ".doesNotContain");
exports.FILTERS_CONDITIONS_NOT_CONTAIN = FILTERS_CONDITIONS_NOT_CONTAIN;
var FILTERS_CONDITIONS_BY_VALUE = "".concat(FILTERS_CONDITIONS_NAMESPACE, ".byValue");
exports.FILTERS_CONDITIONS_BY_VALUE = FILTERS_CONDITIONS_BY_VALUE;
var FILTERS_CONDITIONS_GREATER_THAN = "".concat(FILTERS_CONDITIONS_NAMESPACE, ".greaterThan");
exports.FILTERS_CONDITIONS_GREATER_THAN = FILTERS_CONDITIONS_GREATER_THAN;
var FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL = "".concat(FILTERS_CONDITIONS_NAMESPACE, ".greaterThanOrEqualTo");
exports.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL = FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL;
var FILTERS_CONDITIONS_LESS_THAN = "".concat(FILTERS_CONDITIONS_NAMESPACE, ".lessThan");
exports.FILTERS_CONDITIONS_LESS_THAN = FILTERS_CONDITIONS_LESS_THAN;
var FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL = "".concat(FILTERS_CONDITIONS_NAMESPACE, ".lessThanOrEqualTo");
exports.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL = FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL;
var FILTERS_CONDITIONS_BETWEEN = "".concat(FILTERS_CONDITIONS_NAMESPACE, ".isBetween");
exports.FILTERS_CONDITIONS_BETWEEN = FILTERS_CONDITIONS_BETWEEN;
var FILTERS_CONDITIONS_NOT_BETWEEN = "".concat(FILTERS_CONDITIONS_NAMESPACE, ".isNotBetween");
exports.FILTERS_CONDITIONS_NOT_BETWEEN = FILTERS_CONDITIONS_NOT_BETWEEN;
var FILTERS_CONDITIONS_AFTER = "".concat(FILTERS_CONDITIONS_NAMESPACE, ".after");
exports.FILTERS_CONDITIONS_AFTER = FILTERS_CONDITIONS_AFTER;
var FILTERS_CONDITIONS_BEFORE = "".concat(FILTERS_CONDITIONS_NAMESPACE, ".before");
exports.FILTERS_CONDITIONS_BEFORE = FILTERS_CONDITIONS_BEFORE;
var FILTERS_CONDITIONS_TODAY = "".concat(FILTERS_CONDITIONS_NAMESPACE, ".today");
exports.FILTERS_CONDITIONS_TODAY = FILTERS_CONDITIONS_TODAY;
var FILTERS_CONDITIONS_TOMORROW = "".concat(FILTERS_CONDITIONS_NAMESPACE, ".tomorrow");
exports.FILTERS_CONDITIONS_TOMORROW = FILTERS_CONDITIONS_TOMORROW;
var FILTERS_CONDITIONS_YESTERDAY = "".concat(FILTERS_CONDITIONS_NAMESPACE, ".yesterday");
exports.FILTERS_CONDITIONS_YESTERDAY = FILTERS_CONDITIONS_YESTERDAY;
var FILTERS_DIVS_FILTER_BY_CONDITION = "".concat(FILTERS_NAMESPACE, "labels.filterByCondition");
exports.FILTERS_DIVS_FILTER_BY_CONDITION = FILTERS_DIVS_FILTER_BY_CONDITION;
var FILTERS_DIVS_FILTER_BY_VALUE = "".concat(FILTERS_NAMESPACE, "labels.filterByValue");
exports.FILTERS_DIVS_FILTER_BY_VALUE = FILTERS_DIVS_FILTER_BY_VALUE;
var FILTERS_LABELS_CONJUNCTION = "".concat(FILTERS_NAMESPACE, "labels.conjunction");
exports.FILTERS_LABELS_CONJUNCTION = FILTERS_LABELS_CONJUNCTION;
var FILTERS_LABELS_DISJUNCTION = "".concat(FILTERS_NAMESPACE, "labels.disjunction");
exports.FILTERS_LABELS_DISJUNCTION = FILTERS_LABELS_DISJUNCTION;
var FILTERS_VALUES_BLANK_CELLS = "".concat(FILTERS_NAMESPACE, "values.blankCells");
exports.FILTERS_VALUES_BLANK_CELLS = FILTERS_VALUES_BLANK_CELLS;
var FILTERS_BUTTONS_SELECT_ALL = "".concat(FILTERS_NAMESPACE, "buttons.selectAll");
exports.FILTERS_BUTTONS_SELECT_ALL = FILTERS_BUTTONS_SELECT_ALL;
var FILTERS_BUTTONS_CLEAR = "".concat(FILTERS_NAMESPACE, "buttons.clear");
exports.FILTERS_BUTTONS_CLEAR = FILTERS_BUTTONS_CLEAR;
var FILTERS_BUTTONS_OK = "".concat(FILTERS_NAMESPACE, "buttons.ok");
exports.FILTERS_BUTTONS_OK = FILTERS_BUTTONS_OK;
var FILTERS_BUTTONS_CANCEL = "".concat(FILTERS_NAMESPACE, "buttons.cancel");
exports.FILTERS_BUTTONS_CANCEL = FILTERS_BUTTONS_CANCEL;
var FILTERS_BUTTONS_PLACEHOLDER_SEARCH = "".concat(FILTERS_NAMESPACE, "buttons.placeholder.search");
exports.FILTERS_BUTTONS_PLACEHOLDER_SEARCH = FILTERS_BUTTONS_PLACEHOLDER_SEARCH;
var FILTERS_BUTTONS_PLACEHOLDER_VALUE = "".concat(FILTERS_NAMESPACE, "buttons.placeholder.value");
exports.FILTERS_BUTTONS_PLACEHOLDER_VALUE = FILTERS_BUTTONS_PLACEHOLDER_VALUE;
var FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE = "".concat(FILTERS_NAMESPACE, "buttons.placeholder.secondValue");
exports.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE = FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE;