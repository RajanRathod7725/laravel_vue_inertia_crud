<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Contact Confirmation</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f6f8fa;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.05);
        }
        .header {
            border-bottom: 1px solid #eaeaea;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        h2 {
            color: #333333;
            margin: 0;
        }
        p {
            color: #555555;
            font-size: 15px;
            line-height: 1.6;
        }
        .info {
            margin-top: 20px;
        }
        .label {
            font-weight: bold;
        }
        .footer {
            margin-top: 30px;
            font-size: 13px;
            color: #999999;
            text-align: center;
        }
    </style>
</head>
<body>
<div class="container">
    <div class="header">
        <h2>✅ Message Received! Thank you.</h2>
    </div>

    <p>Hi {{$data['name']}},</p>

    <p>Thank you for reaching out to us! We’ve received your message and will get back to you shortly.</p>

    <p>We appreciate your interest and will be in touch soon. Thank you.</p>

    <p>Best regards,</p>
    <p>Rajan Rathod</p>

</div>
</body>
</html>
