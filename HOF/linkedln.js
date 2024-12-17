const validateLinkedInURL = (url) => {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;
    console.log(regex.test(url) ? "Valid LinkedIn Profile URL" : "Invalid LinkedIn Profile URL");
};
validateLinkedInURL("https://www.linkedin.com/in/johndoe123");
validateLinkedInURL("https://www.linkedin.com/in/short");
