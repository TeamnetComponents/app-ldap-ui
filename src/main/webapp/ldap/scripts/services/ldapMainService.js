ldapServices.factory('ldapMainService', ['$resource', function ($resource) {
    return $resource('app/rest/main', {}, {
    });
}]);