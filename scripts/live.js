var programs = [
    {
        date: "2023-11-06",
        horaires: [
            {heure1: "08:00", heure2: "10:00", theme: "NLP and applications", author: "Théophile DAGBA"},
            {heure1: "10:00", heure2: "12:00", theme: "Demo : Using LLMs  conversational agents to produce teaching or research materials.", author: "Habib SIDI"},
            {heure1: "12:00", heure2: "14:00", theme: "Lunch Break", author: ""},
            {heure1: "14:00", heure2: "16:00", theme: "NLP applications in education", author: "John AOGA"},
            {heure1: "16:00", heure2: "16:30", theme: "Speech to text translation from a low-resourced language Fongbe to French", author: "KPONOU Fortuné"},
            {heure1: "16:30", heure2: "17:00", theme: "Application of artificial intelligence for malaria diagnosis: in medical decision help", author: "Ibrahim M. && LAOUALY HAHAROU"},
            {heure1: "17:00", heure2: "17:30", theme: "AI for multispectral face recognition.", author: "Dr Elvire HOUSSOU"},
            {heure1: "17:30", heure2: "18:00", theme: "", author: ""},
        ]
    },

    {
        date: "2023-11-07",
        horaires: [
            {heure1: "08:00", heure2: "10:00", theme: "Demo/practice : Chat GTP Practice session with presentations by small group", author: "les participants"},
           
            {heure1: "10:00", heure2: "12:00", theme: "Intelligent guidance and orientation system for higher education students: challenges and prospects", author: "Mouhamadou Lamine Ba"},
            {heure1: "12:00", heure2: "14:00", theme: "Lunch Break", author: ""},
            {heure1: "14:00", heure2: "16:00", theme: "Maximizing Model Usability in Industry through Pruning.", author: "Jessica LOPEZ"},
            {heure1: "16:00", heure2: "16:30", theme: "Model for predicting academic orientations using Machine Learning", author: "HOUNTONDJI Michel"},
            {heure1: "16:30", heure2: "17:00", theme: "Automatisation des véhicules aériens sans pilote à l’aide du deep learning: Application à la surveillance environnementale", author: ""},
            {heure1: "17:00", heure2: "17:30", theme: "Optimization and prediction of crop yield with Machine Learning in Sub-Saharan Africa", author: "Daniel DZARMA"},
            {heure1: "17:30", heure2: "18:00", theme: "A workflow for modeling path loss in wireless communication systems using machine learning.", author: "Marianne BALOGOUN"},
        ]
    },

    {
        date: "2023-11-08",
        horaires: [
             {heure1: "08:00", heure2: "10:00", theme: "Introductory talk on AI and its applications ineducation", author: "Eugène C. Ezin"},
            {heure1: "10:00", heure2: "12:00", theme: "Basics of LLMs : What is a language model and how is it implemented?", author: "Hafiz TIOMOKO ALI"},
            {heure1: "12:00", heure2: "14:00", theme: "Lunch Break", author: ""},
            {heure1: "14:00", heure2: "16:00", theme: "NLP in (African) Language Learning", author: "Bonaventure DOSSOU"},
            {heure1: "16:00", heure2: "16:30", theme: "Assessment of farms agroecological transition in Burkina Faso: Proposal of an empirical approach", author: "Théodore NIKIEMA"},
            {heure1: "16:30", heure2: "17:00", theme: "AAI to support healthcare professionals in skin cancerdiagnosis process", author: "Dr Esther CHABI ADJOBO"},
            {heure1: "17:00", heure2: "17:30", theme: "Disturbances in water distribution networks: AI-based simulation and prediction", author: "Hermione F. W.Denakpo"},
            {heure1: "17:30", heure2: "18:00", theme: "", author: ""},
        ]
    },

    {
        date: "2023-11-09",
        horaires: [
            {heure1: "08:00", heure2: "10:00", theme: "Automatic text classification of research results using  Deep Neural Networks: an overview of the comparison of classifiers", author: "Félicité DOMGUE"},
            {heure1: "10:00", heure2: "12:00", theme: "Ethical considerations in AI-driven education (privacy, bias and fairness)", author: "Ratheil HOUNDJI"},
            {heure1: "12:00", heure2: "14:00", theme: "Lunch Break", author: ""},
            {heure1: "14:00", heure2: "16:00", theme: "Scholarly Knowledge Graph applications", author: "Ghislain ATEMEZING"},
            {heure1: "16:00", heure2: "16:30", theme: "Sensory Characterization of Local Products using an Electronic Robot and Smart Data Classifier", author: "AFFOGNON Lionel"},
            {heure1: "16:30", heure2: "17:00", theme: "Anomaly detection in smart contracts", author: "Rosaire SENOU"},
            {heure1: "17:00", heure2: "17:30", theme: "A Bibliometric Analysis of Research on Techniques for Network Communications Security", author: "ISMAEEL ABIODUN SIKIRU"},
            {heure1: "17:30", heure2: "18:00", theme: "", author: ""},
        ]
    },

    {
        date: "2023-11-10",
        horaires: [
            {heure1: "08:00", heure2: "10:00", theme: "Data Science and mathematical applications && Normal-Power Regression Model", author: "Matthew EKUM"},
            {heure1: "10:00", heure2: "12:00", theme: "Security challenges in Educational Data", author: "Arnaud Ahouandjinou"},
            {heure1: "12:00", heure2: "14:00", theme: "Lunch Break", author: ""},
            {heure1: "14:00", heure2: "16:00", theme: "Case Studies of Successful AI Implementation in Education - Focus in Africa ", author: "Panel"},
            {heure1: "16:00", heure2: "16:30", theme: "Open discussions and closing marks", author: ""},
            {heure1: "16:30", heure2: "17:00", theme: "Open discussions and closing marks", author: ""},
            {heure1: "17:00", heure2: "17:30", theme: "Open discussions and closing marks", author: ""},
            {heure1: "17:30", heure2: "18:00", theme: "Open discussions and closing marks", author: ""},
        ]
    },

]



var dateActuelle = new Date();
var lives = document.querySelectorAll('.live.flex p')
var programmeEnCours = null;
var fullLive  = document.querySelectorAll('header .live');

for (let i = 0; i < programs.length; i++) {
    const program = programs[i];
    
    for (let j = 0; j < program.horaires.length; j++) {
        const horaire = program.horaires[j];
        
        var dateD = new Date(program.date + " " + horaire.heure1);
        var dateF = new Date(program.date + " " + horaire.heure2);

        if (dateActuelle <= dateF && dateActuelle >= dateD) {
            programmeEnCours = horaire;
            break;
        }
        
    }
}

for (let i = 0; i < lives.length; i++) {
    const live = lives[i];
    
    if (programmeEnCours  && (programmeEnCours.author || programmeEnCours.theme)) {
        if(programmeEnCours.author && programmeEnCours.theme)
        {
            live.innerHTML = "<p><b>" + programmeEnCours.author + "</b> is presenting about " + programmeEnCours.theme +"</p>"
            fullLive.innerHTML = "<p><b>" + programmeEnCours.author + "</b> is presenting about " + programmeEnCours.theme +"</p>"
        }
        else 
        {
            if(!programmeEnCours.author){
                 live.innerHTML = "<p>Presentation about " + programmeEnCours.theme +"</p>"
                 fullLive.innerHTML = "<p>Presentation about " + programmeEnCours.theme +"</p>"
            }
               
            if(!programmeEnCours.theme){
                live.innerHTML = "<p><b>" + programmeEnCours.author + "</b> is presenting</p>";
                fullLive.innerHTML = "<p><b>" + programmeEnCours.author + "</b> is presenting</p>"
            }
               
        }
            
    }else{
        live.innerHTML = "<p>No presentation for moment</p>";
    }
}