export function userActivityModel(data) {
    const activityArray = [];
    
    data.sessions.forEach((session, index) => {
        activityArray.push({        
            day: index+1,
            kilogram: session.kilogram,
            calories: session.calories
        });
    });

    return activityArray;
}
