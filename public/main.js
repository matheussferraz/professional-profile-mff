import { convertProfileJsonToProfileModel } from "../src/scripts/profileDetail.js";

async function loadProfileData() {
    try {
        const profile = await convertProfileJsonToProfileModel()
        return profile
    } catch (error) {
        console.error('Falha ao carregar perfil:', error)
    }
}

async function loadHeader(model) {
    const imageProfile = document.getElementById('imageProfile')
    const listContactProfile = document.getElementById('listContactProfile');
    try {
        if (imageProfile) {
            imageProfile.innerHTML = `<img src="${model.photo}" alt="${model.name}">`;
        }
        if (listContactProfile) {
            listContactProfile.innerHTML = `
                    <li id="nameProfile">Olá, eu sou o ${model.name}</li>
                    <li>${model.job}</li>
                    <li>${model.location}</li>
                    <li>${model.phone}</li>
                    <li>${model.email}</li>
            `
        }
    } catch (error) {
        console.error("Erro ao carregar os dados: ", error)
    }
}

async function loadSkills(model) {
    const listImageTech = document.getElementById('listImageTech');
    const listPersonalTools = document.getElementById('listPersonalTools')
    const listLanguages = document.getElementById('listLanguages')
    const listExperiences = document.getElementById('listExperiences');
    const listPortfolio = document.getElementById('listPortfolio');
    try {
        listImageTech.innerHTML = model.skills.hardSkills.map(hardSkill => `
            <li>
                <img src="${hardSkill.logo}" alt="icone da tecnologia ${hardSkill.name}">
            </li>
        `).join('');

        listPersonalTools.innerHTML = model.skills.softSkills.map(softSkill => `
            <li>${softSkill}</li>
        `).join('');

        listLanguages.innerHTML = model.languages.map(language => `
            <li>${language}</li>
            `
        ).join('');
        listExperiences.innerHTML = model.professionalExperience.map(experience => `
            <li>
                <p>${experience.name}</p>
                <p>${experience.period}</p>
                ${experience.description}
            </li><br>
            `
        ).join('');
        listPortfolio.innerHTML = model.portfolio.map(item => `
            <li>
                <p>${item.name}</p>
                <a href="${item.url}" target="_blank">${item.url}</a>
            </li><br>
            `
        ).join('');
        
    } catch (error) {
        console.error(error);
    }
}
async function loadDetails(model) {
    loadSkills(model)
}

async function screenData() {
    const responseDataModel = await loadProfileData()
    loadHeader(responseDataModel)
    loadDetails(responseDataModel)
    //console.log(response)
}

function main(){
    screenData();    
}
main();