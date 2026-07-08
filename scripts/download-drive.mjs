import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

async function downloadDrive(fileId, destPath) {
  const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${fileId}`);

  const type = res.headers.get('content-type') || '';
  if (type.includes('text/html')) {
    const html = await res.text();
    const confirm = html.match(/confirm=([0-9A-Za-z_-]+)/);
    if (confirm) {
      const res2 = await fetch(`${url}&confirm=${confirm[1]}`);
      if (!res2.ok) throw new Error(`Confirm failed ${fileId}`);
      const buf = Buffer.from(await res2.arrayBuffer());
      fs.writeFileSync(destPath, buf);
      return buf.length;
    }
    throw new Error(`Got HTML instead of file for ${fileId}`);
  }

  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(destPath, buf);
  return buf.length;
}

const downloads = [
  ['1_4YwDWvFhZw4q84S0b0qcMTdypZwohDf', 'captialherinterview.mp4'],
];

const headshotIds = [
  '1hLdriTyaPqLfuci4SukafXSe1wlyRdAx',
  '17ZiSD5s3FFRpbw88A9d0_UhbgR6CkcQG',
  '1UCaoXAw0IAUnhF53ZbDCRXeIHypQCE8c',
  '1BAdvkDPRV6SfueFVoT6lFmY7AVWAeWQx',
  '13R0nXky5iKeuJBuZG2Fim-sMYtQr3KR7',
  '1pO48p7XjqDRCY30RF0QxCSxNUlIAr_qR',
  '1SCatnqTZIccz23knaNeFxexCZJ64eWK_',
  '1raC5YQrl4E7fftlj0MC2zIUTG4Rbwv7v',
  '1mvytpcOGJLbTcRgpDLOlrOS0PsZ0Qa3y',
  '1jQ9nY70QFNgSbs4mlyUlwdPv-wQIfcQi',
  '132kTRx2mPXnsShqsxPCGWkBa7QQ1EncL',
  '1b_qLwtl4lstUWMd3bA9PZ5pAD4-TP6ll',
  '1Vd3chOD6XcgZTqoDutxGHmaDjxx0zL62',
  '11yoJwowI1uPL5PiHorujk1_LzH1xyxpn',
  '1ucdJAs2xC3qGA7VAEDV-w1k6WZnam6Ng',
  '1eS7m0r6_dasMjBrY4s7duGLURjMUa4Fb',
  '1Zadt2RXVJMPpgGRmiH4-SXkdvc15_6c8',
  '1_SGakeu1ReBkktd24yQ-Pkza9YGLX2k2',
];

fs.mkdirSync(path.join(ROOT, 'team'), { recursive: true });

for (const [id, name] of downloads) {
  const dest = path.join(ROOT, name);
  try {
    const size = await downloadDrive(id, dest);
    console.log(`OK ${name} (${size} bytes)`);
  } catch (e) {
    console.error(`FAIL ${name}:`, e.message);
  }
}

let i = 1;
for (const id of headshotIds) {
  const dest = path.join(ROOT, 'team', `member-${String(i).padStart(2, '0')}.jpg`);
  try {
    const size = await downloadDrive(id, dest);
    console.log(`OK team/member-${String(i).padStart(2, '0')}.jpg (${size} bytes)`);
  } catch (e) {
    console.error(`FAIL member-${i}:`, e.message);
  }
  i += 1;
}
