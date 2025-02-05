function createPromise(index) {
    const delay = Math.random() * (3 - 1) + 1; 
    return new Promise(resolve => {
        setTimeout(() => resolve({ index, time: delay.toFixed(3) }), delay * 1000);
    });
}

const promises = [createPromise(1), createPromise(2), createPromise(3)];
const output = document.getElementById("output");

Promise.all(promises).then(results => {
    output.innerHTML = ""; // Remove loading row
    results.forEach(result => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>Promise ${result.index}</td><td>${result.time}</td>`;
        output.appendChild(row);
    });
    const totalRow = document.createElement("tr");
    const maxTime = Math.max(...results.map(r => parseFloat(r.time))).toFixed(3);
    totalRow.innerHTML = `<td>Total</td><td>${maxTime}</td>`;
    output.appendChild(totalRow);
});


