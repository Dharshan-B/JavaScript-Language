<h1 id="header"> </h1>
<button id="btn1" onclick="update(event)">
  praveen
</button>
<button id="btn2" onclick="update(event)"">
  harshith
</button>
<button id="btn3" onclick="update(event)"">
  dharshan
</button>
<script>
   var header = document.getElementById("header");
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    function  update(event) {
        header.textContent = event.target.textContent;
    }
</script>
