(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||c;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),c=(n(0),n(124)),o={title:"Empty Try-Catch Block",sidebar_label:"Empty Try-Catch Block"},i={unversionedId:"security_awareness/languages/Csharp/EmptyTryCatch",id:"security_awareness/languages/Csharp/EmptyTryCatch",isDocsHomePage:!1,title:"Empty Try-Catch Block",description:"Introduction",source:"@site/docs/security_awareness/languages/Csharp/EmptyTryCatch.md",slug:"/security_awareness/languages/Csharp/EmptyTryCatch",permalink:"/docs/security_awareness/languages/Csharp/EmptyTryCatch",version:"current",sidebar_label:"Empty Try-Catch Block",sidebar:"someSidebar",previous:{title:"SQL Injection",permalink:"/docs/security_awareness/languages/Csharp/sqli"},next:{title:"Buffer Overflow",permalink:"/docs/security_awareness/languages/C/BufferOverflow"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Introduction")),Object(c.b)("p",null,"Empty catch statements can be just as bad, depending on the MSIL code that your language generates. C# turns an empty catch statement into catch(System.Object) which means you end up catching all exceptions\u2014even non-CLS compliant exceptions, however, leaving a catch block means during the run-time the system won't be able to handle the expected exception and in some cases, the application may crash due to the generated exception, from a security perspective it's always preferred to handle the run time exceptions."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example1 ")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),"var addressCollection = new MailAddressCollection();\nforeach (string address in addresses)\n{\n    try\n    {\n        addressCollection.Add(address);\n    }\n    catch (Exception)\n    {\n        // Do nothing - if an invalid email occurs continue and try to add the rest\n    }\n}\n\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example2 ")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),"\nclass EmptyCatchBlock\n{\n    public static void Main(string[] args)\n    {\n        // ...\n        try\n        {\n            SecurityManager.dropPrivileges();\n        }\n        catch (PrivilegeDropFailedException e)\n        {\n \n        }\n        // ...\n    }\n}\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Remediation")),Object(c.b)("ul",null,Object(c.b)("li",null,"Try to always handle the exceptions in the catch block"),Object(c.b)("li",null,"Don't just log the exception stack trace in the console while you are moving to the production environment")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Risk")),Object(c.b)("p",null,'DOS "Denial-of-service"'),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"References ")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://help.semmle.com/wiki/display/CSHARP/Poor+error+handling%3A+empty+catch+block"}),"https://help.semmle.com/wiki/display/CSHARP/Poor+error+handling%3A+empty+catch+block")))}p.isMDXComponent=!0}}]);