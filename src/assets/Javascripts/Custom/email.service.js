
function SendEmail() {
    var nameValidate = validateElement("name");
    var emailValidate = validateElement("email");
    var subjectValidate = validateElement("subject");
    var messageBody = getMessageBody(nameValidate.Value, subjectValidate.Value);

    $(".sent-message").css("display", "none");

    if (nameValidate.Validate
        && emailValidate.Validate
        && subjectValidate.Validate) {
        $(".sent-message").css("display", "block");
        try {
            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "gks27chandru@gmail.com",
                Password: "07BC964C879932A4C078C524C53E7958DF13",
                To: 'gks27chandru@gmail.com',
                From: `gks27chandru@gmail.com`,
                Subject: subjectValidate.Value,
                Body: messageBody
            }).then(message => {
                console.log(message);
            });
        } catch (err) {
            console.log(JSON.stringify(err));
        }

        clearFields();
    }
}

function clearFields() {
    $("#name").val("");
    $("#email").val("");
    $("#subject").val("");
    $("#message").val("");
}

function getMessageBody(name, email) {
    var message = `<p>
    Sender: ${name}<br />
    Email: ${email} <br />
    Message: ${$("#message").val()}
    <p>`;
    return message;
}

function removeValidation(elementName) {
    var validateElement = $("#" + elementName).next();
    validateElement.innerHTML = "";
    validateElement.css("display", "none");
}

function validateElement(elementName) {
    var element = $(`#${elementName}`);
    var nextElement = element.next(".validate");
    nextElement.innerHTML = "";
    nextElement.css("display", "none");
    var validationResult = false;
    if (element != undefined) {
        var value = element.val();
        if (value == undefined || value.trim() == '') {
            nextElement.append(`Please enter ${elementName}`).css("display", "block");
        } else {
            validationResult = true;
        }
    }
    return { Validate: validationResult, Value: value };
}