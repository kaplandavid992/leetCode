var addTwoPromises = async function(promise1, promise2) {
    const p1  = await promise1;
    const p2 = await promise2;
    const sum = p1+p2;
    return sum;
};