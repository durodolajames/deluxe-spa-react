import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const event = await request.json();

    // Only process successful charges
    if (event.event !== 'charge.success') {
      return NextResponse.json({ ignored: true });
    }

    const { reference, metadata, customer, amount } = event.data;

    const getMeta = (name: string): string => {
      const field = metadata?.custom_fields?.find((f: { variable_name: string }) => f.variable_name === name);
      return field?.value || 'N/A';
    };

    const order = {
      reference,
      customerEmail: customer.email,
      customerName: customer.first_name || customer.email.split('@')[0] || 'Valued Customer',
      phone: getMeta('phone'),
      items: getMeta('items'),
      itemName: getMeta('item') || getMeta('product'),
      location: getMeta('location'),
      shipping: getMeta('shipping'),
      subtotal: getMeta('subtotal'),
      total: '₦' + (amount / 100).toLocaleString(),
      orderType: getMeta('type'),
      category: getMeta('category'),
    };

    // Send customer email
    await resend.emails.send({
      from: 'Deluxe Skin Care <orders@deluxeskincare.ng>',
      to: order.customerEmail,
      subject: `Order Confirmed — ${order.reference}`,
      html: customerEmailTemplate(order),
    });

    // Send merchant email
    await resend.emails.send({
      from: 'Deluxe Skin Care <orders@deluxeskincare.ng>',
      to: process.env.MERCHANT_EMAIL!,
      subject: `🛒 New Order — ${order.reference}`,
      html: merchantEmailTemplate(order),
    });

    return NextResponse.json({ sent: true });
  } catch (err) {
    console.error('Webhook error:', err);
    return NextResponse.json({ error: String(err) }, { status: 200 });
  }
}

function customerEmailTemplate(o: any) {
  const isService = o.orderType?.includes('Service') || o.orderType?.includes('Booking');

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Order Confirmation</title></head>
<body style="margin:0;padding:0;font-family:'Montserrat',-apple-system,BlinkMacSystemFont,sans-serif;background:#fff8f1;color:#1e1b15;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#fff8f1;"><tr><td align="center" style="padding:40px 20px;">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(18,16,14,0.06);">
      <tr><td style="background:#12100E;padding:32px;text-align:center;">
        <h1 style="margin:0;font-family:'Playfair Display',serif;font-size:28px;font-weight:600;color:#C5B081;letter-spacing:-0.02em;">Deluxe Skin Care</h1>
        <p style="margin:8px 0 0;font-size:12px;color:#EFE9D9;letter-spacing:0.1em;text-transform:uppercase;">Luxury Med Spa & Skincare</p>
      </td></tr>
      <tr><td style="padding:40px 32px;">
        <h2 style="margin:0 0 8px;font-family:'Playfair Display',serif;font-size:24px;font-weight:600;color:#12100E;">Thank You, ${o.customerName}!</h2>
        <p style="margin:0 0 32px;font-size:14px;color:#4d463a;line-height:1.6;">We've received your ${isService ? 'booking' : 'order'} and are preparing everything for you.</p>
        <div style="background:#fbf2e8;border-radius:8px;padding:24px;margin-bottom:32px;">
          <h3 style="margin:0 0 16px;font-family:'Playfair Display',serif;font-size:18px;font-weight:600;color:#12100E;">Order #${o.reference}</h3>
          <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
            ${o.items !== 'N/A' ? `<tr><td style="padding:8px 0;color:#7f7669;vertical-align:top;width:120px;">Items</td><td style="padding:8px 0;color:#1e1b15;font-weight:500;">${o.items}</td></tr>` : `<tr><td style="padding:8px 0;color:#7f7669;vertical-align:top;width:120px;">Item</td><td style="padding:8px 0;color:#1e1b15;font-weight:500;">${o.itemName}</td></tr>`}
            ${o.location !== 'N/A' ? `<tr><td style="padding:8px 0;color:#7f7669;">Delivery</td><td style="padding:8px 0;color:#1e1b15;font-weight:500;">${o.location}</td></tr>` : ''}
            ${o.phone !== 'N/A' ? `<tr><td style="padding:8px 0;color:#7f7669;">Phone</td><td style="padding:8px 0;color:#1e1b15;font-weight:500;">${o.phone}</td></tr>` : ''}
            ${o.subtotal !== 'N/A' ? `<tr><td style="padding:8px 0;color:#7f7669;">Subtotal</td><td style="padding:8px 0;color:#1e1b15;">${o.subtotal}</td></tr>` : ''}
            ${o.shipping !== 'N/A' && o.shipping !== '₦0' ? `<tr><td style="padding:8px 0;color:#7f7669;">Shipping</td><td style="padding:8px 0;color:#715827;font-weight:500;">${o.shipping}</td></tr>` : ''}
            <tr><td style="padding:12px 0 0;border-top:1px solid #d0c5b6;font-family:'Playfair Display',serif;font-size:18px;font-weight:600;color:#12100E;">Total Paid</td><td style="padding:12px 0 0;border-top:1px solid #d0c5b6;font-family:'Playfair Display',serif;font-size:18px;font-weight:600;color:#715827;text-align:right;">${o.total}</td></tr>
          </table>
        </div>
        <div style="background:#fbf2e8;border-radius:8px;padding:20px;margin-bottom:24px;">
          <p style="margin:0;font-size:14px;color:#4d463a;line-height:1.6;">${isService ? 'Our booking team will contact you at <strong>' + o.phone + '</strong> within 24 hours to confirm your appointment time.' : 'Your order will be processed and delivered within <strong>2-3 business days</strong>.'}</p>
        </div>
        <p style="margin:0;font-size:13px;color:#7f7669;line-height:1.6;">Questions? Reply to this email or WhatsApp us at <strong>+234 800 000 0000</strong>.</p>
      </td></tr>
      <tr><td style="background:#12100E;padding:24px 32px;text-align:center;">
        <p style="margin:0;font-size:12px;color:#EFE9D9;">Deluxe Skin Care · Lagos, Nigeria</p>
        <p style="margin:8px 0 0;font-size:11px;color:#7f7669;">© 2026 Deluxe Skin Care. All rights reserved.</p>
      </td></tr>
    </table>
  </td></tr></table>
</body></html>`;
}

function merchantEmailTemplate(o: any) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>New Order Alert</title></head>
<body style="margin:0;padding:0;font-family:'Montserrat',-apple-system,BlinkMacSystemFont,sans-serif;background:#fff8f1;color:#1e1b15;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#fff8f1;"><tr><td align="center" style="padding:40px 20px;">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(18,16,14,0.06);">
      <tr><td style="background:#12100E;padding:24px 32px;">
        <h2 style="margin:0;font-family:'Playfair Display',serif;font-size:22px;font-weight:600;color:#C5B081;">🛒 New Order Received</h2>
      </td></tr>
      <tr><td style="padding:32px;">
        <div style="background:#fff8f1;border-left:4px solid #C5B081;padding:16px;margin-bottom:24px;">
          <p style="margin:0 0 4px;font-size:14px;"><strong>Order:</strong> ${o.reference}</p>
          <p style="margin:0 0 4px;font-size:14px;"><strong>Customer:</strong> ${o.customerName}</p>
          <p style="margin:0 0 4px;font-size:14px;"><strong>Email:</strong> ${o.customerEmail}</p>
          <p style="margin:0;font-size:14px;"><strong>Phone:</strong> ${o.phone}</p>
        </div>
        <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;margin-bottom:24px;">
          <tr><td style="padding:8px 0;color:#7f7669;width:100px;">Items</td><td style="padding:8px 0;color:#1e1b15;font-weight:500;">${o.items !== 'N/A' ? o.items : o.itemName}</td></tr>
          ${o.location !== 'N/A' ? `<tr><td style="padding:8px 0;color:#7f7669;">Delivery</td><td style="padding:8px 0;color:#1e1b15;font-weight:500;">${o.location}</td></tr>` : ''}
          <tr><td style="padding:8px 0;color:#7f7669;">Total</td><td style="padding:8px 0;color:#715827;font-weight:600;font-size:16px;">${o.total}</td></tr>
          <tr><td style="padding:8px 0;color:#7f7669;">Type</td><td style="padding:8px 0;color:#1e1b15;">${o.orderType}</td></tr>
        </table>
        <p style="margin:0;font-size:13px;color:#7f7669;">Verify in Paystack: <a href="https://dashboard.paystack.com/#/transactions/${o.reference}" style="color:#715827;text-decoration:underline;">View Transaction</a></p>
      </td></tr>
    </table>
  </td></tr></table>
</body></html>`;
}
