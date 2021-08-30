var styles = {
    menu : {
        'display': 'flex',
        'transition':'all ease-in-out 1s'
    },
    sidebar: {
        'left': '-20%',
        'transition':'all ease-in-out 0.5s'
    },
    tables: {
        "width": '100%',
        "margin-left": 0,
        "transition": 'all ease-in-out 0.5s'
    },
    headings: {
        "margin-left": '0',
        "transition": 'all ease-in-out 0.5s'
    },
    footnote: {
        'width': '100%',
        "transition": 'all ease-in-out 0.5s'
   }
};
var stylesOpen = {
    menu : {
        'display': 'none',
        'transition':'all ease-in-out 1s'
    },
    sidebar: {
        'left': '0',
        'transition':'all ease-in-out 0.5s'
    },
    tables: {
        "width": '80%',
        "margin-left": '20%',
        "transition": 'all ease-in-out 0.5s'
    },
    headings: {
        "margin-left": '20%',
        "transition": 'all ease-in-out 0.5s'
    },
    footnote: {
        'width': '80%',
        "transition": 'all ease-in-out 0.5s'
   }
};

const closeSidebar = () => {
    var sidebar = document.getElementById('sidebar');
    Object.assign(sidebar.style, styles.sidebar);
    var menu = document.getElementById('hamburgerMenu');
    Object.assign(menu.style, styles.menu);
    var footnote = document.getElementById('subject-footnote')
    Object.assign (footnote.style, styles.footnote);
    var IAs = document.getElementById('IAs');
    Object.assign(IAs.style, styles.tables);
    var resources = document.getElementById('resources');
    Object.assign(resources.style, styles.tables);
    var notes = document.getElementById('notes');
    Object.assign(notes.style, styles.tables);
    var IAHeading = document.getElementById('IA-heading');
    Object.assign(IAHeading.style, styles.headings);
    var resourcesHeading = document.getElementById('resources-heading');
    Object.assign(resourcesHeading.style, styles.headings);
    var notesHeading = document.getElementById('notes-heading');
    Object.assign(notesHeading.style, styles.headings);
}
const showSidebar = () => {
    var sidebar = document.getElementById('sidebar');
    Object.assign(sidebar.style, stylesOpen.sidebar);
    var menu = document.getElementById('hamburgerMenu');
    Object.assign(menu.style, stylesOpen.menu);
    var footnote = document.getElementById('subject-footnote')
    Object.assign (footnote.style, stylesOpen.footnote);
    var IAs = document.getElementById('IAs');
    Object.assign(IAs.style, stylesOpen.tables);
    var resources = document.getElementById('resources');
    Object.assign(resources.style, stylesOpen.tables);
    var notes = document.getElementById('notes');
    Object.assign(notes.style, stylesOpen.tables);
    var IAHeading = document.getElementById('IA-heading');
    Object.assign(IAHeading.style, stylesOpen.headings);
    var resourcesHeading = document.getElementById('resources-heading');
    Object.assign(resourcesHeading.style, stylesOpen.headings);
    var notesHeading = document.getElementById('notes-heading');
    Object.assign(notesHeading.style, stylesOpen.headings);
}

// toggling mobile sidebar on top 

function showMobileSidebar() {
    var body = document.getElementById('content');
    body.style = "transform: translateX(-70%);transition: all 0.3s ease-in-out;"
    var footer = document.getElementById('footer');
    footer.style = "transform: translateX(-70%);transition: all 0.3s ease-in-out;"
    var mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.style = "left: 30%;box-shadow: rgb(107, 107, 107) -2px 6px 8px;transition: all 0.3s ease-in-out;";
    var hamburgerMenu = document.getElementById('openButton');
    hamburgerMenu.style = "opacity:0;transition: all 0.2s ease-in-out;";
    var closeButton = document.getElementById('closeButton');
    closeButton.style = "opacity:1; position: fixed; left:85%; top:2%; font-size: 150%;background-color: white;box-shadow: none;transition: all 0.2s ease-in-out;";
}

const closeMobileMenu = () => {
    var body = document.getElementById('content');
    body.style = "transform: translateX(0%);transition: all 0.3s ease-in-out;"
    var footer = document.getElementById('footer');
    footer.style = "transform: translateX(0%);transition: all 0.3s ease-in-out;"
    var mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.style = "left: 100%;transition: all 0.3s ease-in-out;";
    var hamburgerMenu = document.getElementById('openButton');
    hamburgerMenu.style = "opacity:1;font-size: 100%;background-color: white;box-shadow: none;opacity:1; position: fixed; left:85%; top:2%;border: none;transition: all 0.2s ease-in-out;";
    var closeButton = document.getElementById('closeButton');
    closeButton.style = "opacity:0;transition: all 0.2s ease-in-out;";
}

// mobile sidebar navigation functionality 
var languageLinksVisible = false;
var foreignLinksVisible = false;
var socialLinksVisible = false;
var scienceLinksVisible = false;
var mathLinksVisible = false;
var coreLinksVisible = false;
const toggleLanguageLinks = () => {
    var languageLinks = document.getElementById('englishLinks');
    var foreignLinks = document.getElementById('foreignLinks');
    var socialLinks = document.getElementById('socialLinks');
    var scienceLinks = document.getElementById('scienceLinks');
    var mathLinks = document.getElementById('mathLinks');
    var coreLinks = document.getElementById('coreLinks');
    languageLinksVisible = !languageLinksVisible;
    foreignLinksVisible = false;
    socialLinksVisible = false;
    scienceLinksVisible = false;
    mathLinksVisible = false;
    coreLinksVisible = false;
    languageLinksVisible? languageLinks.style = "display: flex" : languageLinks.style = "display: none" ;
    foreignLinks.style = "display: none" ;
    socialLinks.style = "display: none" ;
    scienceLinks.style = "display: none" ;
    mathLinks.style = "display: none" ;
    coreLinks.style = "display: none" ;
    var languageHeader = document.getElementById('languageSideBarButton');
    languageHeader.style = languageLinksVisible? "background-color: rgb(248,248,248);text-align: left" : "background-color: white;text-align: left";
    var foreignHeader = document.getElementById('foreignSideBarButton');
    foreignHeader.style = "background-color: white;text-align: left";
    var socialHeader = document.getElementById('socialSideBarButton');
    socialHeader.style = "background-color: white;text-align: left";
    var scienceHeader = document.getElementById('scienceSideBarButton');
    scienceHeader.style = "background-color: white;text-align: left";
    var mathHeader = document.getElementById('mathSideBarButton');
    mathHeader.style = "background-color: white;text-align: left";
    var coreHeader = document.getElementById('coreSideBarButton');
    coreHeader.style = "background-color: white;text-align: left";
}
const toggleForeignLinks = () => {
    var languageLinks = document.getElementById('englishLinks');
    var foreignLinks = document.getElementById('foreignLinks');
    var socialLinks = document.getElementById('socialLinks');
    var scienceLinks = document.getElementById('scienceLinks');
    var mathLinks = document.getElementById('mathLinks');
    var coreLinks = document.getElementById('coreLinks');
    foreignLinksVisible = !foreignLinksVisible;
    languageLinksVisible = false;
    socialLinksVisible = false;
    scienceLinksVisible = false;
    mathLinksVisible = false;
    coreLinksVisible = false;
    foreignLinksVisible? foreignLinks.style = "display: flex" : foreignLinks.style = "display: none" ;
    languageLinks.style = "display: none" ;
    socialLinks.style = "display: none" ;
    scienceLinks.style = "display: none" ;
    mathLinks.style = "display: none" ;
    coreLinks.style = "display: none" ;
    var foreignHeader = document.getElementById('foreignSideBarButton');
    foreignHeader.style = foreignLinksVisible? "background-color: rgb(248,248,248);text-align: left" : "background-color: white;text-align: left";
    var languageHeader = document.getElementById('languageSideBarButton');
    languageHeader.style = "background-color: white;text-align: left";
    var socialHeader = document.getElementById('socialSideBarButton');
    socialHeader.style = "background-color: white;text-align: left";
    var scienceHeader = document.getElementById('scienceSideBarButton');
    scienceHeader.style = "background-color: white;text-align: left";
    var mathHeader = document.getElementById('mathSideBarButton');
    mathHeader.style = "background-color: white;text-align: left";
    var coreHeader = document.getElementById('coreSideBarButton');
    coreHeader.style = "background-color: white;text-align: left";
}
const toggleSocialLinks = () => {
    var languageLinks = document.getElementById('englishLinks');
    var foreignLinks = document.getElementById('foreignLinks');
    var socialLinks = document.getElementById('socialLinks');
    var scienceLinks = document.getElementById('scienceLinks');
    var mathLinks = document.getElementById('mathLinks');
    var coreLinks = document.getElementById('coreLinks');
    socialLinksVisible = !socialLinksVisible;
    languageLinksVisible = false;
    foreignLinksVisible = false;
    scienceLinksVisible = false;
    mathLinksVisible = false;
    coreLinksVisible = false;
    socialLinksVisible? socialLinks.style = "display: flex" : socialLinks.style = "display: none" ;
    languageLinks.style = "display: none" ;
    foreignLinks.style = "display: none" ;
    scienceLinks.style = "display: none" ;
    mathLinks.style = "display: none" ;
    coreLinks.style = "display: none" ;
    var languageHeader = document.getElementById('languageSideBarButton');
    languageHeader.style = "background-color: white;text-align: left";
    var foreignHeader = document.getElementById('foreignSideBarButton');
    foreignHeader.style = "background-color: white;text-align: left";
    var socialHeader = document.getElementById('socialSideBarButton');
    socialHeader.style = socialLinksVisible? "background-color: rgb(248,248,248); text-align: left" : "background-color: white;text-align: left";
    var scienceHeader = document.getElementById('scienceSideBarButton');
    scienceHeader.style = "background-color: white;text-align: left";
    var mathHeader = document.getElementById('mathSideBarButton');
    mathHeader.style = "background-color: white;text-align: left";
    var coreHeader = document.getElementById('coreSideBarButton');
    coreHeader.style = "background-color: white;text-align: left";
}
const toggleScienceLinks = () => {
    var languageLinks = document.getElementById('englishLinks');
    var foreignLinks = document.getElementById('foreignLinks');
    var socialLinks = document.getElementById('socialLinks');
    var scienceLinks = document.getElementById('scienceLinks');
    var mathLinks = document.getElementById('mathLinks');
    var coreLinks = document.getElementById('coreLinks');
    scienceLinksVisible = !scienceLinksVisible;
    languageLinksVisible = false;
    foreignLinksVisible = false;
    socialLinksVisible = false;
    mathLinksVisible = false;
    coreLinksVisible = false;
    scienceLinksVisible? scienceLinks.style = "display: flex" : scienceLinks.style = "display: none" ;
    languageLinks.style = "display: none" ;
    foreignLinks.style = "display: none" ;
    socialLinks.style = "display: none" ;
    mathLinks.style = "display: none" ;
    coreLinks.style = "display: none" ;
    var languageHeader = document.getElementById('languageSideBarButton');
    languageHeader.style = "background-color: white;text-align: left";
    var foreignHeader = document.getElementById('foreignSideBarButton');
    foreignHeader.style = "background-color: white;text-align: left";
    var socialHeader = document.getElementById('socialSideBarButton');
    socialHeader.style = "background-color: white;text-align: left";
    var scienceHeader = document.getElementById('scienceSideBarButton');
    scienceHeader.style = scienceLinksVisible? "background-color: rgb(248,248,248); text-align: left" :"background-color: white;text-align: left";
    var mathHeader = document.getElementById('mathSideBarButton');
    mathHeader.style = "background-color: white;text-align: left";
    var coreHeader = document.getElementById('coreSideBarButton');
    coreHeader.style = "background-color: white;text-align: left";
}
const toggleMathLinks = () => {
    var languageLinks = document.getElementById('englishLinks');
    var foreignLinks = document.getElementById('foreignLinks');
    var socialLinks = document.getElementById('socialLinks');
    var scienceLinks = document.getElementById('scienceLinks');
    var mathLinks = document.getElementById('mathLinks');
    var coreLinks = document.getElementById('coreLinks');
    mathLinksVisible = !mathLinksVisible;
    languageLinksVisible = false;
    foreignLinksVisible = false;
    socialLinksVisible = false;
    scienceLinksVisible = false;
    coreLinksVisible = false;
    mathLinksVisible? mathLinks.style = "display: flex" : mathLinks.style = "display: none" ;
    languageLinks.style = "display: none" ;
    foreignLinks.style = "display: none" ;
    socialLinks.style = "display: none" ;
    scienceLinks.style = "display: none" ;
    coreLinks.style = "display: none" ;
    var languageHeader = document.getElementById('languageSideBarButton');
    languageHeader.style = "background-color: white;text-align: left";
    var foreignHeader = document.getElementById('foreignSideBarButton');
    foreignHeader.style = "background-color: white;text-align: left";
    var socialHeader = document.getElementById('socialSideBarButton');
    socialHeader.style = "background-color: white;text-align: left";
    var scienceHeader = document.getElementById('scienceSideBarButton');
    scienceHeader.style = "background-color: white;text-align: left";
    var mathHeader = document.getElementById('mathSideBarButton');
    mathHeader.style = mathLinksVisible? "background-color: rgb(248,248,248); text-align: left" :"background-color: white;text-align: left";
    var coreHeader = document.getElementById('coreSideBarButton');
    coreHeader.style = "background-color: white;text-align: left";
}
const toggleCoreLinks = () => {
    var languageLinks = document.getElementById('englishLinks');
    var foreignLinks = document.getElementById('foreignLinks');
    var socialLinks = document.getElementById('socialLinks');
    var scienceLinks = document.getElementById('scienceLinks');
    var mathLinks = document.getElementById('mathLinks');
    var coreLinks = document.getElementById('coreLinks');
    coreLinksVisible = !coreLinksVisible;
    languageLinksVisible = false;
    foreignLinksVisible = false;
    socialLinksVisible = false;
    scienceLinksVisible = false;
    mathLinksVisible = false;
    coreLinksVisible? coreLinks.style = "display: flex" : coreLinks.style = "display: none" ;
    languageLinks.style = "display: none" ;
    foreignLinks.style = "display: none" ;
    socialLinks.style = "display: none" ;
    scienceLinks.style = "display: none" ;
    mathLinks.style = "display:none";
    var languageHeader = document.getElementById('languageSideBarButton');
    languageHeader.style = "background-color: white;text-align: left";
    var foreignHeader = document.getElementById('foreignSideBarButton');
    foreignHeader.style = "background-color: white;text-align: left";
    var socialHeader = document.getElementById('socialSideBarButton');
    socialHeader.style = "background-color: white;text-align: left";
    var scienceHeader = document.getElementById('scienceSideBarButton');
    scienceHeader.style = "background-color: white;text-align: left";
    var mathHeader = document.getElementById('mathSideBarButton');
    mathHeader.style = "background-color: white;text-align: left";
    var coreHeader = document.getElementById('coreSideBarButton');
    coreHeader.style = coreLinksVisible? "background-color: rgb(248,248,248); text-align: left" :"background-color: white;text-align: left";
}
const highlightCurrentLink = () => {
    var currentLink = document.getElementById('currentLink');
    currentLink.style = "background-color: #0673bb; color: white"
}

// toggling the menu dots on mobile
const showMobileDotsMenu = () => {
    var dots = document.getElementById('dots');
    dots.style = "display:none";
    var cross = document.getElementById('cross');
    cross.style = "display:flex";
    var email = document.getElementById('mailButton');
    email.style = "display:flex";
    var insta = document.getElementById('instaButton');
    insta.style = "display:flex";
    var facebook = document.getElementById('facebookButton');
    facebook.style = "display:flex";
}
const closeMobileDotsMenu = () => {
    var dots = document.getElementById('dots');
    dots.style = "display:flex";
    var cross = document.getElementById('cross');
    cross.style = "display:none";
    var insta = document.getElementById('instaButton');
    insta.style = "display:none";
    var facebook = document.getElementById('facebookButton');
    facebook.style = "display:none";
    var email = document.getElementById('mailButton');
    email.style = "display:none";
}
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.header').fadeOut("fast");
      $(".navbar").css("margin-top","0rem");
    } else {
      $('.header').fadeIn("fast");
      $(".navbar").css("margin-top","2rem");
    }
  });