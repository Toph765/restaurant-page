(()=>{"use strict";function e(){const e=document.createElement("main"),t=["image","name","text"];for(let n=0;n<t.length;n++)if("image"===t[n]){const t=document.createElement("img");t.setAttribute("src","food-pexels-dorota-semla.jpg"),t.setAttribute("alt","food"),e.appendChild(t)}else if("name"===t[n]){const t=document.createElement("h1");t.textContent="re: Baratie",e.appendChild(t)}else if("text"===t[n]){const t=document.createElement("div");t.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius deserunt repellat incidunt ducimus facilis, accusantium aperiam reprehenderit, nam quia, molestiae perferendis in possimus optio rerum maxime? Dolorem culpa ipsum ullam!",e.appendChild(t)}return content.appendChild(e),content}const t=document.querySelector("#content"),n=document.createElement("header"),i=["Home","Menu","Contact"];for(let e=0;e<i.length;e++){const t=document.createElement("button");t.classList.add(i[e]),t.textContent=i[e],n.appendChild(t)}t.appendChild(n),document.body.appendChild(e());const o=document.querySelector(".Menu"),r=document.querySelector(".Home"),a=document.querySelector(".Contact");o.addEventListener("click",(()=>{t.removeChild(t.lastChild),document.body.appendChild(function(){const e=document.createElement("main"),t=["item1","item2","item3","item4","item5","item6","item7","item8"];for(let n=0;n<t.length;n++){const i=document.createElement("div"),o=document.createElement("img"),r=document.createElement("h2"),a=document.createElement("div");"item1"===t[n]?(o.setAttribute("src","shrimp-fried-rice.jpg"),r.textContent="Shrimp Fried Rice",a.textContent="Php 175.00",i.append(o,r,a),e.appendChild(i)):"item2"===t[n]?(o.setAttribute("src","seafood-marinara-pasta.jpg"),r.textContent="Seafood Marinara Pasta",a.textContent="Php 210.00"):"item3"===t[n]?(o.setAttribute("src","monte-cristo-sandwich.jpg"),r.textContent="monte-cristo-sandwich",a.textContent="Php 140.00"):"item4"===t[n]?(o.setAttribute("src","onigiri.jpg"),r.textContent="Onigiri",a.textContent="Php 145.00"):"item5"===t[n]?(o.setAttribute("src","curry-rice.jpg"),r.textContent="Curry Rice",a.textContent="Php 175.00"):"item6"===t[n]?(o.setAttribute("src","coffee-milkshake.jpg"),r.textContent="Coffee Milkshake",a.textContent="Php 130.00"):"item7"===t[n]?(o.setAttribute("src","devil-fruit-macaron.jpg"),r.textContent="Devil Fruit Macaron",a.textContent="Php 160.00"):"item8"===t[n]&&(o.setAttribute("src","tangerine-posset.jpg"),r.textContent="Tangerine Posset",a.textContent="Php 150.00"),i.append(o,r,a),e.appendChild(i)}return content.appendChild(e),content}())})),r.addEventListener("click",(()=>{t.removeChild(t.lastChild),document.body.appendChild(e())})),a.addEventListener("click",(()=>{t.removeChild(t.lastChild),document.body.appendChild(function(){const e=document.createElement("main"),t=["telephone","email","reservation"];for(let n=0;n<t.length;n++){const i=document.createElement("div");if("telephone"===t[n])i.textContent="Cellphone No.: 777-7777-777";else if("email"===t[n])i.textContent="E-mail: re-baratie@email.com";else if("reservation"===t[n]){const e=document.createElement("form"),t=document.createElement("button"),n=["name","telephone","email","number","textarea"];for(let t=0;t<n.length;t++){const i=document.createElement("div"),o=document.createElement("label");if("name"===n[t]){const e=document.createElement("input");e.setAttribute("id","name"),e.setAttribute("type","text"),e.setAttribute("name","name"),o.setAttribute("for","name"),o.textContent="Name: ",i.append(o,e)}else if("telephone"===n[t]){const e=document.createElement("input");e.setAttribute("id","phone"),e.setAttribute("type","telephone"),e.setAttribute("name","phone"),o.setAttribute("for","phone"),o.textContent="Phone No.: ",i.append(o,e)}else if("email"===n[t]){const e=document.createElement("input");e.setAttribute("id","email"),e.setAttribute("type","email"),e.setAttribute("name","name"),o.setAttribute("for","email"),o.textContent="E-mail: ",i.append(o,e)}else if("number"===n[t]){const e=document.createElement("input");e.setAttribute("id","seat"),e.setAttribute("type","number"),e.setAttribute("name","seat"),e.setAttribute("min","1"),e.setAttribute("max","10"),o.setAttribute("for","seat"),o.textContent="Number of seat/s: ",i.append(o,e)}else if("textarea"===n[t]){const e=document.createElement("textarea");e.setAttribute("id","text"),e.setAttribute("cols","30"),e.setAttribute("rows","4"),e.setAttribute("wrap","hard"),e.setAttribute("maxlength","100"),o.setAttribute("for","text"),o.textContent="Comments/Suggestions: ",i.append(o,e)}e.appendChild(i)}t.textContent="Submit",e.appendChild(t),i.appendChild(e)}e.append(i)}return content.appendChild(e),content}())}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVNDLGNBQWMsWUFDcENzQyxFQUFLakMsYUFBYSxLQUFNLFFBQ3hCaUMsRUFBS2pDLGFBQWEsT0FBUSxNQUMxQmlDLEVBQUtqQyxhQUFhLE9BQVEsS0FDMUJpQyxFQUFLakMsYUFBYSxPQUFRLFFBQzFCaUMsRUFBS2pDLGFBQWEsWUFBYSxPQUMvQjZCLEVBQU03QixhQUFhLE1BQU8sUUFDMUI2QixFQUFNMUIsWUFBYyx5QkFDcEJ5QixFQUFRTCxPQUFPTSxFQUFPSSxFQUMxQixDQUNBUCxFQUFLekIsWUFBWTJCLEVBQ3JCLENBRUFsQixFQUFJUCxZQUFjLFNBQ2xCdUIsRUFBS3pCLFlBQVlTLEdBQ2pCVyxFQUFJcEIsWUFBWXlCLEVBQ3BCLENBQ0FqQyxFQUFLOEIsT0FBT0YsRUFDaEIsQ0FJQSxPQUZBaEIsUUFBUUosWUFBWVIsR0FFYlksT0FDWCxDRjFDOEI2QixHQUFvQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudVBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3RQYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gcmVuZGVySG9tZVBhZ2UoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IFtcImltYWdlXCIsIFwibmFtZVwiLCBcInRleHRcIl07XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1haW5Db250ZW50Lmxlbmd0aCA7IGorKykge1xuICAgICAgICBpZiAobWFpbkNvbnRlbnRbal0gPT09ICdpbWFnZScpIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICdmb29kLXBleGVscy1kb3JvdGEtc2VtbGEuanBnJyk7XG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdmb29kJyk7XG4gICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgfSBlbHNlIGlmIChtYWluQ29udGVudFtqXSA9PT0gJ25hbWUnKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSAncmU6IEJhcmF0aWUnO1xuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChtYWluQ29udGVudFtqXSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRWl1cyBkZXNlcnVudCByZXBlbGxhdCBpbmNpZHVudCBkdWNpbXVzIGZhY2lsaXMsIGFjY3VzYW50aXVtIGFwZXJpYW0gcmVwcmVoZW5kZXJpdCwgbmFtIHF1aWEsIG1vbGVzdGlhZSBwZXJmZXJlbmRpcyBpbiBwb3NzaW11cyBvcHRpbyByZXJ1bSBtYXhpbWU/IERvbG9yZW0gY3VscGEgaXBzdW0gdWxsYW0hJ1xuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCB7IHJlbmRlckhvbWVQYWdlIH07IiwiaW1wb3J0IHsgcmVuZGVySG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lUGFnZS5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyTWVudVBhZ2UgfSBmcm9tIFwiLi9tZW51UGFnZS5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyQ29udGFjdFBhZ2UgfSBmcm9tIFwiLi9jb250YWN0UGFnZS5qc1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuY29uc3QgaGVhZGVyVGFiID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0XCJdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IGhlYWRlclRhYi5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKGhlYWRlclRhYltpXSk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gaGVhZGVyVGFiW2ldO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChidG4pO1xufVxuXG5jb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVySG9tZVBhZ2UoKSk7XG5cbmNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTWVudScpO1xuY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Ib21lJyk7XG5jb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkNvbnRhY3QnKTtcblxubWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlck1lbnVQYWdlKCkpO1xufSlcblxuaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlckhvbWVQYWdlKCkpO1xufSlcblxuY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlckNvbnRhY3RQYWdlKCkpO1xufSkiLCJmdW5jdGlvbiByZW5kZXJNZW51UGFnZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gWydpdGVtMScsICdpdGVtMicsICdpdGVtMycsICdpdGVtNCcsICdpdGVtNScsICdpdGVtNicsICdpdGVtNycsICdpdGVtOCddO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51Q29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGlmIChtZW51Q29udGVudFtpXSA9PT0gJ2l0ZW0xJykge1xuICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCAnc2hyaW1wLWZyaWVkLXJpY2UuanBnJyk7XG4gICAgICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gJ1NocmltcCBGcmllZCBSaWNlJztcbiAgICAgICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gJ1BocCAxNzUuMDAnO1xuICAgICAgICAgICAgZGl2LmFwcGVuZChpbWFnZSwgbmFtZSwgcHJpY2UpO1xuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9IGVsc2UgaWYgKG1lbnVDb250ZW50W2ldID09PSAnaXRlbTInKSB7XG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICdzZWFmb29kLW1hcmluYXJhLXBhc3RhLmpwZycpO1xuICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9ICdTZWFmb29kIE1hcmluYXJhIFBhc3RhJztcbiAgICAgICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gJ1BocCAyMTAuMDAnO1xuICAgICAgICB9IGVsc2UgaWYgKG1lbnVDb250ZW50W2ldID09PSAnaXRlbTMnKSB7XG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICdtb250ZS1jcmlzdG8tc2FuZHdpY2guanBnJyk7XG4gICAgICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gJ21vbnRlLWNyaXN0by1zYW5kd2ljaCc7XG4gICAgICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9ICdQaHAgMTQwLjAwJztcbiAgICAgICAgfSBlbHNlIGlmIChtZW51Q29udGVudFtpXSA9PT0gJ2l0ZW00Jykge1xuICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCAnb25pZ2lyaS5qcGcnKTtcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSAnT25pZ2lyaSc7XG4gICAgICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9ICdQaHAgMTQ1LjAwJztcbiAgICAgICAgfSBlbHNlIGlmIChtZW51Q29udGVudFtpXSA9PT0gJ2l0ZW01Jykge1xuICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCAnY3VycnktcmljZS5qcGcnKTtcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSAnQ3VycnkgUmljZSc7XG4gICAgICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9ICdQaHAgMTc1LjAwJztcbiAgICAgICAgfSBlbHNlIGlmIChtZW51Q29udGVudFtpXSA9PT0gJ2l0ZW02Jykge1xuICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCAnY29mZmVlLW1pbGtzaGFrZS5qcGcnKTtcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSAnQ29mZmVlIE1pbGtzaGFrZSc7XG4gICAgICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9ICdQaHAgMTMwLjAwJztcbiAgICAgICAgfSBlbHNlIGlmIChtZW51Q29udGVudFtpXSA9PT0gJ2l0ZW03Jykge1xuICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCAnZGV2aWwtZnJ1aXQtbWFjYXJvbi5qcGcnKTtcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSAnRGV2aWwgRnJ1aXQgTWFjYXJvbic7XG4gICAgICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9ICdQaHAgMTYwLjAwJztcbiAgICAgICAgfSBlbHNlIGlmIChtZW51Q29udGVudFtpXSA9PT0gJ2l0ZW04Jykge1xuICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCAndGFuZ2VyaW5lLXBvc3NldC5qcGcnKTtcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSAnVGFuZ2VyaW5lIFBvc3NldCc7XG4gICAgICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9ICdQaHAgMTUwLjAwJztcbiAgICAgICAgfVxuICAgICAgICBkaXYuYXBwZW5kKGltYWdlLCBuYW1lLCBwcmljZSk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgeyByZW5kZXJNZW51UGFnZSB9OyIsImZ1bmN0aW9uIHJlbmRlckNvbnRhY3RQYWdlKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgY29uc3QgY29udGFjdENvbnRlbnQgPSBbJ3RlbGVwaG9uZScsICdlbWFpbCcsICdyZXNlcnZhdGlvbiddO1xuXG4gICAgZm9yIChsZXQgaT0gMDsgaSA8IGNvbnRhY3RDb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGlmIChjb250YWN0Q29udGVudFtpXSA9PT0gJ3RlbGVwaG9uZScpIHtcbiAgICAgICAgICAgIGRpdi50ZXh0Q29udGVudCA9ICdDZWxscGhvbmUgTm8uOiA3NzctNzc3Ny03NzcnO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbnRhY3RDb250ZW50W2ldID09PSAnZW1haWwnKSB7XG4gICAgICAgICAgICBkaXYudGV4dENvbnRlbnQgPSAnRS1tYWlsOiByZS1iYXJhdGllQGVtYWlsLmNvbSdcbiAgICAgICAgfSBlbHNlIGlmIChjb250YWN0Q29udGVudFtpXSA9PT0gJ3Jlc2VydmF0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY29uc3QgZm9ybUNvbnRlbnQgPSBbJ25hbWUnLCAndGVsZXBob25lJywgJ2VtYWlsJywgJ251bWJlcicsICd0ZXh0YXJlYSddO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZvcm1Db250ZW50Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGl2Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBpZiAoZm9ybUNvbnRlbnRbal0gPT09ICduYW1lJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgICAgICBuYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZTogJztcbiAgICAgICAgICAgICAgICAgICAgZGl2Rm9ybS5hcHBlbmQobGFiZWwsIG5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZm9ybUNvbnRlbnRbal0gPT09ICd0ZWxlcGhvbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgcGhvbmUuc2V0QXR0cmlidXRlKCdpZCcsICdwaG9uZScpO1xuICAgICAgICAgICAgICAgICAgICBwaG9uZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGVsZXBob25lJyk7XG4gICAgICAgICAgICAgICAgICAgIHBob25lLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwaG9uZScpO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwaG9uZScpO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdQaG9uZSBOby46ICdcbiAgICAgICAgICAgICAgICAgICAgZGl2Rm9ybS5hcHBlbmQobGFiZWwsIHBob25lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZvcm1Db250ZW50W2pdID09PSAnZW1haWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgZW1haWwuc2V0QXR0cmlidXRlKCdpZCcsICdlbWFpbCcpO1xuICAgICAgICAgICAgICAgICAgICBlbWFpbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZW1haWwnKTtcbiAgICAgICAgICAgICAgICAgICAgZW1haWwuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZW1haWwnKTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnRS1tYWlsOiAnO1xuICAgICAgICAgICAgICAgICAgICBkaXZGb3JtLmFwcGVuZChsYWJlbCwgZW1haWwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZm9ybUNvbnRlbnRbal0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICBzZWF0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VhdCcpO1xuICAgICAgICAgICAgICAgICAgICBzZWF0LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcbiAgICAgICAgICAgICAgICAgICAgc2VhdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc2VhdCcpO1xuICAgICAgICAgICAgICAgICAgICBzZWF0LnNldEF0dHJpYnV0ZSgnbWluJywgJzEnKTtcbiAgICAgICAgICAgICAgICAgICAgc2VhdC5zZXRBdHRyaWJ1dGUoJ21heCcsICcxMCcpO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdzZWF0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ051bWJlciBvZiBzZWF0L3M6ICc7XG4gICAgICAgICAgICAgICAgICAgIGRpdkZvcm0uYXBwZW5kKGxhYmVsLCBzZWF0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZvcm1Db250ZW50W2pdID09PSAndGV4dGFyZWEnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnY29scycsICczMCcpO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgncm93cycsICc0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKCd3cmFwJywgJ2hhcmQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICcxMDAnKTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdDb21tZW50cy9TdWdnZXN0aW9uczogJztcbiAgICAgICAgICAgICAgICAgICAgZGl2Rm9ybS5hcHBlbmQobGFiZWwsIHRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRpdkZvcm0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidG4udGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgfVxuICAgICAgICBtYWluLmFwcGVuZChkaXYpO1xuICAgIH1cbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCB7IHJlbmRlckNvbnRhY3RQYWdlIH07Il0sIm5hbWVzIjpbInJlbmRlckhvbWVQYWdlIiwibWFpbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm1haW5Db250ZW50IiwiaiIsImxlbmd0aCIsImltYWdlIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJuYW1lIiwidGV4dENvbnRlbnQiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGVhZGVyIiwiaGVhZGVyVGFiIiwiaSIsImJ0biIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJtZW51VGFiIiwiaG9tZVRhYiIsImNvbnRhY3RUYWIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJtZW51Q29udGVudCIsImRpdiIsInByaWNlIiwiYXBwZW5kIiwicmVuZGVyTWVudVBhZ2UiLCJjb250YWN0Q29udGVudCIsImZvcm0iLCJmb3JtQ29udGVudCIsImRpdkZvcm0iLCJsYWJlbCIsInBob25lIiwiZW1haWwiLCJzZWF0IiwidGV4dCIsInJlbmRlckNvbnRhY3RQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==