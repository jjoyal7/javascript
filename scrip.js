document.head.innerHTML="<title>HOME</title>";

// document.body.innerHTML='<p>Hello Friends</p>'
// document.body.innerText +="How are U"

// let cont=document.createElement('h1');
// document.body.append(cont);
// cont.textContent='Welcom to the class';
// cont.style.color='blue';
// cont.style.fontStyle='italic';

//  creaye a parent  //

// let div=document.createElement('div');
// document.body.append(div);
// div.style.width='150px';
// div.style.height='150px';
// div.style.background='brown'


// create a parent with child div combained with para   //

// let para=document.createElement('p');
// div.appendChild(para);
// para.textContent='Goody Bye';
// para.style.padding='40px';
// para.style.color='yellow';
// para.style.fontSize='30px';

//   to add attribute and link attribute   // 


// let link=document.createElement('a');
// document.body.append(link);
// link.textContent='Hello There';
// link.setAttribute('href','  https://www.google.com/search?q=bootstrap&oq=&gs_lcrp=EgZjaHJvbWUqCQgCECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkyMzg1ajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8');
// console.log(link.getAttribute('href',));

//     to remove attribute    //

// link.removeAttribute('href');

// shortcut fo to set attribute to give link and remove tha link of the attribute  //

// link.href='#'
// link.remove();

//.............................//

//     to link image //

// let img=document.createElement('img');
// document.body.append(img);
// img.src='data:image/jpeg;base64,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';
// img.style.width='300px';
// img.style.padding='60px';
// img.style.borderRadius='300px';



//   using prompt with //


// let a=prompt('Firast Name');
// let b=prompt('Last Name');

// document.write(parseInt(a)+parseInt(b));




//     using id //

// let input=document.createElement('p')

// input.id=('username');
// document.body.append(input);
// let a=document.getElementById('username');
// a.textContent='This is content is used by ID'
// document.body.append(a);
// a.style.color='green';
// a.style.fontSize='50px';
// a.style.fontStyle='italic';




//    using class (is a set of collection )  //

// let elements=document.getElementsByClassName('highlight');
// console.log(elements);

// let paranew=document.createElement('p');
// paranew.className='highlight';
// document.body.append(paranew);
// paranew.textcontent='abcdefghijklmopqrstuvwxyz'


//    quory selector  //

// let query= document.querySelector('h1');
// query.style.color='brown';

// query selector all //

// let all= document.querySelectorAll('p');
// console.log(all);
 
// for(let i=0;i<all.length;i++){
//     all[i].style.color='green'
// }


// let q= document.querySelector('div');
// q.style.background='bisque';


//   tag name  
//  text content & inner.text ////

// let tag=document.getElementsByClassName('ol');
// console.log(tag[0].textContent);
// console.log(tag[0].innerText);





