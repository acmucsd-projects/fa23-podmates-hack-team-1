const mongoose = require('mongoose');
const userProfile = require('./userProfile')
const apartmentPreferences = require('./apartmentPreferences');
const lifestyle = require('./lifestyle');
const onCampus = require('./onCampus');
const offCampus = require('./offCampus');

const matchingAlgorithm = (profile1, profile2) => {
    const weights = {
        roomtype: 5,
        distanceFromCampus: 3,
        leaseStart: 4,
        leaseEnd: 4,
        pets: 3,
        alcoholUsage: 3,
        drugUsage: 3,
        smokingUsage: 3,
        LGBTQfriendly: 5,
        religion: 3,
        sexualOrientation: 5, 
        politics: 3,
        socialActiveness: 4,
        genderInclusiveHousing: 5,
        Chronotype: 3,
        cleanliness: 3

    }

    let score = 0;
    
    if(profile1.onCampus && profile2.onCampus) {
        if(profile1.onCampus.ucsdCollege == profile2.onCampus.ucsdCollege) {
            if(!(profile1.onCampus.roomtype == 'single') && !(profile2.onCampus.roomtype == 'single') && (profile1.onCampus.roomtype == profile2.onCampus.roomtype)) { //check !single
                score += weights.roomtype;
            }
            if(profile1.apartmentPreferences.pets == profile2.apartmentPreferences.pets) {
                score += weights.pets; //
            }
            if((profile1.apartmentPreferences.alcoholUsage == "No preference") || (profile2.apartmentPreferences.alcoholUsage =="No preference") || (profile1.apartmentPreferences.alcoholUsage == profile2.onCampus.alcoholUsage)) {
                score += weights.alcoholUsage; //
                
            }
            if((profile1.apartmentPreferences.drugUsage == "No preference") || (profile2.apartmentPreferences.drugUsage =="No preference") || (profile1.apartmentPreferences.drugUsage == profile2.apartmentPreferences.drugUsage)) {
                score += weights.drugUsage; //
                
            }
            if((profile1.apartmentPreferences.smokingUsage == "No preference") || (profile2.apartmentPreferences.smokingUsage =="No preference") || (profile1.apartmentPreferences.smokingUsage == profile2.onCampus.smokingUsage)) {
                score += weights.smokingUsage; //
            }
            if((profile1.apartmentPreferences.LGBTQfriendly == "No preference") || (profile2.apartmentPreferences.LGBTQfriendly =="No preference") || (profile1.apartmentPreferences.LGBTQfriendly == profile2.apartmentPreferences.LGBTQfriendly)) {
                score += weights.LGBTQfriendly; //
            }
            if(profile1.apartmentPreferences.religion == profile2.apartmentPreferences.religion) {
                score += weights.religion; 
            }
            if((profile1.apartmentPreferences.sexualOrientation == "No preference") || (profile2.apartmentPreferences.sexualOrientation =="No preference") || (profile1.apartmentPreferences.sexualOrientation == profile2.apartmentPreferences.sexualOrientation)) {
                score += weights.sexualOrientation; //
            }
            if(profile1.apartmentPreferences.politics == profile2.apartmentPreferences.politics) {
                score += weights.politics;
            }
            if(profile1.apartmentPreferences.socialActiveness == profile2.apartmentPreferences.socialActiveness) {
                score += weights.socialActiveness;
            }
            if((profile1.apartmentPreferences.genderInclusiveHousing == "No preference") || (profile2.apartmentPreferences.genderInclusiveHousing =="No preference") || (profile1.apartmentPreferences.genderInclusiveHousing == profile2.apartmentPreferences.genderInclusiveHousing)) {
                score += weights.genderInclusiveHousing; //
            }
            if(profile1.lifestyle.Chronotype == profile2.lifestyle.Chronotype) {
                score += weights.Chronotype;
            }
            if(profile1.lifestyle.cleanliness == profile2.lifestyle.cleanliness) {
                score += weights.cleanliness;
            }
            
            
        }
    }
    else if (profile1.offCampus && profile2.offCampus) {
        if(profile1.offCampus.budget == profile2.offCampus.budget) {
            if(profile1.offCampus.distanceFromCampus == profile2.offCampus.distanceFromCampus) {
                score += weights.distanceFromCampus;
            }
            if(profile1.offCampus.leaseStart == profile2.offCampus.leaseStart) {
                score += weights.leaseStart;
            }
            if(profile1.offCampus.leaseEnd == profile2.offCampus.leaseEnd) {
                score += weights.leaseEnd;
            }
            if(profile1.apartmentPreferences.pets == profile2.apartmentPreferences.pets) {
                score += weights.pets; //
            }
            if((profile1.apartmentPreferences.alcoholUsage == "No preference") || (profile2.apartmentPreferences.alcoholUsage =="No preference") || (profile1.apartmentPreferences.alcoholUsage == profile2.onCampus.alcoholUsage)) {
                score += weights.alcoholUsage; //
                
            }
            if((profile1.apartmentPreferences.drugUsage == "No preference") || (profile2.apartmentPreferences.drugUsage =="No preference") || (profile1.apartmentPreferences.drugUsage == profile2.apartmentPreferences.drugUsage)) {
                score += weights.drugUsage; //
                
            }
            if((profile1.apartmentPreferences.smokingUsage == "No preference") || (profile2.apartmentPreferences.smokingUsage =="No preference") || (profile1.apartmentPreferences.smokingUsage == profile2.onCampus.smokingUsage)) {
                score += weights.smokingUsage; //
            }
            if((profile1.apartmentPreferences.LGBTQfriendly == "No preference") || (profile2.apartmentPreferences.LGBTQfriendly =="No preference") || (profile1.apartmentPreferences.LGBTQfriendly == profile2.apartmentPreferences.LGBTQfriendly)) {
                score += weights.LGBTQfriendly; //
            }
            if(profile1.apartmentPreferences.religion == profile2.apartmentPreferences.religion) {
                score += weights.religion; 
            }
            if((profile1.apartmentPreferences.sexualOrientation == "No preference") || (profile2.apartmentPreferences.sexualOrientation =="No preference") || (profile1.apartmentPreferences.sexualOrientation == profile2.apartmentPreferences.sexualOrientation)) {
                score += weights.sexualOrientation; //
            }
            if(profile1.apartmentPreferences.politics == profile2.apartmentPreferences.politics) {
                score += weights.politics;
            }
            if(profile1.apartmentPreferences.socialActiveness == profile2.apartmentPreferences.socialActiveness) {
                score += weights.socialActiveness;
            }
            if((profile1.apartmentPreferences.genderInclusiveHousing == "No preference") || (profile2.apartmentPreferences.genderInclusiveHousing =="No preference") || (profile1.apartmentPreferences.genderInclusiveHousing == profile2.apartmentPreferences.genderInclusiveHousing)) {
                score += weights.genderInclusiveHousing; //
            }
            if(profile1.lifestyle.Chronotype == profile2.lifestyle.Chronotype) {
                score += weights.Chronotype;
            }
            if(profile1.lifestyle.cleanliness == profile2.lifestyle.cleanliness) {
                score += weights.cleanliness;
            }

        }
    }
    return score;
}
