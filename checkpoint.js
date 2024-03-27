
//Iterating with Async/Await:
async function iterateWithAsyncAwait(array) {
    for (const value of array) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(value);
    }
}

// Usage
iterateWithAsyncAwait([1, 2, 3, 4, 5]);

//Awaiting a Call
async function awaitCall() {
    // Simulating API call
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}

// Usage
awaitCall();

//Handling Errors with Async/Await: 
async function awaitCall() {
    //Awaiting a Call
    try {
        // Simulating API call
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
        // Handling errors
    } catch (error) {
        console.error('An error occurred while fetching the data:', error);
    }
}

// Usage
awaitCall();

//Chaining Async/Await:
async function asyncFunction1() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Message from function 1');
}
// Chaining async functions
async function asyncFunction2() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Message from function 2');
}
// Chaining async functions
async function asyncFunction3() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Message from function 3');
}
// Chaining async functions
async function chainedAsyncFunctions() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
}

// Usage
chainedAsyncFunctions();


//Awaiting Concurrent Requests: 
async function awaitConcurrentRequests() {
    // Simulating concurrent API calls
    const [response1, response2] = await Promise.all([
        fetch('https://api.example.com/data1'),
        fetch('https://api.example.com/data2')
    ]);
    const data1 = await response1.json();
    const data2 = await response2.json();
    console.log(data1, data2);
}
// Making concurrent requests
async function concurrentRequests() {
    try {
        const [response1, response2] = await Promise.all([
            fetch('https://api.example.com/data1'),
            fetch('https://api.example.com/data2')
        ]);
        const data1 = await response1.json();
        const data2 = await response2.json();
        console.log('Combined results:', data1, data2);
    } catch (error) {
        console.error('An error occurred while fetching the data:', error);
    }
}

// Usage
concurrentRequests();

//Awaiting Parallel Calls
async function parallelCalls(urls) {
    try {
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(responses.map(response => response.json()));
        console.log(data);
    } catch (error) {
        console.error('An error occurred while fetching the data:', error);
    }
}

// Usage
parallelCalls(['https://api.example.com/data1', 'https://api.example.com/data2']);
