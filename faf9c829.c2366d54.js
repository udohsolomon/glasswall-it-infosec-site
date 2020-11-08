(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return n?r.a.createElement(d,s(s({ref:t},l),{},{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(101)),c={title:"Xpath Injection",sidebar_label:"Xpath Injection"},s={unversionedId:"security_awareness/languages/Csharp/xpath_injection",id:"security_awareness/languages/Csharp/xpath_injection",isDocsHomePage:!1,title:"Xpath Injection",description:"Introduction",source:"@site/docs/security_awareness/languages/Csharp/xpath_injection.md",slug:"/security_awareness/languages/Csharp/xpath_injection",permalink:"/docs/security_awareness/languages/Csharp/xpath_injection",version:"current",sidebar_label:"Xpath Injection",sidebar:"someSidebar",previous:{title:"Command Injection",permalink:"/docs/security_awareness/languages/Csharp/command_injection"},next:{title:"Hard-coded Keys",permalink:"/docs/security_awareness/languages/Csharp/hardcoded_keys"}},i=[],l={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Introduction")),Object(o.b)("p",null,"XPath Injection attacks occur when a web site uses user-supplied information to construct an XPath query for XML data. By sending intentionally malformed information into the web site, an attacker can find out how the XML data is structured, or access data that they may not normally have access to. They may even be able to elevate their privileges on the web site if the XML data is being used for authentication (such as an XML based user file)."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example1 of a vulnerable code")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"using System;\nusing System.Xml.XPath;\n\npublic partial class WebForm : System.Web.UI.Page\n{\n    public XPathNavigator AuthorizedOperations { get; set; }\n\n    protected void Page_Load(object sender, EventArgs e)\n    {\n        string operation = Request.Form[\"operation\"];\n\n        // If an attacker uses this for input:\n        //     ' or 'a' = 'a\n        // Then the XPath query will be:\n        //     authorizedOperation[@username = 'anonymous' and @operationName = '' or 'a' = 'a']\n        // and it will return any authorizedOperation node.\n        XPathNavigator node = AuthorizedOperations.SelectSingleNode(\n            \"//authorizedOperation[@username = 'anonymous' and @operationName = '\" + operation + \"']\");\n    }\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example2 of a vulnerable code")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),' XmlDocument XmlDoc = new XmlDocument();\n XmlDoc.Load("...");\n \n XPathNavigator nav = XmlDoc.CreateNavigator();\n XPathExpression expr =\n nav.Compile("string(//user[name/text()=\'"+TextBox1.Text+"\'\n and password/text()=\'"+TextBox2.Text+\n "\']/account/text())");\n \n String account=Convert.ToString(nav.Evaluate(expr));\n if (account=="") {\n        // name+password pair is not found in the XML document\n \u2013\n        // login failed.\n } else {\n        // account found -> Login succeeded.\n        // Proceed into the application.\n }\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Remediation")),Object(o.b)("p",null,"Avoid or fix violations by following the following practices:"),Object(o.b)("ul",null,Object(o.b)("li",null,"Use of parameterized XPath queries."),Object(o.b)("li",null,"Don't construct XPath queries from user input"),Object(o.b)("li",null,"Validate that the input only contains a safe set of characters."),Object(o.b)("li",null,"Escape quotation marks."),Object(o.b)("li",null,'Assume all input is malicious. Use an "accept known good" input validation strategy')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),'using System;\nusing System.Text.RegularExpressions;\nusing System.Xml;\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace WebApplicationDotNetCore.Controllers\n{\n    public class RSPEC2091XPathInjectionCompliant : Controller\n    {\n        public XmlDocument doc { get; set; }\n\n        public IActionResult Index()\n        {\n            return View();\n        }\n\n        public IActionResult Authenticate(string user, string pass)\n        {\n            // Restrict the username and password to letters only\n            if (!Regex.IsMatch(user, "^[a-zA-Z]+$") || !Regex.IsMatch(pass, "^[a-zA-Z]+$"))\n            {\n                return BadRequest();\n            }\n\n            String expression = "/users/user[@name=\'" + user + "\' and @pass=\'" + pass + "\']"; // Compliant\n            return Content(doc.SelectSingleNode(expression) != null ? "success" : "fail");\n        }\n\n    }\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Risk")),Object(o.b)("ul",null,Object(o.b)("li",null,"An attacker can craft special user-controllable input consisting of XPath expressions to inject the XML database and bypass authentication or glean information that they normally would not be able to."),Object(o.b)("li",null,"XPath Injection enables an attacker to talk directly to the XML database, thus bypassing the application completely.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"References ")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/ca3008"}),"https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/ca3008")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://owasp.org/www-community/attacks/XPATH_Injection"}),"https://owasp.org/www-community/attacks/XPATH_Injection")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://rules.sonarsource.com/csharp/RSPEC-2091?search=XPATH%20INJ"}),"https://rules.sonarsource.com/csharp/RSPEC-2091?search=XPATH%20INJ")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://capec.mitre.org/data/definitions/83.html"}),"http://capec.mitre.org/data/definitions/83.html")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://projects.webappsec.org/w/page/13247005/XPath%20Injection"}),"http://projects.webappsec.org/w/page/13247005/XPath%20Injection")))}u.isMDXComponent=!0}}]);