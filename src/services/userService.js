
export async function getUserInfos(userId) {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        if (!response.ok) {
            const error_message = "Notre service est actuellement indisponible. Nous vous invitons à réessayer ultérieurement. Merci de votre compréhension."
            return error_message;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return "Une erreur s'est produite. Veuillez réessayer ultérieurement.";
    }
}

export async function getUserActivity(userId) {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
        if (!response.ok) {
            const error_message = "Cette information est actuellement indisponible. Nous vous invitons à réessayer ultérieurement. Merci de votre compréhension."
            return error_message;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return "Une erreur s'est produite. Veuillez réessayer ultérieurement.";    
    }
}

export async function getUserAverageSessions(userId) {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
        if (!response.ok) {
            const error_message = "Notre information est actuellement indisponible. Nous vous invitons à réessayer ultérieurement. Merci de votre compréhension."
            return error_message;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return "Une erreur s'est produite. Veuillez réessayer ultérieurement.";    
    }
}

export async function getUserPerformance(userId) {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
        if (!response.ok) {
            const error_message = "Notre information est actuellement indisponible. Nous vous invitons à réessayer ultérieurement. Merci de votre compréhension."
            return error_message;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return "Une erreur s'est produite. Veuillez réessayer ultérieurement.";
    }
}