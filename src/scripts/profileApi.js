export async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/matheussferraz/professional-profile-mff/refs/heads/main/services/profile.json'
    //const url = '/services/profile.json'
    const response = await fetch(url)
    return await response.json()
}