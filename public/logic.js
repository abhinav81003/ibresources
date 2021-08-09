
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