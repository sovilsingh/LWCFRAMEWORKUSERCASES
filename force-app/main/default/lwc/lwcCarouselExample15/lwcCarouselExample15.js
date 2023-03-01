import { LightningElement } from 'lwc';
import salesforcelwc from '@salesforce/resourceUrl/salesforcelwc';
export default class LwcCarouselExample15 extends LightningElement {

players = [
    {
        id : "1",
        header :"Neymar Jr.",
        src : salesforcelwc + '/images/Neymar.jpg',
        href : "https://en.wikipedia.org/wiki/Neymar",
        description : "Dribilling Master" 
    },
        {
        id : "2",
        header : "Kylian Mbappé",
        src : salesforcelwc + '/images/mabbpe.jpg',
        href : "https://en.wikipedia.org/wiki/Kylian_Mbapp%C3%A9",
        description : " French professional footballer"
    },
        {
        id : "3",
        src :salesforcelwc + '/images/Cristiano_Ronaldo.jpg',
        header : "Cristiano Ronaldo",
        description : "God Of Football",
        href : "https://en.wikipedia.org/wiki/Kylian_Mbapp%C3%A9" 
    },

          ]

}