function r(r,t){if(r.closest)return r.closest(t);for(var u=r;u;){if(n(u,t))return u;u=u.parentElement}return null}function n(r,n){return(r.matches||r.webkitMatchesSelector||r.msMatchesSelector).call(r,n)}export{r as c,n as m}