<script>
    const frontEndDev = {
        title: "Frontend Development",
        details: 'Our front-end development services are crafted to transform your ideas into visually stunning, intuitive, and responsive digital solutions.We understand the pivotal role that front-end development plays in captivating users and driving engagement. Our team of skilled developers specializes in crafting pixel-perfect designs and seamless interactions across various platforms and devices.',
        imageUrl:'assets/icons/frontEndDevTitleImage.png'
    }
    const uiUx = {
        title: "UI/UX Development",
        details: 'Our UI/UX development services are driven by a passion for crafting intuitive,visually appealing, and user-centric interfaces that resonate with your audience.We understand the pivotal role that UI/UX plays in engaging users and driving success. Our team of skilled designers and developers collaborate to blend creativity with technical expertise.',
        imageUrl:'assets/icons/uiTitleImage.png'
    }
    const backEndDev = {
        title: "Backend Development",
        details: 'Our backend development services are tailored to create scalable,secure,and high-performance solutions that power your digital ecosystem.We understand the backbone of every successful application lies in its backend infrastructure. Our team of experienced backend developers specializes in building reliable, efficient, and scalable',
        imageUrl:'assets/icons/backendTitleImage.png'
    }
    const mobileAppDev = {
        title: "Mobile App Development",
        details: 'Demo data for mobile app dev.',
        imageUrl:'assets/icons/mobileAppDevTitleImage.png'
    }
    const productManagement = {
        title: "Product Management",
        details: 'Demo data for product management.',
        imageUrl:'assets/icons/prodManagementTitleImage.png'

    }
    const projectManagement = {
        title: "Project Management",
        details: 'Demo data for project management.',
        imageUrl:'assets/icons/projManagementTitleImage.png'

    }
    const platformDevelopment = {
        title: "Platform Development",
        details: 'Demo data for platform development.',
        imageUrl:'assets/icons/platformDevTitleImage.png'
    }
    const devOpsInfra = {
        title: "DevOps + Infrastructure",
        details: 'Demo data for dev ops infrastructure.',
        imageUrl:'assets/icons/devOpsTitleImage.png'

    }

    let expertiseData = "Demo data for front end development.";
    let expertiseTitle = "Frontend Development"
    let imageUrl ="assets/icons/frontEndDevTitleImage.png"
    function loadExpertise(data, title,titleImage) {
        expertiseData = data;
        expertiseTitle = title;
        imageUrl = titleImage
    }
    let setActive = 'frontEnd';


    function goToExpertiseCard (event) {
        var width = window.innerWidth
        if (width < 768){
            let pageBottom = document.querySelector("#expertise-card")
            pageBottom.scrollIntoView()
        }

    } 
</script>
<div class="container-fluid">
    <div class="row d-flex align-items-center">
        <div class="col-md-4">
            <div class="row">
                <div class="ms-2 heading-2-regular fs-1">
                    Our Expertise
                </div>
                <div class="ms-2 heading-3-medium fs-5 mt-2 text-color-secondary">
                    Our Team Has Years Of Experience In....
                </div>
            </div>
            <div class="row mt-3 fs-5">
                <div class="point ms-2 show d-flex align-items-center mt-2" href="#expertise-card"
                on:click={goToExpertiseCard} on:click={()=>
                    loadExpertise(frontEndDev.details,frontEndDev.title,frontEndDev.imageUrl)}>
                    <span class={setActive === 'frontEnd' ? '' : 'hide'}>
                        <i class="fa-solid fa-arrow-right text-danger me-2"></i>
                    </span>
                    <span class="body-1-regular text-color-secondary" id="expertise"
                    class:active={setActive === 'frontEnd' ? 'activePointer' : ''}  on:click={()=> (setActive = 'frontEnd')} >Frontend
                        Development</span>
                </div>
                <div class=" point ms-2 show d-flex align-items-center mt-2"  href="#expertise-card"
                on:click={goToExpertiseCard}
                on:click={()=>
                    loadExpertise(uiUx.details,uiUx.title,uiUx.imageUrl)}>
                    <span class={setActive === 'ui' ? '' : 'hide'}><i class="fa-solid fa-arrow-right me-2 text-danger"></i></span>
                    <span class="body-1-regular text-color-secondary" id="expertise" 
                    class:active={setActive==='ui'  ? 'activePointer' : ''}
                        on:click={()=> (setActive = 'ui')}>UI/UX Design</span>
                </div>
                <div class="point ms-2 show d-flex align-items-center mt-2" href="#expertise-card"
                on:click={goToExpertiseCard} on:click={()=>
                    loadExpertise(backEndDev.details,backEndDev.title,backEndDev.imageUrl)}>
                    <span class={setActive === 'backEnd' ? '' : 'hide'}><i class="fa-solid fa-arrow-right me-2 text-danger"></i></span>
                    <span class="body-1-regular text-color-secondary" id="expertise" 
                    class:active={setActive==='backEnd'  ? 'activePointer' : ''}
                        on:click={()=> (setActive = 'backEnd')}>Backend Development</span>
                </div>
                <div class="point ms-2 show d-flex align-items-center mt-2" href="#expertise-card"
                on:click={goToExpertiseCard} on:click={()=>
                    loadExpertise(mobileAppDev.details,mobileAppDev.title,mobileAppDev.imageUrl)}>
                    <span class={setActive === 'mobileApp' ? '' : 'hide'}><i class="fa-solid fa-arrow-right me-2 text-danger"></i></span>
                    <span class="body-1-regular text-color-secondary" id="expertise" 
                    class:active={setActive==='mobileApp'  ? 'activePointer' : ''}
                        on:click={()=> (setActive = 'mobileApp')}>Mobile App Development</span>
                </div>
                <div class="point ms-2 show d-flex align-items-center mt-2" href="#expertise-card"
                on:click={goToExpertiseCard} on:click={()=>
                    loadExpertise(productManagement.details,productManagement.title,productManagement.imageUrl)}>
                    <span class={setActive === 'product' ? '' : 'hide'}><i class="fa-solid fa-arrow-right me-2 text-danger"></i></span>
                    <span class="body-1-regular text-color-secondary" id="expertise" 
                    class:active={setActive==='product'  ? 'activePointer' : ''}
                        on:click={()=> (setActive = 'product')}>Product Management</span>
                </div>
                <div class="point ms-2 show d-flex align-items-center mt-2" href="#expertise-card"
                on:click={goToExpertiseCard} on:click={()=>
                    loadExpertise(projectManagement.details,projectManagement.title,projectManagement.imageUrl)}>
                    <span class={setActive === 'project' ? '' : 'hide'}><i class="fa-solid fa-arrow-right me-2 text-danger"></i></span>
                    <span class="body-1-regular text-color-secondary" id="expertise" 
                    class:active={setActive==='project'  ? 'activePointer' : ''}
                        on:click={()=> (setActive = 'project')}>Project Management</span>
                </div>
                <div class="point ms-2 show d-flex align-items-center mt-2" href="#expertise-card"
                on:click={goToExpertiseCard} on:click={()=>
                    loadExpertise(platformDevelopment.details,platformDevelopment.title,platformDevelopment.imageUrl)}>
                    <span class={setActive === 'platform' ? '' : 'hide'}><i class="fa-solid fa-arrow-right me-2 text-danger"></i></span>
                    <span class="body-1-regular text-color-secondary" id="expertise" 
                    class:active={setActive==='platform'  ? 'activePointer' : ''}
                        on:click={()=> (setActive = 'platform')}>Platform Development</span>
                </div>
                <div class="point ms-2 show d-flex align-items-center mt-2" href="#expertise-card"
                on:click={goToExpertiseCard} on:click={()=>
                    loadExpertise(devOpsInfra.details,devOpsInfra.title,devOpsInfra.imageUrl)}>
                    <span class={setActive === 'devOps' ? '' : 'hide'}><i class="fa-solid fa-arrow-right me-2 text-danger"></i></span>
                    <span class="body-1-regular text-color-secondary" id="expertise" 
                    class:active={setActive==='devOps'  ? 'activePointer' : ''}
                        on:click={()=> (setActive = 'devOps')}>DevOps + Infrastructure</span>
                </div>
            </div>
        </div>
        <div class="col-md-8 mt hide-nav">
            <div class="row web-dev mt">
                <img alt="Expertise" src="assets/contentCard.png" />
                <div class="col-md-12 centered">
                    <div class="row mt" >
                        <div class="col-md-12 overlay mb-2">
                            <span class="ms-4 ps-2 heading-3-regular fs-3">
                                <img class="shake-img icon-width" alt="Expertise" src={imageUrl} /></span>
                        </div>
                        <div class="col-md-12 overlay">
                            <span class="ms-4 ps-2 heading-3-regular fs-3 fs-for-card">{expertiseTitle}</span>
                        </div>
                        <div class="col-md-7 offset-md-3 footer-fontsize">
                            <span class="fs-6">{expertiseData}</span>
                        </div>
                        <!-- <span class="footer-fontsize">{expertiseData}</span> -->
                        <!-- <div class="col-md-12 overlay">
                            <p class="body-1-regular ms-4 ps-4 fs-6 content-fontsize">
                                We have 10+ years of experience in developing web
                            </p>
                            <p class="body-1-regular ms-4 ps-4 content-fontsize">
                                applications that help elevate user's experience
                            </p>
                        </div>
                        <div class="col-md-12 overlay mt-4 footer-fontsize">
                            <p class="body-1-regular content-fontsize">
                                - Front-end in React,Angular,Vue,Eleventy,++
                            </p>
                        </div>
                        <div class="col-md-12 overlay">
                            <p class="body-1-regular content-fontsize">
                                - Backend in GraphQl , ReST APIs,Node.js,++
                            </p>
                        </div>
                        <div class="col-md-12 overlay">
                            <p class="body-1-regular content-fontsize">
                                - Designing and buliding complex applications,
                            <p class="body-1-regular ms-2 content-fontsize">
                                Microservices,Serverless,Distrbuted Services,++
                            </p>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-8 display-replacement-card" >
            <div class="row mt">
                <div class="col-md-12">
                    <div class="row mt" id="expertise-card">
                        <div class="col-md-12 mt mt-4 d-flex justify-content-center">
                            <span class="ms-4 ps-2 heading-3-regular fs-3">
                                <img class="shake-img icon-width" alt="Expertise" src={imageUrl} /></span>
                        </div>
                        <div class="col-md-12 d-flex justify-content-center ">
                            <span class=" heading-3-regular fs-3 fs-for-card">{expertiseTitle}</span>
                        </div>
                        <div class="col-md-12  d-flex justify-content-center ">
                            <span class="fs-6">{expertiseData}</span>
                        </div>
                        <div class="col-md-12  ">
                            <span class="body-1-regular  fs-6 ">
                                We have 10+ years of experience in developing web
                                applications that help elevate user's experience
                            </span>
                        </div>
                        <div class="col-md-12 ">
                            <span class="body-1-regular fs-6 m-0">
                                - Front-end in React,Angular,Vue,Eleventy,++
                            </span>
                        </div>
                        <div class="col-md-12 ">
                            <span class="body-1-regular fs-6 m-0">
                                - Backend in GraphQl , ReST APIs,Node.js,++
                            </span>
                        </div>
                        <div class="col-md-12 pb-4 ">
                            <span class="body-1-regular fs-6">
                                - Designing and buliding complex applications,
                                  Microservices,Serverless,Distrbuted Services,++
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-8 mt fade-red-bg display-expertise">
            <div class="row mt">
                <div class="col-md-12">
                    <div class="row mt" id="expertise-card">
                        <div class="col-md-12 mt mb-2 d-flex justify-content-center">
                            <span class="ms-4 ps-2 heading-3-regular fs-3">
                                <img class="shake-img icon-width" alt="Expertise" src={imageUrl} /></span>
                        </div>
                        <div class="col-md-12 d-flex justify-content-center ">
                            <span class=" heading-3-regular fs-3 fs-for-card">{expertiseTitle}</span>
                        </div>
                        <div class="col-md-12 mt d-flex justify-content-center ">
                            <span class="fs-6">{expertiseData}</span>
                        </div>
                        <div class="col-md-12 d-flex justify-content-center ">
                            <span class="body-1-regular  fs-6 ">
                                We have 10+ years of experience in developing web
                                applications that help elevate user's experience
                            </span>
                        </div>
                        <div class="col-md-12 d-flex justify-content-center  ">
                            <p class="body-1-regular fs-6">
                                - Front-end in React,Angular,Vue,Eleventy,++
                            </p>
                        </div>
                        <div class="col-md-12 d-flex justify-content-center ">
                            <p class="body-1-regular fs-6">
                                - Backend in GraphQl , ReST APIs,Node.js,++
                            </p>
                        </div>
                        <div class="col-md-12 d-flex justify-content-center ">
                            <p class="body-1-regular fs-6">
                                - Designing and buliding complex applications,
                                  Microservices,Serverless,Distrbuted Services,++
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    </div>
</div>

