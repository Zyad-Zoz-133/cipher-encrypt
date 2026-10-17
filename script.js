const word = document.querySelector(".Word-input");
const shift = document.querySelector(".shift");
const EncryptBtn = document.querySelector(".green");
const DecryptBtn = document.querySelector(".red");
const Output = document.querySelector(".output");


EncryptBtn.addEventListener("click", () => {
      if(word.value=="" || shift.value==""){
             Output.textContent = "Error Pls fill all the fields";
               Output.style.color = "red";
      }
      else{
      let res = encrypt(word.value,Number(shift.value));
      Output.textContent="The Encrypted value : "+res;
       Output.style.color = "black";
      word.value="";
      shift.value="";
      }
});

DecryptBtn.addEventListener("click", () => {
      if(word.value=="" || shift.value==""){
             Output.textContent = "Error Pls fill all the fields";
             Output.style.color = "red";
      }
      else{
      let res = decrypt(word.value,Number(shift.value));
      Output.textContent="The Decrypted value : "+res;
      Output.style.color = "black";
      word.value="";
      shift.value="";
      }
});

function encrypt(t, shift) {
  let res = "";

  for (let i = 0; i < t.length; i++) {
    let c = t[i];

    if (/[a-zA-Z]/.test(c)) {
      let start = c >= "A" && c <= "Z" ? "A" : "a";

      res += String.fromCharCode(
        ((c.charCodeAt(0) - start.charCodeAt(0) + shift + 26) % 26) +
          start.charCodeAt(0),
      );
    } else {
      res += c;
    }
  }

  return res;
}

function decrypt(dc, shift) {
  let res = "";

  for (let i = 0; i < dc.length; i++) {
    let c = dc[i];

    if (/[a-zA-Z]/.test(c)) {
      let start = c >= "A" && c <= "Z" ? "A" : "a";

      res += String.fromCharCode(
        ((c.charCodeAt(0) - start.charCodeAt(0) - shift + 26) % 26) +
          start.charCodeAt(0),
      );
    } else {
      res += c;
    }
  }

  return res;
}