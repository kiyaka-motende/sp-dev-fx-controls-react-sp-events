var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from "react";
import * as ReactDom from "react-dom";
import * as strings from "ControlsTestWebPartStrings";
import { ThemeProvider, } from "@microsoft/sp-component-base";
import { Version } from "@microsoft/sp-core-library";
import { PropertyPaneTextField, } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import ControlsTest from "./components/ControlsTest";
/**
 * Web part to test the React controls
 */
var ControlsTestWebPart = /** @class */ (function (_super) {
    __extends(ControlsTestWebPart, _super);
    function ControlsTestWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Apply btheme id in Teams
        _this._applyTheme = function (theme) {
            _this.context.domElement.setAttribute("data-theme", theme);
            document.body.setAttribute("data-theme", theme);
        };
        return _this;
    }
    ControlsTestWebPart.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var context;
            return __generator(this, function (_a) {
                this._themeProvider = this.context.serviceScope.consume(ThemeProvider.serviceKey);
                // If it exists, get the theme variant
                this._themeVariant = this._themeProvider.tryGetTheme();
                // Register a handler to be notified if the theme variant changes
                this._themeProvider.themeChangedEvent.add(this, this._handleThemeChangedEvent);
                if (this.context.sdks.microsoftTeams) {
                    context = this.context.sdks.microsoftTeams.context;
                    this._applyTheme(context.theme || "default");
                    this.context.sdks.microsoftTeams.teamsJs.registerOnThemeChangeHandler(this._applyTheme);
                }
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    /**
     * Update the current theme variant reference and re-render.
     *
     * @param args The new theme
     */
    ControlsTestWebPart.prototype._handleThemeChangedEvent = function (args) {
        this._themeVariant = args.theme;
        this.render();
    };
    ControlsTestWebPart.prototype.render = function () {
        /*  const element: React.ReactElement<ITestControlProps> = React.createElement(
    
          TestControl,
           {
             context: this.context,
           }
         ); */
        var _this = this;
        var element = React.createElement(ControlsTest, {
            themeVariant: this._themeVariant,
            context: this.context,
            description: this.properties.description,
            title: this.properties.title,
            displayMode: this.displayMode,
            updateProperty: function (value) {
                _this.properties.title = value;
            },
            totalPages: this.properties.totalPages
        });
        ReactDom.render(element, this.domElement);
    };
    Object.defineProperty(ControlsTestWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    ControlsTestWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                }),
                                PropertyPaneTextField('totalPages', {
                                    label: 'Total pages in pagination'
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return ControlsTestWebPart;
}(BaseClientSideWebPart));
export default ControlsTestWebPart;
//# sourceMappingURL=ControlsTestWebPart.js.map