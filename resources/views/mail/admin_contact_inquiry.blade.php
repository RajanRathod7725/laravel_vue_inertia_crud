<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Contact Inquiry</title>
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
            margin-bottom: 10px;
        }
        .label {
            font-weight: bold;
            color: #000;
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
        <h2>New Contact Inquiry</h2>
    </div>

    <div class="info">
        <p><span class="label">Name:</span> {{ $data['name'] }}</p>
        <p><span class="label">Email:</span> {{ $data['email'] }}</p>
        <p><span class="label">Message:</span></p>
        <p>{{ $data['message'] }}</p>
    </div>

    <div class="footer">
        This message was sent from your website's contact form.
    </div>
</div>
</body>
</html>
