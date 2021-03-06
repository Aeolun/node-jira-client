/// <reference types="node" />
import { AxiosInstance, AxiosRequestConfig } from "axios";
interface MakeUrlParams {
    pathname?: string;
    query?: Record<string, any>;
    intermediatePath?: string;
    encode?: boolean;
}
interface MakeSprintUrlParams {
    pathname?: string;
    query?: Record<string, any>;
    intermediatePath?: string;
}
export interface JiraApiOptions {
    protocol: 'http' | 'https';
    host: string;
    port?: number;
    apiVersion?: 1 | 2;
    base?: string;
    intermediatePath?: string;
    webHookVersion?: string;
    greenhopperVersion?: string;
    baseOptions?: AxiosRequestConfig;
    axios?: AxiosInstance;
    strictSSL?: boolean;
    oauth?: {
        consumer_key: string;
        access_token: string;
        consumer_secret: string;
        access_token_secret: string;
        signature_method: string;
    };
    bearer?: string;
    timeout?: number;
    username?: string;
    password?: string;
}
/**
 * @name JiraApi
 * @class
 * Wrapper for the JIRA Rest Api
 * https://docs.atlassian.com/jira/REST/6.4.8/
 */
export default class JiraApi {
    protocol: string;
    host: string;
    port: number;
    apiVersion: number;
    base: string;
    intermediatePath: string;
    strictSSL: any;
    axios: AxiosInstance;
    webhookVersion: string;
    greenhopperVersion: string;
    baseOptions: AxiosRequestConfig;
    /**
     * @constructor
     * @function
     * @param {JiraApiOptions} options
     */
    constructor(options: JiraApiOptions);
    /**
     * @typedef JiraApiOptions
     * @type {object}
     * @property {string} [protocol=http] - What protocol to use to connect to
     * jira? Ex: http|https
     * @property {string} host - What host is this tool connecting to for the jira
     * instance? Ex: jira.somehost.com
     * @property {string} [port] - What port is this tool connecting to jira with? Only needed for
     * none standard ports. Ex: 8080, 3000, etc
     * @property {string} [username] - Specify a username for this tool to authenticate all
     * requests with.
     * @property {string} [password] - Specify a password for this tool to authenticate all
     * requests with. Cloud users need to generate an [API token](https://confluence.atlassian.com/cloud/api-tokens-938839638.html) for this value.
     * @property {string} [apiVersion=2] - What version of the jira rest api is the instance the
     * tool is connecting to?
     * @property {string} [base] - What other url parts exist, if any, before the rest/api/
     * section?
     * @property {string} [intermediatePath] - If specified, overwrites the default rest/api/version
     * section of the uri
     * @property {boolean} [strictSSL=true] - Does this tool require each request to be
     * authenticated?  Defaults to true.
     * @property {function} [request] - What method does this tool use to make its requests?
     * Defaults to request from request-promise
     * @property {number} [timeout] - Integer containing the number of milliseconds to wait for a
     * server to send response headers (and start the response body) before aborting the request. Note
     * that if the underlying TCP connection cannot be established, the OS-wide TCP connection timeout
     * will overrule the timeout option ([the default in Linux can be anywhere from 20-120 *
     * seconds](http://www.sekuda.com/overriding_the_default_linux_kernel_20_second_tcp_socket_connect_timeout)).
     * @property {string} [webhookVersion=1.0] - What webhook version does this api wrapper need to
     * hit?
     * @property {string} [greenhopperVersion=1.0] - What webhook version does this api wrapper need
     * to hit?
     * @property {string} [ca] - Specify a CA certificate
     * @property {OAuth} [oauth] - Specify an OAuth object for this tool to authenticate all requests
     * using OAuth.
     * @property {string} [bearer] - Specify an OAuth bearer token to authenticate all requests with.
     */
    /**
     * @typedef OAuth
     * @type {object}
     * @property {string} consumer_key - The consumer entered in Jira Preferences.
     * @property {string} consumer_secret - The private RSA file.
     * @property {string} access_token - The generated access token.
     * @property {string} access_token_secret - The generated access toke secret.
     * @property {string} signature_method [signature_method=RSA-SHA1] - OAuth signurate methode
     * Possible values RSA-SHA1, HMAC-SHA1, PLAINTEXT. Jira Cloud supports only RSA-SHA1.
     */
    /**
     *  @typedef {object} UriOptions
     *  @property {string} pathname - The url after the specific functions path
     *  @property {object} [query] - An object of all query parameters
     *  @property {string} [intermediatePath] - Overwrites with specified path
     */
    /**
     * @name makeRequestHeader
     * @function
     * Creates a requestOptions object based on the default template for one
     * @param {string} uri
     * @param {object} [options] - an object containing fields and formatting how the
     */
    makeRequestHeader(url: any, options?: AxiosRequestConfig): AxiosRequestConfig;
    /**
     * @typedef makeRequestHeaderOptions
     * @type {object}
     * @property {string} [method] - HTTP Request Method. ie GET, POST, PUT, DELETE
     */
    /**
     * @name makeUri
     * @function
     * Creates a URI object for a given pathname
     * @param {object} [options] - an object containing path information
     */
    makeUri({ pathname, query, intermediatePath, encode, }: MakeUrlParams): string;
    /**
     * @typedef makeUriOptions
     * @type {object}
     * @property {string} pathname - The url after the /rest/api/version
     * @property {object} query - a query object
     * @property {string} intermediatePath - If specified will overwrite the /rest/api/version section
     */
    /**
     * @name makeWebhookUri
     * @function
     * Creates a URI object for a given pathName
     * @param {object} [options] - An options object specifying uri information
     */
    makeWebhookUri({ pathname, intermediatePath, }: {
        pathname?: string;
        intermediatePath?: string;
    }): string;
    /**
     * @typedef makeWebhookUriOptions
     * @type {object}
     * @property {string} pathname - The url after the /rest/webhooks
     * @property {string} intermediatePath - If specified will overwrite the /rest/webhooks section
     */
    /**
     * @name makeSprintQueryUri
     * @function
     * Creates a URI object for a given pathName
     * @param {object} [options] - The url after the /rest/
     */
    makeSprintQueryUri({ pathname, query, intermediatePath, }: MakeSprintUrlParams): string;
    /**
     * @typedef makeSprintQueryUriOptions
     * @type {object}
     * @property {string} pathname - The url after the /rest/api/version
     * @property {object} query - a query object
     * @property {string} intermediatePath - will overwrite the /rest/greenhopper/version section
     */
    /**
     * @typedef makeDevStatusUri
     * @function
     * Creates a URI object for a given pathname
     * @arg {pathname, query, intermediatePath} obj1
     * @param {string} pathname obj1.pathname - The url after the /rest/api/version
     * @param {object} query obj1.query - a query object
     * @param {string} intermediatePath obj1.intermediatePath - If specified will overwrite the
     * /rest/dev-status/latest/issue/detail section
     */
    makeDevStatusUri({ pathname, query, intermediatePath, }: {
        pathname?: string;
        query?: Record<string, any>;
        intermediatePath?: string;
    }): string;
    /**
     * @name makeAgile1Uri
     * @function
     * Creates a URI object for a given pathname
     * @param {UriOptions} object
     */
    makeAgileUri(object: any): string;
    /**
     * @name doRequest
     * @function
     * Does a request based on the requestOptions object
     * @param {object} requestOptions - fields on this object get posted as a request header for
     * requests to jira
     */
    doRequest<T>(requestOptions: AxiosRequestConfig): Promise<T>;
    doPlainRequest<T>(requestOptions: AxiosRequestConfig): Promise<import("axios").AxiosResponse<T>>;
    /**
     * @name findIssue
     * @function
     * Find an issue in jira
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290709)
     * @param {string} issueNumber - The issue number to search for including the project key
     * @param {string} expand - The resource expansion to return additional fields in the response
     * @param {string} fields - Comma separated list of field ids or keys to retrieve
     * @param {string} properties - Comma separated list of properties to retrieve
     * @param {boolean} fieldsByKeys - False by default, used to retrieve fields by key instead of id
     */
    findIssue(issueNumber: string, expand?: string, fields?: string, properties?: string, fieldsByKeys?: boolean): Promise<any>;
    /**
     * @name downloadUserAvatar
     * @function
     * Download an avatar
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290709)
     * @param {number} avatarId - The avatar to download
     */
    downloadUserAvatar(ownerId: string, avatarId: number): Promise<{
        mimeType: string;
        content: Buffer;
    }>;
    /**
     * @name downloadAvatar
     * @function
     * Download an avatar
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290709)
     * @param avatarType
     * @param {number} avatarId - The avatar to download
     */
    downloadAvatar(avatarType: string, avatarId: number): Promise<{
        mimeType: string;
        content: Buffer;
    }>;
    /**
     * @name downloadAttachment
     * @function
     * Download an attachment
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id288524)
     * @param {object} attachment - the attachment
     */
    downloadAttachment(attachment: any): Promise<Buffer>;
    /**
     * @name getUnresolvedIssueCount
     * @function
     * Get the unresolved issue count
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id288524)
     * @param {string} version - the version of your product you want to find the unresolved
     * issues of.
     */
    getUnresolvedIssueCount(version: any): Promise<any>;
    /**
     * @name getProject
     * @function
     * Get the Project by project key
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id289232)
     * @param {string} project - key for the project
     */
    getProject(project: any): Promise<unknown>;
    /**
     * @name createProject
     * @function
     * Create a new Project
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#api/2/project-createProject)
     * @param {object} project - with specs
     */
    createProject(project: any): Promise<unknown>;
    /** Find the Rapid View for a specified project
     * @name findRapidView
     * @function
     * @param {string} projectName - name for the project
     */
    findRapidView(projectName: any): Promise<any>;
    /** Get the most recent sprint for a given rapidViewId
     * @name getLastSprintForRapidView
     * @function
     * @param {string} rapidViewId - the id for the rapid view
     */
    getLastSprintForRapidView(rapidViewId: any): Promise<any>;
    /** Get the issues for a rapidView / sprint
     * @name getSprintIssues
     * @function
     * @param {string} rapidViewId - the id for the rapid view
     * @param {string} sprintId - the id for the sprint
     */
    getSprintIssues(rapidViewId: any, sprintId: any): Promise<any>;
    /** Get a list of Sprints belonging to a Rapid View
     * @name listSprints
     * @function
     * @param {string} rapidViewId - the id for the rapid view
     */
    listSprints(rapidViewId: any): Promise<any>;
    /** Add an issue to the project's current sprint
     * @name addIssueToSprint
     * @function
     * @param {string} issueId - the id of the existing issue
     * @param {string} sprintId - the id of the sprint to add it to
     */
    addIssueToSprint(issueId: any, sprintId: any): Promise<any>;
    /** Create an issue link between two issues
     * @name issueLink
     * @function
     * @param {object} link - a link object formatted how the Jira API specifies
     */
    issueLink(link: any): Promise<any>;
    /** List all issue link types jira knows about
     * [Jira Doc](https://docs.atlassian.com/software/jira/docs/api/REST/8.5.0/#api/2/issueLinkType-getIssueLinkTypes)
     * @name listIssueLinkTypes
     * @function
     */
    listIssueLinkTypes(): Promise<any>;
    /** Retrieves the remote links associated with the given issue.
     * @name getRemoteLinks
     * @function
     * @param {string} issueNumber - the issue number to find remote links for.
     */
    getRemoteLinks(issueNumber: any): Promise<any>;
    /**
     * @name createRemoteLink
     * @function
     * Creates a remote link associated with the given issue.
     * @param {string} issueNumber - The issue number to create the remotelink under
     * @param {object} remoteLink - the remotelink object as specified by the Jira API
     */
    createRemoteLink(issueNumber: any, remoteLink: any): Promise<any>;
    /** Get Versions for a project
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id289653)
     * @name getVersions
     * @function
     * @param {string} project - A project key to get versions for
     */
    getVersions(project: any): Promise<any>;
    /** Get details of single Version in project
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/version-getVersion)
     * @name getVersion
     * @function
     * @param {string} version - The id of this version
     */
    getVersion(version: any): Promise<any>;
    /** Create a version
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id288232)
     * @name createVersion
     * @function
     * @param {object} version - an object of the new version
     */
    createVersion(version: any): Promise<any>;
    /** Update a version
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#d2e510)
     * @name updateVersion
     * @function
     * @param {object} version - an new object of the version to update
     */
    updateVersion(version: any): Promise<any>;
    /** Delete a version
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#api/2/version-delete)
     * @name deleteVersion
     * @function
     * @param {string} versionId - the ID of the version to delete
     * @param {string} moveFixIssuesToId - when provided, existing fixVersions will be moved
     *                 to this ID. Otherwise, the deleted version will be removed from all
     *                 issue fixVersions.
     * @param {string} moveAffectedIssuesToId - when provided, existing affectedVersions will
     *                 be moved to this ID. Otherwise, the deleted version will be removed
     *                 from all issue affectedVersions.
     */
    deleteVersion(versionId: any, moveFixIssuesToId: any, moveAffectedIssuesToId: any): Promise<any>;
    /** Move version
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/version-moveVersion)
     * @name moveVersion
     * @function
     * @param {string} versionId - the ID of the version to delete
     * @param {string} position - an object of the new position
     */
    moveVersion(versionId: any, position: any): Promise<any>;
    /** Pass a search query to Jira
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#d2e4424)
     * @name searchJira
     * @function
     * @param {string} searchString - jira query string in JQL
     * @param {object} optional - object containing any of the following properties
     * @param {integer} [optional.startAt=0]: optional starting index number
     * @param {integer} [optional.maxResults=50]: optional The maximum number of items to
     *                  return per page. To manage page size, Jira may return fewer items per
     *                  page where a large number of fields are requested.
     * @param {array} [optional.fields]: optional array of string names of desired fields
     * @param {array} [optional.expand]: optional array of string names of desired expand nodes
     */
    searchJira(searchString: any, optional?: {}): Promise<any>;
    /** Create a Jira user
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/user-createUser)
     * @name createUser
     * @function
     * @param {object} user - Properly Formatted User object
     */
    createUser(user: any): Promise<any>;
    /** Search user on Jira
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#d2e3756)
     * @name searchUsers
     * @function
     * @param {SearchUserOptions} options
     */
    searchUsers({ username, query, startAt, maxResults, includeActive, includeInactive, }: {
        username: any;
        query: any;
        startAt: any;
        maxResults: any;
        includeActive: any;
        includeInactive: any;
    }): Promise<any>;
    /**
     * @typedef SearchUserOptions
     * @type {object}
     * @property {string} username - (DEPRECATED) A query string used to search username, name or
     * e-mail address
     * @property {string} query - A query string that is matched against user attributes
     * (displayName, and emailAddress) to find relevant users. The string can match the prefix of
     * the attribute's value. For example, query=john matches a user with a displayName of John
     * Smith and a user with an emailAddress of johnson@example.com. Required, unless accountId
     * or property is specified.
     * @property {integer} [startAt=0] - The index of the first user to return (0-based)
     * @property {integer} [maxResults=50] - The maximum number of users to return
     * @property {boolean} [includeActive=true] - If true, then active users are included
     * in the results
     * @property {boolean} [includeInactive=false] - If true, then inactive users
     * are included in the results
     */
    /** Get all users in group on Jira
     * @name getUsersInGroup
     * @function
     * @param {string} groupname - A query string used to search users in group
     * @param {integer} [startAt=0] - The index of the first user to return (0-based)
     * @param {integer} [maxResults=50] - The maximum number of users to return (defaults to 50).
     */
    getUsersInGroup(groupname: any, startAt?: number, maxResults?: number): Promise<any>;
    /** Get issues related to a user
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id296043)
     * @name getUsersIssues
     * @function
     * @param {string} username - username of user to search for
     * @param {boolean} open - determines if only open issues should be returned
     */
    getUsersIssues(username: any, open: any): Promise<any>;
    /** Returns a user.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-user-get)
     * @name getUser
     * @function
     * @param {string} accountId - The accountId of user to search for
     * @param {string} expand - The expand for additional info (groups,applicationRoles)
     */
    getUser(accountId: any, expand: any): Promise<any>;
    /** Returns a list of all (active and inactive) users.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-users-search-get)
     * @name getUsers
     * @function
     * @param {integer} [startAt=0] - The index of the first user to return (0-based)
     * @param {integer} [maxResults=50] - The maximum number of users to return (defaults to 50).
     */
    getUsers(startAt?: number, maxResults?: number): Promise<any>;
    /** Add issue to Jira
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290028)
     * @name addNewIssue
     * @function
     * @param {object} issue - Properly Formatted Issue object
     */
    addNewIssue(issue: any): Promise<any>;
    /** Add a user as a watcher on an issue
     * @name addWatcher
     * @function
     * @param {string} issueKey - the key of the existing issue
     * @param {string} username - the jira username to add as a watcher to the issue
     */
    addWatcher(issueKey: any, username: any): Promise<any>;
    /** Change an assignee on an issue
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/issue-assign)
     * @name assignee
     * @function
     * @param {string} issueKey - the key of the existing issue
     * @param {string} assigneeName - the jira username to add as a new assignee to the issue
     */
    updateAssignee(issueKey: any, assigneeName: any): Promise<any>;
    /** Change an assignee on an issue
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v2/#api-rest-api-2-issue-issueIdOrKey-assignee-put)
     * @name updateAssigneeWithId
     * @function
     * @param {string} issueKey - the key of the existing issue
     * @param {string} userId - the jira username to add as a new assignee to the issue
     */
    updateAssigneeWithId(issueKey: any, userId: any): Promise<any>;
    /** Delete issue from Jira
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290791)
     * @name deleteIssue
     * @function
     * @param {string} issueId - the Id of the issue to delete
     */
    deleteIssue(issueId: any): Promise<any>;
    /** Update issue in Jira
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290878)
     * @name updateIssue
     * @function
     * @param {string} issueId - the Id of the issue to update
     * @param {object} issueUpdate - update Object as specified by the rest api
     * @param {object} query - adds parameters to the query string
     */
    updateIssue(issueId: any, issueUpdate: any, query?: {}): Promise<any>;
    /** Get issue edit metadata
     * [Jira Doc](https://docs.atlassian.com/software/jira/docs/api/REST/7.6.1/#api/2/issue-getEditIssueMeta)
     * @name issueEditMeta
     * @function
     * @param {string} issueId - the Id of the issue to retrieve edit metadata for
     */
    issueEditMeta(issueId: any): Promise<any>;
    /** List Components
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290489)
     * @name listComponents
     * @function
     * @param {string} project - key for the project
     */
    listComponents(project: any): Promise<any>;
    /** Add component to Jira
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290028)
     * @name addNewComponent
     * @function
     * @param {object} component - Properly Formatted Component
     */
    addNewComponent(component: any): Promise<any>;
    /** Update Jira component
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#api/2/component-updateComponent)
     * @name updateComponent
     * @function
     * @param {string} componentId - the Id of the component to update
     * @param {object} component - Properly Formatted Component
     */
    updateComponent(componentId: any, component: any): Promise<any>;
    /** Delete component from Jira
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v2/#api-api-2-component-id-delete)
     * @name deleteComponent
     * @function
     * @param {string} id - The ID of the component.
     * @param {string} moveIssuesTo - The ID of the component to replace the deleted component.
     *                                If this value is null no replacement is made.
     */
    deleteComponent(id: any, moveIssuesTo: any): Promise<any>;
    /** Get count of issues assigned to the component.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v2/#api-rest-api-2-component-id-relatedIssueCounts-get)
     * @name relatedIssueCounts
     * @function
     * @param {string} id - Component Id.
     */
    relatedIssueCounts(id: any): Promise<any>;
    /** Create custom Jira field
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#api/2/field-createCustomField)
     * @name createCustomField
     * @function
     * @param {object} field - Properly formatted Field object
     */
    createCustomField(field: any): Promise<any>;
    /** List all fields custom and not that jira knows about.
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290489)
     * @name listFields
     * @function
     */
    listFields(): Promise<any>;
    /** Add an option for a select list issue field.
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#api/2/field/{fieldKey}/option-createOption)
     * @name createFieldOption
     * @function
     * @param {string} fieldKey - the key of the select list field
     * @param {object} option - properly formatted Option object
     */
    createFieldOption(fieldKey: any, option: any): Promise<any>;
    /** Returns all options defined for a select list issue field.
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#api/2/field/{fieldKey}/option-getAllOptions)
     * @name listFieldOptions
     * @function
     * @param {string} fieldKey - the key of the select list field
     */
    listFieldOptions(fieldKey: any): Promise<any>;
    /** Creates or updates an option for a select list issue field.
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#api/2/field/{fieldKey}/option-putOption)
     * @name upsertFieldOption
     * @function
     * @param {string} fieldKey - the key of the select list field
     * @param {string} optionId - the id of the modified option
     * @param {object} option - properly formatted Option object
     */
    upsertFieldOption(fieldKey: any, optionId: any, option: any): Promise<any>;
    /** Returns an option for a select list issue field.
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#api/2/field/{fieldKey}/option-getOption)
     * @name getFieldOption
     * @function
     * @param {string} fieldKey - the key of the select list field
     * @param {string} optionId - the id of the option
     */
    getFieldOption(fieldKey: any, optionId: any): Promise<any>;
    /** Deletes an option from a select list issue field.
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#api/2/field/{fieldKey}/option-delete)
     * @name deleteFieldOption
     * @function
     * @param {string} fieldKey - the key of the select list field
     * @param {string} optionId - the id of the deleted option
     */
    deleteFieldOption(fieldKey: any, optionId: any): Promise<any>;
    /**
     * @name getIssueProperty
     * @function
     * Get Property of Issue by Issue and Property Id
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/issue/{issueIdOrKey}/properties-getProperty)
     * @param {string} issueNumber - The issue number to search for including the project key
     * @param {string} property - The property key to search for
     */
    getIssueProperty(issueNumber: any, property: any): Promise<any>;
    /**
     * @name getIssueChangelog
     * @function
     * List all changes for an issue, sorted by date, starting from the latest
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/issue/{issueIdOrKey}/changelog)
     * @param {string} issueNumber - The issue number to search for including the project key
     * @param {integer} [startAt=0] - optional starting index number
     * @param {integer} [maxResults=50] - optional ending index number
     */
    getIssueChangelog(issueNumber: any, startAt?: number, maxResults?: number): Promise<any>;
    /**
     * @name getIssueWatchers
     * @function
     * List all watchers for an issue
     * [Jira Doc](http://docs.atlassian.com/jira/REST/cloud/#api/2/issue-getIssueWatchers)
     * @param {string} issueNumber - The issue number to search for including the project key
     */
    getIssueWatchers(issueNumber: any): Promise<any>;
    /** List all priorities jira knows about
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290489)
     * @name listPriorities
     * @function
     */
    listPriorities(): Promise<any>;
    /** List Transitions for a specific issue that are available to the current user
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290489)
     * @name listTransitions
     * @function
     * @param {string} issueId - get transitions available for the issue
     */
    listTransitions(issueId: any): Promise<any>;
    /** Transition issue in Jira
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id290489)
     * @name transitionsIssue
     * @function
     * @param {string} issueId - the Id of the issue to delete
     * @param {object} issueTransition - transition object from the jira rest API
     */
    transitionIssue(issueId: any, issueTransition: any): Promise<any>;
    /** List all Viewable Projects
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id289193)
     * @name listProjects
     * @function
     */
    listProjects(): Promise<any>;
    /** Add a comment to an issue
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#id108798)
     * @name addComment
     * @function
     * @param {string} issueId - Issue to add a comment to
     * @param {string} comment - string containing comment
     */
    addComment(issueId: any, comment: any): Promise<any>;
    /** Add a comment to an issue, supports full comment object
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#id108798)
     * @name addCommentAdvanced
     * @function
     * @param {string} issueId - Issue to add a comment to
     * @param {object} comment - The object containing your comment data
     */
    addCommentAdvanced(issueId: any, comment: any): Promise<any>;
    /** Update comment for an issue
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/issue-updateComment)
     * @name updateComment
     * @function
     * @param {string} issueId - Issue with the comment
     * @param {string} commentId - Comment that is updated
     * @param {string} comment - string containing new comment
     * @param {object} [options={}] - extra options
     */
    updateComment(issueId: any, commentId: any, comment: any, options?: {}): Promise<any>;
    /**
     * @name getComments
     * @function
     * Get Comments by IssueId.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-comment-list-post)
     * @param {string} issueId - this issue this comment is on
     */
    getComments(issueId: any): Promise<any>;
    /**
     * @name getComment
     * @function
     * Get Comment by Id.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-comment-list-post)
     * @param {string} issueId - this issue this comment is on
     * @param {number} commentId - the id of the comment
     */
    getComment(issueId: any, commentId: any): Promise<any>;
    /**
     * @name deleteComment
     * @function
     * Delete Comments by Id.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-comment-list-post)
     * @param {string} issueId - this issue this comment is on
     * @param {number} commentId - the id of the comment
     */
    deleteComment(issueId: any, commentId: any): Promise<any>;
    /** Add a worklog to a project
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id291617)
     * @name addWorklog
     * @function
     * @param {string} issueId - Issue to add a worklog to
     * @param {object} worklog - worklog object from the rest API
     * @param {object} newEstimate - the new value for the remaining estimate field
     * @param {object} [options={}] - extra options
     */
    addWorklog(issueId: any, worklog: any, newEstimate?: any, options?: {}): Promise<any>;
    /** Get ids of worklogs modified since
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/worklog-getWorklogsForIds)
     * @name updatedWorklogs
     * @function
     * @param {number} since - a date time in unix timestamp format since when updated worklogs
     * will be returned.
     * @param {string} expand - ptional comma separated list of parameters to expand: properties
     * (provides worklog properties).
     */
    updatedWorklogs(since: any, expand: any): Promise<any>;
    /** Delete worklog from issue
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#d2e1673)
     * @name deleteWorklog
     * @function
     * @param {string} issueId - the Id of the issue to delete
     * @param {string} worklogId - the Id of the worklog in issue to delete
     */
    deleteWorklog(issueId: any, worklogId: any): Promise<any>;
    /** Deletes an issue link.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-issueLink-linkId-delete)
     * @name deleteIssueLink
     * @function
     * @param {string} linkId - the Id of the issue link to delete
     */
    deleteIssueLink(linkId: any): Promise<any>;
    /** Returns worklog details for a list of worklog IDs.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-worklog-list-post)
     * @name getWorklogs
     * @function
     * @param {array} worklogsIDs - a list of worklog IDs.
     * @param {string} expand - expand to include additional information about worklogs
     *
     */
    getWorklogs(worklogsIDs: any, expand: any): Promise<any>;
    /** Get worklogs list from a given issue
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-api-3-issue-issueIdOrKey-worklog-get)
     * @name getIssueWorklogs
     * @function
     * @param {string} issueId - the Id of the issue to find worklogs for
     * @param {integer} [startAt=0] - optional starting index number
     * @param {integer} [maxResults=1000] - optional ending index number
     */
    getIssueWorklogs(issueId: any, startAt?: number, maxResults?: number): Promise<any>;
    /** List all Issue Types jira knows about
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id295946)
     * @name listIssueTypes
     * @function
     */
    listIssueTypes(): Promise<any>;
    /** Register a webhook
     * [Jira Doc](https://developer.atlassian.com/display/JIRADEV/JIRA+Webhooks+Overview)
     * @name registerWebhook
     * @function
     * @param {object} webhook - properly formatted webhook
     */
    registerWebhook(webhook: any): Promise<any>;
    /** List all registered webhooks
     * [Jira Doc](https://developer.atlassian.com/display/JIRADEV/JIRA+Webhooks+Overview)
     * @name listWebhooks
     * @function
     */
    listWebhooks(): Promise<any>;
    /** Get a webhook by its ID
     * [Jira Doc](https://developer.atlassian.com/display/JIRADEV/JIRA+Webhooks+Overview)
     * @name getWebhook
     * @function
     * @param {string} webhookID - id of webhook to get
     */
    getWebhook(webhookID: any): Promise<any>;
    /** Delete a registered webhook
     * [Jira Doc](https://developer.atlassian.com/display/JIRADEV/JIRA+Webhooks+Overview)
     * @name issueLink
     * @function
     * @param {string} webhookID - id of the webhook to delete
     */
    deleteWebhook(webhookID: any): Promise<any>;
    /** Describe the currently authenticated user
     * [Jira Doc](http://docs.atlassian.com/jira/REST/latest/#id2e865)
     * @name getCurrentUser
     * @function
     */
    getCurrentUser(): Promise<any>;
    /** Retrieve the backlog of a certain Rapid View
     * @name getBacklogForRapidView
     * @function
     * @param {string} rapidViewId - rapid view id
     */
    getBacklogForRapidView(rapidViewId: any): Promise<any>;
    /** Add attachment to a Issue
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#api/2/issue/{issueIdOrKey}/attachments-addAttachment)
     * @name addAttachmentOnIssue
     * @function
     * @param {string} issueId - issue id
     * @param {object} readStream - readStream object from fs
     */
    addAttachmentOnIssue(issueId: any, readStream: any): Promise<any>;
    /** Notify people related to issue
     * [Jira Doc](https://docs.atlassian.com/jira/REST/cloud/#api/2/issue-notify)
     * @name issueNotify
     * @function
     * @param {string} issueId - issue id
     * @param {object} notificationBody - properly formatted body
     */
    issueNotify(issueId: any, notificationBody: any): Promise<any>;
    /** Get list of possible statuses
     * [Jira Doc](https://docs.atlassian.com/jira/REST/latest/#api/2/status-getStatuses)
     * @name listStatus
     * @function
     */
    listStatus(): Promise<any>;
    /** Get a Dev-Status summary by issue ID
     * @name getDevStatusSummary
     * @function
     * @param {string} issueId - id of issue to get
     */
    getDevStatusSummary(issueId: any): Promise<any>;
    /** Get a Dev-Status detail by issue ID
     * @name getDevStatusDetail
     * @function
     * @param {string} issueId - id of issue to get
     * @param {string} applicationType - type of application (stash, bitbucket)
     * @param {string} dataType - info to return (repository, pullrequest)
     */
    getDevStatusDetail(issueId: any, applicationType: any, dataType: any): Promise<any>;
    /** Get issue
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/issue-getIssue)
     * @name getIssue
     * @function
     * @param {string} issueIdOrKey - Id of issue
     * @param {string} [fields] - The list of fields to return for each issue.
     * @param {string} [expand] - A comma-separated list of the parameters to expand.
     */
    getIssue(issueIdOrKey: any, fields: any, expand: any): Promise<any>;
    /** Move issues to backlog
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/backlog-moveIssuesToBacklog)
     * @name moveToBacklog
     * @function
     * @param {array} issues - id or key of issues to get
     */
    moveToBacklog(issues: any): Promise<any>;
    /** Get all boards
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board-getAllBoards)
     * @name getAllBoards
     * @function
     * @param {number} [startAt=0] - The starting index of the returned boards.
     * @param {number} [maxResults=50] - The maximum number of boards to return per page.
     * @param {string} [type] - Filters results to boards of the specified type.
     * @param {string} [name] - Filters results to boards that match the specified name.
     * @param {string} [projectKeyOrId] - Filters results to boards that are relevant to a project.
     */
    getAllBoards(startAt: number, maxResults: number, type: any, name: any, projectKeyOrId: any): Promise<any>;
    /** Create Board
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board-createBoard)
     * @name createBoard
     * @function
     * @param {object} boardBody - Board name, type and filter Id is required.
     * @param {string} boardBody.type - Valid values: scrum, kanban
     * @param {string} boardBody.name - Must be less than 255 characters.
     * @param {string} boardBody.filterId - Id of a filter that the user has permissions to view.
     */
    createBoard(boardBody: any): Promise<any>;
    /** Get Board
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board-getBoard)
     * @name getBoard
     * @function
     * @param {string} boardId - Id of board to retrieve
     */
    getBoard(boardId: any): Promise<any>;
    /** Delete Board
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board-deleteBoard)
     * @name deleteBoard
     * @function
     * @param {string} boardId - Id of board to retrieve
     */
    deleteBoard(boardId: any): Promise<any>;
    /** Get issues for backlog
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board-getIssuesForBacklog)
     * @name getIssuesForBacklog
     * @function
     * @param {string} boardId - Id of board to retrieve
     * @param {number} [startAt=0] - The starting index of the returned issues. Base index: 0.
     * @param {number} [maxResults=50] - The maximum number of issues to return per page. Default: 50.
     * @param {string} [jql] - Filters results using a JQL query.
     * @param {boolean} [validateQuery] - Specifies whether to validate the JQL query or not.
     * Default: true.
     * @param {string} [fields] - The list of fields to return for each issue.
     */
    getIssuesForBacklog(boardId: any, startAt: number, maxResults: number, jql: any, validateQuery: boolean, fields: any): Promise<any>;
    /** Get Configuration
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board-getConfiguration)
     * @name getConfiguration
     * @function
     * @param {string} boardId - Id of board to retrieve
     */
    getConfiguration(boardId: any): Promise<any>;
    /** Get issues for board
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board-getIssuesForBoard)
     * @name getIssuesForBoard
     * @function
     * @param {string} boardId - Id of board to retrieve
     * @param {number} [startAt=0] - The starting index of the returned issues. Base index: 0.
     * @param {number} [maxResults=50] - The maximum number of issues to return per page. Default: 50.
     * @param {string} [jql] - Filters results using a JQL query.
     * @param {boolean} [validateQuery] - Specifies whether to validate the JQL query or not.
     * Default: true.
     * @param {string} [fields] - The list of fields to return for each issue.
     */
    getIssuesForBoard(boardId: any, startAt: number, maxResults: number, jql: any, validateQuery: boolean, fields: any): Promise<any>;
    /** Get issue estimation for board
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/issue-getIssueEstimationForBoard)
     * @name getIssueEstimationForBoard
     * @function
     * @param {string} issueIdOrKey - Id of issue
     * @param {number} boardId - The id of the board required to determine which field
     * is used for estimation.
     */
    getIssueEstimationForBoard(issueIdOrKey: any, boardId: any): Promise<any>;
    /** Get Epics
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/epic-getEpics)
     * @name getEpics
     * @function
     * @param {string} boardId - Id of board to retrieve
     * @param {number} [startAt=0] - The starting index of the returned epics. Base index: 0.
     * @param {number} [maxResults=50] - The maximum number of epics to return per page. Default: 50.
     * @param {string} [done] - Filters results to epics that are either done or not done.
     * Valid values: true, false.
     */
    getEpics(boardId: any, startAt: number, maxResults: number, done: any): Promise<any>;
    /** Get board issues for epic
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/epic-getIssuesForEpic)
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/epic-getIssuesWithoutEpic)
     * @name getBoardIssuesForEpic
     * @function
     * @param {string} boardId - Id of board to retrieve
     * @param {string} epicId - Id of epic to retrieve, specify 'none' to get issues without an epic.
     * @param {number} [startAt=0] - The starting index of the returned issues. Base index: 0.
     * @param {number} [maxResults=50] - The maximum number of issues to return per page. Default: 50.
     * @param {string} [jql] - Filters results using a JQL query.
     * @param {boolean} [validateQuery] - Specifies whether to validate the JQL query or not.
     * Default: true.
     * @param {string} [fields] - The list of fields to return for each issue.
     */
    getBoardIssuesForEpic(boardId: any, epicId: any, startAt: number, maxResults: number, jql: any, validateQuery: boolean, fields: any): Promise<any>;
    /** Estimate issue for board
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/issue-estimateIssueForBoard)
     * @name estimateIssueForBoard
     * @function
     * @param {string} issueIdOrKey - Id of issue
     * @param {number} boardId - The id of the board required to determine which field
     * is used for estimation.
     * @param {string} body - value to set
     */
    estimateIssueForBoard(issueIdOrKey: any, boardId: any, data: any): Promise<any>;
    /** Rank Issues
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/issue-rankIssues)
     * @name rankIssues
     * @function
     * @param {string} body - value to set
     */
    rankIssues(data: any): Promise<any>;
    /** Get Projects
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/project-getProjects)
     * @name getProjects
     * @function
     * @param {string} boardId - Id of board to retrieve
     * @param {number} [startAt=0] - The starting index of the returned projects. Base index: 0.
     * @param {number} [maxResults=50] - The maximum number of projects to return per page.
     * Default: 50.
     */
    getProjects(boardId: any, startAt?: number, maxResults?: number): Promise<any>;
    /** Get Projects Full
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/project-getProjectsFull)
     * @name getProjectsFull
     * @function
     * @param {string} boardId - Id of board to retrieve
     */
    getProjectsFull(boardId: any): Promise<any>;
    /** Get Board Properties Keys
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/properties-getPropertiesKeys)
     * @name getBoardPropertiesKeys
     * @function
     * @param {string} boardId - Id of board to retrieve
     */
    getBoardPropertiesKeys(boardId: any): Promise<any>;
    /** Delete Board Property
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/properties-deleteProperty)
     * @name deleteBoardProperty
     * @function
     * @param {string} boardId - Id of board to retrieve
     * @param {string} propertyKey - Id of property to delete
     */
    deleteBoardProperty(boardId: any, propertyKey: any): Promise<any>;
    /** Set Board Property
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/properties-setProperty)
     * @name setBoardProperty
     * @function
     * @param {string} boardId - Id of board to retrieve
     * @param {string} propertyKey - Id of property to delete
     * @param {string} body - value to set, for objects make sure to stringify first
     */
    setBoardProperty(boardId: any, propertyKey: any, data: any): Promise<any>;
    /** Get Board Property
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/properties-getProperty)
     * @name getBoardProperty
     * @function
     * @param {string} boardId - Id of board to retrieve
     * @param {string} propertyKey - Id of property to retrieve
     */
    getBoardProperty(boardId: any, propertyKey: any): Promise<any>;
    /** Get All Sprints
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/sprint-getAllSprints)
     * @name getAllSprints
     * @function
     * @param {string} boardId - Id of board to retrieve
     * @param {number} [startAt=0] - The starting index of the returned sprints. Base index: 0.
     * @param {number} [maxResults=50] - The maximum number of sprints to return per page.
     * Default: 50.
     * @param {string} [state] - Filters results to sprints in specified states.
     * Valid values: future, active, closed.
     */
    getAllSprints(boardId: any, startAt: number, maxResults: number, state: any): Promise<any>;
    /** Get Board issues for sprint
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/sprint-getIssuesForSprint)
     * @name getBoardIssuesForSprint
     * @function
     * @param {string} boardId - Id of board to retrieve
     * @param {string} sprintId - Id of sprint to retrieve
     * @param {number} [startAt=0] - The starting index of the returned issues. Base index: 0.
     * @param {number} [maxResults=50] - The maximum number of issues to return per page. Default: 50.
     * @param {string} [jql] - Filters results using a JQL query.
     * @param {boolean} [validateQuery] - Specifies whether to validate the JQL query or not.
     * Default: true.
     * @param {string} [fields] - The list of fields to return for each issue.
     */
    getBoardIssuesForSprint(boardId: any, sprintId: any, startAt: number, maxResults: number, jql: any, validateQuery: boolean, fields: any): Promise<any>;
    /** Get All Versions
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/board/{boardId}/version-getAllVersions)
     * @name getAllVersions
     * @function
     * @param {string} boardId - Id of board to retrieve
     * @param {number} [startAt=0] - The starting index of the returned versions. Base index: 0.
     * @param {number} [maxResults=50] - The maximum number of versions to return per page.
     * Default: 50.
     * @param {string} [released] - Filters results to versions that are either released or
     * unreleased.Valid values: true, false.
     */
    getAllVersions(boardId: any, startAt: number, maxResults: number, released: any): Promise<any>;
    /** Get Filter
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/filter)
     * @name getFilter
     * @function
     * @param {string} filterId - Id of filter to retrieve
     */
    getFilter(filterId: any): Promise<any>;
    /** Get Epic
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/epic-getEpic)
     * @name getEpic
     * @function
     * @param {string} epicIdOrKey - Id of epic to retrieve
     */
    getEpic(epicIdOrKey: any): Promise<any>;
    /** Partially update epic
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/epic-partiallyUpdateEpic)
     * @name partiallyUpdateEpic
     * @function
     * @param {string} epicIdOrKey - Id of epic to retrieve
     * @param {string} body - value to set, for objects make sure to stringify first
     */
    partiallyUpdateEpic(epicIdOrKey: any, data: any): Promise<any>;
    /** Get issues for epic
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/epic-getIssuesForEpic)
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/epic-getIssuesWithoutEpic)
     * @name getIssuesForEpic
     * @function
     * @param {string} epicId - Id of epic to retrieve, specify 'none' to get issues without an epic.
     * @param {number} [startAt=0] - The starting index of the returned issues. Base index: 0.
     * @param {number} [maxResults=50] - The maximum number of issues to return per page. Default: 50.
     * @param {string} [jql] - Filters results using a JQL query.
     * @param {boolean} [validateQuery] - Specifies whether to validate the JQL query or not.
     * Default: true.
     * @param {string} [fields] - The list of fields to return for each issue.
     */
    getIssuesForEpic(epicId: any, startAt: number, maxResults: number, jql: any, validateQuery: boolean, fields: any): Promise<any>;
    /** Move Issues to Epic
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/epic-moveIssuesToEpic)
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/epic-removeIssuesFromEpic)
     * @name moveIssuesToEpic
     * @function
     * @param {string} epicIdOrKey - Id of epic to move issue to, or 'none' to remove from epic
     * @param {array} issues - array of issues to move
     */
    moveIssuesToEpic(epicIdOrKey: any, issues: any): Promise<any>;
    /** Rank Epics
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/epic-rankEpics)
     * @name rankEpics
     * @function
     * @param {string} epicIdOrKey - Id of epic
     * @param {string} body - value to set
     */
    rankEpics(epicIdOrKey: any, data: any): Promise<any>;
    /**
     * @name getServerInfo
     * @function
     * Get server info
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v2/#api-api-2-serverInfo-get)
     */
    getServerInfo(): Promise<any>;
    /**
     * @name getIssueCreateMetadata
     * @param {object} optional - object containing any of the following properties
     * @param {array} [optional.projectIds]: optional Array of project ids to return metadata for
     * @param {array} [optional.projectKeys]: optional Array of project keys to return metadata for
     * @param {array} [optional.issuetypeIds]: optional Array of issuetype ids to return metadata for
     * @param {array} [optional.issuetypeNames]: optional Array of issuetype names to return metadata
     * for
     * @param {string} [optional.expand]: optional Include additional information about issue
     * metadata. Valid value is 'projects.issuetypes.fields'
     * Get metadata for creating an issue.
     * [Jira Doc](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-createmeta-get)
     */
    getIssueCreateMetadata(optional?: {}): Promise<any>;
    /** Generic Get Request
     * [Jira Doc](https://docs.atlassian.com/jira-software/REST/cloud/2/)
     * @name genericGet
     * @function
     * @param {string} endpoint - Rest API endpoint
     */
    genericGet(endpoint: any): Promise<any>;
}
export {};
