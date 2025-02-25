export interface IGetListDataAsStreamResult {
    wpq: string;
    Templates: ITemplates;
    ListData: IListData;
    ListSchema: IListSchema;
    ViewMetadata: IViewMetadata;
    BaseViewID: string;
    ListTemplateType: string;
    listBaseType: number;
    noGroupCollapse: boolean;
    InlineEdit: boolean;
    NavigateForFormsPages: boolean;
    BasePermissions: IBasePermissions;
    CurrentUserIsSiteAdmin: boolean;
    IsAppWeb: boolean;
    AllowGridMode: boolean;
    inGridMode: boolean;
    listTemplate: string;
    listName: string;
    rootFolder: string;
    view: string;
    viewTitle: string;
    listUrlDir: string;
    HttpPath: string;
    HttpRoot: string;
    NoScriptEnabled: boolean;
    imagesPath: string;
    PortalUrl: undefined;
    SendToLocationName: string;
    SendToLocationUrl: string;
    RecycleBinEnabled: number;
    OfficialFileName: string;
    OfficialFileNames: string;
    WriteSecurity: string;
    SiteTitle: string;
    ListTitle: string;
    displayFormUrl: string;
    newFormUrl: string;
    editFormUrl: string;
    ctxId: number;
    isXslView: boolean;
    IsClientRendering: boolean;
    CurrentUserId: number;
    isModerated: boolean;
    EnableRequestSignOff: boolean;
    isForceCheckout: boolean;
    EnableMinorVersions: boolean;
    verEnabled: boolean;
    recursiveView: boolean;
    WorkflowsAssociated: boolean;
    ContentTypesEnabled: boolean;
    DocumentLibraryCalloutOfficeWebAppPreviewersDisabled: boolean;
    RegionalSettingsTimeZoneBias: number;
    NewWOPIDocumentEnabled: boolean;
    NewWOPIDocumentUrl: string;
    NewWOPIDocumentTypes: number;
    canUserCreateMicrosoftForm: boolean;
    AllowCreateFolder: boolean;
    CanShareLinkForNewDocument: boolean;
    VisioDrawingCreationEnabled: boolean;
    SiteTemplateId: number;
    TenantTagPolicyEnabled: boolean;
    WebExcludeFromOfflineClient: boolean;
    ExcludeFromOfflineClient: boolean;
    ParentInfo: IParentInfo;
}
export interface IBasePermissions {
    ManageLists: boolean;
    ManagePersonalViews: boolean;
    OpenItems: boolean;
    UseClientIntegration: boolean;
}
export interface IListData {
    Row: IRow[];
    FirstRow: number;
    FolderPermissions: string;
    LastRow: number;
    RowLimit: number;
    FilterLink: string;
    ForceNoHierarchy: string;
    HierarchyHasIndention: string;
    FolderId: string;
    CurrentFolderProgId: string;
}
export interface IRow {
    ID: string;
    PermMask: string;
    FSObjType: string;
    HTML_x0020_File_x0020_Type: string;
    UniqueId: string;
    ProgId: string;
    NoExecute: string;
    File_x0020_Type: string;
    "File_x0020_Type.mapapp": string;
    "HTML_x0020_File_x0020_Type.File_x0020_Type.mapcon": string;
    "HTML_x0020_File_x0020_Type.File_x0020_Type.mapico": string;
    "serverurl.progid": string;
    ServerRedirectedEmbedUrl: string;
    "File_x0020_Type.progid": string;
    "File_x0020_Type.url": string;
    FileRef: string;
    FileLeafRef: string;
    CheckoutUser: string;
    CheckedOutUserId: string;
    IsCheckedoutToLocal: string;
    _ComplianceFlags: string;
    _ShortcutUrl: string;
    "_ShortcutUrl.desc": string;
    _ShortcutSiteId: string;
    _ShortcutWebId: string;
    _ShortcutUniqueId: string;
    "Created_x0020_Date.ifnew": string;
    ContentTypeId: string;
    Modified: string;
    "Modified.FriendlyDisplay": string;
    Editor: IEditor[];
    File_x0020_Size: string;
    PrincipalCount: string;
    MediaServiceFastMetadata: string;
    MediaServiceOCR: string;
    ItemChildCount: string;
    FolderChildCount: string;
    SMTotalFileCount: string;
    SMTotalSize: string;
    SortBehavior: string;
    FileSizeDisplay: string;
    _ComplianceTag: string;
    ContentVersion: string;
    DocConcurrencyNumber: string;
    _VirusStatus: string;
    ".spItemUrl": string;
    ".fileType": string;
    ".hasThumbnail": string;
    ".hasVideoManifest": string;
    ".hasPdf": string;
    ".hasOfficePreview": string;
    ".hasBxf": string;
    ".hasGlb": string;
    ".hasHtml": string;
    ".ctag": string;
    ".etag": string;
}
export interface IEditor {
    id: string;
    title: string;
    email: string;
    sip: string;
    picture: string;
}
export interface IListSchema {
    Field: {
        [key: string]: string;
    }[];
    RequiredFields: any[];
    JSLink: any[];
    LCID: string;
    Userid: string;
    PagePath: string;
    ShowWebPart: string;
    View: string;
    RootFolderParam: string;
    FieldSortParam: string;
    HttpVDir: string;
    IsDocLib: string;
    UIVersion: string;
    NoListItem: string;
    NoListItemHowTo: string;
    DefaultItemOpen: string;
    ForceCheckout: string;
    Direction: string;
    TabularView: string;
    ItemCount: string;
    EffectivePresenceEnabled: string;
    PresenceAlt: string;
    UserDispUrl: string;
    SelectedID: string;
    ListRight_AddListItems: string;
    FolderRight_AddListItems: string;
    InplaceSearchEnabled: string;
    RenderViewSelectorPivotMenuAsync: string;
    ViewSelector_ViewParameters: string;
    RenderSaveAsNewViewButton: string;
    Toolbar: string;
    ".accessToken": string;
    ".driveAccessToken": string;
    ".driveUrl": string;
    ".driveAccessTokenV21": string;
    ".driveUrlV21": string;
    ".mediaBaseUrl": string;
    ".mediaBaseUrlSecondary": string;
    ".pushChannelBaseUrl": string;
    ".callerStack": string;
    ".correlationId": string;
    ".transformUrl": string;
    ".thumbnailUrl": string;
    ".videoManifestUrl": string;
    ".pdfConversionUrl": string;
    ".officeBundleGenerate": string;
    ".officeBundleGetFragment": string;
}
export interface IParentInfo {
    ParentFolderInfo: IParentFolderInfo[];
}
export interface IParentFolderInfo {
    ServerRelativeUrl: string;
    Permissions: string;
}
export interface ITemplates {
}
export interface IViewMetadata {
    Id: string;
    ListViewXml: string;
    Paged: boolean;
    RowLimit: number;
    ServerRelativeUrl: string;
    Title: string;
    TabularView: boolean;
    ViewType: string;
}
export interface IGetListDataAsStreamRequest {
    parameters: {
        RenderOptions: number;
        ViewXml: string;
        AllowMultipleValueFilterForTaxonomyFields: boolean;
    };
}
export interface IDimensions {
    width: number;
    height: number;
}
//# sourceMappingURL=IOneDriveService.d.ts.map