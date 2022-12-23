app=angular.module("admin-app",["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/product",{
        templateUrl:"/assets/admin/product/index.html",
        controller:"product-ctrl"
    })
    .when("/donhang",{
        templateUrl:"/assets/admin/donhang/index.html",
        controller:"donhang-ctrl"
    })
    .when("/accounts",{
        templateUrl:"/assets/admin/accounts/index.html",
        controller:"accounts-ctrl"
    })
    .when("/discount",{
        templateUrl:"/assets/admin/discount/index.html",
        controller:"discount-ctrl"
    })
    .when("/category",{
        templateUrl:"/assets/admin/category/index.html",
        controller:"category-ctrl"
    })
    .when("/chuonghoc",{
        templateUrl:"/assets/admin/chuonghoc/index.html",
        controller:"chuonghoc-ctrl"
    })
    .when("/baihoc",{
        templateUrl:"/assets/admin/baihoc/index.html",
        controller:"baihoc-ctrl"
    })
    .when("/role",{
        templateUrl:"/assets/admin/role/index.html",
        controller:"role-ctrl"
    })
    .when("/quiz",{
        templateUrl:"/assets/admin/quiz/index.html",
        controller:"quiz-ctrl"
    })
    .when("/phuongan",{
        templateUrl:"/assets/admin/phuongan/index.html",
        controller:"phuongan-ctrl"
    })
    .when("/authorize",{
        templateUrl:"/assets/admin/authority/index.html",
        controller:"authority-ctrl"
    })
    .when("/test",{
        templateUrl:"/assets/admin/test/index.html",
        controller:"test-ctrl"
    })
    .when("/thaoluan",{
        templateUrl:"/assets/admin/thaoluan/index.html",
        controller:"thaoluan-ctrl"
    })
    .when("/unauthorized",{
        templateUrl:"/assets/admin/authority/unauthorized.html",
        controller:"authority-ctrl"
    })
    
    .otherwise({
        templateUrl:"/assets/admin/layout/index.html"
    });
})