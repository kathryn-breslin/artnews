import axios from "axios";
const APIURL = "http://localhost:3001";
export default {
    getArticles: function() {
        return axios.get("/api/articles")
    },
    getArticle: function(id) {
        return axios.get("/api/articles/" + id)
    },
    deleteArticle: function(id) {
        return axios.delete("/api/articles/" + id)
    },
    saveArticle: function(id) {
        return axios.put("/api/articles/" + id)
    }, 
    scrape: function() {
        return axios.get(`${APIURL}/api/articles/scrape`)
    }
};