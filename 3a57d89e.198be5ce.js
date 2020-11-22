(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{124:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=i.a.createContext({}),c=function(e){var n=i.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return i.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,b=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return t?i.a.createElement(b,o(o({ref:n},d),{},{components:t})):i.a.createElement(b,o({ref:n},d))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var d=2;d<r;d++)s[d]=t[d];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return c}));var a=t(3),i=t(8),r=(t(0),t(124)),s={title:"C# .Net Core",sidebar_label:"C#"},o={unversionedId:"products/rebuild-api/rebuild/code-samples/csharp-example",id:"products/rebuild-api/rebuild/code-samples/csharp-example",isDocsHomePage:!1,title:"C# .Net Core",description:"The following code snippets are examples of calling the Rebuild API using C#. The System libraries are used to execute calls to the API. Newtonsoft JSON nuget is used for the serialisation and deserialisation of models.",source:"@site/docs/products/rebuild-api/rebuild/code-samples/csharp-example.md",slug:"/products/rebuild-api/rebuild/code-samples/csharp-example",permalink:"/docs/products/rebuild-api/rebuild/code-samples/csharp-example",version:"current",sidebar_label:"C#"},l=[{value:"api/rebuild/base64",id:"apirebuildbase64",children:[]},{value:"api/rebuild",id:"apirebuild",children:[]},{value:"api/rebuild/file",id:"apirebuildfile",children:[]}],d={rightToc:l};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The following code snippets are examples of calling the Rebuild API using C#. The System libraries are used to execute calls to the API. Newtonsoft JSON nuget is used for the serialisation and deserialisation of models."),Object(r.b)("h2",{id:"apirebuildbase64"},"api/rebuild/base64"),Object(r.b)("p",null,"\u200b\nIn this example files are loaded from the OS and a request with the content type of 'application/json' is formed. The request is then sent to the API using the POST method. The JSON body also contains the content management flags."),Object(r.b)("p",null,"The rebuilt file is returned as Base64, decoded by the client and written to disk."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'using System;\nusing System.Globalization;\nusing System.IO;\nusing System.Net.Http;\nusing System.Text;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Newtonsoft.Json;\n\nnamespace RebuildAPI.Example\n{\n    public class Program\n    {\n        private const string jwtToken = "YOUR JWT TOKEN";\n        private const string inputFilePath = "PATH TO FILE TO BE REBUILT";\n        private const string outputFilePath = "PATH TO WRITE REBUILT FILE";\n        \n        public static void Main(string[] args)\n        {\n            RebuildAsync().GetAwaiter().GetResult();\n        }\n\n        private static async Task RebuildAsync()\n        {\n            using (var client = new HttpClient())\n            {\n                var request = new HttpRequestMessage(HttpMethod.Post, "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild/base64");\n                request.Headers.Add("Authorization", jwtToken);\n\n                var inputFile = File.ReadAllBytes(inputFilePath);\n                var base64File = Convert.ToBase64String(inputFile);\n                var body = JsonConvert.SerializeObject(new\n                {\n                    Base64 = base64File,\n                    ContentManagementFlags = new\n                    {\n                        PdfContentManagement = new\n                        {\n                            Metadata = 0,\n                            InternalHyperlinks = 0,\n                            ExternalHyperlinks = 0,\n                            EmbeddedFiles = 0,\n                            EmbeddedImages = 0,\n                            Javascript = 0,\n                            Acroform = 0,\n                            ActionsAll = 0\n                        },\n                        ExcelContentManagement = new\n                        {\n                            Metadata = 0,\n                            InternalHyperlinks = 0,\n                            ExternalHyperlinks = 0,\n                            EmbeddedFiles = 0,\n                            EmbeddedImages = 0,\n                            DynamicDataExchange = 0,\n                            Macros = 0,\n                            ReviewComments = 0\n                        },\n                        PowerPointContentManagement = new\n                        {\n                            Metadata = 0,\n                            InternalHyperlinks = 0,\n                            ExternalHyperlinks = 0,\n                            EmbeddedFiles = 0,\n                            EmbeddedImages = 0,\n                            Macros = 0,\n                            ReviewComments = 0\n                        },\n                        WordContentManagement = new\n                        {\n                            Metadata = 0,\n                            InternalHyperlinks = 0,\n                            ExternalHyperlinks = 0,\n                            EmbeddedFiles = 0,\n                            EmbeddedImages = 0,\n                            DynamicDataExchange = 0,\n                            Macros = 0,\n                            ReviewComments = 0\n                        }\n                    }\n                });\n\n                using (var content = new StringContent(body, Encoding.UTF8, "application/json"))\n                {\n                    request.Content = content;\n\n                    using (var message = await client.SendAsync(request, CancellationToken.None))\n                    {\n                        var rebuiltFileBase64 = await message.Content.ReadAsStringAsync();\n                        var rebuiltFile = Convert.FromBase64String(rebuiltFileBase64);\n                        File.WriteAllBytes(outputFilePath, rebuiltFile);\n                    }\n                }\n            }\n        }\n    }\n}\n')),Object(r.b)("h2",{id:"apirebuild"},"api/rebuild"),Object(r.b)("p",null,"In this example a file is downloaded from an input URL with a GET operation and its contents are rebuilt. The rebuilt file is then uploaded to the specified output URL using a PUT operation."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'\nusing System;\nusing System.Net.Http;\nusing System.Text;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Newtonsoft.Json;\n\nnamespace RebuildAPI.Example\n{\n    public class Program\n    {\n        private const string jwtToken = "YOUR JWT TOKEN";\n        private const string inputGetUrl = "A Url to the file you want to rebuild";\n        private const string ouputPutUrl = "A url you want the rebuilt file to be written to using a HTTP PUT operation";\n    \n        public static void Main()\n        {\n            RebuildAsync().GetAwaiter().GetResult();\n        }\n\n        private static async Task RebuildAsync()\n        {\n            using (var client = new HttpClient())\n            {\n                var request = new HttpRequestMessage(HttpMethod.Post, "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild");\n                request.Headers.Add("Authorization", jwtToken);\n\n                var body = JsonConvert.SerializeObject(new\n                {\n                    InputGetUrl = inputGetUrl,\n                    OutputPutUrl = ouputPutUrl,\n                    ContentManagementFlags = new\n                    {\n                        PdfContentManagement = new\n                        {\n                            Metadata = 0,\n                            InternalHyperlinks = 0,\n                            ExternalHyperlinks = 0,\n                            EmbeddedFiles = 0,\n                            EmbeddedImages = 0,\n                            Javascript = 0,\n                            Acroform = 0,\n                            ActionsAll = 0\n                        },\n                        ExcelContentManagement = new\n                        {\n                            Metadata = 0,\n                            InternalHyperlinks = 0,\n                            ExternalHyperlinks = 0,\n                            EmbeddedFiles = 0,\n                            EmbeddedImages = 0,\n                            DynamicDataExchange = 0,\n                            Macros = 0,\n                            ReviewComments = 0\n                        },\n                        PowerPointContentManagement = new\n                        {\n                            Metadata = 0,\n                            InternalHyperlinks = 0,\n                            ExternalHyperlinks = 0,\n                            EmbeddedFiles = 0,\n                            EmbeddedImages = 0,\n                            Macros = 0,\n                            ReviewComments = 0\n                        },\n                        WordContentManagement = new\n                        {\n                            Metadata = 0,\n                            InternalHyperlinks = 0,\n                            ExternalHyperlinks = 0,\n                            EmbeddedFiles = 0,\n                            EmbeddedImages = 0,\n                            DynamicDataExchange = 0,\n                            Macros = 0,\n                            ReviewComments = 0\n                        }\n                    }\n                });\n\n                using (var content = new StringContent(body, Encoding.UTF8, "application/json"))\n                {\n                    request.Content = content;\n\n                    using (var message = await client.SendAsync(request, CancellationToken.None))\n                    {\n                        Console.WriteLine(message.StatusCode);\n                        Thread.Sleep(3000);\n                    }\n                }\n            }\n        }\n    }\n}\n\n')),Object(r.b)("h2",{id:"apirebuildfile"},"api/rebuild/file"),Object(r.b)("p",null,"In this example the contents of the raw file are uploaded in a body with a content type of 'multipart/form-data'. The content management flags are serialised and sent as part of the form."),Object(r.b)("p",null,"The rebuilt file contents are returned to the client and written to disk."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c#"}),'\nusing System;\nusing System.Globalization;\nusing System.IO;\nusing System.Net.Http;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nnamespace RebuildAPI.Example\n{\n    public class Program\n    {\n        private const string jwtToken = "YOUR JWT TOKEN";\n        private const string inputFilePath = "PATH TO FILE TO BE REBUILT";\n        private const string outputFilePath = "PATH TO WRITE REBUILT FILE";\n\n        private const string contentManagementPolicy = @"{\n        ""PdfContentManagement"": {\n            ""Metadata"": 0,\n            ""InternalHyperlinks"": 0,\n            ""ExternalHyperlinks"": 0,\n            ""EmbeddedFiles"": 0,\n            ""EmbeddedImages"": 0,\n            ""Javascript"": 0,\n            ""Acroform"": 0,\n            ""ActionsAll"": 0\n        },\n        ""ExcelContentManagement"": {\n            ""Metadata"": 0,\n            ""InternalHyperlinks"": 0,\n            ""ExternalHyperlinks"": 0,\n            ""EmbeddedFiles"": 0,\n            ""EmbeddedImages"": 0,\n            ""DynamicDataExchange"": 0,\n            ""Macros"": 0,\n            ""ReviewComments"": 0\n        },\n        ""PowerPointContentManagement"": {\n            ""Metadata"": 0,\n            ""InternalHyperlinks"": 0,\n            ""ExternalHyperlinks"": 0,\n            ""EmbeddedFiles"": 0,\n            ""EmbeddedImages"": 0,\n            ""Macros"": 0,\n            ""ReviewComments"": 0\n            \n        },\n        ""WordContentManagement"": {\n            ""Metadata"": 0,\n            ""InternalHyperlinks"": 0,\n            ""ExternalHyperlinks"": 0,\n            ""EmbeddedFiles"": 0,\n            ""EmbeddedImages"": 0,\n            ""DynamicDataExchange"": 0,\n            ""Macros"": 0,\n            ""ReviewComments"": 0\n        }\n        }";\n\n        public static void Main(string[] args)\n        {\n            RebuildAsync().GetAwaiter().GetResult();\n        }\n\n        private static async Task RebuildAsync()\n        {\n            using (var client = new HttpClient())\n            {\n                var request = new HttpRequestMessage(HttpMethod.Post, "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild/file");\n                request.Headers.Add("Accept", "application/octet-stream");\n                request.Headers.Add("Authorization", jwtToken);\n                \n                using (var content = new MultipartFormDataContent("Boundary----" + DateTime.Now.ToString(CultureInfo.InvariantCulture)))\n                {\n                    content.Add(new ByteArrayContent(File.ReadAllBytes(inputFilePath)), "file", "/" + inputFilePath);\n                    content.Add(new StringContent(contentManagementPolicy), "contentManagementFlagJson");\n                    request.Content = content;\n\n                    using (var message = await client.SendAsync(request, CancellationToken.None))\n                    {\n                        var rebuiltFile = await message.Content.ReadAsByteArrayAsync();\n                        File.WriteAllBytes(outputFilePath, rebuiltFile);\n                    }\n                }\n            }\n        }\n    }\n}\n\n')))}c.isMDXComponent=!0}}]);