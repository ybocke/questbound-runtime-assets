#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const input = process.argv[2];
const output = process.argv[3];
if (!input || !output) {
  throw new Error("Usage: node build-quartermaster-harness.js <student-index> <output-html>");
}

const source = fs.readFileSync(input,"utf8");
const cssMatch = source.match(
  /(\/\* ============================================================\n+       QUARTERMASTER V1 — PROOF OF BEAUTY[\s\S]*?)\n  <\/style>/
);
const jsMatch = source.match(
  /(    var QUESTBOUND_QM_V1_RUNTIME =[\s\S]*?)\n    function openGuildCommonsShop_\(tab\) \{/
);
if (!cssMatch || !jsMatch) {
  throw new Error("Quartermaster V1 markers were not found in the Student file.");
}

const harness = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>QuestBound Quartermaster V1 Test</title>
<style>
html,body{width:100%;height:100%;margin:0;background:#05080a;font-family:system-ui,sans-serif}
button:focus-visible{outline:2px solid #7ee7ff;outline-offset:2px}
dialog{padding:0}
${cssMatch[1]}
</style>
</head>
<body>
<dialog id="questboundAvatarDialog" class="qb-avatar-dialog"></dialog>
<script>
var DATA={student:{firstName:"Avery"},progression:{level:7,xpIntoLevel:860,xpPerLevel:1400,className:"Apprentice Ranger"}};
var QUESTBOUND_AVATAR_STATE={
  ok:true,
  goldBalance:2840,
  profile:{family:"HUMAN",bodyRig:"STANDARD",baseTone:"HUMAN_P05"},
  equipped:{
    outfitId:"AV_UNIVERSAL_OUTFIT_RANGER_001",
    headgearId:"",
    backItemId:"",
    heldItemId:"",
    familiarId:""
  },
  shop:[
    {assetId:"AV_UNIVERSAL_OUTFIT_RANGER_001",displayName:"Ranger Outfit",category:"OUTFIT",rarity:"UNCOMMON",goldPrice:100,owned:true,compatible:true},
    {assetId:"AV_UNIVERSAL_HEADGEAR_WIZARD_001",displayName:"Apprentice Wizard Hat",category:"HEADGEAR",rarity:"RARE",goldPrice:75,owned:false,compatible:true},
    {assetId:"AV_UNIVERSAL_BACK_CAPE_001",displayName:"Guild Cape",category:"BACK_ITEM",rarity:"UNCOMMON",goldPrice:75,owned:false,compatible:true},
    {assetId:"AV_UNIVERSAL_HELD_TRAVELER_BLADE_001",displayName:"Traveler Blade",category:"HELD_ITEM",rarity:"COMMON",goldPrice:100,owned:false,compatible:true},
    {assetId:"AV_UNIVERSAL_FAMILIAR_FOX_001",displayName:"Fox Familiar",category:"FAMILIAR",rarity:"RARE",goldPrice:250,owned:false,compatible:true}
  ],
  inventory:[
    {assetId:"AV_UNIVERSAL_OUTFIT_RANGER_001",displayName:"Ranger Outfit",category:"OUTFIT",equipped:true}
  ]
};
function escapeHtml(value){return String(value == null ? "" : value).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}
function questboundAvatarCategoryLabel_(value){return String(value || "Cosmetics").replace(/_/g," ").toLowerCase().replace(/\b\w/g,function(c){return c.toUpperCase();});}
function renderQuestboundAvatarPreview_(){return '<div style="width:180px;height:330px;border:1px solid #b89249;background:#1b272b;color:#f2d896;display:grid;place-items:center;text-align:center">Existing safe<br>avatar fallback</div>';}
function openGuildCommonsMirror_(){window.__QB_TEST_LAST_ACTION="character";}
function purchaseQuestboundShopAsset_(assetId){
  var item=QUESTBOUND_AVATAR_STATE.shop.find(function(entry){return entry.assetId===assetId;});
  if(!item || item.owned || QUESTBOUND_AVATAR_STATE.goldBalance < item.goldPrice) return;
  QUESTBOUND_AVATAR_STATE.goldBalance-=item.goldPrice;item.owned=true;
  window.__QB_TEST_LAST_ACTION="purchased:"+assetId;openGuildCommonsShop_("COSMETICS");
}
function equipQuestboundShopAsset_(assetId){
  var item=QUESTBOUND_AVATAR_STATE.shop.find(function(entry){return entry.assetId===assetId;});
  if(!item || !item.owned) return;
  var field=questboundQmV1EquippedField_(item.category);QUESTBOUND_AVATAR_STATE.equipped[field]=assetId;
  window.__QB_TEST_LAST_ACTION="equipped:"+assetId;openGuildCommonsShop_("COSMETICS");
}
${jsMatch[1]}
function openGuildCommonsShop_(tab){
  var dialog=document.getElementById("questboundAvatarDialog");
  if(String(tab||"COSMETICS").toUpperCase()!=="COSMETICS"){window.__QB_TEST_LAST_ACTION="tab:"+tab;return;}
  openQuestboundQuartermasterV1_(dialog,QUESTBOUND_AVATAR_STATE,QUESTBOUND_AVATAR_STATE.shop);
}
openGuildCommonsShop_("COSMETICS");
window.QB_READY=true;
</script>
</body>
</html>`;

fs.mkdirSync(path.dirname(output),{recursive:true});
fs.writeFileSync(output,harness);
