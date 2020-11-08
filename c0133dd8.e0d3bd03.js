(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{101:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(m,s(s({ref:t},l),{},{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},85:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(101)),i={title:"Open Redirect",sidebar_label:"Open Redirect"},s={unversionedId:"security_awareness/languages/Csharp/open_redirect",id:"security_awareness/languages/Csharp/open_redirect",isDocsHomePage:!1,title:"Open Redirect",description:"Introduction",source:"@site/docs/security_awareness/languages/Csharp/open_redirect.md",slug:"/security_awareness/languages/Csharp/open_redirect",permalink:"/docs/security_awareness/languages/Csharp/open_redirect",version:"current",sidebar_label:"Open Redirect",sidebar:"someSidebar",previous:{title:"Insecure Randomness",permalink:"/docs/security_awareness/languages/Csharp/insecure_randomness"},next:{title:"Cross-site Scripting (XSS)",permalink:"/docs/security_awareness/languages/Csharp/xss"}},c=[],l={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Introduction")),Object(o.b)("p",null,"Open Redirect occurs when a vulnerable web page is redirected to a non-compliant page that may compromise the user.",Object(o.b)("br",null),'This vulnerability is often exists in web applications where the redirection is set with a "GET" parameter in the URL.'),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example1 of a vulnerable code")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),'[HttpPost]\npublic ActionResult LogOn(LogOnModel model, string returnUrl)\n{\n    if (ModelState.IsValid)\n    {\n        if (MembershipService.ValidateUser(model.UserName, model.Password))\n        {\n            FormsService.SignIn(model.UserName, model.RememberMe);\n            if (!String.IsNullOrEmpty(returnUrl))\n            {\n                return Redirect(returnUrl);\n            }\n            else\n            {\n                return RedirectToAction("Index", "Home");\n            }\n        }\n        else\n        {\n            ModelState.AddModelError("", "The user name or password provided is incorrect.");\n        }\n    }\n \n    // If we got this far, something failed, redisplay form\n    return View(model);\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example2 of a vulnerable code")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),'string url = request.QueryString["url"];\nResponse.Redirect(url);\n\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Remediation")),Object(o.b)("p",null,"Avoid or fix violations by following the following practices:"),Object(o.b)("ul",null,Object(o.b)("li",null,'Assume all input is malicious. Use an "accept known good" input validation strategy.'),Object(o.b)("li",null,"Understand all the potential areas where untrusted inputs can enter your software: parameters or arguments, cookies, anything read from the network, environment variables, reverse DNS lookups, query results, request headers, URL components, e-mail, files, filenames, databases, and any external systems that provide data to the application."),Object(o.b)("li",null,"Parameters of the application script/program must be validated before sending 302 HTTP code (redirect) to the client browser."),Object(o.b)("li",null,"Implement safe redirect functionality that only redirects to relative URI's, or a list of trusted domains.")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),'[HttpPost]\npublic ActionResult LogOn(LogOnModel model, string returnUrl)\n{\n    if (ModelState.IsValid)\n    {\n        if (MembershipService.ValidateUser(model.UserName, model.Password))\n        {\n            FormsService.SignIn(model.UserName, model.RememberMe);\n            if (Url.IsLocalUrl(returnUrl))\n            {\n                return Redirect(returnUrl);\n            }\n            else\n            {\n                return RedirectToAction("Index", "Home");\n            }\n        }\n        else\n        {\n            ModelState.AddModelError("", \n        "The user name or password provided is incorrect.");\n        }\n    }\n \n    // If we got this far, something failed, redisplay form\n    return View(model);\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Risk")),Object(o.b)("ul",null,Object(o.b)("li",null,"The user may be redirected to an untrusted page that contains malware which may then compromise the user's machine."),Object(o.b)("li",null,"The user may be subjected to phishing attacks by being redirected to an untrusted page.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"References ")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.httpcs.com/en/open-redirect-vulnerability"}),"https://www.httpcs.com/en/open-redirect-vulnerability")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cwe.mitre.org/data/definitions/601.html"}),"https://cwe.mitre.org/data/definitions/601.html")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.zaproxy.org/docs/alerts/10028/"}),"https://www.zaproxy.org/docs/alerts/10028/")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/aspnet/mvc/overview/security/preventing-open-redirection-attacks"}),"https://docs.microsoft.com/en-us/aspnet/mvc/overview/security/preventing-open-redirection-attacks")))}p.isMDXComponent=!0}}]);