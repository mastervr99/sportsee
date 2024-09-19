export function userAverageSessionsModel(data) {
    const daysMapping = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    const dataArray = [];
    
    data.sessions.forEach((session, index) => {
        dataArray.push({        
            day: daysMapping[index],
            sessionLength: session.sessionLength,
        });
    });

    return dataArray;
}
