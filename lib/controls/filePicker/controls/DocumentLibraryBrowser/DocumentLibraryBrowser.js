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
import * as React from 'react';
import { FocusZone } from 'office-ui-fabric-react/lib/FocusZone';
import { List } from 'office-ui-fabric-react/lib/List';
import { Spinner } from 'office-ui-fabric-react/lib/Spinner';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import styles from './DocumentLibraryBrowser.module.scss';
import * as strings from 'ControlStrings';
/**
 * Rows per page
 */
export var ROWS_PER_PAGE = 3;
/**
 * Maximum row height
 */
export var MAX_ROW_HEIGHT = 250;
/**
 * This would have been better done as an Office Fabric TileList, but it isn't available yet for production use
 */
var DocumentLibraryBrowser = /** @class */ (function (_super) {
    __extends(DocumentLibraryBrowser, _super);
    function DocumentLibraryBrowser(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Calculates how many items there should be in the page
         */
        _this._getItemCountForPage = function (itemIndex, surfaceRect) {
            if (itemIndex === 0) {
                _this._columnCount = Math.ceil(surfaceRect.width / MAX_ROW_HEIGHT);
                _this._columnWidth = Math.floor(surfaceRect.width / _this._columnCount);
                _this._rowHeight = _this._columnWidth;
            }
            return _this._columnCount * ROWS_PER_PAGE;
        };
        /**
         * Gets the height of a list "page"
         */
        _this._getPageHeight = function () {
            return _this._rowHeight * ROWS_PER_PAGE;
        };
        /**
         * Renders a cell for search suggestions
         */
        _this._onRenderLibraryTile = function (item, index) {
            var imgSrc = item.iconPath ? item.iconPath : "";
            return (React.createElement("div", { className: styles.filePickerFolderCardTile, "data-is-focusable": true, style: {
                    width: 100 / _this._columnCount + '%'
                } },
                React.createElement("div", { className: styles.filePickerFolderCardSizer },
                    React.createElement("div", { className: styles.filePickerFolderCardPadder },
                        React.createElement(Image, { src: imgSrc, className: styles.filePickerFolderCardImage, imageFit: ImageFit.cover }),
                        React.createElement(DefaultButton, { className: styles.filePickerFolderCardLabel, onClick: function (_event) { return _this._handleOpenLibrary(item); } }, item.title)))));
        };
        /**
         * Calls parent when library is opened
         */
        _this._handleOpenLibrary = function (library) {
            _this.props.onOpenLibrary(library);
        };
        _this.state = {
            isLoading: true,
            lists: []
        };
        return _this;
    }
    DocumentLibraryBrowser.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.fileBrowserService.getSiteMediaLibraries(this.props.includePageLibraries)];
                    case 1:
                        lists = _a.sent();
                        this.setState({
                            lists: lists,
                            isLoading: false
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DocumentLibraryBrowser.prototype.render = function () {
        if (this.state.isLoading) {
            return (React.createElement(Spinner, { label: strings.Loading }));
        }
        var libraries = this.state.lists;
        return (React.createElement("div", { className: styles.documentLibraryBrowserContainer },
            React.createElement(FocusZone, null,
                React.createElement(List, { className: styles.filePickerFolderCardGrid, items: libraries, getItemCountForPage: this._getItemCountForPage, getPageHeight: this._getPageHeight, renderedWindowsAhead: 4, onRenderCell: this._onRenderLibraryTile }))));
    };
    return DocumentLibraryBrowser;
}(React.Component));
export { DocumentLibraryBrowser };
//# sourceMappingURL=DocumentLibraryBrowser.js.map