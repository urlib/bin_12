!function(t){t.fn.qrcode=function(e){var r;function o(t){this.mode=r,this.data=t}function n(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function i(t,e){if(null==t.length)throw Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=Array(t.length-r+e);for(var o=0;o<t.length-r;o++)this.num[o]=t[o+r]}function u(t,e){this.totalCount=t,this.dataCount=e}function s(){this.buffer=[],this.length=0}o.prototype={getLength:function(){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},n.prototype={addData:function(t){this.dataList.push(new o(t)),this.dataCache=null},isDark:function(t,e){if(0>t||this.moduleCount<=t||0>e||this.moduleCount<=e)throw Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){if(1>this.typeNumber){var t=1;for(t=1;40>t;t++){for(var e=u.getRSBlocks(t,this.errorCorrectLevel),r=new s,o=0,n=0;n<e.length;n++)o+=e[n].dataCount;for(n=0;n<this.dataList.length;n++)e=this.dataList[n],r.put(e.mode,4),r.put(e.getLength(),a.getLengthInBits(e.mode,t)),e.write(r);if(r.getLengthInBits()<=8*o)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[r][o]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),7<=this.typeNumber&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=n.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var r=-1;7>=r;r++)if(!(-1>=t+r||this.moduleCount<=t+r))for(var o=-1;7>=o;o++)-1>=e+o||this.moduleCount<=e+o||(this.modules[t+r][e+o]=0<=r&&6>=r&&(0==o||6==o)||0<=o&&6>=o&&(0==r||6==r)||2<=r&&4>=r&&2<=o&&4>=o)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;8>r;r++){this.makeImpl(!0,r);var o=a.getLostPoint(this);(0==r||t>o)&&(t=o,e=r)}return e},createMovieClip:function(t,e,r){for(t=t.createEmptyMovieClip(e,r),this.make(),e=0;e<this.modules.length;e++){r=1*e;for(var o=0;o<this.modules[e].length;o++){var n=1*o;this.modules[e][o]&&(t.beginFill(0,100),t.moveTo(n,r),t.lineTo(n+1,r),t.lineTo(n+1,r+1),t.lineTo(n,r+1),t.endFill())}}return t},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=0==t%2);for(t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=0==t%2)},setupPositionAdjustPattern:function(){for(var t=a.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var o=t[e],n=t[r];if(null==this.modules[o][n])for(var i=-2;2>=i;i++)for(var u=-2;2>=u;u++)this.modules[o+i][n+u]=-2==i||2==i||-2==u||2==u||0==i&&0==u}},setupTypeNumber:function(t){for(var e=a.getBCHTypeNumber(this.typeNumber),r=0;18>r;r++){var o=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=o}for(r=0;18>r;r++)o=!t&&1==(e>>r&1),this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=o},setupTypeInfo:function(t,e){for(var r=a.getBCHTypeInfo(this.errorCorrectLevel<<3|e),o=0;15>o;o++){var n=!t&&1==(r>>o&1);6>o?this.modules[o][8]=n:8>o?this.modules[o+1][8]=n:this.modules[this.moduleCount-15+o][8]=n}for(o=0;15>o;o++)n=!t&&1==(r>>o&1),8>o?this.modules[8][this.moduleCount-o-1]=n:9>o?this.modules[8][15-o-1+1]=n:this.modules[8][15-o-1]=n;this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,o=this.moduleCount-1,n=7,i=0,u=this.moduleCount-1;0<u;u-=2)for(6==u&&u--;;){for(var s=0;2>s;s++)if(null==this.modules[o][u-s]){var h=!1;i<t.length&&(h=1==(t[i]>>>n&1)),a.getMask(e,o,u-s)&&(h=!h),this.modules[o][u-s]=h,-1==--n&&(i++,n=7)}if(0>(o+=r)||this.moduleCount<=o){o-=r,r=-r;break}}}},n.PAD0=236,n.PAD1=17,n.createData=function(t,e,r){e=u.getRSBlocks(t,e);for(var o=new s,i=0;i<r.length;i++){var h=r[i];o.put(h.mode,4),o.put(h.getLength(),a.getLengthInBits(h.mode,t)),h.write(o)}for(i=t=0;i<e.length;i++)t+=e[i].dataCount;if(o.getLengthInBits()>8*t)throw Error("code length overflow. ("+o.getLengthInBits()+">"+8*t+")");for(o.getLengthInBits()+4<=8*t&&o.put(0,4);0!=o.getLengthInBits()%8;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*t)&&(o.put(n.PAD0,8),!(o.getLengthInBits()>=8*t));)o.put(n.PAD1,8);return n.createBytes(o,e)},n.createBytes=function(t,e){for(var r=0,o=0,n=0,u=Array(e.length),s=Array(e.length),h=0;h<e.length;h++){var l=e[h].dataCount,g=e[h].totalCount-l;o=Math.max(o,l),n=Math.max(n,g);u[h]=Array(l);for(var f=0;f<u[h].length;f++)u[h][f]=255&t.buffer[f+r];for(r+=l,f=a.getErrorCorrectPolynomial(g),l=new i(u[h],f.getLength()-1).mod(f),s[h]=Array(f.getLength()-1),f=0;f<s[h].length;f++)g=f+l.getLength()-s[h].length,s[h][f]=0<=g?l.get(g):0}for(f=h=0;f<e.length;f++)h+=e[f].totalCount;for(r=Array(h),f=l=0;f<o;f++)for(h=0;h<e.length;h++)f<u[h].length&&(r[l++]=u[h][f]);for(f=0;f<n;f++)for(h=0;h<e.length;h++)f<s[h].length&&(r[l++]=s[h][f]);return r},r=4;for(var a={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;0<=a.getBCHDigit(e)-a.getBCHDigit(a.G15);)e^=a.G15<<a.getBCHDigit(e)-a.getBCHDigit(a.G15);return(t<<10|e)^a.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;0<=a.getBCHDigit(e)-a.getBCHDigit(a.G18);)e^=a.G18<<a.getBCHDigit(e)-a.getBCHDigit(a.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return a.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case 0:return 0==(e+r)%2;case 1:return 0==e%2;case 2:return 0==r%3;case 3:return 0==(e+r)%3;case 4:return 0==(Math.floor(e/2)+Math.floor(r/3))%2;case 5:return 0==e*r%2+e*r%3;case 6:return 0==(e*r%2+e*r%3)%2;case 7:return 0==(e*r%3+(e+r)%2)%2;default:throw Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new i([1],0),r=0;r<t;r++)e=e.multiply(new i([1,h.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&10>e)switch(t){case 1:return 10;case 2:return 9;case r:case 8:return 8;default:throw Error("mode:"+t)}else if(27>e)switch(t){case 1:return 12;case 2:return 11;case r:return 16;case 8:return 10;default:throw Error("mode:"+t)}else{if(!(41>e))throw Error("type:"+e);switch(t){case 1:return 14;case 2:return 13;case r:return 16;case 8:return 12;default:throw Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,o=0;o<e;o++)for(var n=0;n<e;n++){for(var i=0,u=t.isDark(o,n),s=-1;1>=s;s++)if(!(0>o+s||e<=o+s))for(var a=-1;1>=a;a++)0>n+a||e<=n+a||0==s&&0==a||u==t.isDark(o+s,n+a)&&i++;5<i&&(r+=3+i-5)}for(o=0;o<e-1;o++)for(n=0;n<e-1;n++)i=0,t.isDark(o,n)&&i++,t.isDark(o+1,n)&&i++,t.isDark(o,n+1)&&i++,t.isDark(o+1,n+1)&&i++,(0==i||4==i)&&(r+=3);for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(o,n)&&!t.isDark(o,n+1)&&t.isDark(o,n+2)&&t.isDark(o,n+3)&&t.isDark(o,n+4)&&!t.isDark(o,n+5)&&t.isDark(o,n+6)&&(r+=40);for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(o,n)&&!t.isDark(o+1,n)&&t.isDark(o+2,n)&&t.isDark(o+3,n)&&t.isDark(o+4,n)&&!t.isDark(o+5,n)&&t.isDark(o+6,n)&&(r+=40);for(n=i=0;n<e;n++)for(o=0;o<e;o++)t.isDark(o,n)&&i++;return r+10*(t=Math.abs(100*i/e/e-50)/5)}},h={glog:function(t){if(1>t)throw Error("glog("+t+")");return h.LOG_TABLE[t]},gexp:function(t){for(;0>t;)t+=255;for(;256<=t;)t-=255;return h.EXP_TABLE[t]},EXP_TABLE:Array(256),LOG_TABLE:Array(256)},l=0;8>l;l++)h.EXP_TABLE[l]=1<<l;for(l=8;256>l;l++)h.EXP_TABLE[l]=h.EXP_TABLE[l-4]^h.EXP_TABLE[l-5]^h.EXP_TABLE[l-6]^h.EXP_TABLE[l-8];for(l=0;255>l;l++)h.LOG_TABLE[h.EXP_TABLE[l]]=l;return i.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var o=0;o<t.getLength();o++)e[r+o]^=h.gexp(h.glog(this.get(r))+h.glog(t.get(o)));return new i(e,0)},mod:function(t){if(0>this.getLength()-t.getLength())return this;for(var e=h.glog(this.get(0))-h.glog(t.get(0)),r=Array(this.getLength()),o=0;o<this.getLength();o++)r[o]=this.get(o);for(o=0;o<t.getLength();o++)r[o]^=h.gexp(h.glog(t.get(o))+e);return new i(r,0).mod(t)}},u.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],u.getRSBlocks=function(t,e){var r=u.getRsBlockTable(t,e);if(null==r)throw Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var o=r.length/3,n=[],i=0;i<o;i++)for(var s=r[3*i+0],a=r[3*i+1],h=r[3*i+2],l=0;l<s;l++)n.push(new u(a,h));return n},u.getRsBlockTable=function(t,e){switch(e){case 1:return u.RS_BLOCK_TABLE[4*(t-1)+0];case 0:return u.RS_BLOCK_TABLE[4*(t-1)+1];case 3:return u.RS_BLOCK_TABLE[4*(t-1)+2];case 2:return u.RS_BLOCK_TABLE[4*(t-1)+3]}},s.prototype={get:function(t){return 1==(this.buffer[Math.floor(t/8)]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},"string"==typeof e&&(e={text:e}),e=t.extend({},{render:"canvas",width:256,height:256,typeNumber:-1,correctLevel:2,background:"#ffffff",foreground:"#000000"},e),this.each((function(){var r;if("canvas"==e.render){(r=new n(e.typeNumber,e.correctLevel)).addData(e.text),r.make();var o=document.createElement("canvas");o.width=e.width,o.height=e.height;for(var i=o.getContext("2d"),u=e.width/r.getModuleCount(),s=e.height/r.getModuleCount(),a=0;a<r.getModuleCount();a++)for(var h=0;h<r.getModuleCount();h++){i.fillStyle=r.isDark(a,h)?e.foreground:e.background;var l=Math.ceil((h+1)*u)-Math.floor(h*u),g=Math.ceil((a+1)*u)-Math.floor(a*u);i.fillRect(Math.round(h*u),Math.round(a*s),l,g)}}else for((r=new n(e.typeNumber,e.correctLevel)).addData(e.text),r.make(),o=t("<table></table>").css("width",e.width+"px").css("height",e.height+"px").css("border","0px").css("border-collapse","collapse").css("background-color",e.background),i=e.width/r.getModuleCount(),u=e.height/r.getModuleCount(),s=0;s<r.getModuleCount();s++)for(a=t("<tr></tr>").css("height",u+"px").appendTo(o),h=0;h<r.getModuleCount();h++)t("<td></td>").css("width",i+"px").css("background-color",r.isDark(s,h)?e.foreground:e.background).appendTo(a);r=o,jQuery(r).appendTo(this)}))}}(jQuery),function(){"use strict";window.analyticCode={getUrl:function(t,e,r){let o=null;"img-url"===t?o=e.src:"file-url"===t&&e.files.length>0&&(o=function(t){let e=null;return null!=window.createObjectURL?e=window.createObjectURL(t):null!=window.URL?e=window.URL.createObjectURL(t):null!=window.webkitURL&&(e=window.webkitURL.createObjectURL(t)),e}(e.files[0])),qrcode.decode(o),qrcode.callback=function(t){r(t,o)}}}}();