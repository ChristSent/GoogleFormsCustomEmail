function forwardEmail(e) {

  var forwardEmail = "<insert email address here>";

  var firstName = e.values[2];
  var lastName = e.values[3];

  var fileUrl = e.values[5];
  var fileId = fileUrl.split('id=')[1];
  Logger.log(fileId)

  var subject = "Here we enter the subject of the email " + " - " + firstName + " " + lastName;  
  var message = "\n\n Attachment: " + fileUrl
      
  var attachment = DriveApp.getFileById(fileId);
  
  MailApp.sendEmail(forwardEmail, subject, message, {attachments: [attachment]});
}
