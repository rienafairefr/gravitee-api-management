/**
 * Gravitee.io Portal Rest API
 * API dedicated to the devportal part of Gravitee
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: contact@graviteesource.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { ApiInformation } from '../model/apiInformation';
import { CategoriesResponse } from '../model/categoriesResponse';
import { Category } from '../model/category';
import { ConfigurationApplicationRolesResponse } from '../model/configurationApplicationRolesResponse';
import { ConfigurationApplicationTypesResponse } from '../model/configurationApplicationTypesResponse';
import { ConfigurationIdentitiesResponse } from '../model/configurationIdentitiesResponse';
import { ConfigurationResponse } from '../model/configurationResponse';
import { Dashboard } from '../model/dashboard';
import { ErrorResponse } from '../model/errorResponse';
import { IdentityProvider } from '../model/identityProvider';
import { Info } from '../model/info';
import { LinksResponse } from '../model/linksResponse';
import { Page } from '../model/page';
import { PagesResponse } from '../model/pagesResponse';
import { ThemeResponse } from '../model/themeResponse';
import { TicketInput } from '../model/ticketInput';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


export interface CreateTicketRequestParams {
    TicketInput?: TicketInput;
}

export interface GetApiInformationsRequestParams {
    apiId: string;
}

export interface GetCategoriesRequestParams {
    page?: number;
    size?: number;
}

export interface GetCategoryByCategoryIdRequestParams {
    categoryId: string;
}

export interface GetPageByPageIdRequestParams {
    pageId: string;
    include?: Array<'content'>;
}

export interface GetPageContentByPageIdRequestParams {
    pageId: string;
}

export interface GetPagesRequestParams {
    page?: number;
    size?: number;
    homepage?: boolean;
    parent?: string;
}

export interface GetPictureByCategoryIdRequestParams {
    categoryId: string;
}

export interface GetPortalIdentityProviderRequestParams {
    identityProviderId: string;
}


@Injectable({
  providedIn: 'root'
})
export class PortalService {

    protected basePath = 'http://localhost:8083/portal/environments/DEFAULT';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }



    /**
     * Create a ticket.
     * Create a ticket. This ticket can aim :   * a specific application   * a specific API   * the gravitee portal  User must be authenticated to use this service. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createTicket(requestParameters: CreateTicketRequestParams, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createTicket(requestParameters: CreateTicketRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createTicket(requestParameters: CreateTicketRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createTicket(requestParameters: CreateTicketRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const TicketInput = requestParameters.TicketInput;

        let headers = this.defaultHeaders;

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (CookieAuth) required
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.configuration.basePath}/tickets`,
            TicketInput,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the api dynamic informations to display.
     * Get api informations. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getApiInformations(requestParameters: GetApiInformationsRequestParams, observe?: 'body', reportProgress?: boolean): Observable<Array<ApiInformation>>;
    public getApiInformations(requestParameters: GetApiInformationsRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ApiInformation>>>;
    public getApiInformations(requestParameters: GetApiInformationsRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ApiInformation>>>;
    public getApiInformations(requestParameters: GetApiInformationsRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const apiId = requestParameters.apiId;
        if (apiId === null || apiId === undefined) {
            throw new Error('Required parameter apiId was null or undefined when calling getApiInformations.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Array<ApiInformation>>(`${this.configuration.basePath}/apis/${encodeURIComponent(String(apiId))}/informations`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the application roles list.
     * Get application roles. 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getApplicationRoles(observe?: 'body', reportProgress?: boolean): Observable<ConfigurationApplicationRolesResponse>;
    public getApplicationRoles(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ConfigurationApplicationRolesResponse>>;
    public getApplicationRoles(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ConfigurationApplicationRolesResponse>>;
    public getApplicationRoles(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<ConfigurationApplicationRolesResponse>(`${this.configuration.basePath}/configuration/applications/roles`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get a Category list
     * Get all categories of the platform. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCategories(requestParameters: GetCategoriesRequestParams, observe?: 'body', reportProgress?: boolean): Observable<CategoriesResponse>;
    public getCategories(requestParameters: GetCategoriesRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CategoriesResponse>>;
    public getCategories(requestParameters: GetCategoriesRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CategoriesResponse>>;
    public getCategories(requestParameters: GetCategoriesRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const page = requestParameters.page;
        const size = requestParameters.size;

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<CategoriesResponse>(`${this.configuration.basePath}/categories`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get a Category
     * Get a specific category. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCategoryByCategoryId(requestParameters: GetCategoryByCategoryIdRequestParams, observe?: 'body', reportProgress?: boolean): Observable<Category>;
    public getCategoryByCategoryId(requestParameters: GetCategoryByCategoryIdRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Category>>;
    public getCategoryByCategoryId(requestParameters: GetCategoryByCategoryIdRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Category>>;
    public getCategoryByCategoryId(requestParameters: GetCategoryByCategoryIdRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const categoryId = requestParameters.categoryId;
        if (categoryId === null || categoryId === undefined) {
            throw new Error('Required parameter categoryId was null or undefined when calling getCategoryByCategoryId.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Category>(`${this.configuration.basePath}/categories/${encodeURIComponent(String(categoryId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get a Dashboards list
     * Get all dashboards of the platform. 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDashboards(observe?: 'body', reportProgress?: boolean): Observable<Array<Dashboard>>;
    public getDashboards(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Dashboard>>>;
    public getDashboards(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Dashboard>>>;
    public getDashboards(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Array<Dashboard>>(`${this.configuration.basePath}/dashboards`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the application types list.
     * Get enabled application types. 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getEnabledApplicationTypes(observe?: 'body', reportProgress?: boolean): Observable<ConfigurationApplicationTypesResponse>;
    public getEnabledApplicationTypes(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ConfigurationApplicationTypesResponse>>;
    public getEnabledApplicationTypes(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ConfigurationApplicationTypesResponse>>;
    public getEnabledApplicationTypes(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<ConfigurationApplicationTypesResponse>(`${this.configuration.basePath}/configuration/applications/types`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get a portal page
     * Get a specific portal documentation page. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPageByPageId(requestParameters: GetPageByPageIdRequestParams, observe?: 'body', reportProgress?: boolean): Observable<Page>;
    public getPageByPageId(requestParameters: GetPageByPageIdRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Page>>;
    public getPageByPageId(requestParameters: GetPageByPageIdRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Page>>;
    public getPageByPageId(requestParameters: GetPageByPageIdRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const pageId = requestParameters.pageId;
        if (pageId === null || pageId === undefined) {
            throw new Error('Required parameter pageId was null or undefined when calling getPageByPageId.');
        }
        const include = requestParameters.include;

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (include) {
            include.forEach((element) => {
                queryParameters = queryParameters.append('include', <any>element);
            })
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Page>(`${this.configuration.basePath}/pages/${encodeURIComponent(String(pageId))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the content of a portal page.
     * Get the contentn of a specific portal documentation page. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPageContentByPageId(requestParameters: GetPageContentByPageIdRequestParams, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public getPageContentByPageId(requestParameters: GetPageContentByPageIdRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public getPageContentByPageId(requestParameters: GetPageContentByPageIdRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public getPageContentByPageId(requestParameters: GetPageContentByPageIdRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const pageId = requestParameters.pageId;
        if (pageId === null || pageId === undefined) {
            throw new Error('Required parameter pageId was null or undefined when calling getPageContentByPageId.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<string>(`${this.configuration.basePath}/pages/${encodeURIComponent(String(pageId))}/content`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List portal pages
     * List all portal documentation pages 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPages(requestParameters: GetPagesRequestParams, observe?: 'body', reportProgress?: boolean): Observable<PagesResponse>;
    public getPages(requestParameters: GetPagesRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PagesResponse>>;
    public getPages(requestParameters: GetPagesRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PagesResponse>>;
    public getPages(requestParameters: GetPagesRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const page = requestParameters.page;
        const size = requestParameters.size;
        const homepage = requestParameters.homepage;
        const parent = requestParameters.parent;

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (homepage !== undefined && homepage !== null) {
            queryParameters = queryParameters.set('homepage', <any>homepage);
        }
        if (parent !== undefined && parent !== null) {
            queryParameters = queryParameters.set('parent', <any>parent);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<PagesResponse>(`${this.configuration.basePath}/pages`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get picture of a Category
     * Get the picture of a category. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPictureByCategoryId(requestParameters: GetPictureByCategoryIdRequestParams, observe?: 'body', reportProgress?: boolean): Observable<Blob>;
    public getPictureByCategoryId(requestParameters: GetPictureByCategoryIdRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Blob>>;
    public getPictureByCategoryId(requestParameters: GetPictureByCategoryIdRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Blob>>;
    public getPictureByCategoryId(requestParameters: GetPictureByCategoryIdRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const categoryId = requestParameters.categoryId;
        if (categoryId === null || categoryId === undefined) {
            throw new Error('Required parameter categoryId was null or undefined when calling getPictureByCategoryId.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'image/_*',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get(`${this.configuration.basePath}/categories/${encodeURIComponent(String(categoryId))}/picture`,
            {
                responseType: "blob",
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get portal configuration.
     * Get all the portal configuration from the platform settings. 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPortalConfiguration(observe?: 'body', reportProgress?: boolean): Observable<ConfigurationResponse>;
    public getPortalConfiguration(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ConfigurationResponse>>;
    public getPortalConfiguration(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ConfigurationResponse>>;
    public getPortalConfiguration(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<ConfigurationResponse>(`${this.configuration.basePath}/configuration`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get an identity provider.
     * Get a specific identity provider by its id. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPortalIdentityProvider(requestParameters: GetPortalIdentityProviderRequestParams, observe?: 'body', reportProgress?: boolean): Observable<IdentityProvider>;
    public getPortalIdentityProvider(requestParameters: GetPortalIdentityProviderRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<IdentityProvider>>;
    public getPortalIdentityProvider(requestParameters: GetPortalIdentityProviderRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IdentityProvider>>;
    public getPortalIdentityProvider(requestParameters: GetPortalIdentityProviderRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const identityProviderId = requestParameters.identityProviderId;
        if (identityProviderId === null || identityProviderId === undefined) {
            throw new Error('Required parameter identityProviderId was null or undefined when calling getPortalIdentityProvider.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<IdentityProvider>(`${this.configuration.basePath}/configuration/identities/${encodeURIComponent(String(identityProviderId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the identity provider list.
     * Get all the identity providers that can used in the portal. 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPortalIdentityProviders(observe?: 'body', reportProgress?: boolean): Observable<ConfigurationIdentitiesResponse>;
    public getPortalIdentityProviders(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ConfigurationIdentitiesResponse>>;
    public getPortalIdentityProviders(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ConfigurationIdentitiesResponse>>;
    public getPortalIdentityProviders(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<ConfigurationIdentitiesResponse>(`${this.configuration.basePath}/configuration/identities`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get portal information.
     * Get some information about the portal (version, ...). 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPortalInformation(observe?: 'body', reportProgress?: boolean): Observable<Info>;
    public getPortalInformation(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Info>>;
    public getPortalInformation(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Info>>;
    public getPortalInformation(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Info>(`${this.configuration.basePath}/info`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the portal links for header and footer.
     * Get all the links (internal and external) to be displayed in the header and in the footer of the portal. 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPortalLinks(observe?: 'body', reportProgress?: boolean): Observable<LinksResponse>;
    public getPortalLinks(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LinksResponse>>;
    public getPortalLinks(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LinksResponse>>;
    public getPortalLinks(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<LinksResponse>(`${this.configuration.basePath}/configuration/links`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get portal theme.
     * Get portal theme. 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPortalTheme(observe?: 'body', reportProgress?: boolean): Observable<ThemeResponse>;
    public getPortalTheme(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ThemeResponse>>;
    public getPortalTheme(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ThemeResponse>>;
    public getPortalTheme(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<ThemeResponse>(`${this.configuration.basePath}/theme`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
