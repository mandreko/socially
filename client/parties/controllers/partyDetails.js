angular.module("socially").controller("PartyDetailsCtrl",
    function($scope, $stateParams, $meteor){

        $scope.party = $meteor.object(Parties, $stateParams.partyId).subscribe('parties');
        $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

        $scope.save = function() {
            $scope.party.save();
        };

        $scope.reset = function() {
            $scope.party.reset();
        };
    });