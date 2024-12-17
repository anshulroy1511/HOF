const validateURL = (url) => {
    const regex = /^(https?:\/\/)[a-zA-Z0-9._-]+\.[a-zA-Z]+$/;
    console.log(regex.test(url) ? "Valid URL" : "Invalid URL");
};
validateURL("https://example.com");
validateURL("http:/example.com");
