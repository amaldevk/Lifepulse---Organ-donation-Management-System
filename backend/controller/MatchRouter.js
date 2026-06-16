    const express = require("express")
    const router=express.Router()
    const PatientModel=require("../model/PatientModel")
    const DonorModel=require("../model/DonorModel")


    // Calculate the matching score 
    function calculateCompatibility(donor,patient) {
        let compatibilityScore = 0;
    
        // Factor weights 
        const factorWeights = {
        bloodType: 5,
        specificOrgansToDonate: 10,
        age: 2
        };
    
        // Blood Type Matching
        if (patient.bloodType == donor.bloodtype) {

            compatibilityScore += factorWeights.bloodType;

            const searchLower = patient.RequiredOrgan.toLowerCase();

            if (donor.specificOrgansToDonate && donor.specificOrgansToDonate.length > 0 && donor.specificOrgansToDonate.includes(searchLower)) {

                compatibilityScore += factorWeights.specificOrgansToDonate;
                const maxAgeScore = 100;
                const ageDifference = Math.abs(new Date(patient.Dateofbirth) - new Date(donor.dateofbirth));
                const yearsDifference = Math.floor(ageDifference / (1000 * 60 * 60 * 24 * 365)); // Convert milliseconds to years
                const ageScore = maxAgeScore - (yearsDifference * factorWeights.age);
                
                compatibilityScore += ageScore;
            }
        }

        return compatibilityScore;
    }


    // Route to search for patient and find the best donor
    router.post('/result', async (req, res) => {
        try {
        const { patientName } = req.body;

        const capitalizedPatientName = patientName
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

            // Find the patient
        const patient = await PatientModel.findOne({ Fullname: capitalizedPatientName });
    
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
    
        // Find all donors
        const donors = await DonorModel.find();
    
        let bestDonor = [];
        let highestScore = -1;
    
        // Calculate the matching score for each donor
        donors.forEach(donor => {
            const score = calculateCompatibility(donor, patient);
            // Update the best donor if the current donor has a higher score
            if(score == highestScore){
                bestDonor.push(donor);
            }
            else if (score > highestScore) {
            highestScore = score;
            bestDonor = [donor];
            }
        });

        if(highestScore==5){
            bestDonor = [];
            highestScore=-1;
        }
    
        // Return the best suitable donor
        res.json({ bestDonor, highestScore });
        } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: 'Server Error' });
        }
    });
    
    
    module.exports = router;