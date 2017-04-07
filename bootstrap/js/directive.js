# 指令
定义语法:
```javascript
app.directive('breadcrumb', function () {
    return {
        //局部作用域,如果写了link函数,可以不写这个.
        scope: {
            //@表示值与名字一致
            data: '@'
        },
        template: "",
        templateUrl: "templates/breadcrumb.html",
        replace: true,
        //推荐使用这个
        link: function (scope, element, attributes) {
            scope.data = JSON.parse(attributes.data);
        }
    }
});
```

示例 js: 
```javascript
var app = angular.module('app', []);
app.controller('mController', ['$scope', '$filter',
    function ($scope, $filter) {
        $scope.pathData = ['home', 'it', 'java'];
    }]);


app.directive('breadcrumb', function () {
    return {
        scope: {
            data: '@'
        },
        template: "",
        templateUrl: "templates/breadcrumb.html",
        replace: true,
        link: function (scope, element, attributes) {
            scope.data = JSON.parse(attributes.data);
        }
    }
});
```
html:
```html
<breadcrumb data="{{pathData}}"></breadcrumb>
```

模板html: 
```html
<ol class="breadcrumb">
    <li ng-repeat="path in data track by $index" ng-class="{active:$last}">
        < a href=" " ng-if="!$last">{{path}}</ a>
        <span ng-if="$last">{{path}}</span>
    </li>
</ol>
```