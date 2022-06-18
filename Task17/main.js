class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    getName() {
        return this._name;
    }

    getLevel() {
        return this._level;
    }

    getNumberOfStudents() {
        return this._numberOfStudents;
    }

    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }

    static pickSubstituteTeacher(substituteTeachers) {
        return substituteTeachers[Math.floor(Math.random() * substituteTeachers.length)];
    }

    setNumberOfStudents(numberOfStudents) {
        if (typeof numberOfStudents === 'number') {
            this.numberOfStudents = numberOfStudents;
        }
        else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    getPickupPolicy() {
        return this.pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get getSportsTeams(){
        for(let sportsTeamsIndex=0;sportsTeamsIndex<this._sportsTeams.length;sportsTeamsIndex++){
          console.log(this._sportsTeams[sportsTeamsIndex])
        }
      }
}

var lorraineHansbury = new PrimarySchool('Lorraine Hansbury', '514', 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

var alSmith = new HighSchool('Al E. Smith', '415', ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.getSportsTeams;