export default async function ObtenerProductos() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json");
        const data = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}