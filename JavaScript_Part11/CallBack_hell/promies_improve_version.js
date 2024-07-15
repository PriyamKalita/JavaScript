function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Success: Data was Saved");
        } else {
            reject("Failure: Weak Connection");
        }
    });
}

// Promise Chaining
saveToDb("Hello World")

    .then((result) => {
        console.log("Data1 Saved");
        console.log("Result of Promise:", result);
        return saveToDb("Hello World Hi");
    })

    .then((result) => {
        console.log("Data2 Saved");
        console.log("Result of Promise:", result);
        return saveToDb("Priyam Kalita");
    })

    .then((result) => {
        console.log("Data3 Saved");
        console.log("Result of Promise:", result);
    })

    .catch((error) => {
        console.log("Promise was Rejected");
        console.log("Error of Promise:", error);
    });
