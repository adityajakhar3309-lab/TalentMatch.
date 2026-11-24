// TalentMatch prototype source — split from the complete working prototype.
function normalize(s){return String(s||'').trim().toLowerCase().replace(/[^a-z0-9+#.]+/g,' ')}
function profile(){return profiles[0]}
function score(p,j){let ps=new Set((p?.skills||[]).map(normalize)),req=j.requiredSkills||[],nice=j.niceSkills||[];let reqHit=req.filter(s=>ps.has(normalize(s))),niceHit=nice.filter(s=>ps.has(normalize(s)));let reqCoverage=req.length?reqHit.length/req.length:0,niceCoverage=nice.length?niceHit.length/nice.length:0;let exp=p?.yearsExperience??0,expFit=j.minYears===0?1:Math.min(1,exp/j.minYears);let locFit=(j.remote&&p?.remoteOk)||normalize(j.location)===normalize(p?.location)||normalize(j.location)==='remote'?1:0;let total=Math.round(reqCoverage*60+niceCoverage*20+expFit*10+locFit*10);return {score:Math.max(0,Math.min(100,total)),reqHit,niceHit,missingReq:req.filter(s=>!ps.has(normalize(s))),missingNice:nice.filter(s=>!ps.has(normalize(s))),parts:{req:reqCoverage*60,nice:niceCoverage*20,exp:expFit*10,loc:locFit*10},reqCoverage,niceCoverage,expFit,locFit}}
function scoreCandidate(p,j){return score(p,j)}
function scoreLabel(n){return n>=85?'Strong fit':n>=65?'Good fit':n>=45?'Partial fit':'Low fit'}
function scoreClass(n){return n>=85?'':n>=65?'medium':'low'}
