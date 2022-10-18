import { IconButton } from 'office-ui-fabric-react/lib/components/Button/IconButton/IconButton';
import { classNamesFunction, styled } from 'office-ui-fabric-react/lib/Utilities';
import * as React from 'react';
import { getStyles } from './TermItem.styles';
var getClassNames = classNamesFunction();
/**
 * {@docCategory TagPicker}
 */
export var TermItemBase = function (props) {
    var theme = props.theme, styles = props.styles, selected = props.selected, disabled = props.disabled, enableTermFocusInDisabledPicker = props.enableTermFocusInDisabledPicker, children = props.children, className = props.className, index = props.index, onRemoveItem = props.onRemoveItem, removeButtonAriaLabel = props.removeButtonAriaLabel, languageTag = props.languageTag;
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
        selected: selected,
        disabled: disabled,
    });
    var labels = props.item.labels.filter(function (name) { return name.languageTag === languageTag && name.isDefault; });
    if (labels.length === 0) {
        labels = props.item.labels.filter(function (name) { return name.languageTag === props.termStoreInfo.defaultLanguageTag && name.isDefault; });
    }
    return (React.createElement("div", { className: classNames.root, role: 'listitem', key: index, "data-selection-index": index, "data-is-focusable": (enableTermFocusInDisabledPicker || !disabled) && true },
        React.createElement("span", { className: classNames.text, "aria-label": labels[0].name, title: labels[0].name }, children),
        React.createElement(IconButton, { onClick: onRemoveItem, disabled: disabled, iconProps: { iconName: 'Cancel', styles: { root: { fontSize: '12px' } } }, className: classNames.close, ariaLabel: removeButtonAriaLabel })));
};
export var TermItem = styled(TermItemBase, getStyles, undefined, {
    scope: 'TermItem',
});
//# sourceMappingURL=TermItem.js.map