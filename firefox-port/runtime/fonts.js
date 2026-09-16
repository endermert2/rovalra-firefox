/* Fonts owned by RoValra/Roblox remain remote. Fetch through the existing
   extension transport, then create a FontFace from bytes so page CSP does not
   block it. No changes are made to the Roblox page's security policy. */
const RoValraFirefoxFontsReady = Promise.all([
  ['Builder Icons Outlined','BuilderIcons-Regular'],
  ['Builder Icons Filled','BuilderIcons-Filled'],
  ['RoValra Icons','RoValraIcons'],
].map(async ([family,file]) => {
  try {
    const response=await RoValraFirefoxFetch(`https://www.rovalra.com/static/fonts/${file}.woff2`);
    if(!response.ok)throw new Error(`HTTP ${response.status}`);
    const face=new FontFace(family,await response.arrayBuffer(),{style:'normal',weight:'400',display:'block'});
    await face.load();
    document.fonts.add(face);
    return {family,loaded:true};
  } catch {
    console.warn(`RoValra: Could not load ${family} font`);
    return {family,loaded:false};
  }
}));
