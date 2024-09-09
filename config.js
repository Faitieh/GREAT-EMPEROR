const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Kingdragony/GREAT-EMPEROR";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/734956fb3e2c159f0b9cb.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/images (6).jpeg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "EX-RADIATION!" 


global.devs = "254793057056" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254755699001";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/734956fb3e2c159f0b9cb.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "online" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_43_09_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk5LFxuICAgICAgICA5NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDYzLFxuICAgICAgICAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI4LFxuICAgICAgICA4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODksXG4gICAgICAgIDc5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MixcbiAgICAgICAgMjMwLFxuICAgICAgICA3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTksXG4gICAgICAgIDEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDgzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDAsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY1LFxuICAgICAgICA5NixcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxLFxuICAgICAgICA4NixcbiAgICAgICAgMjE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQwLFxuICAgICAgICA3OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDk1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTMsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA5NixcbiAgICAgICAgOTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MixcbiAgICAgICAgNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0VUM3VXBLOTlaeXltNElqeTcrdGhVSHh1aHBnRE53RDFIK1pVdXJFSlRBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsb184cDNQTlRxSzFEc00tN3piVWdRXCIsXG4gIFwicGhvbmVJZFwiOiBcImI4OTEzYThhLTg5ODQtNDRkNi04ZjhhLWQyZjgxNDA1MzIxM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzAsXG4gICAgICAxNjYsXG4gICAgICA5NCxcbiAgICAgIDE4OSxcbiAgICAgIDc1LFxuICAgICAgNzIsXG4gICAgICAyMixcbiAgICAgIDIwLFxuICAgICAgMzcsXG4gICAgICAxMzgsXG4gICAgICAxNjQsXG4gICAgICA0MixcbiAgICAgIDc0LFxuICAgICAgODcsXG4gICAgICA1NixcbiAgICAgIDM1LFxuICAgICAgOSxcbiAgICAgIDUxLFxuICAgICAgMjE1LFxuICAgICAgMjEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg5LFxuICAgICAgNTQsXG4gICAgICAxNTUsXG4gICAgICA0NixcbiAgICAgIDE2NyxcbiAgICAgIDI1MCxcbiAgICAgIDYzLFxuICAgICAgMTMyLFxuICAgICAgMTc3LFxuICAgICAgMjEzLFxuICAgICAgMTQ2LFxuICAgICAgNzQsXG4gICAgICA1NSxcbiAgICAgIDU5LFxuICAgICAgMyxcbiAgICAgIDEzMCxcbiAgICAgIDUzLFxuICAgICAgNDUsXG4gICAgICA3MixcbiAgICAgIDEyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUTUM0Rlk4M1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzU1Njk5MDAxOjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiS2lwY2hpcmNoaXIgQ1JcIixcbiAgICBcImxpZFwiOiBcIjI2ODM2MzAyODgwMzU4Njo2OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQRGx1TXdIRUovbi9MWUdHQXNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9ZekhXdkM3MmRsRGFaYm1hcEE0YnYwcmx0V2EwZkFIb3JkeFBCbzhPQmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwielBuUEhldmJudzVGZ2dHazQ5NGIwcnFJV0NLOEUxdWFvVXBGbUsxeEZPZXNtUTEyWHFmcXpNWkVndlF5T2JUcytGUG5OdnUvQ1lpY3RKNDFZdVd5QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVEs5RDlBYXdIa0hVUlZwR3dMNURBMXAvK0hQMkZtVi9hWUk2ZWMvdEdiREovTHRjUTFpNTBOS2t0MDRXSVZ2WmFVdDA2MS9EMDl3VW9BTlNjNUJnamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzU1Njk5MDAxOjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1OTAzNzgwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRzNWXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHM1YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2Y2RoNXAxa2N5Z00wb0ttREJ4SnlNMnloZVdkMkZkVWExMHlhVGJldDhvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMzkzNjIyODgsXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "EX-RADIATION",
  ownername:process.env.OWNER_NAME|| "DRAGON",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "EX-RADIATION"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
