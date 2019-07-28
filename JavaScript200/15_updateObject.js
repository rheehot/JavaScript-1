var family = {
    'address': 'Seoul',
    members: {},
    addFamily : function(age, name, role) {
        this.members[role] = {
            age: age,
            name: name
        };
    },
    getHeadcount : function() {
        return Object.keys(this.members).length;
    },
    showMembers : function() {
        return this.members;
    }
}

family.addFamily(30,"choi","aunt")
family.addFamily(6,'jacy',"niece")
family.addFamily(10,"sola","dog")

var printMembers = function() {
    var members = family.members;
    for (role in members){
        console.log(role,members[role].name,members[role].age)
    }
}
printMembers()
console.log(family.getHeadcount())
console.log(family.showMembers())