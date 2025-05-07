export async function fetchProfileData() {
    // const url = 'https://raw.githubusercontent.com/matheussferraz/js-developer-portfolio/refs/heads/main/data/profile.json'
    const url = '/services/profile.json'
    const response = await fetch(url)
    return await response.json()
}