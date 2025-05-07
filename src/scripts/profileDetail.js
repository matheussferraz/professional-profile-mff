import { Profile } from './profileModel.js';
import { fetchProfileData } from './profileApi.js';

export async function convertProfileJsonToProfileModel() {
    try {
        const profileJson = await fetchProfileData()
        const profile = new Profile()
        profile.photo = profileJson.photo;
        profile.name = profileJson.name;
        profile.job = profileJson.job;
        profile.location = profileJson.location;
        profile.phone = profileJson.phone;
        profile.email = profileJson.email;
        profile.skills.hardSkills = profileJson.skills.hardSkills;
        profile.skills.softSkills = profileJson.skills.softSkills;
        profile.languages = profileJson.languages;
        profile.professionalExperience = profileJson.professionalExperience;
        profile.portfolio = profileJson.portfolio;
        return profile
    }
    catch {
        console.error('Erro ao converter perfil:', error);
        throw error;
    }
}