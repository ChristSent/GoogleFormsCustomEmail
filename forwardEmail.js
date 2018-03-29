function forwardEmail(e) {

  var forwardEmail = "<insert comma separated list of emails here>";

  var firstName = e.values[2]; //This assumes that the second qustion on your form is first name
  var lastName = e.values[3];  //This assumes that the third qustion on your form is last name

  var subject = "See submitted form attachments from" + " - " + firstName + " " + lastName; //This is the subject of your email
  var message = "Information is attached."; //This is the body of your email

  var my_attachments = [];
  var my_vals = e.values;
  for (index = 0; index < my_vals.length; ++index) {
    var form_val = my_vals[index];
    if(String(form_val).indexOf("http") > -1) {
      var urls = [];
      urls = form_val.split(',');
      for (url_index = 0; url_index < urls.length; ++url_index) {
        val = urls[url_index];
        var fileId = val.split('id=')[1];
        my_attachments.push(DriveApp.getFileById(fileId))
      }
    }
  }

  MailApp.sendEmail(forwardEmail, subject, message, {attachments: my_attachments});
}
