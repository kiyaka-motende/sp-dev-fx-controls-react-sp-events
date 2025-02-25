import { getNeutralVariant, getSoftVariant, getStrongVariant } from "@fluentui/scheme-utilities/lib/variants";
import { getColorFromString, isDark } from "office-ui-fabric-react/lib/Color";
import { createTheme, getTheme } from "office-ui-fabric-react/lib/Styling";
import { BaseSlots, ThemeGenerator, themeRulesStandardCreator } from "office-ui-fabric-react/lib/ThemeGenerator";
import { VariantType } from "./VariantThemeProviderProps";
export var generateThemeVariant = function (theme, themeType) {
    var currentTheme;
    switch (themeType) {
        case VariantType.None:
            currentTheme = theme;
            break;
        case VariantType.Neutral:
            currentTheme = getNeutralVariant(theme);
            break;
        case VariantType.Soft:
            currentTheme = getSoftVariant(theme);
            break;
        case VariantType.Strong:
            currentTheme = getStrongVariant(theme);
            break;
        default:
            currentTheme = theme;
            break;
    }
    return currentTheme;
};
export var getDefaultTheme = function () {
    var _a, _b;
    var currentTheme;
    var themeColorsFromWindow = (_b = (_a = window) === null || _a === void 0 ? void 0 : _a.__themeState__) === null || _b === void 0 ? void 0 : _b.theme; // eslint-disable-line @typescript-eslint/no-explicit-any
    if (themeColorsFromWindow) {
        currentTheme = createTheme({
            palette: themeColorsFromWindow
        });
    }
    else
        currentTheme = getTheme();
    return currentTheme;
};
export var generateThemeFromColors = function (primaryColor, textColor, backgroundColor) {
    var themeRules = themeRulesStandardCreator();
    var colors = {
        primaryColor: getColorFromString(primaryColor),
        textColor: getColorFromString(textColor),
        backgroundColor: getColorFromString(backgroundColor),
    };
    var currentIsDark = isDark(themeRules[BaseSlots[BaseSlots.backgroundColor]].color);
    ThemeGenerator.insureSlots(themeRules, currentIsDark);
    ThemeGenerator.setSlot(themeRules[BaseSlots[BaseSlots.primaryColor]], colors.primaryColor, currentIsDark, true, true);
    ThemeGenerator.setSlot(themeRules[BaseSlots[BaseSlots.foregroundColor]], colors.textColor, currentIsDark, true, true);
    ThemeGenerator.setSlot(themeRules[BaseSlots[BaseSlots.backgroundColor]], colors.backgroundColor, currentIsDark, true, true);
    var themeAsJson = ThemeGenerator.getThemeAsJson(themeRules);
    var generatedTheme = createTheme({
        palette: themeAsJson,
        isInverted: currentIsDark,
    });
    return generatedTheme;
};
//# sourceMappingURL=VariantThemeProviderHelpers.js.map