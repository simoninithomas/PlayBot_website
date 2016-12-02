/************************************************************************************************************************
 ************************************************************************************************************************
 ************************************************************************************************************************
 *
 *                                                instantadsApp router
 * @author: SIMONINI Thomas simonini_thomas@outlook.fr
 ************************************************************************************************************************
 ************************************************************************************************************************
 *************************************************************************************************************************/
angular.module('playBot.router', [])



    /************************************************************************************************************************
     *                                                    Router
     ************************************************************************************************************************/
    .config(function($routeProvider){
            $routeProvider
                .when('/',{
                    templateUrl: 'assets/templates/english.html'
                })
                .when('/about', {
                    templateUrl: 'assets/templates/about.html'
                })
                .when('/english', {
                    templateUrl: 'assets/templates/english.html'
                })
                .otherwise('/')
        }
    )