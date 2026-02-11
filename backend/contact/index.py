import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def handler(event: dict, context) -> dict:
    '''API для отправки контактных форм с сайта на email'''
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        body = json.loads(event.get('body', '{}'))
        name = body.get('name', '')
        phone = body.get('phone', '')
        email = body.get('email', '')
        message = body.get('message', '')
        
        if not name or not (phone or email):
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Заполните обязательные поля'}),
                'isBase64Encoded': False
            }
        
        smtp_host = os.environ.get('SMTP_HOST')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_password = os.environ.get('SMTP_PASSWORD')
        contact_email = os.environ.get('CONTACT_EMAIL')
        
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'Новая заявка с сайта от {name}'
        msg['From'] = smtp_user
        msg['To'] = contact_email
        
        html_content = f'''
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
                    <h2 style="color: #1A1F2C; border-bottom: 3px solid #D4AF37; padding-bottom: 10px;">
                        Новая заявка с сайта LUXE
                    </h2>
                    
                    <div style="background: white; padding: 20px; border-radius: 5px; margin-top: 20px;">
                        <p style="margin: 10px 0;"><strong style="color: #D4AF37;">Имя:</strong> {name}</p>
                        <p style="margin: 10px 0;"><strong style="color: #D4AF37;">Телефон:</strong> {phone if phone else 'Не указан'}</p>
                        <p style="margin: 10px 0;"><strong style="color: #D4AF37;">Email:</strong> {email if email else 'Не указан'}</p>
                        
                        {f'<div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #D4AF37;"><strong style="color: #1A1F2C;">Сообщение:</strong><p style="margin: 10px 0 0 0;">{message}</p></div>' if message else ''}
                    </div>
                    
                    <p style="margin-top: 20px; font-size: 12px; color: #666;">
                        Это автоматическое сообщение с сайта LUXE Design Studio
                    </p>
                </div>
            </body>
        </html>
        '''
        
        part = MIMEText(html_content, 'html')
        msg.attach(part)
        
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.'
            }),
            'isBase64Encoded': False
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'Ошибка отправки: {str(e)}'}),
            'isBase64Encoded': False
        }
