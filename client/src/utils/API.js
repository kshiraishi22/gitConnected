import axios from "axios";

// getAllDocuments  :   function(){return axios.get("URL||route");},
// getDocument      :   function(id){return axios.get("URL||route"+id);},
// updateDocument   :   function(id, updateDocumentData){return axios.put("URL||route"+id, updateDocumentData);},
// deleteDocument   :   function(id){return axios.delete("URL||route"+id);}, 
// createDocument   :   function(DocumentData){return axios.post("URL||route", DocumentData);},   
export default {
    //  Position Collection
    getAllJobs  :   function(){return axios.get("api/position");},
    getJob      :   function(id){return axios.get("api/position"+id);},
    updateJob   :   function(id, updateData){return axios.put("api/position"+id, updateData);},
    deleteJob   :   function(id){return axios.delete("api/position"+id);}, 
    createJob   :   function(jobData){return axios.post("api/position", jobData);},   


    //  Employer Collection
    getAllDevs  :  function(){return axios.get("api/developer");},
    getDev      :  function(id){return axios.get("api/developer/"+id);},
    updateDev   :  function(id, updateData){return axios.put("api/developer"+id, updateData);},
    deleteDev   :  function(id){return axios.delete("api/developer"+id);},
    createDev   :  function(devData){return axios.post("api/developer", devData);},

    //  Developer Collection
    getAllEmployers :   function(){return axios.get("api/employer");},
    getEmployer     :   function(id){axios.get("api/employer/"+id);},
    updateEmployer  :   function(id, updateData){axios.put("api/employer/"+id, updateData);},
    deleteEmployer  :   function(id){axios.delete("api/employer/"+id);},
    createEmployer  :   function(empData){axios.post("api/employer" , empData);},
}