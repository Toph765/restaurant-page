(()=>{"use strict";function e(){const e=document.createElement("main"),t=["image","name","text","schedule"];for(let n=0;n<t.length;n++)if("image"===t[n]){const t=document.createElement("img");t.setAttribute("src","food-pexels-dorota-semla.jpg"),t.setAttribute("alt","food"),e.appendChild(t)}else if("name"===t[n]){const t=document.createElement("h1");t.textContent="re: Baratie",e.appendChild(t)}else if("text"===t[n]){const t=document.createElement("div");t.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius deserunt repellat incidunt ducimus facilis, accusantium aperiam reprehenderit, nam quia, molestiae perferendis in possimus optio rerum maxime? Dolorem culpa ipsum ullam!",e.appendChild(t)}else if("schedule"===t[n]){const t=document.createElement("div");t.textContent="Tuesday - Friday: 10:00am - 8:00pm Saturday & Sunday: 10am - 12:00pm",e.appendChild(t)}return content.appendChild(e),content}const t=document.querySelector("#content"),n=document.createElement("header"),i=["Home","Menu","Contact"];for(let e=0;e<i.length;e++){const t=document.createElement("button");t.classList.add(i[e]),t.textContent=i[e],n.appendChild(t)}t.appendChild(n),document.body.appendChild(e());const o=document.querySelector(".Menu"),r=document.querySelector(".Home"),a=document.querySelector(".Contact");o.addEventListener("click",(()=>{t.removeChild(t.lastChild),document.body.appendChild(function(){const e=document.createElement("main"),t=["item1","item2","item3","item4","item5","item6","item7","item8"];for(let n=0;n<t.length;n++){const i=document.createElement("div"),o=document.createElement("img"),r=document.createElement("h2"),a=document.createElement("div");"item1"===t[n]?(o.setAttribute("src","shrimp-fried-rice.jpg"),r.textContent="Shrimp Fried Rice",a.textContent="Php 175.00",i.append(o,r,a),e.appendChild(i)):"item2"===t[n]?(o.setAttribute("src","seafood-marinara-pasta.jpg"),r.textContent="Seafood Marinara Pasta",a.textContent="Php 210.00"):"item3"===t[n]?(o.setAttribute("src","monte-cristo-sandwich.jpg"),r.textContent="monte-cristo-sandwich",a.textContent="Php 140.00"):"item4"===t[n]?(o.setAttribute("src","onigiri.jpg"),r.textContent="Onigiri",a.textContent="Php 145.00"):"item5"===t[n]?(o.setAttribute("src","curry-rice.jpg"),r.textContent="Curry Rice",a.textContent="Php 175.00"):"item6"===t[n]?(o.setAttribute("src","coffee-milkshake.jpg"),r.textContent="Coffee Milkshake",a.textContent="Php 130.00"):"item7"===t[n]?(o.setAttribute("src","devil-fruit-macaron.jpg"),r.textContent="Devil Fruit Macaron",a.textContent="Php 160.00"):"item8"===t[n]&&(o.setAttribute("src","tangerine-posset.jpg"),r.textContent="Tangerine Posset",a.textContent="Php 150.00"),i.append(o,r,a),e.appendChild(i)}return content.appendChild(e),content}())})),r.addEventListener("click",(()=>{t.removeChild(t.lastChild),document.body.appendChild(e())})),a.addEventListener("click",(()=>{t.removeChild(t.lastChild),document.body.appendChild(function(){const e=document.createElement("main"),t=["telephone","email","reservation"];for(let n=0;n<t.length;n++){const i=document.createElement("div");if("telephone"===t[n])i.textContent="Cellphone No.: 777-7777-777";else if("email"===t[n])i.textContent="E-mail: re-baratie@email.com";else if("reservation"===t[n]){const e=document.createElement("form"),t=document.createElement("h3"),n=document.createElement("button"),o=["name","telephone","email","number","textarea"];t.textContent="Make a reservation!",e.appendChild(t);for(let t=0;t<o.length;t++){const n=document.createElement("div"),i=document.createElement("label");if("name"===o[t]){const e=document.createElement("input");e.setAttribute("id","name"),e.setAttribute("type","text"),e.setAttribute("name","name"),i.setAttribute("for","name"),i.textContent="Name: ",n.append(i,e)}else if("telephone"===o[t]){const e=document.createElement("input");e.setAttribute("id","phone"),e.setAttribute("type","telephone"),e.setAttribute("name","phone"),i.setAttribute("for","phone"),i.textContent="Phone No.: ",n.append(i,e)}else if("email"===o[t]){const e=document.createElement("input");e.setAttribute("id","email"),e.setAttribute("type","email"),e.setAttribute("name","name"),i.setAttribute("for","email"),i.textContent="E-mail: ",n.append(i,e)}else if("number"===o[t]){const e=document.createElement("input");e.setAttribute("id","seat"),e.setAttribute("type","number"),e.setAttribute("name","seat"),e.setAttribute("min","1"),e.setAttribute("max","10"),i.setAttribute("for","seat"),i.textContent="Number of seat/s: ",n.append(i,e)}else if("textarea"===o[t]){const e=document.createElement("textarea");e.setAttribute("id","text"),e.setAttribute("cols","30"),e.setAttribute("rows","4"),e.setAttribute("wrap","hard"),e.setAttribute("maxlength","100"),i.setAttribute("for","text"),i.textContent="Comments/Suggestions: ",n.append(i,e)}e.appendChild(n)}n.textContent="Submit",e.appendChild(n),i.appendChild(e)}e.append(i)}return content.appendChild(e),content}())}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDMUJrQyxFQUFLbEMsYUFBYSxNQUFPLEtBQ3pCa0MsRUFBS2xDLGFBQWEsTUFBTyxNQUN6QitCLEVBQU0vQixhQUFhLE1BQU8sUUFDMUIrQixFQUFNNUIsWUFBYyxxQkFDcEIyQixFQUFRTixPQUFPTyxFQUFPRyxFQUMxQixNQUFPLEdBQXVCLGFBQW5CTCxFQUFZaEMsR0FBbUIsQ0FDdEMsTUFBTStCLEVBQU9sQyxTQUFTQyxjQUFjLFlBQ3BDaUMsRUFBSzVCLGFBQWEsS0FBTSxRQUN4QjRCLEVBQUs1QixhQUFhLE9BQVEsTUFDMUI0QixFQUFLNUIsYUFBYSxPQUFRLEtBQzFCNEIsRUFBSzVCLGFBQWEsT0FBUSxRQUMxQjRCLEVBQUs1QixhQUFhLFlBQWEsT0FDL0IrQixFQUFNL0IsYUFBYSxNQUFPLFFBQzFCK0IsRUFBTTVCLFlBQWMseUJBQ3BCMkIsRUFBUU4sT0FBT08sRUFBT0gsRUFDMUIsQ0FDQUQsRUFBSzFCLFlBQVk2QixFQUNyQixDQUVBbkIsRUFBSVIsWUFBYyxTQUNsQndCLEVBQUsxQixZQUFZVSxHQUNqQlcsRUFBSXJCLFlBQVkwQixFQUNwQixDQUNBbEMsRUFBSytCLE9BQU9GLEVBQ2hCLENBSUEsT0FGQWhCLFFBQVFMLFlBQVlSLEdBRWJhLE9BQ1gsQ0Y5QzhCNkIsR0FBb0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0UGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmZ1bmN0aW9uIHJlbmRlckhvbWVQYWdlKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBbXCJpbWFnZVwiLCBcIm5hbWVcIiwgXCJ0ZXh0XCIsIFwic2NoZWR1bGVcIl07XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1haW5Db250ZW50Lmxlbmd0aCA7IGorKykge1xuICAgICAgICBpZiAobWFpbkNvbnRlbnRbal0gPT09ICdpbWFnZScpIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICdmb29kLXBleGVscy1kb3JvdGEtc2VtbGEuanBnJyk7XG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdmb29kJyk7XG4gICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgfSBlbHNlIGlmIChtYWluQ29udGVudFtqXSA9PT0gJ25hbWUnKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSAncmU6IEJhcmF0aWUnO1xuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChtYWluQ29udGVudFtqXSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRWl1cyBkZXNlcnVudCByZXBlbGxhdCBpbmNpZHVudCBkdWNpbXVzIGZhY2lsaXMsIGFjY3VzYW50aXVtIGFwZXJpYW0gcmVwcmVoZW5kZXJpdCwgbmFtIHF1aWEsIG1vbGVzdGlhZSBwZXJmZXJlbmRpcyBpbiBwb3NzaW11cyBvcHRpbyByZXJ1bSBtYXhpbWU/IERvbG9yZW0gY3VscGEgaXBzdW0gdWxsYW0hJ1xuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIH0gZWxzZSBpZiAobWFpbkNvbnRlbnRbal0gPT09ICdzY2hlZHVsZScpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjaGVkdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzY2hlZHVsZS50ZXh0Q29udGVudCA9ICdUdWVzZGF5IC0gRnJpZGF5OiAxMDowMGFtIC0gODowMHBtIFNhdHVyZGF5ICYgU3VuZGF5OiAxMGFtIC0gMTI6MDBwbSc7XG4gICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKHNjaGVkdWxlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IHsgcmVuZGVySG9tZVBhZ2UgfTsiLCJpbXBvcnQgeyByZW5kZXJIb21lUGFnZSB9IGZyb20gXCIuL2hvbWVQYWdlLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJNZW51UGFnZSB9IGZyb20gXCIuL21lbnVQYWdlLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJDb250YWN0UGFnZSB9IGZyb20gXCIuL2NvbnRhY3RQYWdlLmpzXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5jb25zdCBoZWFkZXJUYWIgPSBbXCJIb21lXCIsIFwiTWVudVwiLCBcIkNvbnRhY3RcIl07XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgaGVhZGVyVGFiLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoaGVhZGVyVGFiW2ldKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSBoZWFkZXJUYWJbaV07XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGJ0bik7XG59XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJIb21lUGFnZSgpKTtcblxuY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5NZW51Jyk7XG5jb25zdCBob21lVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkhvbWUnKTtcbmNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQ29udGFjdCcpO1xuXG5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyTWVudVBhZ2UoKSk7XG59KVxuXG5ob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVySG9tZVBhZ2UoKSk7XG59KVxuXG5jb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyQ29udGFjdFBhZ2UoKSk7XG59KSIsImZ1bmN0aW9uIHJlbmRlck1lbnVQYWdlKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgY29uc3QgbWVudUNvbnRlbnQgPSBbJ2l0ZW0xJywgJ2l0ZW0yJywgJ2l0ZW0zJywgJ2l0ZW00JywgJ2l0ZW01JywgJ2l0ZW02JywgJ2l0ZW03JywgJ2l0ZW04J107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVDb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWYgKG1lbnVDb250ZW50W2ldID09PSAnaXRlbTEnKSB7XG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICdzaHJpbXAtZnJpZWQtcmljZS5qcGcnKTtcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSAnU2hyaW1wIEZyaWVkIFJpY2UnO1xuICAgICAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSAnUGhwIDE3NS4wMCc7XG4gICAgICAgICAgICBkaXYuYXBwZW5kKGltYWdlLCBuYW1lLCBwcmljZSk7XG4gICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH0gZWxzZSBpZiAobWVudUNvbnRlbnRbaV0gPT09ICdpdGVtMicpIHtcbiAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgJ3NlYWZvb2QtbWFyaW5hcmEtcGFzdGEuanBnJyk7XG4gICAgICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gJ1NlYWZvb2QgTWFyaW5hcmEgUGFzdGEnO1xuICAgICAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSAnUGhwIDIxMC4wMCc7XG4gICAgICAgIH0gZWxzZSBpZiAobWVudUNvbnRlbnRbaV0gPT09ICdpdGVtMycpIHtcbiAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgJ21vbnRlLWNyaXN0by1zYW5kd2ljaC5qcGcnKTtcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSAnbW9udGUtY3Jpc3RvLXNhbmR3aWNoJztcbiAgICAgICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gJ1BocCAxNDAuMDAnO1xuICAgICAgICB9IGVsc2UgaWYgKG1lbnVDb250ZW50W2ldID09PSAnaXRlbTQnKSB7XG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICdvbmlnaXJpLmpwZycpO1xuICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9ICdPbmlnaXJpJztcbiAgICAgICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gJ1BocCAxNDUuMDAnO1xuICAgICAgICB9IGVsc2UgaWYgKG1lbnVDb250ZW50W2ldID09PSAnaXRlbTUnKSB7XG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICdjdXJyeS1yaWNlLmpwZycpO1xuICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9ICdDdXJyeSBSaWNlJztcbiAgICAgICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gJ1BocCAxNzUuMDAnO1xuICAgICAgICB9IGVsc2UgaWYgKG1lbnVDb250ZW50W2ldID09PSAnaXRlbTYnKSB7XG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICdjb2ZmZWUtbWlsa3NoYWtlLmpwZycpO1xuICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9ICdDb2ZmZWUgTWlsa3NoYWtlJztcbiAgICAgICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gJ1BocCAxMzAuMDAnO1xuICAgICAgICB9IGVsc2UgaWYgKG1lbnVDb250ZW50W2ldID09PSAnaXRlbTcnKSB7XG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICdkZXZpbC1mcnVpdC1tYWNhcm9uLmpwZycpO1xuICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9ICdEZXZpbCBGcnVpdCBNYWNhcm9uJztcbiAgICAgICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gJ1BocCAxNjAuMDAnO1xuICAgICAgICB9IGVsc2UgaWYgKG1lbnVDb250ZW50W2ldID09PSAnaXRlbTgnKSB7XG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICd0YW5nZXJpbmUtcG9zc2V0LmpwZycpO1xuICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9ICdUYW5nZXJpbmUgUG9zc2V0JztcbiAgICAgICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gJ1BocCAxNTAuMDAnO1xuICAgICAgICB9XG4gICAgICAgIGRpdi5hcHBlbmQoaW1hZ2UsIG5hbWUsIHByaWNlKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCB7IHJlbmRlck1lbnVQYWdlIH07IiwiZnVuY3Rpb24gcmVuZGVyQ29udGFjdFBhZ2UoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBjb25zdCBjb250YWN0Q29udGVudCA9IFsndGVsZXBob25lJywgJ2VtYWlsJywgJ3Jlc2VydmF0aW9uJ107XG5cbiAgICBmb3IgKGxldCBpPSAwOyBpIDwgY29udGFjdENvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgaWYgKGNvbnRhY3RDb250ZW50W2ldID09PSAndGVsZXBob25lJykge1xuICAgICAgICAgICAgZGl2LnRleHRDb250ZW50ID0gJ0NlbGxwaG9uZSBOby46IDc3Ny03Nzc3LTc3Nyc7XG4gICAgICAgIH0gZWxzZSBpZiAoY29udGFjdENvbnRlbnRbaV0gPT09ICdlbWFpbCcpIHtcbiAgICAgICAgICAgIGRpdi50ZXh0Q29udGVudCA9ICdFLW1haWw6IHJlLWJhcmF0aWVAZW1haWwuY29tJ1xuICAgICAgICB9IGVsc2UgaWYgKGNvbnRhY3RDb250ZW50W2ldID09PSAncmVzZXJ2YXRpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1Db250ZW50ID0gWyduYW1lJywgJ3RlbGVwaG9uZScsICdlbWFpbCcsICdudW1iZXInLCAndGV4dGFyZWEnXTtcblxuICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9ICdNYWtlIGEgcmVzZXJ2YXRpb24hJztcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZm9ybUNvbnRlbnQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXZGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGlmIChmb3JtQ29udGVudFtqXSA9PT0gJ25hbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICBuYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZScpO1xuICAgICAgICAgICAgICAgICAgICBuYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdOYW1lOiAnO1xuICAgICAgICAgICAgICAgICAgICBkaXZGb3JtLmFwcGVuZChsYWJlbCwgbmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmb3JtQ29udGVudFtqXSA9PT0gJ3RlbGVwaG9uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICBwaG9uZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Bob25lJyk7XG4gICAgICAgICAgICAgICAgICAgIHBob25lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZWxlcGhvbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgcGhvbmUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Bob25lJyk7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Bob25lJyk7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1Bob25lIE5vLjogJ1xuICAgICAgICAgICAgICAgICAgICBkaXZGb3JtLmFwcGVuZChsYWJlbCwgcGhvbmUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZm9ybUNvbnRlbnRbal0gPT09ICdlbWFpbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICBlbWFpbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VtYWlsJyk7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsLnNldEF0dHJpYnV0ZSgndHlwZScsICdlbWFpbCcpO1xuICAgICAgICAgICAgICAgICAgICBlbWFpbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdlbWFpbCcpO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdFLW1haWw6ICc7XG4gICAgICAgICAgICAgICAgICAgIGRpdkZvcm0uYXBwZW5kKGxhYmVsLCBlbWFpbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmb3JtQ29udGVudFtqXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHNlYXQuc2V0QXR0cmlidXRlKCdpZCcsICdzZWF0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHNlYXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xuICAgICAgICAgICAgICAgICAgICBzZWF0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdzZWF0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHNlYXQuc2V0QXR0cmlidXRlKCdtaW4nLCAnMScpO1xuICAgICAgICAgICAgICAgICAgICBzZWF0LnNldEF0dHJpYnV0ZSgnbWF4JywgJzEwJyk7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3NlYXQnKTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnTnVtYmVyIG9mIHNlYXQvczogJztcbiAgICAgICAgICAgICAgICAgICAgZGl2Rm9ybS5hcHBlbmQobGFiZWwsIHNlYXQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZm9ybUNvbnRlbnRbal0gPT09ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdpZCcsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdjb2xzJywgJzMwJyk7XG4gICAgICAgICAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdyb3dzJywgJzQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ3dyYXAnLCAnaGFyZCcpO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzEwMCcpO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ0NvbW1lbnRzL1N1Z2dlc3Rpb25zOiAnO1xuICAgICAgICAgICAgICAgICAgICBkaXZGb3JtLmFwcGVuZChsYWJlbCwgdGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2Rm9ybSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICB9XG4gICAgICAgIG1haW4uYXBwZW5kKGRpdik7XG4gICAgfVxuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IHsgcmVuZGVyQ29udGFjdFBhZ2UgfTsiXSwibmFtZXMiOlsicmVuZGVySG9tZVBhZ2UiLCJtYWluIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwibWFpbkNvbnRlbnQiLCJqIiwibGVuZ3RoIiwiaW1hZ2UiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsIm5hbWUiLCJ0ZXh0Q29udGVudCIsImRlc2NyaXB0aW9uIiwic2NoZWR1bGUiLCJjb250ZW50IiwicXVlcnlTZWxlY3RvciIsImhlYWRlciIsImhlYWRlclRhYiIsImkiLCJidG4iLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5IiwibWVudVRhYiIsImhvbWVUYWIiLCJjb250YWN0VGFiIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwibWVudUNvbnRlbnQiLCJkaXYiLCJwcmljZSIsImFwcGVuZCIsInJlbmRlck1lbnVQYWdlIiwiY29udGFjdENvbnRlbnQiLCJmb3JtIiwidGV4dCIsImZvcm1Db250ZW50IiwiZGl2Rm9ybSIsImxhYmVsIiwicGhvbmUiLCJlbWFpbCIsInNlYXQiLCJyZW5kZXJDb250YWN0UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=