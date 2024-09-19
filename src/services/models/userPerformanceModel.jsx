export function userPerformanceModel(data) {
    const dataArray = [];

    const kindMap = data.kind;

    data.data.forEach((item) => {
        dataArray.push({
            kind: kindMap[item.kind],
            value: item.value
        });
    });

    return dataArray;
}
