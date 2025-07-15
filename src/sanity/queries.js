export const getHero = `*[_type == "hero"]{
    _id,
    name,
    introduction, 
    techField,
    instagram,
    x_twitter,
    linkedin,
    "resumeUrl" : resume.asset->url,
    "profilePicture" : profilePicture.asset -> url,
    "logo": logo.asset -> url,
    }`;

export const getAbout = `*[_type == "about"]{
    _id,
    title,
    about, 
    services,
    }`;

export const getSkills = `*[_type == "skills"]{
  _id,
  title,
}`;

export const getTools = `*[_type == "tools"]{
  _id,
  title,
}`;

export const getCerts = `*[_type == "certs"]{
  _id,
  "image" : image.asset -> url,
  title,
 skill,
 link
}`;

export const getProjects = `*[_type == "projects" && featured == true] | order(order asc){
  _id,
  "image" : image.asset -> url,
  title,
  description,
  link,
  techStack[]->{
    title,
  }
}`;
