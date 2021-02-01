

const showitem = ()=>{
        
    const target1 = document.querySelector('.show1');
    const target2 = document.querySelector('.show2');
    const targetcircle1 = document.querySelector('.showcircle1');
    const target3 = document.querySelector('.show3');
    const target4 = document.querySelector('.show4');
    const target5 = document.querySelector('.show5');
    const target6 = document.querySelector('.show6');
    const target7 = document.querySelector('.show7');
    const target8 = document.querySelector('.show8');
    const target9 = document.querySelector('.show9');
    const target10 = document.querySelector('.show10');
    const target11 = document.querySelector('.show11');
    const target12 = document.querySelector('.show12');
    const target13 = document.querySelector('.show13');
    const target14 = document.querySelector('.tendencia-work-box');
    const target15 = document.querySelector('.tendencia-work-info');
    const target16 = document.querySelector('.slider');

    let options = {
        root: null,
        rootMargin: '-50px',
        threshold: .13
    };

/* --------------------INTRO-------------------- */

    let appearOnScroll = new IntersectionObserver(
        function(entries, appearOnScroll){
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    target1.classList.add('showtext');
                }}); }, options);

    let appearOnScroll2 = new IntersectionObserver(
        function(entries, appearOnScroll){
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    target2.classList.add('showtext2');
                } }); }, options);
    
    let appearOnScrollcircle1 = new IntersectionObserver(
        function(entries, appearOnScroll){
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    targetcircle1.classList.add('showtextcircle');
                } }); }, options);
    
/* --------------------TRENDS-------------------- */

    let appearOnScroll3 = new IntersectionObserver(
        function(entries, appearOnScroll){
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    target3.classList.add('showtext2');
                } }); }, options);

    let appearOnScroll4 = new IntersectionObserver(
        function(entries, appearOnScroll){
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    target4.classList.add('showtext2b');
                }}); }, options);

    let appearOnScroll5 = new IntersectionObserver(
        function(entries, appearOnScroll){
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    target5.classList.add('showtext3');
                } }); }, options);

    let appearOnScroll6 = new IntersectionObserver(
        function(entries, appearOnScroll){
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    target6.classList.add('showtext2b');
                } }); }, options);

/* --------------------ABOUTME-------------------- */

    let appearOnScroll7 = new IntersectionObserver(
        function(entries, appearOnScroll){
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    target7.classList.add('showtext');
                } }); }, options);

    let appearOnScroll8 = new IntersectionObserver(
        function(entries, appearOnScroll){
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    target8.classList.add('showtext2');
                }  }); }, options);

    let appearOnScroll9 = new IntersectionObserver(
        function(entries, appearOnScroll){
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    target9.classList.add('showtext3');
                }  }); }, options);


/* --------------------CONTACT-------------------- */


    let appearOnScroll10 = new IntersectionObserver(
        function(entries, appearOnScroll){
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    target10.classList.add('showtext');
                }  }); }, options);

    let appearOnScroll11 = new IntersectionObserver(
        function(entries, appearOnScroll){
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    target11.classList.add('showcirclebefore');
                } }); }, options);
    
    let appearOnScroll12 = new IntersectionObserver(
        function(entries, appearOnScroll){
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    target12.classList.add('showtext');
                }  }); }, options);

    let appearOnScroll13 = new IntersectionObserver(
        function(entries, appearOnScroll){
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    target13.classList.add('showtext2');
                } }); }, options);


    let appearOnScroll14 = new IntersectionObserver(
        function(entries, appearOnScroll){
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    target14.classList.add('showtext');
                }  }); }, options);

    let appearOnScroll15 = new IntersectionObserver(
        function(entries, appearOnScroll){
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    target15.classList.add('showtext2');
                } }); }, options);

    let appearOnScroll16 = new IntersectionObserver(
        function(entries, appearOnScroll){
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    target16.classList.add('showtext2');
                } }); }, options);

    


        appearOnScroll.observe(target1);
        appearOnScroll2.observe(target2);
        appearOnScrollcircle1.observe(targetcircle1);
        appearOnScroll3.observe(target3);
        appearOnScroll4.observe(target4);
        appearOnScroll5.observe(target5);
        appearOnScroll6.observe(target6);
        appearOnScroll7.observe(target7);
        appearOnScroll8.observe(target8);
        appearOnScroll9.observe(target9);
        appearOnScroll10.observe(target10);
        appearOnScroll11.observe(target11); 
        appearOnScroll12.observe(target12);
        appearOnScroll13.observe(target13); 
        appearOnScroll14.observe(target14);
        appearOnScroll15.observe(target15); 
        appearOnScroll16.observe(target16); 


}    

     window.addEventListener("load", showitem);