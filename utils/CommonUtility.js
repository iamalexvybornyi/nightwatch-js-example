module.exports = {
    getRandomEmail(domain, length) {
        var emailAddress = "";
        var characters = "abcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++) {
            emailAddress += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return emailAddress + domain;
    }
}