import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '1mb' }));

// 创建邮件 transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// 通用表单提交接口
app.post('/api/submit', async (req, res) => {
  try {
    const { type, data } = req.body;

    let subject = '';
    let html = '';

    if (type === 'contact') {
      subject = `[智优康赛官网] 新的客户咨询 - ${data.companyName}`;
      html = `
        <h2>新的客户咨询</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;">
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;width:120px;">公司全称</td><td style="padding:8px;border:1px solid #ddd;">${data.companyName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">联系人姓名</td><td style="padding:8px;border:1px solid #ddd;">${data.contactName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">手机号码</td><td style="padding:8px;border:1px solid #ddd;">${data.phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">电子邮箱</td><td style="padding:8px;border:1px solid #ddd;">${data.email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">业务诉求</td><td style="padding:8px;border:1px solid #ddd;">${data.businessNeeds}</td></tr>
          ${data.budget ? `<tr><td style="padding:8px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">预算范围</td><td style="padding:8px;border:1px solid #ddd;">${data.budget}</td></tr>` : ''}
          ${data.timeline ? `<tr><td style="padding:8px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">期望启动时间</td><td style="padding:8px;border:1px solid #ddd;">${data.timeline}</td></tr>` : ''}
        </table>
        <p style="color:#999;margin-top:16px;font-size:12px;">提交时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}</p>
      `;
    } else if (type === 'careers') {
      subject = `[智优康赛官网] 新的求职申请 - ${data.name} - ${data.position}`;
      html = `
        <h2>新的求职申请</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;">
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;width:120px;">公司全称</td><td style="padding:8px;border:1px solid #ddd;">${data.companyName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">姓名</td><td style="padding:8px;border:1px solid #ddd;">${data.name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">职位</td><td style="padding:8px;border:1px solid #ddd;">${data.position}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">电子邮箱</td><td style="padding:8px;border:1px solid #ddd;">${data.email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">联系方式</td><td style="padding:8px;border:1px solid #ddd;">${data.phone}</td></tr>
          ${data.message ? `<tr><td style="padding:8px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">补充说明</td><td style="padding:8px;border:1px solid #ddd;">${data.message}</td></tr>` : ''}
        </table>
        <p style="color:#999;margin-top:16px;font-size:12px;">提交时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}</p>
      `;
    } else {
      return res.status(400).json({ success: false, message: '未知的表单类型' });
    }

    await transporter.sendMail({
      from: `"AI Concepts 智优康赛" <${process.env.SMTP_USER}>`,
      to: process.env.NOTIFY_EMAIL,
      subject,
      html,
    });

    console.log(`[邮件发送成功] ${type} -> ${process.env.NOTIFY_EMAIL}`);
    res.json({ success: true, message: '提交成功' });
  } catch (error) {
    console.error('[邮件发送失败]', error.message);
    res.status(500).json({ success: false, message: '提交失败，请稍后重试' });
  }
});

// 健康检查
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[后端服务] 运行在 http://0.0.0.0:${PORT}`);
});
