"use strict";

var BaiduApiService = ['$resource', '$http', 'ConfigService', function($resource, $http, configService) {
    var service = {
        spamLabels: ['其他', '暴恐违禁', '文本色情', '政治敏感', '恶意推广', '低俗辱骂'],

        init: function() {
            $http.get(configService.baidu.oauth_url, { params: configService.baidu.oauth_params })
                .then(function(response) {
                    console.log(response);
                });
        },

        checkSpam: function(content) {
            return { passed: true, rejectLables: ['其他'] };
        },
    };

    return service;
}];