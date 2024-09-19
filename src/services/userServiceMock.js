const mockDataUserInfos = {
    data: {
        id: 18,
        userInfos: {
            firstName: "Cecilia",
            lastName: "Ratorez",
            age: 34
        },
        score: 0.3,
        keyData: {
            calorieCount: 2500,
            proteinCount: 90,
            carbohydrateCount: 150,
            lipidCount: 120
        }
    }
};

const mockDataUserSessions = {
    data: {
        userId: 12,
        sessions: [
            {
                day: "2020-07-01",
                kilogram: 80,
                calories: 240
            },
            {
                day: "2020-07-02",
                kilogram: 80,
                calories: 220
            },
            {
                day: "2020-07-03",
                kilogram: 81,
                calories: 280
            },
            {
                day: "2020-07-04",
                kilogram: 81,
                calories: 290
            },
            {
                day: "2020-07-05",
                kilogram: 80,
                calories: 160
            },
            {
                day: "2020-07-06",
                kilogram: 78,
                calories: 162
            },
            {
                day: "2020-07-07",
                kilogram: 76,
                calories: 390
            }
        ]
    }
};


const mockDataUserAverageSessions = {"data":{"userId":12,"sessions":[{"day":1,"sessionLength":30},{"day":2,"sessionLength":23},{"day":3,"sessionLength":45},{"day":4,"sessionLength":50},{"day":5,"sessionLength":0},{"day":6,"sessionLength":0},{"day":7,"sessionLength":60}]}};

const mockDataUserPerformance = {"data":{"userId":12,"kind":{"1":"cardio","2":"energy","3":"endurance","4":"strength","5":"speed","6":"intensity"},"data":[{"value":80,"kind":1},{"value":120,"kind":2},{"value":140,"kind":3},{"value":50,"kind":4},{"value":200,"kind":5},{"value":90,"kind":6}]}}

export async function getUserInfos(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockDataUserInfos);
        }, 1000);
    });
}

export async function getUserActivity(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockDataUserSessions);
        }, 1000);
    });
}

export async function getUserAverageSessions(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockDataUserAverageSessions);
        }, 1000);
    });
}

export async function getUserPerformance(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockDataUserPerformance);
        }, 1000);
    });
}