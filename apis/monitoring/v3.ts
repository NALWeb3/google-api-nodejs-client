/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* jshint maxlen: false */

import {
  createAPIRequest
} from '../../lib/apirequest';

/**
 * Stackdriver Monitoring API
 *
 * Manages your Stackdriver Monitoring data and configurations. Most projects must be associated with a Stackdriver account, with a few exceptions as noted on the individual method pages.
 *
 * @example
 * const google = require('googleapis');
 * const monitoring = google.monitoring('v3');
 *
 * @namespace monitoring
 * @type {Function}
 * @version v3
 * @variation v3
 * @param {object=} options Options for Monitoring
 */
function Monitoring(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.projects = {
    collectdTimeSeries: {

      /**
       * monitoring.projects.collectdTimeSeries.create
       *
       * @desc Stackdriver Monitoring Agent only: Creates a new time series.<aside class="caution">This method is only for use by the Stackdriver Monitoring Agent. Use projects.timeSeries.create instead.</aside>
       *
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Monitoring API and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/monitoring_component/quotas
       * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
       * var google = require('googleapis');
       * var monitoring = google.monitoring('v3');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'create' method:
       *
       *     // The project in which to create the time series. The format is `"projects/PROJECT_ID_OR_NUMBER"`.
       *     name: "projects/{MY-PROJECT}",
       *     resource: {},
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *   monitoring.projects.collectdTimeSeries.create(request, function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *     }
       *   });
       * });
       *
       * @alias monitoring.projects.collectdTimeSeries.create
       * @memberOf! monitoring(v3)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The project in which to create the time series. The format is "projects/PROJECT_ID_OR_NUMBER".
       * @param {monitoring(v3).CreateCollectdTimeSeriesRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v3/{name}/collectdTimeSeries').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },
    groups: {

      /**
       * monitoring.projects.groups.create
       *
       * @desc Creates a new group.
       *
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Monitoring API and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/monitoring_component/quotas
       * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
       * var google = require('googleapis');
       * var monitoring = google.monitoring('v3');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'create' method:
       *
       *     // The project in which to create the group. The format is `"projects/{project_id_or_number}"`.
       *     name: "projects/{MY-PROJECT}",
       *     resource: {},
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *   monitoring.projects.groups.create(request, function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *     }
       *   });
       * });
       *
       * @alias monitoring.projects.groups.create
       * @memberOf! monitoring(v3)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The project in which to create the group. The format is "projects/{project_id_or_number}".
       * @param {boolean=} params.validateOnly If true, validate this request but do not create the group.
       * @param {monitoring(v3).Group} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v3/{name}/groups').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * monitoring.projects.groups.delete
       *
       * @desc Deletes an existing group.
       *
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Monitoring API and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/monitoring_component/quotas
       * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
       * var google = require('googleapis');
       * var monitoring = google.monitoring('v3');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
       *
       *     // The group to delete. The format is `"projects/{project_id_or_number}/groups/{group_id}"`.
       *     name: "projects/{MY-PROJECT}/groups/{MY-GROUP}",
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *   monitoring.projects.groups.delete(request, function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *     }
       *   });
       * });
       *
       * @alias monitoring.projects.groups.delete
       * @memberOf! monitoring(v3)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The group to delete. The format is "projects/{project_id_or_number}/groups/{group_id}".
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v3/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * monitoring.projects.groups.get
       *
       * @desc Gets a single group.
       *
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Monitoring API and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/monitoring_component/quotas
       * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
       * var google = require('googleapis');
       * var monitoring = google.monitoring('v3');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
       *
       *     // The group to retrieve. The format is `"projects/{project_id_or_number}/groups/{group_id}"`.
       *     name: "projects/{MY-PROJECT}/groups/{MY-GROUP}",
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *   monitoring.projects.groups.get(request, function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *     }
       *   });
       * });
       *
       * @alias monitoring.projects.groups.get
       * @memberOf! monitoring(v3)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The group to retrieve. The format is "projects/{project_id_or_number}/groups/{group_id}".
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v3/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * monitoring.projects.groups.list
       *
       * @desc Lists the existing groups.
       *
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Monitoring API and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/monitoring_component/quotas
       * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
       * var google = require('googleapis');
       * var monitoring = google.monitoring('v3');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
       *
       *     // The project whose groups are to be listed. The format is `"projects/{project_id_or_number}"`.
       *     name: "projects/{MY-PROJECT}",
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *
       *   var recur = function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *       if (result.nextPageToken) {
       *         request.pageToken = result.nextPageToken;
       *         monitoring.projects.groups.list(request, recur);
       *       }
       *     }
       *   };
       *
       *   monitoring.projects.groups.list(request, recur);
       * });
       *
       * @alias monitoring.projects.groups.list
       * @memberOf! monitoring(v3)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.ancestorsOfGroup A group name: "projects/{project_id_or_number}/groups/{group_id}". Returns groups that are ancestors of the specified group. The groups are returned in order, starting with the immediate parent and ending with the most distant ancestor. If the specified group has no immediate parent, the results are empty.
       * @param {string=} params.childrenOfGroup A group name: "projects/{project_id_or_number}/groups/{group_id}". Returns groups whose parentName field contains the group name. If no groups have this parent, the results are empty.
       * @param {string=} params.descendantsOfGroup A group name: "projects/{project_id_or_number}/groups/{group_id}". Returns the descendants of the specified group. This is a superset of the results returned by the childrenOfGroup filter, and includes children-of-children, and so forth.
       * @param {string} params.name The project whose groups are to be listed. The format is "projects/{project_id_or_number}".
       * @param {integer=} params.pageSize A positive number that is the maximum number of results to return.
       * @param {string=} params.pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v3/{name}/groups').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * monitoring.projects.groups.update
       *
       * @desc Updates an existing group. You can change any group attributes except name.
       *
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Monitoring API and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/monitoring_component/quotas
       * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
       * var google = require('googleapis');
       * var monitoring = google.monitoring('v3');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'update' method:
       *
       *     // The name of this group. The format is `"projects/{project_id_or_number}/groups/{group_id}"`. When
       *     // creating a group, this field is ignored and a new name is created consisting of the project
       *     // specified in the call to `CreateGroup` and a unique `{group_id}` that is generated automatically.
       *     // @OutputOnly
       *     name: "projects/{MY-PROJECT}/groups/{MY-GROUP}",
       *     resource: {},
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *   monitoring.projects.groups.update(request, function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *     }
       *   });
       * });
       *
       * @alias monitoring.projects.groups.update
       * @memberOf! monitoring(v3)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Output only. The name of this group. The format is "projects/{project_id_or_number}/groups/{group_id}". When creating a group, this field is ignored and a new name is created consisting of the project specified in the call to CreateGroup and a unique {group_id} that is generated automatically.
       * @param {boolean=} params.validateOnly If true, validate this request but do not update the existing group.
       * @param {monitoring(v3).Group} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      update: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v3/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },
      members: {

        /**
         * monitoring.projects.groups.members.list
         *
         * @desc Lists the monitored resources that are members of a group.
         *
         * @example
         * // PRE-REQUISITES:
         * // ---------------
         * // 1. If not already done, enable the Google Monitoring API and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/monitoring_component/quotas
         * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
         * // 3. To install the client library and Application Default Credentials library, run:
         * //    'npm install googleapis --save'
         * var google = require('googleapis');
         * var monitoring = google.monitoring('v3');
         *
         * google.auth.getApplicationDefault(function(err, authClient) {
         *   if (err) {
         *     console.log('Authentication failed because of ', err);
         *     return;
         *   }
         *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *     authClient = authClient.createScoped(scopes);
         *   }
         *
         *   var request = {
         *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
         *
         *     // The group whose members are listed. The format is
         *     // `"projects/{project_id_or_number}/groups/{group_id}"`.
         *     name: "projects/{MY-PROJECT}/groups/{MY-GROUP}",
         *     // Auth client
         *     auth: authClient
         *   };
         *
         *
         *   var recur = function(err, result) {
         *     if (err) {
         *       console.log(err);
         *     } else {
         *       console.log(result);
         *       if (result.nextPageToken) {
         *         request.pageToken = result.nextPageToken;
         *         monitoring.projects.groups.members.list(request, recur);
         *       }
         *     }
         *   };
         *
         *   monitoring.projects.groups.members.list(request, recur);
         * });
         *
         * @alias monitoring.projects.groups.members.list
         * @memberOf! monitoring(v3)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter An optional list filter describing the members to be returned. The filter may reference the type, labels, and metadata of monitored resources that comprise the group. For example, to return only resources representing Compute Engine VM instances, use this filter: resource.type = "gce_instance" 
         * @param {string=} params.interval.endTime Required. The end of the time interval.
         * @param {string=} params.interval.startTime Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.
         * @param {string} params.name The group whose members are listed. The format is "projects/{project_id_or_number}/groups/{group_id}".
         * @param {integer=} params.pageSize A positive number that is the maximum number of results to return.
         * @param {string=} params.pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v3/{name}/members').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    },
    metricDescriptors: {

      /**
       * monitoring.projects.metricDescriptors.create
       *
       * @desc Creates a new metric descriptor. User-created metric descriptors define custom metrics.
       *
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Monitoring API and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/monitoring_component/quotas
       * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
       * var google = require('googleapis');
       * var monitoring = google.monitoring('v3');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'create' method:
       *
       *     // The project on which to execute the request. The format is `"projects/{project_id_or_number}"`.
       *     name: "projects/{MY-PROJECT}",
       *     resource: {},
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *   monitoring.projects.metricDescriptors.create(request, function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *     }
       *   });
       * });
       *
       * @alias monitoring.projects.metricDescriptors.create
       * @memberOf! monitoring(v3)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The project on which to execute the request. The format is "projects/{project_id_or_number}".
       * @param {monitoring(v3).MetricDescriptor} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v3/{name}/metricDescriptors').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * monitoring.projects.metricDescriptors.delete
       *
       * @desc Deletes a metric descriptor. Only user-created custom metrics can be deleted.
       *
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Monitoring API and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/monitoring_component/quotas
       * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
       * var google = require('googleapis');
       * var monitoring = google.monitoring('v3');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
       *
       *     // The metric descriptor on which to execute the request. The format is
       *     // `"projects/{project_id_or_number}/metricDescriptors/{metric_id}"`. An example of `{metric_id}` is:
       *     // `"custom.googleapis.com/my_test_metric"`.
       *     name: "",
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *   monitoring.projects.metricDescriptors.delete(request, function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *     }
       *   });
       * });
       *
       * @alias monitoring.projects.metricDescriptors.delete
       * @memberOf! monitoring(v3)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The metric descriptor on which to execute the request. The format is "projects/{project_id_or_number}/metricDescriptors/{metric_id}". An example of {metric_id} is: "custom.googleapis.com/my_test_metric".
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v3/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * monitoring.projects.metricDescriptors.get
       *
       * @desc Gets a single metric descriptor. This method does not require a Stackdriver account.
       *
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Monitoring API and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/monitoring_component/quotas
       * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
       * var google = require('googleapis');
       * var monitoring = google.monitoring('v3');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
       *
       *     // The metric descriptor on which to execute the request. The format is
       *     // `"projects/{project_id_or_number}/metricDescriptors/{metric_id}"`. An example value of `{metric_id}`
       *     // is `"compute.googleapis.com/instance/disk/read_bytes_count"`.
       *     name: "",
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *   monitoring.projects.metricDescriptors.get(request, function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *     }
       *   });
       * });
       *
       * @alias monitoring.projects.metricDescriptors.get
       * @memberOf! monitoring(v3)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The metric descriptor on which to execute the request. The format is "projects/{project_id_or_number}/metricDescriptors/{metric_id}". An example value of {metric_id} is "compute.googleapis.com/instance/disk/read_bytes_count".
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v3/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * monitoring.projects.metricDescriptors.list
       *
       * @desc Lists metric descriptors that match a filter. This method does not require a Stackdriver account.
       *
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Monitoring API and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/monitoring_component/quotas
       * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
       * var google = require('googleapis');
       * var monitoring = google.monitoring('v3');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
       *
       *     // The project on which to execute the request. The format is `"projects/{project_id_or_number}"`.
       *     name: "projects/{MY-PROJECT}",
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *
       *   var recur = function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *       if (result.nextPageToken) {
       *         request.pageToken = result.nextPageToken;
       *         monitoring.projects.metricDescriptors.list(request, recur);
       *       }
       *     }
       *   };
       *
       *   monitoring.projects.metricDescriptors.list(request, recur);
       * });
       *
       * @alias monitoring.projects.metricDescriptors.list
       * @memberOf! monitoring(v3)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.filter If this field is empty, all custom and system-defined metric descriptors are returned. Otherwise, the filter specifies which metric descriptors are to be returned. For example, the following filter matches all custom metrics: metric.type = starts_with("custom.googleapis.com/") 
       * @param {string} params.name The project on which to execute the request. The format is "projects/{project_id_or_number}".
       * @param {integer=} params.pageSize A positive number that is the maximum number of results to return.
       * @param {string=} params.pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v3/{name}/metricDescriptors').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },
    monitoredResourceDescriptors: {

      /**
       * monitoring.projects.monitoredResourceDescriptors.get
       *
       * @desc Gets a single monitored resource descriptor. This method does not require a Stackdriver account.
       *
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Monitoring API and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/monitoring_component/quotas
       * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
       * var google = require('googleapis');
       * var monitoring = google.monitoring('v3');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
       *
       *     // The monitored resource descriptor to get. The format is
       *     // `"projects/{project_id_or_number}/monitoredResourceDescriptors/{resource_type}"`. The
       *     // `{resource_type}` is a predefined type, such as `cloudsql_database`.
       *     name: "projects/{MY-PROJECT}/monitoredResourceDescriptors/{MY-MONITOREDRESOURCEDESCRIPTOR}",
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *   monitoring.projects.monitoredResourceDescriptors.get(request, function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *     }
       *   });
       * });
       *
       * @alias monitoring.projects.monitoredResourceDescriptors.get
       * @memberOf! monitoring(v3)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The monitored resource descriptor to get. The format is "projects/{project_id_or_number}/monitoredResourceDescriptors/{resource_type}". The {resource_type} is a predefined type, such as cloudsql_database.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v3/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * monitoring.projects.monitoredResourceDescriptors.list
       *
       * @desc Lists monitored resource descriptors that match a filter. This method does not require a Stackdriver account.
       *
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Monitoring API and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/monitoring_component/quotas
       * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
       * var google = require('googleapis');
       * var monitoring = google.monitoring('v3');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
       *
       *     // The project on which to execute the request. The format is `"projects/{project_id_or_number}"`.
       *     name: "projects/{MY-PROJECT}",
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *
       *   var recur = function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *       if (result.nextPageToken) {
       *         request.pageToken = result.nextPageToken;
       *         monitoring.projects.monitoredResourceDescriptors.list(request, recur);
       *       }
       *     }
       *   };
       *
       *   monitoring.projects.monitoredResourceDescriptors.list(request, recur);
       * });
       *
       * @alias monitoring.projects.monitoredResourceDescriptors.list
       * @memberOf! monitoring(v3)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.filter An optional filter describing the descriptors to be returned. The filter can reference the descriptor's type and labels. For example, the following filter returns only Google Compute Engine descriptors that have an id label: resource.type = starts_with("gce_") AND resource.label:id 
       * @param {string} params.name The project on which to execute the request. The format is "projects/{project_id_or_number}".
       * @param {integer=} params.pageSize A positive number that is the maximum number of results to return.
       * @param {string=} params.pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v3/{name}/monitoredResourceDescriptors').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },
    timeSeries: {

      /**
       * monitoring.projects.timeSeries.create
       *
       * @desc Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response.
       *
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Monitoring API and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/monitoring_component/quotas
       * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
       * var google = require('googleapis');
       * var monitoring = google.monitoring('v3');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'create' method:
       *
       *     // The project on which to execute the request. The format is `"projects/{project_id_or_number}"`.
       *     name: "projects/{MY-PROJECT}",
       *     resource: {},
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *   monitoring.projects.timeSeries.create(request, function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *     }
       *   });
       * });
       *
       * @alias monitoring.projects.timeSeries.create
       * @memberOf! monitoring(v3)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The project on which to execute the request. The format is "projects/{project_id_or_number}".
       * @param {monitoring(v3).CreateTimeSeriesRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v3/{name}/timeSeries').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * monitoring.projects.timeSeries.list
       *
       * @desc Lists time series that match a filter. This method does not require a Stackdriver account.
       *
       * @example
       * // PRE-REQUISITES:
       * // ---------------
       * // 1. If not already done, enable the Google Monitoring API and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/monitoring_component/quotas
       * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
       * // 3. To install the client library and Application Default Credentials library, run:
       * //    'npm install googleapis --save'
       * var google = require('googleapis');
       * var monitoring = google.monitoring('v3');
       *
       * google.auth.getApplicationDefault(function(err, authClient) {
       *   if (err) {
       *     console.log('Authentication failed because of ', err);
       *     return;
       *   }
       *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *     authClient = authClient.createScoped(scopes);
       *   }
       *
       *   var request = {
       *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
       *
       *     // The project on which to execute the request. The format is "projects/{project_id_or_number}".
       *     name: "projects/{MY-PROJECT}",
       *     // Auth client
       *     auth: authClient
       *   };
       *
       *
       *   var recur = function(err, result) {
       *     if (err) {
       *       console.log(err);
       *     } else {
       *       console.log(result);
       *       if (result.nextPageToken) {
       *         request.pageToken = result.nextPageToken;
       *         monitoring.projects.timeSeries.list(request, recur);
       *       }
       *     }
       *   };
       *
       *   monitoring.projects.timeSeries.list(request, recur);
       * });
       *
       * @alias monitoring.projects.timeSeries.list
       * @memberOf! monitoring(v3)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.aggregation.alignmentPeriod The alignment period for per-time series alignment. If present, alignmentPeriod must be at least 60 seconds. After per-time series alignment, each time series will contain data points only on the period boundaries. If perSeriesAligner is not specified or equals ALIGN_NONE, then this field is ignored. If perSeriesAligner is specified and does not equal ALIGN_NONE, then this field must be defined; otherwise an error is returned.
       * @param {string=} params.aggregation.crossSeriesReducer The approach to be used to combine time series. Not all reducer functions may be applied to all time series, depending on the metric type and the value type of the original time series. Reduction may change the metric type of value type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If crossSeriesReducer is specified, then perSeriesAligner must be specified and not equal ALIGN_NONE and alignmentPeriod must be specified; otherwise, an error is returned.
       * @param {string=} params.aggregation.groupByFields The set of fields to preserve when crossSeriesReducer is specified. The groupByFields determine how the time series are partitioned into subsets prior to applying the aggregation function. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The crossSeriesReducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in groupByFields are aggregated away. If groupByFields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If crossSeriesReducer is not defined, this field is ignored.
       * @param {string=} params.aggregation.perSeriesAligner The approach to be used to align individual time series. Not all alignment functions may be applied to all time series, depending on the metric type and value type of the original time series. Alignment may change the metric type or the value type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If crossSeriesReducer is specified, then perSeriesAligner must be specified and not equal ALIGN_NONE and alignmentPeriod must be specified; otherwise, an error is returned.
       * @param {string=} params.filter A monitoring filter that specifies which time series should be returned. The filter must specify a single metric type, and can additionally specify metric labels and other information. For example: metric.type = "compute.googleapis.com/instance/cpu/usage_time" AND     metric.label.instance_name = "my-instance-name" 
       * @param {string=} params.interval.endTime Required. The end of the time interval.
       * @param {string=} params.interval.startTime Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.
       * @param {string} params.name The project on which to execute the request. The format is "projects/{project_id_or_number}".
       * @param {string=} params.orderBy Specifies the order in which the points of the time series should be returned. By default, results are not ordered. Currently, this field must be left blank.
       * @param {integer=} params.pageSize A positive number that is the maximum number of results to return. When view field sets to FULL, it limits the number of Points server will return; if view field is HEADERS, it limits the number of TimeSeries server will return.
       * @param {string=} params.pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
       * @param {string=} params.view Specifies which information is returned about the time series.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v3/{name}/timeSeries').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },
    uptimeCheckConfigs: {

      /**
       * monitoring.projects.uptimeCheckConfigs.create
       *
       * @desc Creates a new uptime check configuration.
       *
       * @alias monitoring.projects.uptimeCheckConfigs.create
       * @memberOf! monitoring(v3)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent The project in which to create the uptime check. The format is:projects/[PROJECT_ID].
       * @param {monitoring(v3).UptimeCheckConfig} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v3/{parent}/uptimeCheckConfigs').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * monitoring.projects.uptimeCheckConfigs.delete
       *
       * @desc Deletes an uptime check configuration. Note that this method will fail if the uptime check configuration is referenced by an alert policy or other dependent configs that would be rendered invalid by the deletion.
       *
       * @alias monitoring.projects.uptimeCheckConfigs.delete
       * @memberOf! monitoring(v3)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The uptime check configuration to delete. The format isprojects/[PROJECT_ID]/uptimeCheckConfigs/[UPTIME_CHECK_ID].
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v3/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * monitoring.projects.uptimeCheckConfigs.get
       *
       * @desc Gets a single uptime check configuration.
       *
       * @alias monitoring.projects.uptimeCheckConfigs.get
       * @memberOf! monitoring(v3)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The uptime check configuration to retrieve. The format isprojects/[PROJECT_ID]/uptimeCheckConfigs/[UPTIME_CHECK_ID].
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v3/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * monitoring.projects.uptimeCheckConfigs.list
       *
       * @desc Lists the existing valid uptime check configurations for the project, leaving out any invalid configurations.
       *
       * @alias monitoring.projects.uptimeCheckConfigs.list
       * @memberOf! monitoring(v3)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.pageSize The maximum number of results to return in a single response. The server may further constrain the maximum number of results returned in a single page. If the page_size is <=0, the server will decide the number of results to be returned.
       * @param {string=} params.pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return more results from the previous method call.
       * @param {string} params.parent The project whose uptime check configurations are listed. The format isprojects/[PROJECT_ID].
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v3/{parent}/uptimeCheckConfigs').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * monitoring.projects.uptimeCheckConfigs.patch
       *
       * @desc Updates an uptime check configuration. You can either replace the entire configuration with a new one or replace only certain fields in the current configuration by specifying the fields to be updated via "updateMask". Returns the updated configuration.
       *
       * @alias monitoring.projects.uptimeCheckConfigs.patch
       * @memberOf! monitoring(v3)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name A unique resource name for this UptimeCheckConfig. The format is:projects/[PROJECT_ID]/uptimeCheckConfigs/[UPTIME_CHECK_ID].This field should be omitted when creating the uptime check configuration; on create, the resource name is assigned by the server and included in the response.
       * @param {string=} params.updateMask Optional. If present, only the listed fields in the current uptime check configuration are updated with values from the new configuration. If this field is empty, then the current configuration is completely replaced with the new configuration.
       * @param {monitoring(v3).UptimeCheckConfig} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      patch: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v3/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.uptimeCheckIps = {

    /**
     * monitoring.uptimeCheckIps.list
     *
     * @desc Returns the list of IPs that checkers run from
     *
     * @alias monitoring.uptimeCheckIps.list
     * @memberOf! monitoring(v3)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of results to return in a single response. The server may further constrain the maximum number of results returned in a single page. If the page_size is <=0, the server will decide the number of results to be returned. NOTE: this field is not yet implemented
     * @param {string=} params.pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return more results from the previous method call. NOTE: this field is not yet implemented
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v3/uptimeCheckIps').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * @typedef BasicAuthentication
 * @memberOf! monitoring(v3)
 * @type object
 * @property {string} password The password to authenticate.
 * @property {string} username The username to authenticate.
 */

/**
 * @typedef BucketOptions
 * @memberOf! monitoring(v3)
 * @type object
 * @property {monitoring(v3).Explicit} explicitBuckets The explicit buckets.
 * @property {monitoring(v3).Exponential} exponentialBuckets The exponential buckets.
 * @property {monitoring(v3).Linear} linearBuckets The linear bucket.
 */

/**
 * @typedef CollectdPayload
 * @memberOf! monitoring(v3)
 * @type object
 * @property {string} endTime The end time of the interval.
 * @property {object} metadata The measurement metadata. Example: &quot;process_id&quot; -&gt; 12345
 * @property {string} plugin The name of the plugin. Example: &quot;disk&quot;.
 * @property {string} pluginInstance The instance name of the plugin Example: &quot;hdcl&quot;.
 * @property {string} startTime The start time of the interval.
 * @property {string} type The measurement type. Example: &quot;memory&quot;.
 * @property {string} typeInstance The measurement type instance. Example: &quot;used&quot;.
 * @property {monitoring(v3).CollectdValue[]} values The measured values during this time interval. Each value must have a different dataSourceName.
 */

/**
 * @typedef CollectdPayloadError
 * @memberOf! monitoring(v3)
 * @type object
 * @property {monitoring(v3).Status} error Records the error status for the payload. If this field is present, the partial errors for nested values won&#39;t be populated.
 * @property {integer} index The zero-based index in CreateCollectdTimeSeriesRequest.collectd_payloads.
 * @property {monitoring(v3).CollectdValueError[]} valueErrors Records the error status for values that were not written due to an error.Failed payloads for which nothing is written will not include partial value errors.
 */

/**
 * @typedef CollectdValue
 * @memberOf! monitoring(v3)
 * @type object
 * @property {string} dataSourceName The data source for the collectd value. For example there are two data sources for network measurements: &quot;rx&quot; and &quot;tx&quot;.
 * @property {string} dataSourceType The type of measurement.
 * @property {monitoring(v3).TypedValue} value The measurement value.
 */

/**
 * @typedef CollectdValueError
 * @memberOf! monitoring(v3)
 * @type object
 * @property {monitoring(v3).Status} error Records the error status for the value.
 * @property {integer} index The zero-based index in CollectdPayload.values within the parent CreateCollectdTimeSeriesRequest.collectd_payloads.
 */

/**
 * @typedef ContentMatcher
 * @memberOf! monitoring(v3)
 * @type object
 * @property {string} content String content to match
 */

/**
 * @typedef CreateCollectdTimeSeriesRequest
 * @memberOf! monitoring(v3)
 * @type object
 * @property {monitoring(v3).CollectdPayload[]} collectdPayloads The collectd payloads representing the time series data. You must not include more than a single point for each time series, so no two payloads can have the same values for all of the fields plugin, plugin_instance, type, and type_instance.
 * @property {string} collectdVersion The version of collectd that collected the data. Example: &quot;5.3.0-192.el6&quot;.
 * @property {monitoring(v3).MonitoredResource} resource The monitored resource associated with the time series.
 */

/**
 * @typedef CreateCollectdTimeSeriesResponse
 * @memberOf! monitoring(v3)
 * @type object
 * @property {monitoring(v3).CollectdPayloadError[]} payloadErrors Records the error status for points that were not written due to an error.Failed requests for which nothing is written will return an error response instead.
 */

/**
 * @typedef CreateTimeSeriesRequest
 * @memberOf! monitoring(v3)
 * @type object
 * @property {monitoring(v3).TimeSeries[]} timeSeries The new data to be added to a list of time series. Adds at most one data point to each of several time series. The new data point must be more recent than any other point in its time series. Each TimeSeries value must fully specify a unique time series by supplying all label values for the metric and the monitored resource.
 */

/**
 * @typedef Distribution
 * @memberOf! monitoring(v3)
 * @type object
* @property {string[]} bucketCounts Required in the Stackdriver Monitoring API v3. The values for each bucket specified in bucket_options. The sum of the values in bucketCounts must equal the value in the count field of the Distribution object. The order of the bucket counts follows the numbering schemes described for the three bucket types. The underflow bucket has number 0; the finite buckets, if any, have numbers 1 through N-2; and the overflow bucket has number N-1. The size of bucket_counts must not be greater than N. If the size is less than N, then the remaining buckets are assigned values of zero.
* @property {monitoring(v3).BucketOptions} bucketOptions Required in the Stackdriver Monitoring API v3. Defines the histogram bucket boundaries.
* @property {string} count The number of values in the population. Must be non-negative. This value must equal the sum of the values in bucket_counts if a histogram is provided.
* @property {number} mean The arithmetic mean of the values in the population. If count is zero then this field must be zero.
* @property {monitoring(v3).Range} range If specified, contains the range of the population values. The field must not be present if the count is zero. This field is presently ignored by the Stackdriver Monitoring API v3.
* @property {number} sumOfSquaredDeviation The sum of squared deviations from the mean of the values in the population. For values x_i this is:
Sum[i=1..n]((x_i - mean)^2)
Knuth, &quot;The Art of Computer Programming&quot;, Vol. 2, page 323, 3rd edition describes Welford&#39;s method for accumulating this sum in one pass.If count is zero then this field must be zero.
*/

/**
 * @typedef Empty
 * @memberOf! monitoring(v3)
 * @type object
 */

/**
 * @typedef Explicit
 * @memberOf! monitoring(v3)
 * @type object
 * @property {number[]} bounds The values must be monotonically increasing.
 */

/**
 * @typedef Exponential
 * @memberOf! monitoring(v3)
 * @type object
 * @property {number} growthFactor Must be greater than 1.
 * @property {integer} numFiniteBuckets Must be greater than 0.
 * @property {number} scale Must be greater than 0.
 */

/**
 * @typedef Field
 * @memberOf! monitoring(v3)
 * @type object
 * @property {string} cardinality The field cardinality.
 * @property {string} defaultValue The string value of the default value of this field. Proto2 syntax only.
 * @property {string} jsonName The field JSON name.
 * @property {string} kind The field type.
 * @property {string} name The field name.
 * @property {integer} number The field number.
 * @property {integer} oneofIndex The index of the field type in Type.oneofs, for message or enumeration types. The first type has index 1; zero means the type is not in the list.
 * @property {monitoring(v3).Option[]} options The protocol buffer options.
 * @property {boolean} packed Whether to use alternative packed wire representation.
 * @property {string} typeUrl The field type URL, without the scheme, for message or enumeration types. Example: &quot;type.googleapis.com/google.protobuf.Timestamp&quot;.
 */

/**
 * @typedef Group
 * @memberOf! monitoring(v3)
 * @type object
 * @property {string} displayName A user-assigned name for this group, used only for display purposes.
 * @property {string} filter The filter used to determine which monitored resources belong to this group.
 * @property {boolean} isCluster If true, the members of this group are considered to be a cluster. The system can perform additional analysis on groups that are clusters.
 * @property {string} name Output only. The name of this group. The format is &quot;projects/{project_id_or_number}/groups/{group_id}&quot;. When creating a group, this field is ignored and a new name is created consisting of the project specified in the call to CreateGroup and a unique {group_id} that is generated automatically.
 * @property {string} parentName The name of the group&#39;s parent, if it has one. The format is &quot;projects/{project_id_or_number}/groups/{group_id}&quot;. For groups with no parent, parentName is the empty string, &quot;&quot;.
 */

/**
 * @typedef HttpCheck
 * @memberOf! monitoring(v3)
 * @type object
 * @property {monitoring(v3).BasicAuthentication} authInfo The authentication information. Optional when creating an HTTP check; defaults to empty.
 * @property {object} headers The list of headers to send as part of the uptime check request. If two headers have the same key and different values, they should be entered as a single header, with the value being a comma-separated list of all the desired values as described at https://www.w3.org/Protocols/rfc2616/rfc2616.txt (page 31). Entering two separate headers with the same key in a Create call will cause the first to be overwritten by the second.
 * @property {boolean} maskHeaders Boolean specifiying whether to encrypt the header information. Encryption should be specified for any headers related to authentication that you do not wish to be seen when retrieving the configuration. The server will be responsible for encrypting the headers. On Get/List calls, if mask_headers is set to True then the headers will be obscured with ******.
 * @property {string} path The path to the page to run the check against. Will be combined with the host (specified within the MonitoredResource) and port to construct the full URL. Optional (defaults to &quot;/&quot;).
 * @property {integer} port The port to the page to run the check against. Will be combined with host (specified within the MonitoredResource) and path to construct the full URL. Optional (defaults to 80 without SSL, or 443 with SSL).
 * @property {boolean} useSsl If true, use HTTPS instead of HTTP to run the check.
 */

/**
 * @typedef LabelDescriptor
 * @memberOf! monitoring(v3)
 * @type object
 * @property {string} description A human-readable description for the label.
 * @property {string} key The label key.
 * @property {string} valueType The type of data that can be assigned to the label.
 */

/**
 * @typedef Linear
 * @memberOf! monitoring(v3)
 * @type object
 * @property {integer} numFiniteBuckets Must be greater than 0.
 * @property {number} offset Lower bound of the first bucket.
 * @property {number} width Must be greater than 0.
 */

/**
 * @typedef ListGroupMembersResponse
 * @memberOf! monitoring(v3)
 * @type object
 * @property {monitoring(v3).MonitoredResource[]} members A set of monitored resources in the group.
 * @property {string} nextPageToken If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as pageToken in the next call to this method.
 * @property {integer} totalSize The total number of elements matching this request.
 */

/**
 * @typedef ListGroupsResponse
 * @memberOf! monitoring(v3)
 * @type object
 * @property {monitoring(v3).Group[]} group The groups that match the specified filters.
 * @property {string} nextPageToken If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as pageToken in the next call to this method.
 */

/**
 * @typedef ListMetricDescriptorsResponse
 * @memberOf! monitoring(v3)
 * @type object
 * @property {monitoring(v3).MetricDescriptor[]} metricDescriptors The metric descriptors that are available to the project and that match the value of filter, if present.
 * @property {string} nextPageToken If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as pageToken in the next call to this method.
 */

/**
 * @typedef ListMonitoredResourceDescriptorsResponse
 * @memberOf! monitoring(v3)
 * @type object
 * @property {string} nextPageToken If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as pageToken in the next call to this method.
 * @property {monitoring(v3).MonitoredResourceDescriptor[]} resourceDescriptors The monitored resource descriptors that are available to this project and that match filter, if present.
 */

/**
 * @typedef ListTimeSeriesResponse
 * @memberOf! monitoring(v3)
 * @type object
 * @property {string} nextPageToken If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as pageToken in the next call to this method.
 * @property {monitoring(v3).TimeSeries[]} timeSeries One or more time series that match the filter included in the request.
 */

/**
 * @typedef ListUptimeCheckConfigsResponse
 * @memberOf! monitoring(v3)
 * @type object
 * @property {string} nextPageToken This field represents the pagination token to retrieve the next page of results. If the value is empty, it means no further results for the request. To retrieve the next page of results, the value of the next_page_token is passed to the subsequent List method call (in the request message&#39;s page_token field).
 * @property {monitoring(v3).UptimeCheckConfig[]} uptimeCheckConfigs The returned uptime check configurations.
 */

/**
 * @typedef ListUptimeCheckIpsResponse
 * @memberOf! monitoring(v3)
 * @type object
 * @property {string} nextPageToken This field represents the pagination token to retrieve the next page of results. If the value is empty, it means no further results for the request. To retrieve the next page of results, the value of the next_page_token is passed to the subsequent List method call (in the request message&#39;s page_token field). NOTE: this field is not yet implemented
 * @property {monitoring(v3).UptimeCheckIp[]} uptimeCheckIps The returned list of IP addresses (including region and location) that the checkers run from.
 */

/**
 * @typedef Metric
 * @memberOf! monitoring(v3)
 * @type object
 * @property {object} labels The set of label values that uniquely identify this metric. All labels listed in the MetricDescriptor must be assigned values.
 * @property {string} type An existing metric type, see google.api.MetricDescriptor. For example, custom.googleapis.com/invoice/paid/amount.
 */

/**
 * @typedef MetricDescriptor
 * @memberOf! monitoring(v3)
 * @type object
* @property {string} description A detailed description of the metric, which can be used in documentation.
* @property {string} displayName A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example &quot;Request count&quot;. This field is optional but it is recommended to be set for any metrics associated with user-visible concepts, such as Quota.
* @property {monitoring(v3).LabelDescriptor[]} labels The set of labels that can be used to describe a specific instance of this metric type. For example, the appengine.googleapis.com/http/server/response_latencies metric type has a label for the HTTP response code, response_code, so you can look at latencies for successful responses or just for responses that failed.
* @property {string} metricKind Whether the metric records instantaneous values, changes to a value, etc. Some combinations of metric_kind and value_type might not be supported.
* @property {string} name The resource name of the metric descriptor.
* @property {string} type The metric type, including its DNS name prefix. The type is not URL-encoded. All user-defined custom metric types have the DNS name custom.googleapis.com. Metric types should use a natural hierarchical grouping. For example:
&quot;custom.googleapis.com/invoice/paid/amount&quot;
&quot;appengine.googleapis.com/http/server/response_latencies&quot;

* @property {string} unit The unit in which the metric value is reported. It is only applicable if the value_type is INT64, DOUBLE, or DISTRIBUTION. The supported units are a subset of The Unified Code for Units of Measure (http://unitsofmeasure.org/ucum.html) standard:Basic units (UNIT)
bit bit
By byte
s second
min minute
h hour
d dayPrefixes (PREFIX)
k kilo (10**3)
M mega (10**6)
G giga (10**9)
T tera (10**12)
P peta (10**15)
E exa (10**18)
Z zetta (10**21)
Y yotta (10**24)
m milli (10**-3)
u micro (10**-6)
n nano (10**-9)
p pico (10**-12)
f femto (10**-15)
a atto (10**-18)
z zepto (10**-21)
y yocto (10**-24)
Ki kibi (2**10)
Mi mebi (2**20)
Gi gibi (2**30)
Ti tebi (2**40)GrammarThe grammar includes the dimensionless unit 1, such as 1/s.The grammar also includes these connectors:
/ division (as an infix operator, e.g. 1/s).
. multiplication (as an infix operator, e.g. GBy.d)The grammar for a unit is as follows:
Expression = Component { &quot;.&quot; Component } { &quot;/&quot; Component } ;

Component = [ PREFIX ] UNIT [ Annotation ]
          | Annotation
          | &quot;1&quot;
          ;

Annotation = &quot;{&quot; NAME &quot;}&quot; ;
Notes:
Annotation is just a comment if it follows a UNIT and is  equivalent to 1 if it is used alone. For examples,  {requests}/s == 1/s, By{transmitted}/s == By/s.
NAME is a sequence of non-blank printable ASCII characters not  containing &#39;{&#39; or &#39;}&#39;.
* @property {string} valueType Whether the measurement is an integer, a floating-point number, etc. Some combinations of metric_kind and value_type might not be supported.
*/

/**
 * @typedef MonitoredResource
 * @memberOf! monitoring(v3)
 * @type object
 * @property {object} labels Required. Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels &quot;project_id&quot;, &quot;instance_id&quot;, and &quot;zone&quot;.
 * @property {string} type Required. The monitored resource type. This field must match the type field of a MonitoredResourceDescriptor object. For example, the type of a Compute Engine VM instance is gce_instance.
 */

/**
 * @typedef MonitoredResourceDescriptor
 * @memberOf! monitoring(v3)
 * @type object
 * @property {string} description Optional. A detailed description of the monitored resource type that might be used in documentation.
 * @property {string} displayName Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without any article or other determiners. For example, &quot;Google Cloud SQL Database&quot;.
 * @property {monitoring(v3).LabelDescriptor[]} labels Required. A set of labels used to describe instances of this monitored resource type. For example, an individual Google Cloud SQL database is identified by values for the labels &quot;database_id&quot; and &quot;zone&quot;.
 * @property {string} name Optional. The resource name of the monitored resource descriptor: &quot;projects/{project_id}/monitoredResourceDescriptors/{type}&quot; where {type} is the value of the type field in this object and {project_id} is a project ID that provides API-specific context for accessing the type. APIs that do not use project information can use the resource name format &quot;monitoredResourceDescriptors/{type}&quot;.
 * @property {string} type Required. The monitored resource type. For example, the type &quot;cloudsql_database&quot; represents databases in Google Cloud SQL. The maximum length of this value is 256 characters.
 */

/**
 * @typedef Option
 * @memberOf! monitoring(v3)
 * @type object
 * @property {string} name The option&#39;s name. For protobuf built-in options (options defined in descriptor.proto), this is the short name. For example, &quot;map_entry&quot;. For custom options, it should be the fully-qualified name. For example, &quot;google.api.http&quot;.
 * @property {object} value The option&#39;s value packed in an Any message. If the value is a primitive, the corresponding wrapper type defined in google/protobuf/wrappers.proto should be used. If the value is an enum, it should be stored as an int32 value using the google.protobuf.Int32Value type.
 */

/**
 * @typedef Point
 * @memberOf! monitoring(v3)
 * @type object
 * @property {monitoring(v3).TimeInterval} interval The time interval to which the data point applies. For GAUGE metrics, only the end time of the interval is used. For DELTA metrics, the start and end time should specify a non-zero interval, with subsequent points specifying contiguous and non-overlapping intervals. For CUMULATIVE metrics, the start and end time should specify a non-zero interval, with subsequent points specifying the same start time and increasing end times, until an event resets the cumulative value to zero and sets a new start time for the following points.
 * @property {monitoring(v3).TypedValue} value The value of the data point.
 */

/**
 * @typedef Range
 * @memberOf! monitoring(v3)
 * @type object
 * @property {number} max The maximum of the population values.
 * @property {number} min The minimum of the population values.
 */

/**
 * @typedef ResourceGroup
 * @memberOf! monitoring(v3)
 * @type object
 * @property {string} groupId The group of resources being monitored. Should be only the group_id, not projects/&lt;project_id&gt;/groups/&lt;group_id&gt;.
 * @property {string} resourceType The resource type of the group members.
 */

/**
 * @typedef SourceContext
 * @memberOf! monitoring(v3)
 * @type object
 * @property {string} fileName The path-qualified name of the .proto file that contained the associated protobuf element. For example: &quot;google/protobuf/source_context.proto&quot;.
 */

/**
 * @typedef Status
 * @memberOf! monitoring(v3)
 * @type object
 * @property {integer} code The status code, which should be an enum value of google.rpc.Code.
 * @property {object[]} details A list of messages that carry the error details. There is a common set of message types for APIs to use.
 * @property {string} message A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
 */

/**
 * @typedef TcpCheck
 * @memberOf! monitoring(v3)
 * @type object
 * @property {integer} port The port to the page to run the check against. Will be combined with host (specified within the MonitoredResource) to construct the full URL. Required.
 */

/**
 * @typedef TimeInterval
 * @memberOf! monitoring(v3)
 * @type object
 * @property {string} endTime Required. The end of the time interval.
 * @property {string} startTime Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.
 */

/**
 * @typedef TimeSeries
 * @memberOf! monitoring(v3)
 * @type object
 * @property {monitoring(v3).Metric} metric The associated metric. A fully-specified metric used to identify the time series.
 * @property {string} metricKind The metric kind of the time series. When listing time series, this metric kind might be different from the metric kind of the associated metric if this time series is an alignment or reduction of other time series.When creating a time series, this field is optional. If present, it must be the same as the metric kind of the associated metric. If the associated metric&#39;s descriptor must be auto-created, then this field specifies the metric kind of the new descriptor and must be either GAUGE (the default) or CUMULATIVE.
 * @property {monitoring(v3).Point[]} points The data points of this time series. When listing time series, the order of the points is specified by the list method.When creating a time series, this field must contain exactly one point and the point&#39;s type must be the same as the value type of the associated metric. If the associated metric&#39;s descriptor must be auto-created, then the value type of the descriptor is determined by the point&#39;s type, which must be BOOL, INT64, DOUBLE, or DISTRIBUTION.
 * @property {monitoring(v3).MonitoredResource} resource The associated monitored resource. Custom metrics can use only certain monitored resource types in their time series data.
 * @property {string} valueType The value type of the time series. When listing time series, this value type might be different from the value type of the associated metric if this time series is an alignment or reduction of other time series.When creating a time series, this field is optional. If present, it must be the same as the type of the data in the points field.
 */

/**
 * @typedef Type
 * @memberOf! monitoring(v3)
 * @type object
 * @property {monitoring(v3).Field[]} fields The list of fields.
 * @property {string} name The fully qualified message name.
 * @property {string[]} oneofs The list of types appearing in oneof definitions in this type.
 * @property {monitoring(v3).Option[]} options The protocol buffer options.
 * @property {monitoring(v3).SourceContext} sourceContext The source context.
 * @property {string} syntax The source syntax.
 */

/**
 * @typedef TypedValue
 * @memberOf! monitoring(v3)
 * @type object
 * @property {boolean} boolValue A Boolean value: true or false.
 * @property {monitoring(v3).Distribution} distributionValue A distribution value.
 * @property {number} doubleValue A 64-bit double-precision floating-point number. Its magnitude is approximately &amp;plusmn;10&lt;sup&gt;&amp;plusmn;300&lt;/sup&gt; and it has 16 significant digits of precision.
 * @property {string} int64Value A 64-bit integer. Its range is approximately &amp;plusmn;9.2x10&lt;sup&gt;18&lt;/sup&gt;.
 * @property {string} stringValue A variable-length string value.
 */

/**
 * @typedef UptimeCheckConfig
 * @memberOf! monitoring(v3)
 * @type object
 * @property {monitoring(v3).ContentMatcher[]} contentMatchers The expected content on the page the check is run against. Currently, only the first entry in the list is supported, and other entries will be ignored. The server will look for an exact match of the string in the page response&#39;s content. This field is optional and should only be specified if a content match is required.
 * @property {string} displayName A human-friendly name for the uptime check configuration. The display name should be unique within a Stackdriver Account in order to make it easier to identify; however, uniqueness is not enforced. Required.
 * @property {monitoring(v3).HttpCheck} httpCheck Contains information needed to make an HTTP or HTTPS check.
 * @property {monitoring(v3).MonitoredResource} monitoredResource The monitored resource associated with the configuration.
 * @property {string} name A unique resource name for this UptimeCheckConfig. The format is:projects/[PROJECT_ID]/uptimeCheckConfigs/[UPTIME_CHECK_ID].This field should be omitted when creating the uptime check configuration; on create, the resource name is assigned by the server and included in the response.
 * @property {string} period How often the uptime check is performed. Currently, only 1, 5, 10, and 15 minutes are supported. Required.
 * @property {monitoring(v3).ResourceGroup} resourceGroup The group resource associated with the configuration.
 * @property {string[]} selectedRegions The list of regions from which the check will be run. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error message is returned. Not specifying this field will result in uptime checks running from all regions.
 * @property {monitoring(v3).TcpCheck} tcpCheck Contains information needed to make a TCP check.
 * @property {string} timeout The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). Required.
 */

/**
 * @typedef UptimeCheckIp
 * @memberOf! monitoring(v3)
 * @type object
 * @property {string} ipAddress The IP address from which the uptime check originates. This is a full IP address (not an IP address range). Most IP addresses, as of this publication, are in IPv4 format; however, one should not rely on the IP addresses being in IPv4 format indefinitely and should support interpreting this field in either IPv4 or IPv6 format.
 * @property {string} location A more specific location within the region that typically encodes a particular city/town/metro (and its containing state/province or country) within the broader umbrella region category.
 * @property {string} region A broad region category in which the IP address is located.
 */
export = Monitoring;
