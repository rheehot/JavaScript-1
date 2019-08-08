var address = 'Seoul';
var members = {};
var addFamily = function(age, name, role) {
        this.members[role] = { age, name };
};
var getHeadcount = function() {
        return Object.keys(this.members).length;
};

var showMembers = function() {
    return this.members;
};

var family = { address, members, addFamily, getHeadcount, showMembers }

family.addFamily(30,"choi","aunt")
family.addFamily(6,'jacy',"niece")
family.addFamily(10,"sola","dog")
console.log(family.getHeadcount());
console.log(family.showMembers());