
export const getHero = `*[_type == "hero"]{
    _id,
    name,
    introduction, 
    techField,
    "resumeUrl" : resume.asset->url,
    "profilePicture" : profilePicture.asset -> url,
    "logo": logo.asset -> url,
    }`;


    
export const getAbout = `*[_type == "about"]{
    _id,
    title,
    about, 
    }`;