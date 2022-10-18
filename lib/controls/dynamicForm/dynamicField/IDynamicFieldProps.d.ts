import { BaseComponentContext } from '@microsoft/sp-component-base';
import { IDropdownOption } from "office-ui-fabric-react/lib/Dropdown";
import { IFilePickerResult } from '../../filePicker';
export declare type DateFormat = 'DateTime' | 'DateOnly';
export declare type FieldChangeAdditionalData = IFilePickerResult;
export interface IDynamicFieldProps {
    context: BaseComponentContext;
    disabled?: boolean;
    listId: string;
    listItemId?: number;
    columnInternalName: string;
    label?: string;
    placeholder?: string;
    onChanged?: (columnInternalName: string, newValue: any, additionalData?: FieldChangeAdditionalData) => void;
    value?: any;
    required: boolean;
    newValue?: any;
    fieldType: string;
    fieldTitle: string;
    fieldDefaultValue: any;
    options?: IDropdownOption[];
    fieldTermSetId?: string;
    lookupListID?: string;
    lookupField?: string;
    changedValue: any;
    hiddenFieldName?: string;
    Order: number;
    isRichText?: boolean;
    dateFormat?: DateFormat;
    firstDayOfWeek: number;
    additionalData?: FieldChangeAdditionalData;
    principalType?: string;
    description?: string;
}
//# sourceMappingURL=IDynamicFieldProps.d.ts.map