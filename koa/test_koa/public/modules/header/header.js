const header = MVC => {
	MVC.addModel("header.template", `
       <div class="container">
            <h1 class="logo">
                
                <a href="#"><img src="/images/logo.jpg" alt="">album</a>
            </h1>
            <div class="nav">
                <ul>
                    <% for(let i = 0; i < data.nav.length; i++) { %>
                        <li>
                            <a href="<%= data.nav[i].link %>">
                                <%= data.nav[i].title %>
                            </a>
                        </li>
                        <% } %>
                    </ul>
                </div>
                <div class="info">
                    <div class="login"><a href="/log-in">登陆</a></div>
                    <div class="regist"><a href="/log-in">注册</a></div>
                </div>
            </div>
    `)

    MVC.addView("header", M =>{
        let body = document.querySelector("body")
        let dom = document.createElement("header")
        let template = M.get("header.template");
        let data = M.get("header.data");
        dom.innerHTML =  ts.parseTemplate(template, data);
        body.appendChild(dom)
        return dom;
    })

    MVC.addCtrl("header",(M,V) => {
        axios({
            url: "/data/header.json",
        })
        .then(data => {
            M.add("header.data", data.data);
            V.create("header");
            console.log(data);
            
        })
    })
}
export {header as default}