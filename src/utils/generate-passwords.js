// backend/generate-passwords.js
const bcrypt = require('bcryptjs');

async function generatePasswords() {
  const saltRounds = 10;
  
  const adminPassword = 'admin123';
  const staffPassword = 'staff123';
  const viewerPassword = 'viewer123';
  
  const adminHash = await bcrypt.hash(adminPassword, saltRounds);
  const staffHash = await bcrypt.hash(staffPassword, saltRounds);
  const viewerHash = await bcrypt.hash(viewerPassword, saltRounds);
  
  console.log('=== GENERATED PASSWORD HASHES ===');
  console.log(`Admin (password: ${adminPassword}):`);
  console.log(`Hash: ${adminHash}`);
  console.log('');
  
  console.log(`Staff (password: ${staffPassword}):`);
  console.log(`Hash: ${staffHash}`);
  console.log('');
  
  console.log(`Viewer (password: ${viewerPassword}):`);
  console.log(`Hash: ${viewerHash}`);
  console.log('');
  
  console.log('=== SQL UPDATE QUERIES ===');
  console.log(`UPDATE users SET password = '${adminHash}' WHERE username = 'admin';`);
  console.log(`UPDATE users SET password = '${staffHash}' WHERE username = 'staff';`);
  console.log(`UPDATE users SET password = '${viewerHash}' WHERE username = 'viewer';`);
}

generatePasswords().catch(console.error);