import { Version } from "@microsoft/sp-core-library";
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IControlsTestWebPartProps } from "./IControlsTestWebPartProps";
/**
 * Web part to test the React controls
 */
export default class ControlsTestWebPart extends BaseClientSideWebPart<IControlsTestWebPartProps> {
    private _themeProvider;
    private _themeVariant;
    protected onInit(): Promise<void>;
    /**
     * Update the current theme variant reference and re-render.
     *
     * @param args The new theme
     */
    private _handleThemeChangedEvent;
    private _applyTheme;
    render(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=ControlsTestWebPart.d.ts.map