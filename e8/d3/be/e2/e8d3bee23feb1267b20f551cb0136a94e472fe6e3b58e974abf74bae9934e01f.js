!function(e){"use strict";let t=function(t){let l=null;if(e.createObjectURL!=undefined){l=e.createObjectURL(t)}else if(e.URL!=undefined){l=e.URL.createObjectURL(t)}else if(e.webkitURL!=undefined){l=e.webkitURL.createObjectURL(t)}return l};e.analyticCode={getUrl:function(e,l,i){let n=null,c=null;if(e==="img-url"){n=l.src}else if(e==="file-url"&&l.files.length>0){n=t(l.files[0])}qrcode.decode(n);qrcode.callback=function(e){i(e,n)}}}}(window);