import { BaseComponentContext } from '@microsoft/sp-component-base';
import { ISPContentType, ISPField, ISPLists, IUploadImageResult } from "../common/SPEntities";
import { IContentTypesOptions, IFieldsOptions, ILibsOptions, ISPService } from "./ISPService";
export default class SPService implements ISPService {
    private _context;
    private _webAbsoluteUrl;
    private _cachedListItems;
    constructor(_context: BaseComponentContext, webAbsoluteUrl?: string);
    getContentTypes(options?: IContentTypesOptions): Promise<ISPContentType[]>;
    getFields(options: IFieldsOptions): Promise<ISPField[]>;
    getField: (listId: string, internalColumnName: string, webUrl?: string) => Promise<ISPField | undefined>;
    /**
     * Get lists or libraries
     *
     * @param options
     */
    getLibs(options?: ILibsOptions): Promise<ISPLists>;
    /**
     * Get List Items
     */
    getListItems(filterText: string, listId: string, internalColumnName: string, field: ISPField | undefined, keyInternalColumnName?: string, webUrl?: string, filterString?: string, substringSearch?: boolean, orderBy?: string, cacheInterval?: number): Promise<any[]>;
    /**
  * Gets list items for list item picker
  * @param filterText
  * @param listId
  * @param internalColumnName
  * @param [keyInternalColumnName]
  * @param [webUrl]
  * @param [filterList]
  * @returns list items for list item picker
  */
    getListItemsForListItemPicker(filterText: string, listId: string, internalColumnName: string, keyInternalColumnName?: string, webUrl?: string, filterList?: string): Promise<any[]>;
    /**
     * Get list item attachments
     *
     * @param listId
     * @param itemId
     * @param webUrl
     */
    getListItemAttachments(listId: string, itemId: number, webUrl?: string): Promise<any[]>;
    /**
     * Delete attachment
     *
     * @param fileName
     * @param listId
     * @param itemId
     * @param webUrl
     */
    deleteAttachment(fileName: string, listId: string, itemId: number, webUrl?: string): Promise<void>;
    /**
     * Add attachment
     *
     * @param listId
     * @param itemId
     * @param fileName
     * @param file
     * @param webUrl
     */
    addAttachment(listId: string, itemId: number, fileName: string, file: File, webUrl?: string): Promise<void>;
    /**
     * Get attachement for list item
     *
     * @param listId
     * @param itemId
     * @param fileName
     * @param webUrl
     */
    getAttachment(listId: string, itemId: number, fileName: string, webUrl?: string): Promise<any>;
    /**
     * Check if the attachment exists
     *
     * @param listId
     * @param itemId
     * @param fileName
     * @param webUrl
     */
    checkAttachmentExists(listId: string, itemId: number, fileName: string, webUrl?: string): Promise<any>;
    /**
     * Get the list name
     *
     * @param listId
     * @param webUrl
     */
    getListName(listId: string, webUrl?: string): Promise<string>;
    /**
     * Get the list server relative url
     *
     * @param listId
     * @param webUrl
     */
    getListServerRelativeUrl(listId: string, webUrl?: string): Promise<string>;
    getLookupValue(listId: string, listItemID: number, fieldName: string, lookupFieldName: string | undefined, webUrl?: string): Promise<any[]>;
    getLookupValues(listId: string, listItemID: number, fieldName: string, lookupFieldName: string | undefined, webUrl?: string): Promise<any[]>;
    getTaxonomyFieldInternalName(listId: string, fieldName: string, webUrl?: string): Promise<any>;
    getUsersUPNFromFieldValue(listId: string, listItemId: number, fieldName: string, webUrl?: string): Promise<any[]>;
    getUserUPNFromFieldValue(listId: string, listItemId: number, fieldName: string, webUrl?: string): Promise<any>;
    getSingleManagedMtadataLabel(listId: string, listItemId: number, fieldName: string): Promise<any>;
    uploadImage(listId: string, itemId: number | undefined, fileName: string, file: ArrayBuffer, listTitle: string | undefined, webUrl?: string): Promise<IUploadImageResult>;
    getRegionalWebSettings(webUrl?: string): Promise<any>;
    private _filterListItemsFieldValuesAsText;
}
//# sourceMappingURL=SPService.d.ts.map