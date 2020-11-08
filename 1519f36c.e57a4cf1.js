(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{101:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),c=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,b=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return t?a.a.createElement(b,l(l({ref:n},d),{},{components:t})):a.a.createElement(b,l({ref:n},d))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return c}));var r=t(2),a=t(6),i=(t(0),t(101)),o={title:"NodeJs",sidebar_label:"NodeJs"},l={unversionedId:"products/rebuild-api/rebuild/code-samples/nodejs-example",id:"products/rebuild-api/rebuild/code-samples/nodejs-example",isDocsHomePage:!1,title:"NodeJs",description:"The following code snippets are examples of calling the Rebuild API using NodeJS. The request library is used to execute calls to the API.",source:"@site/docs/products/rebuild-api/rebuild/code-samples/nodejs-example.md",slug:"/products/rebuild-api/rebuild/code-samples/nodejs-example",permalink:"/docs/products/rebuild-api/rebuild/code-samples/nodejs-example",version:"current",sidebar_label:"NodeJs"},s=[{value:"api/rebuild/base64",id:"apirebuildbase64",children:[]},{value:"api/rebuild",id:"apirebuild",children:[]},{value:"api/rebuild/file",id:"apirebuildfile",children:[]}],d={rightToc:s};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The following code snippets are examples of calling the Rebuild API using NodeJS. The request library is used to execute calls to the API. "),Object(i.b)("h2",{id:"apirebuildbase64"},"api/rebuild/base64"),Object(i.b)("p",null,"\u200b\nIn this example files are loaded from the OS and a request with the content type of 'application/json' is formed. The request is then sent to the API using the POST method. The JSON body also contains the content management flags."),Object(i.b)("p",null,"The rebuilt file is returned as Base64, decoded by the client and written to disk."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'\nconst request = require("request");\nconst fs = require("fs");\n\nconst jwt_token = "YOUR JWT TOKEN";\nconst inputFilePath = "Path to the file that needs rebuilding";\nconst outputFilePath = "Path of the file that will be written containing the rebuilt file contents";\n\nconst getBase64 = (filePath) => {\n    var file = fs.readFileSync(filePath);\n    return new Buffer(file).toString(\'base64\');\n}\n\nconst writeDecodedBase64File = (filePath, baseBase64String) => {\n    var file = new Buffer(baseBase64String, "base64");\n    fs.writeFileSync(filePath, file);\n}\n\nconst options = {\n    "method": "POST",\n    "url": "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild/base64",\n    "headers": {\n        "Authorization": jwt_token,\n        "Content-Type": "application/json"\n    },\n    body: JSON.stringify(\n        {\n            "Base64": getBase64(inputFilePath),\n            "ContentManagementFlags": {\n                "PdfContentManagement": {\n                    "Metadata": 0,\n                    "InternalHyperlinks": 0,\n                    "ExternalHyperlinks": 0,\n                    "EmbeddedFiles": 0,\n                    "EmbeddedImages": 0,\n                    "Javascript": 0,\n                    "Acroform": 0,\n                    "ActionsAll": 0\n                },\n                "ExcelContentManagement": {\n                    "Metadata": 0,\n                    "InternalHyperlinks": 0,\n                    "ExternalHyperlinks": 0,\n                    "EmbeddedFiles": 0,\n                    "EmbeddedImages": 0,\n                    "DynamicDataExchange": 0,\n                    "Macros": 0,\n                    "ReviewComments": 0\n                },\n                "PowerPointContentManagement": {\n                    "Metadata": 0,\n                    "InternalHyperlinks": 0,\n                    "ExternalHyperlinks": 0,\n                    "EmbeddedFiles": 0,\n                    "EmbeddedImages": 0,\n                    "Macros": 0,\n                    "ReviewComments": 0\n\n                },\n                "WordContentManagement": {\n                    "Metadata": 0,\n                    "InternalHyperlinks": 0,\n                    "ExternalHyperlinks": 0,\n                    "EmbeddedFiles": 0,\n                    "EmbeddedImages": 0,\n                    "DynamicDataExchange": 0,\n                    "Macros": 0,\n                    "ReviewComments": 0\n                }\n            }\n        })\n    }\n\nrequest(options, function (error, response) {\n            if (error) throw new Error(error);\n            writeDecodedBase64File(outputFilePath, response.body)\n        });\n\n')),Object(i.b)("h2",{id:"apirebuild"},"api/rebuild"),Object(i.b)("p",null,"In this example a file is downloaded from an input URL with a GET operation and its contents are rebuilt. The rebuilt file is then uploaded to the specified output URL using a PUT operation."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'\nconst request = require("request");\nconst fs = require("fs");\n\nconst jwt_token = "YOUR JWT TOKEN";\nconst inputGetUrl = "The input URL to the file to be downloaded using HTTP GET. This is the file that will be rebuilt.";\nconst outputPutUrl = "The output URL the rebuilt file will be uploaded to using HTTP PUT.";\n\nconst options = {\n    "method": "POST",\n    "url": "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild",\n    "headers": {\n        "Authorization": jwt_token,\n        "Content-Type": "application/json"\n    },\n    body: JSON.stringify(\n        {\n            "InputGetUrl": inputGetUrl,\n            "OutputPutUrl": outputPutUrl,\n            "ContentManagementFlags": {\n                "PdfContentManagement": {\n                    "Metadata": 0,\n                    "InternalHyperlinks": 0,\n                    "ExternalHyperlinks": 0,\n                    "EmbeddedFiles": 0,\n                    "EmbeddedImages": 0,\n                    "Javascript": 0,\n                    "Acroform": 0,\n                    "ActionsAll": 0\n                },\n                "ExcelContentManagement": {\n                    "Metadata": 0,\n                    "InternalHyperlinks": 0,\n                    "ExternalHyperlinks": 0,\n                    "EmbeddedFiles": 0,\n                    "EmbeddedImages": 0,\n                    "DynamicDataExchange": 0,\n                    "Macros": 0,\n                    "ReviewComments": 0\n                },\n                "PowerPointContentManagement": {\n                    "Metadata": 0,\n                    "InternalHyperlinks": 0,\n                    "ExternalHyperlinks": 0,\n                    "EmbeddedFiles": 0,\n                    "EmbeddedImages": 0,\n                    "Macros": 0,\n                    "ReviewComments": 0\n\n                },\n                "WordContentManagement": {\n                    "Metadata": 0,\n                    "InternalHyperlinks": 0,\n                    "ExternalHyperlinks": 0,\n                    "EmbeddedFiles": 0,\n                    "EmbeddedImages": 0,\n                    "DynamicDataExchange": 0,\n                    "Macros": 0,\n                    "ReviewComments": 0\n                }\n            }\n        })\n    }\n\nrequest(options, function (error, response) {\n            if (error) throw new Error(error);\n            console.log(response.statusCode);\n        });\n\n')),Object(i.b)("h2",{id:"apirebuildfile"},"api/rebuild/file"),Object(i.b)("p",null,"In this example the contents of the raw file are uploaded in a body with a content type of 'multipart/form-data'. The content management flags are serialised and sent as part of the form."),Object(i.b)("p",null,"The rebuilt file contents are returned to the client and written to disk."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'\nconst request = require("request");\nconst fs = require("fs");\n\nconst jwt_token = "YOUR JWT TOKEN";\nconst inputFilePath = "Path to the file that needs rebuilding";\nconst outputFilePath = "Path of the file that will be written containing the rebuilt file contents";\n\nconst options = {\n    "encoding": null,\n    "method": "POST",\n    "url": "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild/file",\n    "headers": {\n        "Authorization": jwt_token,\n        \'Accept\': \'application/octet-stream\'\n    },\n    formData: {\n        "file": {\n            "value": fs.createReadStream(inputFilePath),\n            "options": {\n                "filename": "/" + inputFilePath,\n                "contentType": null\n            }\n        },\n        "contentManagementFlagJson": JSON.stringify({\n            "PdfContentManagement": {\n                "Metadata": 0,\n                "InternalHyperlinks": 0,\n                "ExternalHyperlinks": 0,\n                "EmbeddedFiles": 0,\n                "EmbeddedImages": 0,\n                "Javascript": 0,\n                "Acroform": 0,\n                "ActionsAll": 0\n            },\n            "ExcelContentManagement": {\n                "Metadata": 0,\n                "InternalHyperlinks": 0,\n                "ExternalHyperlinks": 0,\n                "EmbeddedFiles": 0,\n                "EmbeddedImages": 0,\n                "DynamicDataExchange": 0,\n                "Macros": 0,\n                "ReviewComments": 0\n            },\n            "PowerPointContentManagement": {\n                "Metadata": 0,\n                "InternalHyperlinks": 0,\n                "ExternalHyperlinks": 0,\n                "EmbeddedFiles": 0,\n                "EmbeddedImages": 0,\n                "Macros": 0,\n                "ReviewComments": 0\n\n            },\n            "WordContentManagement": {\n                "Metadata": 0,\n                "InternalHyperlinks": 0,\n                "ExternalHyperlinks": 0,\n                "EmbeddedFiles": 0,\n                "EmbeddedImages": 0,\n                "DynamicDataExchange": 0,\n                "Macros": 0,\n                "ReviewComments": 0\n            }\n        })\n    }\n}\n\nrequest(options, function (error, res) {\n    if (error) throw new Error(error);\n    let data = res.body // res is the response coming from the API\n    let buf = Buffer.from(data);\n    file = fs.createWriteStream(outputFilePath);\n    file.write(buf);\n    file.end();\n});\n\n')))}c.isMDXComponent=!0}}]);