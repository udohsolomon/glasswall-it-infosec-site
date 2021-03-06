---
title: Quickstart - Rebuild
sidebar_label: Quickstart
---


<p>
This page can be used as a guide to getting started using the Rebuild API. It describes getting the product key and executing a request to the API.
</p>

<p>Just want to call the API?</p>

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/dc8ba5f0a4ecfa29ad12)

<div>
<h2>Get Token</h2>

A token is required to access the Glasswlal Rebuild API, one can be purchased [here](https://glasswall-store.com/products/glasswall-rebuild-cloud-in-shared-cloud-environment?variant=33476559274124)

<h2>Http Code - Rebuild File</h2>

<p>In the following examples choose a language to get started with using the endpoints programmatically.</p>

A known good file for executing the request can be downloaded  <a href="/examples/Rebuild_Example_Image_That_Rebuilds.bmp" download>here</a>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<h3>Code Examples</h3>

<Tabs
  defaultValue="nodejs"
  values={[
    { label: 'NodeJs', value: 'nodejs', },
    { label: 'Python', value: 'py', },
    { label: 'C#', value: 'c#', },
  ]
}>
<TabItem value="nodejs">

```javascript
// This Javascript snippet makes use of the request library
// Get it with npm: "npm install request" or read the docs:
// https://www.npmjs.com/package/request

const request = require("request");
const fs = require("fs");

const jwtToken = "YOUR_JWT_TOKEN";
const url = "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild/file";
const inputFilePath = "YOUR/INPUT/FILE.docx";
const outputFilePath = "YOUR/INPUT/FILE.docx"

const options = {
    "encoding": null,
    "method": "POST",
    "url": url,
    "headers": {
        "Authorization": jwtToken,
        'Accept': 'application/octet-stream'
    },
    formData: {
        "file": {
            "value": fs.createReadStream(inputFilePath),
            "options": {
                "filename": "/" + inputFilePath,
                "contentType": null
            }
        }
    }
}

// Send a file to Glasswall's Rebuild API
// callback passed to request library
request(options, function (error, res) {
  if (error) throw new Error(error);
  if (!(res.statusCode == 200 && res.body)) return;    

  // Glasswall has now sanitised and returned this file
  let data = res.body
  let buf = Buffer.from(data);

  // Write the sanitised file to the output file path
  let file = fs.createWriteStream(outputFilePath);
  file.write(buf);
  file.end();
});

```

</TabItem>
<TabItem value="py">

```python
# This Python snippet makes use of the requests library
# Get it with pip: "pip install requests" or read the docs:
# https://requests.readthedocs.io/en/master/user/install/

import os
import requests

jwt_token = "YOUR_JWT_TOKEN"
url = "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild/file"
input_file_path = r"YOUR/INPUT/FILE.docx"
output_file_path = r"YOUR/OUTPUT/FILE.docx"

# Send a file to Glasswall's Rebuild API
with open(input_file_path, "rb") as f:
    response = requests.post(
        url=url,
        files=[("file", f)],
        headers={
            "Authorization": jwt_token,
            "accept": "application/octet-stream"
        }
    )

if response.status_code == 200 and response.content:
    # Glasswall has now sanitised and returned this file
    # Create output directory if it does not already exist
    os.makedirs(os.path.dirname(output_file_path), exist_ok=True)
    # Write the sanitised file to output file path
    with open(output_file_path, "wb") as f:
        f.write(response.content)
    print("Successfully wrote file to:", os.path.abspath(output_file_path))
else:
    # An error occurred, raise it
    response.raise_for_status()
```

</TabItem>
<TabItem value="c#">

```csharp
using System;
using System.Globalization;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace RebuildFile
{
    class Program
    {
        public static void Main()
        {
            MainAsync().GetAwaiter().GetResult();
        }

        static async Task MainAsync()
        {
            const string jwtToken = "YOUR_JWT_TOKEN";
            const string url = "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild/file";
            const string inputFilePath = @"YOUR/INPUT/FILE.docx";
            const string outputFilePath = @"YOUR/OUTPUT/FILE.docx";

            var request = new HttpRequestMessage(HttpMethod.Post, url);
            request.Headers.Add("Accept", "application/octet-stream");
            request.Headers.Add("Authorization", jwtToken);

            request.Content = new MultipartFormDataContent("Boundary----" + DateTime.Now.ToString(CultureInfo.InvariantCulture))
            {
                {new ByteArrayContent(File.ReadAllBytes(inputFilePath)), "file", "/" + inputFilePath}
            };

            using (var client = new HttpClient())
            {
                // Send a file to Glasswall's Rebuild API
                using (var message = await client.SendAsync(request, CancellationToken.None))
                {
                    if (message.StatusCode == HttpStatusCode.OK && message.Content != null)
                    {
                        // Glasswall has now sanitised and returned this file
                        var rebuiltFile = await message.Content.ReadAsByteArrayAsync();

                        // Write the sanitised file to output file path
                        File.WriteAllBytes(outputFilePath, rebuiltFile);
                    }
                }
            }
        }
    }
}
```
</TabItem>
</Tabs>

</div>

<p>In the next documents, there will be information surrounding how the API works, how to configure requests and alternative endpoints to use.</p>