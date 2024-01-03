import ResultMapSetting from "../Sections/Queryresult/index.tsx";
import serializeFormData from "./serializeFormData.tsx";
import ResultTextSetting from "./createResponseData.tsx";
    
    const getRequest = async () => {

      interface EpisodeData {
        episodeName: string;
        episodeLocation: string;
        episodePart: number;
        episodeNumber: number;
        episodeLatitude: number;
        episodeLongitude: number;
        queryLatitude: number;
        queryLongitude: number;
        distance: number;
      }
        fetch(("http://192.168.15.55:5000/Request?" + serializeFormData(document.forms[0])), {method:"GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "omit"})
        .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok.');
            }
            return response.json();
          })
          .then(data => {
            const queryResult: EpisodeData = data;
            ResultTextSetting(queryResult);
            ResultMapSetting(queryResult);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    }

    export default getRequest;