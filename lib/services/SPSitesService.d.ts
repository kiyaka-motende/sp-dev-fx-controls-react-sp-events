import { BaseComponentContext } from '@microsoft/sp-component-base';
import { ISite } from '../controls/sitePicker/ISitePicker';
export declare const getAllSites: (ctx: BaseComponentContext, includeWebs: boolean, currentSiteCollectionOnly: boolean, trimDuplicates: boolean, additionaQuery?: string | undefined) => Promise<ISite[]>;
export declare const getHubSites: (ctx: BaseComponentContext) => Promise<ISite[]>;
//# sourceMappingURL=SPSitesService.d.ts.map