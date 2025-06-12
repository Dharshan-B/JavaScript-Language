<button id="add" onclick="update()">add</button>
<div id="result"></div>

<script>
  var div = document.getElementById('result');
  function update(){
    var h12 = document.createElement('h1');
    h12.textContent="Hello";
    div.append(h12);
  }
</script>
