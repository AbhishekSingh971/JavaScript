  class Employee{
    constructor(givenName, givenExperience, givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan(){
        return `I am ${this.name} and this company is the best`;
    }
    joiningYear(){
        return 2022-this.experience;
    }

    static add(a,b){    //this is static because we can use this whithout or outside the class ,because we didn't use any parameter of  
        return a+b;     //class or function
    }
}

class Programmer extends Employee{
    constructor(givenName,givenExperience,givenDivision,Language,github){
        super(givenName,givenExperience,givenDivision);
        this.Language = Language;
        this.github = github;
    }
    favoriteLanguage(){
        if(this.language == "python"){
            return 'phython';
        }
        else{
            return 'JavaScript';
        }
    }
    static Multiplay(a, b){
        return a*b;
    }
}

// abhi = new Employee("abhi", 56, "division");
// console.log(abhi.joiningYear());
// console.log(Employee.add(34,5));   //this is static
rohan = new Programmer("rohan", 3 ,"lays","go","rohan420");
console.log(rohan);
console.log(rohan.favoriteLanguage());
console.log(Programmer.Multiplay(5,7));
