const nodemailer = require('nodemailer');

async function main() {

    try {
        let testAccount = await nodemailer.createTestAccount();
        let transportar = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass
            }
        });

        let info = await transportar.sendMail({
            from: "'Nabhag Motivaras' <test@example.com>",
            to: "20dce063@charusat.edu.in",
            subject: "hello from nodemailer",
            text: "You can do it!!",
            html: "<b> Hoppeeee~~~~~~~~~~~~~~</b>"
        });

        console.log("message send: ", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    }catch(err) {
        console.log(err);
    }
}

main();