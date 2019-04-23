# Install Kibana 

* Using the following page and the file you previously downloaded:

    https://www.elastic.co/guide/en/elastic-stack-get-started/7.0/get-started-elastic-stack.html#install-kibana

* Make sure Kibana is up and running:

    http://127.0.0.1:5601
    
* Add a document using the Dev Tool - Console 

https://www.elastic.co/guide/en/kibana/current/console-kibana.html

```
PUT my_index/_doc/1
{
  "first_name": "John",
  "last_name": "Doe",
  "full_name": "John Joe Doe"
}
```

*  Using the CRUD table make a:

    * Search for all documents
    * Update the first_name to “John Joe”

* Make an index patter and search in it using the Discover 

https://www.elastic.co/guide/en/kibana/current/tutorial-define-index.html


