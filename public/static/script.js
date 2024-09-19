function show_item(item) {
   console.log(item);
   document.getElementById(item['ime']).innerHTML+='😔'
}
function show_lista(json) {
   json.forEach((item) => show_item(item));
}

function client(url, method = 'GET', body = null) {
   return fetch(url, {
      method: method,
      body: body,
      headers: {
         'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0bGJmaGh2eWVwdWJ6eGN1cWp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQxNTcxNTUsImV4cCI6MTk4OTczMzE1NX0.sxxZt1tFHmsv3kiNbOwiwCxtQDNdANqXpk7427PdRnQ'
      }
   })
}


function lista_get() {
	client('https://dtlbfhhvyepubzxcuqjy.supabase.co/rest/v1/povici?select=*')
   .then(response => response.json())
   .then(json => show_lista(json))
}

function post() {
   var value = document.getElementById("stavka_id");
   client('https://dtlbfhhvyepubzxcuqjy.supabase.co/rest/v1/rpc/add', method = 'POST', body = {'stavka': value})
}

post('test');
