"use strict";(self.webpackChunknobleui_angular=self.webpackChunknobleui_angular||[]).push([[740],{4740:(ft,x,u)=>{u.r(x),u.d(x,{ImportModule:()=>ht});var g=u(6895),d=u(265),v=u(9585),E=u(9628),y=u(907),U=u(4826),q=u(5351),N=u(6134),s=u(433),h=u(8796),I=u(1094),t=u(4650);let D=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-import"]],decls:1,vars:0,template:function(e,n){1&e&&t._UZ(0,"router-outlet")},dependencies:[d.lC],encapsulation:2}),o})();var w=u(5226),c=u.n(w),F=u(8372),L=u(4004),S=u(1006),J=u(7696),T=u(539),Q=u(2340),b=u(529),A=u(3753);let _=(()=>{class o extends T.r{constructor(e,n){super(e,n),this.apiUrl=this.dataService.getUrl("storage"),this.domain_name=Q.N.domain_name}getAll(){return this.http.post(`${this.apiUrl}/import`,this.handleData())}getOne(e){return this.http.post(`${this.apiUrl}/import/${e}`,this.dataService.handleData(e))}createData(e){return this.http.post(`${this.apiUrl}/import/create`,this.dataService.handleData(e))}cancel(e){return this.http.post(`${this.apiUrl}/import/cancel/${e}`,this.dataService.handleData())}handleData(e={}){return{domain_name:this.domain_name,...e}}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(b.eN),t.LFG(A.l))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),B=(()=>{class o extends T.r{constructor(e,n){super(e,n),this.apiUrl=this.dataService.getUrl("get-variation")}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(b.eN),t.LFG(A.l))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var f=u(2997);function O(o,i){1&o&&(t.TgZ(0,"div",13)(1,"button",14),t._UZ(2,"span",15),t._uU(3," Loading... "),t.qZA()())}function M(o,i){if(1&o&&(t.TgZ(0,"ng-option",38),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function G(o,i){if(1&o&&(t.TgZ(0,"ng-option",38),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function Y(o,i){if(1&o&&(t.TgZ(0,"ng-option",38),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function k(o,i){if(1&o&&t._UZ(0,"ngb-highlight",39),2&o){const n=i.term;t.Q6J("result",i.result.product_name_variation)("term",n)}}function H(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"td")(1,"input",46),t.NdJ("input",function(r){t.CHM(e);const a=t.oxw(4);return t.KtG(a.resultTotal(r))}),t.qZA()()}if(2&o){const e=t.oxw(),n=e.$implicit,r=e.index,a=t.oxw(3);t.xp6(1),t.s9C("id",n.id),t.Q6J("ngModel",a.products[r].price)}}function P(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"td",43),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().index,a=t.oxw(3);return t.KtG(a.Edit(r))}),t._uU(1),t.qZA()}if(2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.price," ")}}function $(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"td")(1,"input",47),t.NdJ("input",function(r){t.CHM(e);const a=t.oxw(4);return t.KtG(a.resultTotal(r))}),t.qZA()()}if(2&o){const e=t.oxw(),n=e.$implicit,r=e.index,a=t.oxw(3);t.xp6(1),t.s9C("id",n.id),t.Q6J("ngModel",a.products[r].quantity)}}function j(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"td",43),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().index,a=t.oxw(3);return t.KtG(a.Edit(r))}),t._uU(1),t.qZA()}if(2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.quantity," ")}}function K(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td",43),t.NdJ("click",function(){const a=t.CHM(e).index,p=t.oxw(3);return t.KtG(p.Edit(a))}),t._uU(4),t.qZA(),t.YNc(5,H,2,2,"td",35),t.YNc(6,P,2,1,"td",44),t.YNc(7,$,2,2,"td",35),t.YNc(8,j,2,1,"td",44),t.TgZ(9,"td"),t._uU(10),t.ALo(11,"currency"),t.qZA(),t.TgZ(12,"th")(13,"button",45),t.NdJ("click",function(){const a=t.CHM(e).index,p=t.oxw(3);return t.KtG(p.removeProduct(a))}),t._uU(14," X\xf3a "),t.qZA()()()}if(2&o){const e=i.$implicit,n=i.index,r=t.oxw(3);t.xp6(2),t.Oqu(n+1),t.xp6(2),t.Oqu(e.name),t.xp6(1),t.Q6J("ngIf",n===r.editRowID),t.xp6(1),t.Q6J("ngIf",n!==r.editRowID),t.xp6(1),t.Q6J("ngIf",n===r.editRowID),t.xp6(1),t.Q6J("ngIf",n!==r.editRowID),t.xp6(2),t.hij(" ",t.gM2(11,7,e.result,"VN\u0110","symbol","1.0-0")," ")}}function R(o,i){if(1&o&&(t.ynx(0),t.YNc(1,K,15,12,"tr",40),t.TgZ(2,"tr")(3,"th",41),t._uU(4,"T\u1ed4NG TI\u1ec0N"),t.qZA(),t.TgZ(5,"td",42),t._uU(6),t.ALo(7,"currency"),t.qZA()(),t.BQk()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.products),t.xp6(5),t.hij(" ",t.gM2(7,2,e.calculateTotalPrice(),"VN\u0110","symbol","1.0-0")," ")}}function V(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"form",16),t.NdJ("ngSubmit",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.onSubmit())}),t.TgZ(1,"div",17)(2,"label",18),t._uU(3," L\xfd do nh\u1eadp "),t.TgZ(4,"span",19),t._uU(5,"(*)"),t.qZA()(),t._UZ(6,"input",20),t.qZA(),t.TgZ(7,"div",17)(8,"label",21),t._uU(9," Ghi ch\xfa "),t.qZA(),t._UZ(10,"textarea",22),t.qZA(),t._UZ(11,"br"),t.TgZ(12,"h6",10),t._uU(13,"Nh\xe0 cung c\u1ea5p"),t.qZA(),t.TgZ(14,"div",17)(15,"label",18),t._uU(16," Ch\u1ecdn nh\xe0 cung c\u1ea5p "),t.TgZ(17,"span",19),t._uU(18,"(*)"),t.qZA()(),t.TgZ(19,"ng-select",23),t.YNc(20,M,2,2,"ng-option",24),t.qZA()(),t._UZ(21,"br"),t.TgZ(22,"h6",10),t._uU(23,"Danh s\xe1ch s\u1ea3n ph\u1ea9m"),t.qZA(),t.TgZ(24,"div",5)(25,"div",25)(26,"div",17)(27,"label",18),t._uU(28," Chi nh\xe1nh "),t.TgZ(29,"span",19),t._uU(30,"(*)"),t.qZA()(),t.TgZ(31,"ng-select",26),t.YNc(32,G,2,2,"ng-option",24),t.qZA()()(),t.TgZ(33,"div",25)(34,"div",17)(35,"label",18),t._uU(36," Kho "),t.TgZ(37,"span",19),t._uU(38,"(*)"),t.qZA()(),t.TgZ(39,"ng-select",27),t.YNc(40,Y,2,2,"ng-option",24),t.qZA()()()(),t.TgZ(41,"div",17)(42,"form",28),t.NdJ("ngSubmit",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.searchProduct())}),t.YNc(43,k,1,2,"ng-template",null,29,t.W1O),t.TgZ(45,"label",30),t._uU(46,"T\xecm ki\u1ebfm phi\xean b\u1ea3n s\u1ea3n ph\u1ea9m:"),t.qZA(),t.TgZ(47,"input",31),t.NdJ("ngModelChange",function(r){t.CHM(e);const a=t.oxw();return t.KtG(a.input=r)}),t.qZA(),t.TgZ(48,"button",32),t._uU(49,"T\xecm ki\u1ebfm"),t.qZA()()(),t.TgZ(50,"div",17)(51,"div",7)(52,"div",8)(53,"div",33)(54,"table",34)(55,"thead")(56,"tr")(57,"th"),t._uU(58,"#"),t.qZA(),t.TgZ(59,"th"),t._uU(60,"Phi\xean b\u1ea3n s\u1ea3n ph\u1ea9m"),t.qZA(),t.TgZ(61,"th"),t._uU(62,"Gi\xe1 nh\u1eadp"),t.qZA(),t.TgZ(63,"th"),t._uU(64,"S\u1ed1 l\u01b0\u1ee3ng"),t.qZA(),t.TgZ(65,"th"),t._uU(66,"Th\xe0nh ti\u1ec1n"),t.qZA(),t._UZ(67,"th"),t.qZA()(),t.TgZ(68,"tbody"),t.YNc(69,R,8,7,"ng-container",35),t.qZA()()()()()(),t.TgZ(70,"button",36),t._uU(71," T\u1ea1o m\u1edbi "),t.qZA(),t.TgZ(72,"button",37),t._uU(73," Tr\u1edf v\u1ec1 "),t.qZA()()}if(2&o){const e=t.MAs(44),n=t.oxw();t.Q6J("formGroup",n.storageImportForm),t.xp6(19),t.Q6J("searchable",!0),t.xp6(1),t.Q6J("ngForOf",n.listSupplier),t.xp6(11),t.Q6J("searchable",!0),t.xp6(1),t.Q6J("ngForOf",n.listLocation),t.xp6(7),t.Q6J("searchable",!0),t.xp6(1),t.Q6J("ngForOf",n.listLocation),t.xp6(2),t.Q6J("formGroup",n.inputSerach),t.xp6(5),t.Q6J("ngModel",n.input)("ngbTypeahead",n.search)("resultTemplate",e)("inputFormatter",n.formatter),t.xp6(22),t.Q6J("ngIf",n.products&&n.products.length),t.xp6(1),t.Q6J("disabled",n.storageImportForm.invalid)}}let X=(()=>{class o{constructor(e,n,r,a,p){this._supplier=e,this._location=n,this._storage=r,this.router=a,this._product=p,this.listSupplier=[],this.listLocation=[],this.listProduct=[],this.products=[],this.input={},this.editRowID="",this.isLoading=!1,this.storageImportForm=new s.cw({reason:new s.NI("",s.kI.required),note:new s.NI(""),partner_id:new s.NI("",s.kI.required),inventory_id:new s.NI("",s.kI.required),price:new s.NI(""),quantity:new s.NI("")}),this.inputSerach=new s.cw({input:new s.NI("")}),this.search=l=>l.pipe((0,F.b)(200),(0,L.U)(m=>""===m?[]:this.listProduct.filter(_t=>_t.product_name_variation.toLowerCase().indexOf(m.toLowerCase())>-1).slice(0,10))),this.formatter=l=>l.product_name_variation,this._supplier.GetData().subscribe(l=>{this.listSupplier=l.payload,console.log(this.listSupplier)}),this._product.GetData().subscribe(l=>{this.listProduct=l.payload,console.log(this.listProduct)}),this._location.GetData().subscribe(l=>{this.listLocation=l.payload})}Edit(e){this.editRowID=e}ngOnInit(){}searchProduct(){""!=this.input&&null!=this.input.id&&(this.products.find(n=>n.variation_id===this.input.id)||this.products.push({id:this.input.id,name:this.input.product_name_variation,variation_id:this.input.id,batch_id:1,price:this.input.price_import,price_type:0,quantity:0,result:0}),this.inputSerach.reset(),console.log(this.products))}calculateTotal(e,n){return e*n}calculateTotalPrice(){let e=0;for(let n=0;n<this.products.length;n++)e+=this.products[n].price*this.products[n].quantity;return e}removeProduct(e){this.products.splice(e,1)}resultTotal(e){this.updateQuantity(this.products,+e.target.id,+e.target.value,e.target.name),this.totalMoney=this.products.reduce((n,r)=>n+r.result,0)}updateQuantity(e,n,r,a){console.log(a);const p="quantity"===a?"quantity":"price",l="quantity"===a?"price":"quantity";for(let m=0;m<e.length;m++)if(e[m].id===n){e[m][p]=r,e[m].result=r*e[m][l],console.log(e[m]);break}}onSubmit(){if(this.storageImportForm.valid&&this.products.length>0){const e={reason:this.storageImportForm.value.reason,inventory_id:this.storageImportForm.value.inventory_id,partner_id:1,partner_type:0,trans_type:0,note:this.storageImportForm.value.note,status:1,created_by:1,inventory_transaction_details:JSON.parse(JSON.stringify(this.products))};console.log(e),this._storage.createData(e).subscribe(n=>{if(1==n.status)this.storageImportForm.reset(),c().fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,title:"Th\xe0nh c\xf4ng!",text:"Th\xeam \u0111\u01a1n nh\u1eadp th\xe0nh c\xf4ng",icon:"success",timerProgressBar:!0,didOpen:r=>{r.addEventListener("mouseenter",c().stopTimer),r.addEventListener("mouseleave",c().resumeTimer)}}),this.router.navigate([`../storage/import/detail/${n.payload}`]);else{console.log(n);const r=[];for(const a in n.meta.errors){const p=n.meta.errors[a];for(const l of p)r.push(`${a}: ${l}`)}this.showNextMessage(r)}},n=>{console.log(n),c().fire("L\u1ed7i!","C\xf3 l\u1ed7i x\u1ea3y ra khi g\u1eedi d\u1eef li\u1ec7u.","error")})}else alert("S\u1ea3n ph\u1ea9m kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng")}showNextMessage(e){if(e.length>0){const n=e.shift();c().fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,title:"Th\u1ea5t b\u1ea1i!",text:n,icon:"error",timerProgressBar:!0,didOpen:r=>{r.addEventListener("mouseenter",c().stopTimer),r.addEventListener("mouseleave",c().resumeTimer)},didClose:()=>{this.showNextMessage(e)}})}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(S.R),t.Y36(J._),t.Y36(_),t.Y36(d.F0),t.Y36(B))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-create"]],decls:17,vars:2,consts:[[1,"page-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","."],["aria-current","page",1,"breadcrumb-item","active"],[1,"row"],[1,"col-md-12","grid-margin","stretch-card"],[1,"card"],[1,"card-body"],[2,"text-align","center"],[1,"card-title"],["class","loadingcustomcss",4,"ngIf"],["class","forms-sample",3,"formGroup","ngSubmit",4,"ngIf"],[1,"loadingcustomcss"],["type","button","disabled","",1,"btn","btn-primary"],["role","status","aria-hidden","true",1,"spinner-grow","spinner-grow-sm"],[1,"forms-sample",3,"formGroup","ngSubmit"],[1,"mb-3"],["for","exampleInputUsername1",1,"form-label"],[1,"text-danger"],["type","text","id","exampleInputUsername1","formControlName","reason","autocomplete","off","placeholder","Nh\u1eadp l\xfd do nh\u1eadp",1,"form-control"],["for","exampleFormControlTextarea1",1,"form-label"],["id","exampleFormControlTextarea1","formControlName","note","rows","5",1,"form-control"],["formControlName","partner_id","placeholder","Ch\u1ecdn nh\xe0 cung c\u1ea5p",3,"searchable"],[3,"value",4,"ngFor","ngForOf"],[1,"col-sm-6"],["placeholder","Ch\u1ecdn chi nh\xe1nh",3,"searchable"],["formControlName","inventory_id","placeholder","Ch\u1ecdn nh\xe0 kho",3,"searchable"],[3,"formGroup","ngSubmit"],["rt",""],["for","typeahead-template",1,"form-label"],["id","typeahead-template","type","text","formControlName","input",1,"form-control",3,"ngModel","ngbTypeahead","resultTemplate","inputFormatter","ngModelChange"],["type","submit","hidden",""],[1,"table-responsive"],[1,"table","table-hover"],[4,"ngIf"],["type","submit",1,"btn","btn-primary","me-2",3,"disabled"],["routerLink","/storage/import/list",1,"btn","btn-secondary"],[3,"value"],[3,"result","term"],[4,"ngFor","ngForOf"],[2,"color","red"],["colspan","5",2,"text-align","right"],[3,"click"],[3,"click",4,"ngIf"],[1,"btn","btn-danger",3,"click"],["type","number","formControlName","price","name","price","id","exampleInputText1","placeholder","Nh\u1eadp gi\xe1",1,"form-control",3,"ngModel","id","input"],["type","number","formControlName","quantity","name","quantity","id","exampleInputText1","placeholder","Nh\u1eadp s\u1ed1 l\u01b0\u1ee3ng",1,"form-control",3,"ngModel","id","input"]],template:function(e,n){1&e&&(t.TgZ(0,"nav",0)(1,"ol",1)(2,"li",2)(3,"a",3),t._uU(4,"Danh m\u1ee5c"),t.qZA()(),t.TgZ(5,"li",4),t._uU(6,"Th\xeam m\u1edbi \u0111\u01a1n kho"),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"h2",9),t._uU(12,"T\u1ea1o \u0111\u01a1n nh\u1eadp kho"),t.qZA(),t.TgZ(13,"h6",10),t._uU(14,"Th\xf4ng tin c\u01a1 b\u1ea3n"),t.qZA(),t.YNc(15,O,4,0,"div",11),t.YNc(16,V,74,14,"form",12),t.qZA()()()()),2&e&&(t.xp6(15),t.Q6J("ngIf",n.isLoading),t.xp6(1),t.Q6J("ngIf",!n.isLoading))},dependencies:[g.sg,g.O5,d.rH,d.yS,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.sg,s.u,h.w9,h.jq,f.dR,f._h,g.H9],changeDetection:0}),o})();var Z=u(2366),z=u(9751),W=u(9646);function tt(o,i){1&o&&(t.TgZ(0,"div",14)(1,"div",15)(2,"span",16),t._uU(3,"Loading..."),t.qZA()()())}const C=function(o){return["../detail",o]};function et(o,i){if(1&o&&(t.TgZ(0,"a",22),t._uU(1,"Chi ti\u1ebft"),t.qZA()),2&o){const e=t.oxw().$implicit;t.Q6J("routerLink",t.VKq(1,C,e.inventory_transaction_id))}}function nt(o,i){if(1&o&&(t.TgZ(0,"tr")(1,"td")(2,"a",19),t._uU(3),t.qZA()(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td",20),t._uU(9),t.qZA(),t.TgZ(10,"td",20)(11,"span"),t._uU(12),t.qZA()(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t.YNc(18,et,2,3,"a",21),t.qZA()()),2&o){const e=i.$implicit,n=t.oxw(2);t.xp6(2),t.Q6J("routerLink",t.VKq(12,C,e.inventory_transaction_id)),t.xp6(1),t.Oqu(e.inventory_transaction_id),t.xp6(2),t.Oqu(e.partner_name),t.xp6(2),t.Oqu(e.inventory_name),t.xp6(2),t.Oqu(e.created_by),t.xp6(2),t.Gre("badge ",n.status(e.status)[1],""),t.xp6(1),t.Oqu(n.status(e.status)[0]),t.xp6(2),t.Oqu(e.created_at),t.xp6(2),t.Oqu(e.updated_at),t.xp6(2),t.Q6J("ngIf",1===e.status)}}function ot(o,i){if(1&o&&(t.TgZ(0,"table",17)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"M\xc3 \u0110\u01a0N"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"NH\xc0 CUNG C\u1ea4P"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"KHO NH\u1eacN"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"NG\u01af\u1edcI T\u1ea0O"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"TR\u1ea0NG TH\xc1I \u0110\u01a0N"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"TH\u1edcI GIAN T\u1ea0O"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"TH\u1edcI GIAN C\u1eacP NH\u1eacT"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"H\xc0NH \u0110\u1ed8NG"),t.qZA()()(),t.TgZ(19,"tbody"),t.YNc(20,nt,19,14,"tr",18),t.ALo(21,"async"),t.qZA(),t.TgZ(22,"tfoot")(23,"tr"),t._UZ(24,"th")(25,"th")(26,"th")(27,"th")(28,"th")(29,"th")(30,"th")(31,"th"),t.qZA()()()),2&o){const e=t.oxw();t.xp6(20),t.Q6J("ngForOf",t.lcZ(21,1,e.listStorageImport))}}function it(o,i){1&o&&(t.TgZ(0,"h2",13),t._uU(1," X\xe1c nh\u1eadn nh\u1eadp kho "),t.qZA())}function at(o,i){1&o&&(t.TgZ(0,"h2",13),t._uU(1," Chi ti\u1ebft \u0111\u01a1n nh\u1eadp kho "),t.qZA())}function st(o,i){1&o&&(t.TgZ(0,"div",14)(1,"button",15),t._UZ(2,"span",16),t._uU(3," Loading... "),t.qZA()())}function ut(o,i){if(1&o&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"p"),t._uU(7),t.ALo(8,"currency"),t.qZA()(),t.TgZ(9,"td")(10,"p"),t._uU(11),t.qZA()(),t.TgZ(12,"td"),t._uU(13),t.ALo(14,"currency"),t.qZA(),t._UZ(15,"th"),t.qZA()),2&o){const e=i.$implicit,n=i.index,r=t.oxw(3);t.xp6(2),t.Oqu(n+1),t.xp6(2),t.Oqu(e.variation_name),t.xp6(3),t.hij(" ",t.gM2(8,5,r.listStorage[n].price,"VN\u0110","symbol","1.0-0")," "),t.xp6(4),t.Oqu(r.listStorage[n].quantity),t.xp6(2),t.hij(" ",t.gM2(14,10,r.calculateTotal(r.listStorage[n].price,r.listStorage[n].quantity),"VN\u0110","symbol","1.0-0")," ")}}function ct(o,i){if(1&o&&(t.ynx(0),t.YNc(1,ut,16,15,"tr",35),t.TgZ(2,"tr")(3,"th",36),t._uU(4,"T\u1ed4NG TI\u1ec0N"),t.qZA(),t.TgZ(5,"td",37),t._uU(6),t.ALo(7,"currency"),t.qZA()(),t.BQk()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.listStorage),t.xp6(5),t.hij(" ",t.gM2(7,2,e.calculateTotalPrice(),"VN\u0110","symbol","1.0-0")," ")}}function lt(o,i){if(1&o&&(t.TgZ(0,"button",38),t._uU(1," X\xe1c nh\u1eadn "),t.qZA()),2&o){const e=t.oxw(2);t.Q6J("disabled",e.storageConfirmForm.invalid)}}function pt(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",39),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.cancel())}),t._uU(1," H\u1ee7y \u0111\u01a1n "),t.qZA()}if(2&o){const e=t.oxw(2);t.Q6J("disabled",e.storageConfirmForm.invalid)}}function mt(o,i){if(1&o&&(t.TgZ(0,"button",40),t._uU(1," In m\xe3 v\u1ea1ch "),t.qZA()),2&o){const e=t.oxw(2);t.Q6J("disabled",e.storageConfirmForm.invalid)}}function dt(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"form",17),t.NdJ("ngSubmit",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.onSubmit())}),t.TgZ(1,"div",18)(2,"label",19),t._uU(3," M\xe3 \u0111\u01a1n "),t.TgZ(4,"span",20),t._uU(5,"(*)"),t.qZA()(),t._UZ(6,"input",21),t.qZA(),t.TgZ(7,"div",18)(8,"label",19),t._uU(9," L\xfd do nh\u1eadp "),t.TgZ(10,"span",20),t._uU(11,"(*)"),t.qZA()(),t._UZ(12,"input",22),t.qZA(),t.TgZ(13,"div",18)(14,"label",23),t._uU(15," Ghi ch\xfa "),t.qZA(),t._UZ(16,"textarea",24),t.qZA(),t._UZ(17,"br"),t.TgZ(18,"h6",10),t._uU(19,"Nh\xe0 cung c\u1ea5p"),t.qZA(),t.TgZ(20,"div",18)(21,"label",19),t._uU(22," Ch\u1ecdn nh\xe0 cung c\u1ea5p "),t.qZA(),t._UZ(23,"input",25),t.qZA(),t._UZ(24,"br"),t.TgZ(25,"h6",10),t._uU(26,"Danh s\xe1ch s\u1ea3n ph\u1ea9m"),t.qZA(),t.TgZ(27,"div",5)(28,"div",26)(29,"div",18)(30,"label",19),t._uU(31," Chi nh\xe1nh "),t.qZA(),t._UZ(32,"input",27),t.qZA()(),t.TgZ(33,"div",26)(34,"div",18)(35,"label",19),t._uU(36," Kho "),t.qZA(),t._UZ(37,"input",27),t.qZA()()(),t.TgZ(38,"div",18)(39,"div",7)(40,"div",8)(41,"div",28)(42,"table",29)(43,"thead")(44,"tr")(45,"th"),t._uU(46,"#"),t.qZA(),t.TgZ(47,"th"),t._uU(48,"Phi\xean b\u1ea3n s\u1ea3n ph\u1ea9m"),t.qZA(),t.TgZ(49,"th"),t._uU(50,"Gi\xe1 nh\u1eadp"),t.qZA(),t.TgZ(51,"th"),t._uU(52,"S\u1ed1 l\u01b0\u1ee3ng"),t.qZA(),t.TgZ(53,"th"),t._uU(54,"Th\xe0nh ti\u1ec1n"),t.qZA(),t._UZ(55,"th"),t.qZA()(),t.TgZ(56,"tbody"),t.YNc(57,ct,8,7,"ng-container",30),t.qZA()()()()()(),t.YNc(58,lt,2,1,"button",31),t.YNc(59,pt,2,1,"button",32),t.YNc(60,mt,2,1,"button",33),t.TgZ(61,"button",34),t._uU(62," Tr\u1edf v\u1ec1 "),t.qZA()()}if(2&o){const e=t.oxw();t.Q6J("formGroup",e.storageConfirmForm),t.xp6(6),t.Q6J("readonly",!0),t.xp6(6),t.Q6J("readonly",!0),t.xp6(4),t.Q6J("readonly",!0),t.xp6(7),t.Q6J("readonly",!0),t.xp6(9),t.Q6J("readonly",!0),t.xp6(5),t.Q6J("readonly",!0),t.xp6(20),t.Q6J("ngIf",e.listStorage&&e.listStorage.length),t.xp6(1),t.Q6J("ngIf",1===e.status),t.xp6(1),t.Q6J("ngIf",1===e.status),t.xp6(1),t.Q6J("ngIf",2===e.status)}}const gt=[{path:"",component:D,children:[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class o{constructor(e){this._storageService=e,this.isLoading=!1,this.listStorageImport=new z.y}ngOnInit(){this.refreshData()}ngAfterViewInit(){this.listStorageImport.subscribe(()=>{setTimeout(()=>{new Z.w("#dataTableExample"),setTimeout(()=>{new Z.w("#dataTableExample").on("datatable.init",()=>{this.addDeleteEventHandlers()})},0)},0)})}addDeleteEventHandlers(){const e=document.getElementsByClassName("btn-danger");Array.from(e).forEach(n=>{n.addEventListener("click",r=>{const a=r.target.getAttribute("id");this.deleteLocation(Number(a))})})}deleteLocation(e){c().fire({title:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a?",text:"B\u1ea1n s\u1ebd kh\xf4ng th\u1ec3 ho\xe0n t\xe1c l\u1ea1i h\xe0nh \u0111\u1ed9ng n\xe0y!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"C\xf3, x\xf3a n\xf3!"}).then(n=>{n.isConfirmed&&this._storageService.delete(e).subscribe(r=>{c().fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1e3,title:"\u0110\xe3 x\xf3a!",text:"\u0110\u01a1n v\u1ecb \u0111\xe3 \u0111\u01b0\u1ee3c x\xf3a.",icon:"success",timerProgressBar:!0,didOpen:a=>{a.addEventListener("mouseenter",c().stopTimer),a.addEventListener("mouseleave",c().resumeTimer)}}),setTimeout(()=>{location.reload()},1e3)},r=>{0==r.success&&c().fire("L\u1ed7i!",`${r.meta.name}`,"error")})})}refreshData(){this.isLoading=!0,this._storageService.getAll().subscribe({next:e=>{1==e.status&&(this.listStorageImport=(0,W.of)(e.payload.data),this.isLoading=!1,console.log(e.payload),this.listStorageImport.subscribe(n=>{setTimeout(()=>{new Z.w("#dataTableExample").on("datatable.init",()=>{this.addDeleteEventHandlers()})},0)}))},error:e=>{console.log(e),c().fire("L\u1ed7i!","C\xf3 l\u1ed7i x\u1ea3y ra. Vui l\xf2ng li\xean h\u1ec7 QTV.","error")}})}status(e){return 0==e?["H\u1ee7y \u0111\u01a1n","bg-danger"]:1==e?["Ch\u1edd x\xe1c nh\u1eadn","bg-primary"]:2==e?["Ho\xe0n th\xe0nh","bg-success"]:void 0}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-list"]],decls:18,vars:2,consts:[[1,"page-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","."],["aria-current","page",1,"breadcrumb-item","active"],[1,"row"],[1,"col-md-12","stretch-card"],[1,"card"],[1,"card-body"],[1,"card-title"],["routerLink","/storage/import/create","type","button",1,"btn","btn-primary"],[1,"table-responsive"],["class","d-flex justify-content-center",4,"ngIf"],["id","dataTableExample","class","table",4,"ngIf"],[1,"d-flex","justify-content-center"],["role","status",1,"spinner-border"],[1,"visually-hidden"],["id","dataTableExample",1,"table"],[4,"ngFor","ngForOf"],[3,"routerLink"],[2,"text-align","center"],["class","btn btn-success mx-2",3,"routerLink",4,"ngIf"],[1,"btn","btn-success","mx-2",3,"routerLink"]],template:function(e,n){1&e&&(t.TgZ(0,"nav",0)(1,"ol",1)(2,"li",2)(3,"a",3),t._uU(4,"Kho & T\u1ed3n"),t.qZA()(),t.TgZ(5,"li",4),t._uU(6,"Nh\u1eadp kho"),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"h6",9),t._uU(12,"Qu\u1ea3n l\xed nh\u1eadp kho"),t.qZA(),t.TgZ(13,"button",10),t._uU(14," Th\xeam m\u1edbi \u0111\u01a1n nh\u1eadp "),t.qZA(),t.TgZ(15,"div",11),t.YNc(16,tt,4,0,"div",12),t.YNc(17,ot,32,3,"table",13),t.qZA()()()()()),2&e&&(t.xp6(16),t.Q6J("ngIf",n.isLoading),t.xp6(1),t.Q6J("ngIf",!n.isLoading))},dependencies:[g.sg,g.O5,d.rH,d.yS,g.Ov]}),o})()},{path:"detail/:id",component:(()=>{class o{constructor(e,n,r){this._storage=e,this.route=n,this.router=r,this.storageConfirmForm=new s.cw({inventory_transaction_id:new s.NI(""),reason:new s.NI(""),note:new s.NI(""),partner_name:new s.NI(""),inventory_name:new s.NI(""),price:new s.NI(""),quantity:new s.NI(""),status:new s.NI("")}),this.isLoading=!1}ngOnInit(){this.route.paramMap.subscribe(e=>{const n=e.get("id");null!==n?(this.id=n,this.isLoading=!0,this._storage.getOne(n).subscribe(r=>{const a=r.payload[0];this.status=a.status,this.listStorage=r.payload[0].inventory_transaction_details,console.log(a),this.storageConfirmForm.patchValue(a),this.isLoading=!1},r=>{c().fire("L\u1ed7i!","C\xf3 l\u1ed7i x\u1ea3y ra khi g\u1eedi d\u1eef li\u1ec7u.","error")})):this.router.navigate(["../locations/list"])})}calculateTotal(e,n){return e*n}calculateTotalPrice(){let e=0;for(let n=0;n<this.listStorage.length;n++)e+=this.listStorage[n].price*this.listStorage[n].quantity;return e}onSubmit(){c().fire({title:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n nh\u1eadp kho?",text:"B\u1ea1n s\u1ebd kh\xf4ng th\u1ec3 ho\xe0n t\xe1c l\u1ea1i h\xe0nh \u0111\u1ed9ng n\xe0y!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"C\xf3, ti\u1ebfn h\xe0nh!"}).then(e=>{if(e.isConfirmed)if(this.storageConfirmForm.valid){const n={id:this.id,tranType:0};console.log(n),this._storage.update(n).subscribe(r=>{if(1==r.status)this.storageConfirmForm.reset(),this.showSuccessMessage("storage/import");else{console.log(r);const a=[];for(const p in r.meta.errors){const l=r.meta.errors[p];for(const m of l)a.push(`${m}`)}this.showNextMessage(a)}},r=>{console.log(r),c().fire("L\u1ed7i!","C\xf3 l\u1ed7i x\u1ea3y ra khi g\u1eedi d\u1eef li\u1ec7u.","error")})}else alert("Kh\xf4ng \u0111\u1ec3 tr\u1ed1ng")})}cancel(){console.log("\u0110\xe3 nh\u1ea5n n\xfat"),c().fire({title:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n h\u1ee7y \u0111\u01a1n nh\u1eadp kho?",text:"B\u1ea1n s\u1ebd kh\xf4ng th\u1ec3 ho\xe0n t\xe1c l\u1ea1i h\xe0nh \u0111\u1ed9ng n\xe0y!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"C\xf3, ti\u1ebfn h\xe0nh!"}).then(e=>{e.isConfirmed&&this._storage.cancel(this.id).subscribe(n=>{if(1==n.status)this.storageConfirmForm.reset(),this.showSuccessMessage("storage/import");else{console.log(n);const r=[];for(const a in n.meta.errors){const p=n.meta.errors[a];for(const l of p)r.push(`${l}`)}this.showNextMessage(r)}})})}showNextMessage(e){if(e.length>0){const n=e.shift();c().fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,title:"Th\u1ea5t b\u1ea1i!",text:n,icon:"error",timerProgressBar:!0,didOpen:r=>{r.addEventListener("mouseenter",c().stopTimer),r.addEventListener("mouseleave",c().resumeTimer)},didClose:()=>{this.showNextMessage(e)}})}}showSuccessMessage(e){c().fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,title:"Th\xe0nh c\xf4ng!",text:"C\u1eadp nh\u1eadt th\xe0nh c\xf4ng",icon:"success",timerProgressBar:!0,didOpen:n=>{n.addEventListener("mouseenter",c().stopTimer),n.addEventListener("mouseleave",c().resumeTimer)}}),this.router.navigate([`../${e}/list`])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_),t.Y36(d.gz),t.Y36(d.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-detail"]],decls:17,vars:4,consts:[[1,"page-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","."],["aria-current","page",1,"breadcrumb-item","active"],[1,"row"],[1,"col-md-12","grid-margin","stretch-card"],[1,"card"],[1,"card-body"],["style","text-align: center",4,"ngIf"],[1,"card-title"],["class","loadingcustomcss",4,"ngIf"],["class","forms-sample",3,"formGroup","ngSubmit",4,"ngIf"],[2,"text-align","center"],[1,"loadingcustomcss"],["type","button","disabled","",1,"btn","btn-primary"],["role","status","aria-hidden","true",1,"spinner-grow","spinner-grow-sm"],[1,"forms-sample",3,"formGroup","ngSubmit"],[1,"mb-3"],["for","exampleInputUsername1",1,"form-label"],[1,"text-danger"],["type","text","id","exampleInputUsername1","formControlName","inventory_transaction_id","autocomplete","off","placeholder","Nh\u1eadp m\xe3 \u0111\u01a1n",1,"form-control",3,"readonly"],["type","text","id","exampleInputUsername1","formControlName","reason","autocomplete","off","placeholder","Nh\u1eadp l\xfd do nh\u1eadp",1,"form-control",3,"readonly"],["for","exampleFormControlTextarea1",1,"form-label"],["id","exampleFormControlTextarea1","formControlName","note","rows","5",1,"form-control",3,"readonly"],["type","text","id","exampleInputUsername1","formControlName","partner_name","autocomplete","off",1,"form-control",3,"readonly"],[1,"col-sm-6"],["type","text","id","exampleInputUsername1","formControlName","inventory_name","autocomplete","off",1,"form-control",3,"readonly"],[1,"table-responsive"],[1,"table","table-hover"],[4,"ngIf"],["type","submit","class","btn btn-primary me-2",3,"disabled",4,"ngIf"],["type","button","class","btn btn-danger me-2",3,"disabled","click",4,"ngIf"],["type","button","class","btn btn-primary me-2",3,"disabled",4,"ngIf"],["routerLink","/storage/import/list",1,"btn","btn-secondary"],[4,"ngFor","ngForOf"],[2,"color","red"],["colspan","5",2,"text-align","right"],["type","submit",1,"btn","btn-primary","me-2",3,"disabled"],["type","button",1,"btn","btn-danger","me-2",3,"disabled","click"],["type","button",1,"btn","btn-primary","me-2",3,"disabled"]],template:function(e,n){1&e&&(t.TgZ(0,"nav",0)(1,"ol",1)(2,"li",2)(3,"a",3),t._uU(4,"Danh m\u1ee5c"),t.qZA()(),t.TgZ(5,"li",4),t._uU(6,"X\xe1c nh\u1eadn \u0111\u01a1n kho"),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8),t.YNc(11,it,2,0,"h2",9),t.YNc(12,at,2,0,"h2",9),t.TgZ(13,"h6",10),t._uU(14,"Th\xf4ng tin c\u01a1 b\u1ea3n"),t.qZA(),t.YNc(15,st,4,0,"div",11),t.YNc(16,dt,63,11,"form",12),t.qZA()()()()),2&e&&(t.xp6(11),t.Q6J("ngIf",1==n.status),t.xp6(1),t.Q6J("ngIf",1!=n.status),t.xp6(3),t.Q6J("ngIf",n.isLoading),t.xp6(1),t.Q6J("ngIf",!n.isLoading))},dependencies:[g.sg,g.O5,d.rH,d.yS,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,g.H9]}),o})()},{path:"create",component:X}]}];let ht=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.ez,d.Bz.forChild(gt),v.xD,E.L,y.dD,U.bB,q.bQ.forRoot({animation:150,ghostClass:"bg-light"}),N.ii.forRoot(),s.UX,h.A0,s.u5,I.yI.forRoot({validation:!0}),f.ZS]}),o})()}}]);