function pet(name,age,breed,location,Breedfee = 0){
    this.name = name;
    this.age = age;
    this.location = location;
    this.Breedfee = Breedfee;

    this.CalculateAdoptionFee = function(ageFee,breedFee){
        const baseFee = 100;
        const totalFee = baseFee + ageFee + this.Breedfee + breedFee;
        return totalFee; 

    };
}


const fluffy = new pet(4,"Fluffy",11,"Siamese","Warwick","RI",30);
const peanut = new pet(5,"Peanut",10,"Maltese","Johnston","RI");
const goofy = new pet(6,"Goofy",7,"Tabby","Cranston","RI",50,30);
const luna = new pet(7,"Luna",12,"Border Collie","Newport","RI");


displayPetprofile(fluffy);
displayPetprofile(peanut);
displayPetprofile(goofy);
displayPetprofile(luna);

