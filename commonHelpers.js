import{a as f,i as u,S}from"./assets/vendor-BPs2jpei.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();f.defaults.baseURL="https://pixabay.com/api/";async function p(r,a){try{return(await f.get("",{params:{page:a,per_page:15,key:"45151719-ad1ed1cd151d376d4bdd12a44",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data}catch(s){console.log(s)}}function h({hits:r}){return r.map(({webformatURL:a,largeImageURL:s,tags:i,likes:e,views:t,comments:l,downloads:q})=>`<li class="gallery-item">
	    <a class="gallery-link" href="${s}">
		<img 
		class="gallery-image" 
		src="${a}" 
		alt="${i}"
		/>
	    </a>
        <ul class="gallery-inner-list">
        <li class="gallery-inner-item">
        <p class="gallery-inner-name">Likes</p>
        <p class="gallery-inner-value">${e}</p>
        </li>
        <li class="gallery-inner-item">
        <p class="gallery-inner-name">Views</p>
        <p class="gallery-inner-value">${t}</p>
        </li>
        <li class="gallery-inner-item">
        <p class="gallery-inner-name">Comments</p>
        <p class="gallery-inner-value">${l}</p>
        </li>
        <li class="gallery-inner-item">
        <p class="gallery-inner-name">Downloads</p>
        <p class="gallery-inner-value">${q}</p>
        </li>
        </ul>
   </li>`).join("")}const P=document.querySelector(".form"),d=document.querySelector(".gallery"),L=document.querySelector(".loader"),m=document.querySelector(".load");P.addEventListener("submit",$);m.addEventListener("click",C);let n=1,c=null;async function $(r){r.preventDefault(),d.innerHTML="",n=1,g(),o();const a=r.currentTarget;if(c=a.elements.query.value.trim(),c===""){y(),u.info({message:"Please enter your request"});return}g();try{const s=await p(c,n);s.hits.length||(u.error({message:"Sorry, there are no images matching your search query. Please try again!"}),o()),d.innerHTML=h(s),b(),w.refresh(),s.totalHits>15?v():o()}catch(s){console.log(s)}finally{y(),a.reset()}}async function C(){n+=1,g(),o();try{const r=await p(c,n);if(d.insertAdjacentHTML("beforeend",h(r)),b(),w.refresh(),Math.ceil(r.totalHits/15)===n){o(),u.info({message:"We're sorry, but you've reached the end of search results"});return}v()}catch(r){console.log(r)}finally{y()}}function v(){m.classList.remove("is-hidden")}function o(){m.classList.add("is-hidden")}function g(){L.classList.remove("is-hidden")}function y(){L.classList.add("is-hidden")}function b(){const r=document.querySelector(".gallery-item");window.scrollBy({top:r.getBoundingClientRect().height*2,behavior:"smooth"})}let w=new S(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});u.settings({message:"Please enter your request",class:"izi-toast",position:"topRight",backgroundColor:"#ef4040",messageColor:"white",messageSize:"16",theme:"dark"});
//# sourceMappingURL=commonHelpers.js.map
