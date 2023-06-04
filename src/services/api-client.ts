import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWZhMGJlMTdmNTEzN2RhMTRjZDllNDM4MzczZGE5ZiIsInN1YiI6IjY0Nzg5MGRjY2Y0YjhiMDE0MThkYzdmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SBK8diphGv8FbLBFpBm0QRHML0q9NEciZl5gHMjUb38'
  }
}

)

export const imageUrl = "https://image.tmdb.org/t/p/w500";

