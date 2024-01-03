export default function ResultTextSetting(queryResult) {
    

    const stringarray = [
        'The closest episode from your coordinates is episode " ' + queryResult.episodeName + ' ".',
        "It's the episode number " + queryResult.episodeNumber + " from Part " + queryResult.episodePart + ".",
        "The distance from your coordinates to this episode is " + queryResult.distance.toLocaleString() + " Km."
        ];
    console.log(stringarray);
    
    const resultstring = '<p>' + stringarray[0] + '</p>' + '<p>' + stringarray[1] + '</p>' + '<p>' + stringarray[2] + '</p>'

    console.log(resultstring)
    
    if(document.getElementById("textresult") !== null){
        document.getElementById("textresult").remove();
    }
    document.getElementById("textresultdiv")?.insertAdjacentHTML("afterbegin","<div id='textresult'>" + resultstring +"</div> ");

}